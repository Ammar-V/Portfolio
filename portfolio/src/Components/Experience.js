import ProjectTile from "./ProjectTile";

import { projectDescriptions } from "../middleware/project-content";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Experience = () => {

  const { section } = useParams();

  useEffect(() => {
    if (section === 'experience') {
      const homeElem = document.getElementById('experience');
      homeElem.scrollIntoView();
    }

  }, [section]);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectDescriptions);
  }, []);

  return ( 

    <div id="experience" className="section">
      <h2>Experience - Things I've worked on</h2>
      <div className="project-gallery">
        {
          projects.map((project) => {
            return <ProjectTile data={project} key={project.id}/>;
          })
        }
      </div>

    </div>



  );
}
 
export default Experience;