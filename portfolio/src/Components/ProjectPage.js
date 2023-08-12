import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import reversi from '../project-content/reversi.md';
import rehypeRaw from 'rehype-raw';


const ProjectPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(reversi)
    .then((res) => res.text())
    .then((text) => setContent(text));
  }, []);

  useEffect(() => {
    console.log(reversi);
  }, [content])
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