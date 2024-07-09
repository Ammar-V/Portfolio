*This document is currently under revision...*

# Developing a Google Maps clone from scratch in C++

City Explorer is a Geographical Information System (GIS), developed as part of ECE297: Software Design and Communication, a course offered at the University of Toronto. By leveraging the fundamentals of object-oriented programming alongside with various optimizations techniques, City Explorer was designed to be a both lightning fast and user-friendly. 

*Built in collaboration with Shreya Jain and Cindy Wang.*

![City Explorer: A Geographical Information System (GIS) build for ECE297.](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/mapper/thumbnail.png?raw=true)

### What makes City Explorer a Geographical Information System?

Simply put, a Geographical Information System (GIS) is a piece of software that visualizes geographical data in an application specific manner. These could range from a weather forecast visualizer to navigational software, most notably Google Maps. City Explorer was built with the adventurous in mind, offering features such as social activity heatmap, bookmarking, live weather updates, and point-to-point navigation.


## Overarching Takeaways
___

Although City Explorer is a course project, our team strove for excellence in every phase of development. I am proud of the level of organization we upheld in our codebase from day 1, allowing us to implement a highly smooth and user-friendly application. Writing City Explorer from scratch was an amazing experience as I learned to leverage various different libraries, optimization techniques, and code styles, that have been applicable in all of my projects outside this course. Below, I have highlighted some of which I find the most important.

### Standard Template Library (STL)

Due to the vast amount of data handling required to build a fast and responsive GIS, using the C++ Standard Library (STL) was a must. STL provides efficient implementations of common data structures and algorithms, making C++ a very powerful language to develop with. All the APIs in this project were built with closely with STL, to ensure maximum performance.

### OpenMP

OpenMP provides APIs to enable parallel processing in C++. By leveraging CPU technology that can run process/threads in parallel, multi-threading is a highly effective technique to improve performance. Although, this optimization technique adds a layer of complexity, requiring careful consideration when implementing at a large scale. Specifically, we had to navigate around issues such as data races and deadlocks.

### Research

As our team wanted to go beyond just a base implementation, we utilized external research to learn more about how we could better utilize the technologies in our project. By diving deeper into the developer docs of STL, OpenStreetMap (OSM), and GTK (a C++ GUI library), we were able to implement more interesting features, thereby leading to a more complete application. For example, we used overlay containers in GTK to enable a highly user-friendly GUI, accessed extra information provided by OSM to allow for more intuitive road sizing, and tapped our previous experience with Python to enable our social activity heatmap feature, setting our GIS apart.


### Using GIT


## 1. Writing Efficient APIs
___
### Modularity is a Friend

## 2. Putting GTK to Use: Building a Graphical User Interface (GUI)
___
### Techniques to Render Swiftly

#### Chunk Loading

#### Lazy Loading

### Accurate Road Sizing



## 3. Path Planning
___
## 4. An NP-Hard Challenge: the Travelling Salesman Problem
___

