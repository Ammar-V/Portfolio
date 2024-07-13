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

The first part of creating City Explorer required us to create APIs that would actually interact with the raw geographical data provided the OpenStreetMap database, and make it available to our rendering algorithms (implemented later on). The database contained more than 30 cities, with some cities holding over 1 million street segments. Due to the scale of the database, rendering the map quickly requires having highly efficient APIs that can fetch data in an instant. Example data includes street segments, intersections, streets adjacent to a specific intersection, etc.

### Modularity is a Friend
When writing our APIs, we were given a list of function that we had to implement. When implementing, we had a goal of abstracting away as much complexity as we could. Specifically, we wanted each API to be very minimal, where instead of writing its functionality in the API function itself, the API function would call another function stored elsewhere, hiding all the complexity. What this allowed us to do (and what boosted the performance of our application), was to package all the high efficiency data APIs in a singular C++ object, called `MapData`. On top of holding the actual implementation of the APIs, the `MapData` object also contained look up tables (implemented with STL hash maps and custom data structs) that would be used under the hood by our API calls. Upon initialization of a `MapData` object with a path to an OSM database of a city, the entire city's data was parsed into these custom look up tables. Then, the algorithms in the API calls would simply reference these look up tables, providing information at a lighting fast speed (`O(1)` complexity for most cases). 

Most importantly, packaging up all our database loading in a singular object increased our code modularity, allowing us to load multiple maps at once and very easily swap between them in our GUI.

**MapData Class**
```
class MapData {

public:
    int zoneWidth = 100;

    // Used to check if map was loaded correctly
    bool mapLoaded;
    LocationInfo locationInfo;

    // Maximum speed limit in city
    double maxSpeed;

    // Maps IntersectionIdx to all it's data
    std::vector<IntersectionInfo> intersectionInfoTable;
    // Maps StreetSegmentIdx to it's information Struct
    std::vector<SegmentInfo> streetSegmentTable;
    // Maps a street id to all it's intersections and street segments
    StreetTable streetInfoTable;

    ...

    // Load the street segments
    void loadStreetSegmentInfo();

    // Maps a street id to all it's intersections and street segments
    void loadStreetInfo ();

    // Loads all the adjacent interesections to a specific intersection
    std::vector<IntersectionIdx> loadFindAdjacentIntersections(IntersectionIdx intersection_id);

    // Populates the Intersection Info Table
    void loadIntersectionData ();

    //populates feature info table
    void loadFeatureInfoTable();

    //fills the OSMID hash table
    void fillOSMIDTable();

    //fills the street segment vector
    void loadStreetSegmentVector();

    ...

    MapData(); // Populate all private data strucutres
    ~MapData(); // Clear all private data structures
}
```

## 2. Putting GTK to Use: Building a Graphical User Interface (GUI)
___

*Accurate street width sizing, alongside with name and directional arrows*

![Street names and directions on a mapper created in ECE297](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/mapper/streets.png?raw=true)\
*Heatmap feature*
<br></br>

![A heatmap as an extra feature for the mapper in ECE297](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/mapper/heatmap.png?raw=true)\
*Heatmap feature with zoom optimization*
<br></br>

![A zoomed heatmap as an extra feature for the mapper in ECE297](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/mapper/heatmap_zoom.png?raw=true)


### Techniques to Render Swiftly

#### Chunk Loading

#### Lazy Loading

### Accurate Road Sizing



## 3. Path Planning
___

*Navigation from point A to point B*

![Navigation mode in a mapper created in ECE297](https://github.com/Ammar-V/Portfolio/blob/new/portfolio/project-descriptions/mapper/navigation.png?raw=true)


## 4. An NP-Hard Challenge: the Travelling Salesman Problem
___

