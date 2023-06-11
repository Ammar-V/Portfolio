import ProjectTile from "./ProjectTile";
import art from "../art.png";
import mapper from "../mapper.png";
import autoronto from "../autoronto.png";
import barrel from "../barrel.png";
import invoice from "../invoice.png";
import pothole from "../pothole.png";
import comment from "../comment.png";
import rescue from "../rescue.png";
import freegear from "../freegear.png";



import { useState } from "react";

const Experience = () => {

  const [projects, setProjects] = useState([{

    title: "Autonomous Rover Team",
    img: art,
    altText: "Building the Computer Vision pipeline for an autonomous rover"
    
  },
  {
    
    title: "aUToronto",
    img: autoronto,
    altText: "Building a self-driving car for the SAE Autodrive Challenge"
  },
  {
    
    title: "Rescue Ranger",
    img: rescue,
    altText: "Combining Computer Vision with robots to help with search and rescue"
  },
  {

    title: "City Explorer",
    img: mapper,
    altText: "A mapping software made with C++"
  },
  {
    
    title: "Pothole Augmentation",
    img: pothole,
    altText: "A Python script that automates data generation"
  },
  {
    
    title: "Freegear",
    img: freegear,
    altText: "A 90s style racing game that runs on an FPGA"
  },
  {

    title: "Barrels",
    img: barrel,
    altText: "A classical approach to detecting barrels"
  },
  {

    title: "Invoice Maker",
    img: invoice,
    altText: "An industry-style Invoice Maker made with JavaFX"
  },
  {

    title: "Comment Creator",
    img: comment,
    altText: "A Java desktop app to help write student evaluations"
  } 


]);


  return ( 

    <div id="experience" className="section">
      <h2>Experience - Things I've worked on</h2>
      <div className="project-gallery">

        {
          projects.map((project) => {
            return <ProjectTile data={project} />;
          })
        }
      </div>

    </div>



  );
}
 
export default Experience;