import { useState } from 'react';
import resume from '../resume.png';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import resumeFile from '../resume.pdf';

const Resume = () => {

  const [pdfFile, setPDFFile] = useState(null);
  const [viewPDF, setViewPDF] = useState(null);


  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => {return [<></>]}, 
  });

  return ( 
    <div id='resume'>
      <div id="resume-button">
        <img src={resume} alt='Take a look at my Resume'></img>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div id="pdf-container">
          <div id="pdf-viewer">
              <Viewer fileUrl={resumeFile} plugins={[defaultLayoutPluginInstance]}/>
          </div>
        </div>
      </Worker>

    </div>
   );
}
 
export default Resume;