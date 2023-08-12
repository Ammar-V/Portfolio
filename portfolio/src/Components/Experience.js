import ProjectTile from "./ProjectTile";

import { projectDescriptions } from "../middleware/project-content";

import { useEffect, useState } from "react";

const Experience = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectDescriptions)
  }, []);

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