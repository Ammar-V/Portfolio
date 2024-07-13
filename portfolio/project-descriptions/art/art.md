# What is the Autonomous Rover Team (ART)?

ART is a subteam under the [University of Toronto Robotics Association](https://www.utra.ca/) (UTRA). ART competes at the Intelligent Ground Vehicles Competition at Oakland University in Michigan, every year in June.

### My involvement with the ART team was as follows:
- **September 2021 - June 2022:** Member of the CV subteam.
  - Developed the Pothole Detection pipeline.
- **July 2022 - June 2023:** Lead of the CV subteam.
  - Developed the Lane Detection pipeline
  - Integrated the CV pipeline with the rest of the stack to aid in Simultaneous Mapping and Localization (SLAM)


# CV Pipeline Overview

A ZED Stereo Camera is mounted on the rover, serving as the eyes of the rover. The CV pipeline is required to perform 2 main tasks: pothole detection and lane line segmentation. Once the objects are detected in a 2D image, they are then projected into 3D space using a depth matrix (more on this later). Once projected, the object/lane coordinates are passed downstream into the SLAM package as obstacles, allowing the rover to navigate around them.

The entire pipeline is as follows:

![CV Pipeline Overview](https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/pipeline_overview.png)



## Lane Detection

Lane detection, specifically lane line segmentation, is a fundamental task which is performed by autonomous vehicles, and there are numerous methods that are outlined in literature suitable for this task. For our system, we developed a classical and deep learning approach, and I'll focus on our implementation of the deep learning approach.

The purpose of using a deep learning approach to find lane-markings is to make a detector that is robust to environmental changes. Since this task is fundamentally an image segmentation task, the U-Net model, which is a state-of-the-art segmentation model, was used.

Typically, U-Net has a low inference speed (< 20 FPS) due to its large amount of Convolutional Neural Networks and network depth. To make our implementation faster and achieve > 60 FPS, we reduced the depth such that there are only 256 channels in the latent vector. Furthermore, the input image to the model includes 4 channels: grayscale, edges, and inverse edges, and gradients. The edges are found using a Canny edge detector. A Sobel filter is applied to the grayscale image and is used to calculate the gradient channel.

Here's an example of what the input/output of our model looks like:

![Inputs/Outputs of the Lane Detection pipeline](https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/lane_det_pipeline.png)


The hyperparameters (channels, image size, model depth), were thoroughly tuned to find the optimal results. We also measured the accuracy of the model using intersection over union (IOU) of the output compared to the ground truth masks.

The model was trained on a dataset of 5442 images of real-world daytime and nighttime dashcam images, as well as 532 images collected from a previous competition. Approximately 60% of the dataset is composed of synthetic road data. In testing the model, we achieved 97% accuracy (as measured by the IOU) on normal roads and 75% on grass.

**Implementation Details**

Implementing the entire U-Net pipeline in PyTorch was an amazing learning experience, where I implemented a custom PyTorch data class, a train loop, alongside with saving checkpoints of the model, and outputting metrics.

Furthermore, since I have an NVIDIA RTX 3060 GPU, I made sure to use utilize CUDA while training with PyTorch. I only have 6 GB of memory on my GPU, so I had to keep the batch size low (<16) during training.

For any pre-/post-processing of images, OpenCV was extensively used. For example, the Canny edge detector, Sobel filter, and managing the dataset were all performed using OpenCV and Python.


## Pothole Detection

Potholes, in this competition, are outlined as flat white circles on the ground with a 2ft diameter. Similar to lane detection, there are many different ways of performing pothole detection, such as classical approaches based on thresholding and edge detection, or deep learning approaches such as the You Only Look Once (YOLO) object detection model. In this case, the latter, specifically YOLOv4 tiny, was used by transfer learning on a custom dataset (more details on custom dataset [here](https://ammarvora.com/projects/potholes)).

This model was selected for its ability to bound objects with high accuracy in a single pass. This makes the YOLO model faster than other object detection algorithms, such as R-CNN, which use multiple stages. YOLO does not utilize a sliding window approach, which allows features to be extracted in context of their backgrounds, thereby decreasing the number of false positives. The YOLO model can generalize to a variety of environments, which increases the robustness of the model.

**Results**

After training, the YOLOv4 model achieved 92% accuracy on a test set. Example detections are as follows:

![Results of YOLOv4 on potholes detection](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/art/potholes.gif?raw=true)


## Integration with Robot Operating System (ROS)

For a rover to autonomously navigate through this obstacle course, the lane and potholes detections must be converted and communicate in a format that is interpretable by the rover's navigational system. To navigate from point A to point B in the real world, our robot uses a common technique to first generate a map of environment (represented by an occupancy grid), and then uses a path planning algorithm (for example, A*), to find a safe route without hitting any obstacles. Inputs to the mapping algorithm are required to be in real-world coordinates. As such, the 2D object detections are required to be converted into 3D objects.

### Projecting 2D Objects into 3D

To project 2D detections into 3D detections used by the rover's mapping and navigation stack, the following pipeline is used:

**1. Input:** Binary mask of obstacles (lanes and potholes)\
**2. Project**: Use the depth map generated by the ZED stereo camera to convert obstacles from a 2D pixel representation to a real world 3D representation\
**3. Output:** A `PointCloud2` message 

To perform the projection into 3D, the first step is to use a depth map to extract the distance from the camera to each pixel that lies on the object (represented by a 1 in the binary mask). In doing so, you can convert the obstacles from a dense 2D representation into a 1D sparse representation in the following format: `[(x1, y1, z1), ..., (xN, yN, zN)]`, where `x` and `y` are the location of a pixel on the object and `z` is the corresponding distance in the pixel frame.

![A visualization of pixel coordinates and the camera frame](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/art/camera_frame.png?raw=true)

Now that we have a sparse representation of the obstacles in the scene (sparse because we are only keeping track of pixels that represent a lane or a pothole, and discarding the rest), we are one step closer to our output of a `PointCloud2` message.

An important note is that our `x` and `y` values are still in pixel coordinates, which the rover cannot interpret while navigating in the real 3D world. Therefore, the next step in this projection is to convert our objects from the `pixel_frame` to a `camera_frame`, ie. converting from pixel coordinates to real world coordinates.

This conversion from pixels to meters uses the camera intrinsics of focal length, represented by `fx` and `fy`, and the optical center, represented by `cx` and `cy`. Then, all the points are put through the following transformation:

```
X = (x - cx) * z / fx
Y = (y - cy) * z / fy
```

Converting to this 1D array of `(X, Y, z)` coordinates allows us to package our obstacles as a valid `PointCloud2` message.


### Converting the `PointCloud2` message to a `LaserScan` message

The final step in converting our 2D objects into a 3D format that is interpretable by the rover's mapping and navigational system. Our system using the a SLAM package called Cartographer, which takes in a `LaserScan` message as input. A `LaserScan` message is a representation that is commonly used by 2D LiDAR sensors. In a `LaserScan`, each point is represented in polar coordinates, where the origin somewhere on the robot.

![Cartesian coordinates to Polar coordinates](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/art/polar_coordinates.png?raw=true)

The algorithm used to convert our obstacles from `PointCloud2` to `LaserScan` by simulating a 2D LiDAR sensor as follows:

```
pcl := [(x1, y1, z1), ..., (xN, yN, zN)] # in meters
polar_points := []

// Convert from cartesian to polar coordinates
for (x, y, z) in pcl:
  r, theta := cartesian_to_polar(point)
  polar_points += (r, theta)

// An array of B "buckets", where the number of buckets B = (max_angle - min_angle) / angle_increment
laser_scan := [(inf), ..., (inf)] 

// Find the closest point in each "bucket"
for pt in polar_points:
  b := index of bucket that pt belongs to, based on its theta
  laser_scan[b] := min(laser_scan[b], pt.r) # Keep the point that is closer to the origin

return laser_scan
```

As a result, the `PointCloud2` message is converted into a valid `LaserScan`, that can be passed downstream to the SLAM package.

Example output: \
\
*Note: the screenshot represents the lanes floating in air and angled inwards. This is because at the time of the screenshot, we were experiencing issues with generating a reliable depth map. However, it showcases the conversion from PointCloud2 to LaserScan very well.*

A `PointCloud2` representation:

![A PointCloud2 representation of the obstacles](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/art/lane_pcl.png?raw=true)

The corresponding `LaserScan` representation:

![A LaserScan representation of the obstacles](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/art/lane_laser.png?raw=true)


