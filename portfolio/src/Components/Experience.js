import ProjectTile from "./ProjectTile";
import art from "../art.png";
import mapper from "../mapper.png";
import barrel from "../barrel.png";

import { useState } from "react";

const Experience = () => {

  const [projects, setProjects] = useState([{

    title: "Autonomous Rover Team",
    img: art,
    altText: "The rover from the Autonomous Rover Team"

  },
  {

    title: "City Explorer",
    img: mapper,
    altText: "A mapping software made with C++"
  },
  {

    title: "Barrels",
    img: barrel,
    altText: "A mapping software made with C++"
  }


]);


  return ( 

    <div id="experience" className="section">
      <h2>Experience - Things I've worked on</h2>
      <div className="project-gallery">
        <ProjectTile data={projects[0]} />
        <ProjectTile data={projects[1]} />
        <ProjectTile data={projects[2]} />
        


      </div>

    </div>



  );
}
 
export default Experience;