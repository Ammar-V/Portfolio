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

The entire pipeline is as follows:
![CV Pipeline Overview](https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/pipeline_overview.png)



## Lane Line Segmentation


## Pothole Detection


## Integration via the Robot Operating System (ROS)


### Projecting 2D Objects into 3D

