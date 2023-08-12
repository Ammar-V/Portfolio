import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';

import { getProject } from "../middleware/project-content";


const ProjectPage = () => {
  const [content, setContent] = useState("");
  const { id: projectId } = useParams();

  useEffect(() => {
    const projectObj = getProject(projectId);

    fetch(projectObj.markdown)
    .then((res) => res.text())
    .then((text) => setContent(text));
  }, [projectId]);
  
  return ( 


    <div id="project-page">
      <div className="project-intro">
        <h1>This is the title of my project</h1>
      </div>

      <div className="project-content">
        <ReactMarkdown children={content} rehypePlugins={rehypeRaw}/>
      </div>
    </div>


   );
}
 
export default ProjectPage;