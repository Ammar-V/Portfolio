import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'

import { useParams } from 'react-router-dom';

import { getProject } from "../middleware/project-content";


const ProjectPage = () => {
  const [project, setProject] = useState("");
  const [content, setContent] = useState("");
  const { id: projectId } = useParams();

  useEffect(() => {
    const projectObj = getProject(projectId);
    setProject(projectObj);

    fetch(projectObj.markdown)
    .then((res) => res.text())
    .then((text) => setContent(text));
  }, [projectId]);
  
  return ( 


    <div id="project-page">
      <div className="project-intro-img" style={ {backgroundImage: `url(${project.img})`} }>
      </div>
      <div className="project-intro">
        <div>
          <h1>{project.title}</h1>
          <h3>{project.altText}</h3>
        </div>
      </div>


      <div className="project-content">
        <div className="project-page-gallery">
          <h2>Gallery</h2>
        </div>
        <h2>Description</h2>
        <ReactMarkdown children={content} rehypePlugins={[rehypeRaw, remarkGfm]} className="markdown"/>
      </div>
    </div>


   );
}
 
export default ProjectPage;