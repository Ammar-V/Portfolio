# What is the Autonomous Rover Team (ART)?

ART is a subteam under the University of Toronto Robotics Association (UTRA). ART competes at the Intelligent Ground Vehicles Competition at Oakland University in Michigan, every year in June.

My involvement with the ART team was as follows:
- 2021-2022: Member of the CV subteam.
  - Developed the Pothole Detection pipeline.
- 2022-2023: Lead of the CV subteam.
  - Developed the Lane Detection pipeline
  - Integrated the CV pipeline with the rest of the stack to aid in Simultaneous Mapping and Localization (SLAM)


# CV Pipeline Overview

A ZED Stereo Camera is mounted on the rover, serving as the eyes of the rover. The CV pipeline is required to perform 2 main tasks: pothole detection and lane line segmentation. Once the objects are detected in a 2D image, they are then projected into 3D space using a depth matrix (more on this later). Once projected, the object/lane coordinates are passed downstream into the SLAM package as obstacles, allowing the rover to navigate around them.

The entire pipeline is as follows:\
![CV Pipeline Overview](https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/pipeline_overview.png)



## Lane Detection

Lane detection, specifically lane line segmentation, is a fundamental task which is performed by autonomous vehicles, and there are numerous methods that are outlined in literature suitable for this task. For our system, we developed a classical and deep learning approach, and I'll focus on our implementation of the deep learning approach.

The purpose of using a deep learning approach to find lane-markings is to make a detector that is robust to environmental changes. Since this task is fundamentally an image segmentation task, the U-Net model, which is a state-of-the-art segmentation model, was used.

Typically, U-Net has a low inference speed (< 20 FPS) due to its large amount of Convolutional Neural Networks and network depth. To make our implementation faster and achieve > 60 FPS, we reduced the depth such that there are only 256 channels in the latent vector. Furthermore, the input image to the model includes 4 channels: grayscale, edges, and inverse edges, and gradients. The edges are found using a Canny edge detector. A Sobel filter is applied to the grayscale image and is used to calculate the gradient channel.

Here's an example of what the input/output of our model looks like:
![Inputs/Outputs of the Lane Detection pipeline](https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/lane_det_pipeline.png)


The hyperparameters (channels, image size, model depth), were thoroughly tuned to find the optimal results. We also measured the accuracy of the model using intersection over union (IOU) of the output compared to the ground truth masks.

The model was trained on a dataset of 5442 images of real-world daytime and nighttime dashcam images, as well as 532 images collected from a previous competition. Approximately 60% of the dataset is composed of synthetic road data. In testing the model, we achieved 97% accuracy (as measured by the IOU) on normal roads and 75% on grass.

### Implementation Details

Implementing the entire U-Net pipeline in PyTorch was an amazing learning experience. This was also the first time I had implemented a custom PyTorch data class, a train loop, alongside with saving checkpoints of the model, and outputting metrics.

Furthermore, since I have an NVIDIA RTX 3060 GPU, I made sure to use utilize CUDA while training with PyTorch. I only have 6 GB of memory on my GPU, so I had to keep the batch size low (<16) during training.

For any pre-/post-processing of images, OpenCV was extensively used. For example, the Canny edge detector, Sobel filter, and managing the dataset were all performed using OpenCV and Python.


## Pothole Detection


## Integration via the Robot Operating System (ROS)


### Projecting 2D Objects into 3D

