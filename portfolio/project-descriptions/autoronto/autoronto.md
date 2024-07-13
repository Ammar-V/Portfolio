*This document is currently under revision...*

# Perception Team at aUToronto

The University of Toronto's Self-Driving Car Team, <a href="https://www.autodrive.utoronto.ca/" target="_blank">aUToronto</a>, is a student-led design team that competes every year at the GM/SAE AutoDrive Challenge Series. We are tasked with building a level 4 autonomous vehicle that can navigate through numerous static and dynamic challenges in an urban environment created at MCity, Michigan.

![Artemis: the self-driving car developed on by aUToronto](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/highway.jpeg?raw=true)\
*Artemis: the self-driving car we work on. Source: aUToronto*
<br></br>

#### What is Level 4 Autonomy?

Level 4 autonomy refers to a vehicle's ability to drive itself without human intervention in most situations, but human control is optional in certain conditions.

At aUToronto, we work towards the following tasks:
1. **Autonomous Navigation:** Vehicles must navigate a complex urban environment autonomously, including handling intersections, traffic signals, and roundabouts.
2. **Object Detection and Avoidance:** Cars must detect and avoid pedestrians, other vehicles, and obstacles in real-time.
3. **Parking:** Teams must develop systems for autonomous perpendicular parking.
4. **Path Planning:** Vehicles must create and follow an optimal path, considering dynamic and static objects.
5. **Safety and Reliability:** Ensuring the vehicle operates safely and reliably under various conditions, including inclement weather and different road types.


### My involvement with aUToronto has been as follows:

1. **August 2022 - June 2023:** Lane Detection Team Member
    - Developed post-processing algorithms to distinguish between lane types in the scene such as solid white/yellow lanes, dashed white/yellow lanes, and stop lines
    - Used ROS2 to integrate pos-processing and pass information down the autonomy stack
2. **January 2024 - June 2024:** 3D Object Detection Team Member
    - Worked with point clouds in ROS2 provided by 3D LiDARs to detect obstacles such as signs, pedestrians, barrels, deer, and cars
    - Found and resolved several bugs in existing methods, improving efficiency and accuracy of the overall 3D object detection pipeline


## Lane Detection
___

When striving towards building a vehicle with level 4 autonomy, lane detection becomes one of the most crucial and fundamental problems to solve. Simply put, lane detection is an umbrella term for lane line segmentation and classification, which is the process of identifying where exactly the lane lines are in a driving scene and classifying what type of lane it is. 

Lane detection is a heavily studied area of Computer Vision, and as such, there are vasts amounts <a href="https://paperswithcode.com/task/lane-detection" target="_blank">research papers</a> outlining the different classical and deep learning approaches for it. Here are some examples of different lane detection methodologies:
  - Pass an image into a deep neural network (for example, a Convolutional Neural Network), trained in a supervised fashion to output binary masks of lanes.
  - Classical approach involving a combination of the following:
    - Contour detection (Canny, Sobel, etc.)
    - Line fitting (Hough transform)
    - Clustering (K-means, DBSCAN, etc.)
    - Pixel thresholding in different color spaces (RGB, HSV, YCbCr)
  - Take as an input an RGB image in camera frame but then transform it into the bird's eye view (BEV) plane using camera intrinsics and extrinsics. By doing so, the lane lines are parallel, making it easier to detect lines using classical approaches.

However, converting an image of a driving scene into a binary mask outlining the locations of lane lines, is only one piece of the puzzle. The next step is identifying what kind of lane line it is, so that your vehicle can take appropriate measures when planning a safe path from point A to point B.

### Post-processing: Transforming a segmentation mask of lanes into useful information for autonomy

To extract crucial information about lane lines from a driving scene, I wrote a post-processing script that would take as input a driving scene and a binary segmentation mask of the lane lines (produced by any lane detection method, for example, YOLOPv2) and output the following information:
- lane line type and color:
  - WS: white solid
  - WD: white dashed
  - YS: yellow solid
  - YD: yellow dashed
  - SL: stop line, annotated as red
- lane line number: starting with the leftmost lane in current frame
- current driving link: i.e. which lane the car is currently driving in

The post-processing script can extract this information in real-time (>20 FPS), thereby being a viable solution for lane line classification a level 4 autonomy vehicle, where the vehicle needs to use perception to make quick and precise decisions in a dynamic environment. Once this information is extracted, it is passed downstream through ROS2 messages to other parts of the autonomy stack such as mapping and navigation.

![Post-processing binary masks of lanes, for lane line classification](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/post_lanes.gif?raw=true)\
*Post-processing results on MCity (running at 1.5x normal speed)*
<br></br>

![Post-processing of binary mask of lanes, with occluded lane lines](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/post_lanes_occlusion.gif?raw=true)\
*Showcasing the robustness of post-processing in occluded scenes*
<br></br>

## 3D Object Detection
___

In autonomous driving, 3D object detection (3DOD) is yet another fundamental task, because an autonomous system needs to be aware of all the obstacles surrounding it to be able successfully navigate around them.

At aUToronto, the task of 3DOD begins with a set of 4 3D LiDAR sensors mapping out the environment in front of the vehicle. These sensors work by emitting a ray of light and measuring the time it takes for that ray of light to return to the sensor. This is a highly accurate method of measurement and the output of a LiDAR sensor is a point cloud, where each point is represented by a `<x, y, z>` measurement in meters from the vehicle.

![A visualization of a 3D Point Cloud measured by a Cepton LiDAR](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/cepton.png?raw=true)\
*Point cloud representation of a scene using a 3D LiDAR. Source: Cepton Technologies Inc.*
<br></br>

Once a point cloud is generated by the LiDAR's, our 3DOD pipeline solves the complex problem of detecting and classifying objects in the environment, and outputting bounding boxes around each object. In contrast to 2D object detection, 3D also provides an accurate measure of each object's location and size. Here's a list of all the classes that our 3DOD pipeline can handle:
- Barrels
- Barricades
- Pedestrians
- Deer
- Cars
- Railroad bars
- Signs



### How does our pipeline work?

![A visualization of point clouds generated by 3D LiDARs](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/lidar_large.gif?raw=true)\
*An example visual of the point cloud generated by our 3D LiDARs. Source: aUToronto*
<br></br>


To perform the task of 3DOD, our system currently relies on a classical clustering + classification approach, rather than a deep learning one. Deep learning methods generally work well, however, require a lot of labelled training data to produce decent results. On top of that, models trained on a specific LiDAR (for example, Velodyne vs. Cepton), will produce different results due to the bias introduced by the differences in scan patterns, making it difficult to use external datasets. As such, a classical approach proves to be a suitable in this case where labelled data is limited.

The input to our pipeline are ROS2 `PointCloud2` messages from each of our 4 LiDARs. Then, we perform sensor fusion to combine all the point clouds into one single `PointCloud2` object. Fusing all the point clouds allows our clustering algorithm to operate over a larger field of vision (FOV), making our system more robust.

Once fused, the next step is to remove the ground plane from the point cloud. It is highly important for our pipeline to be able to segment out the ground plane because our object detection relies on clustering. If points from the ground plane are present, they would combine with objects on the ground, making it difficult for the clustering algorithm to separate the two. After the ground plane is removed, we can employ a clustering algorithm to find groups of points that are positioned closely together.

Lastly, our clusters our passed through several steps of filtering and classification, thereby resulting in a list of objects in the scene, their locations and sizes, and their corresponding classes. 

Here is an overview of our pipeline:
```
// Get all the point clouds
pc1, pc2, pc3, pc4 := input from LiDAR

// Fuse all the input point clouds into a single point cloud object
pc := fuse_pc(pc1, pc2, pc3, pc4)

// Remove the ground plane (gp)
gp, gp_removed := find_gp(pc)

// Perform clustering to get a 3D bounding box around all relevant objects
obj_clusters := clustering_3d(gp_removed)

// Perform classification on the clusters
obj_classes := classification_3d(obj_clusters)

return obj_clusters, obj_classes
```
<br></br>

![Detection 3D objects using clustering in a driving scene at a aUToronto](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/autoronto/3dod.gif?raw=true)\
*Example output of the 3DOD pipeline at aUToronto. Source: aUToronto*
<br></br>