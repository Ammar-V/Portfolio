import { useEffect, useState } from 'react';
import resume from '../resume.png';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import resumeFile from '../resume.pdf';

const Resume = () => {

  const [viewPDF, setViewPDF] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => {return [<></>]}, 
  });

  useEffect(() => {
    setViewPDF(false);
  }, []);

  return ( 
    <div id='resume'>
      {
        <div id="resume-button" onClick={() => setViewPDF(!viewPDF) }>
          <img src={resume} alt='Take a look at my Resume'></img>
        </div>
      }
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {viewPDF &&
          <div id="pdf-container" onClick={() => setViewPDF(!viewPDF)}>
            <div id="pdf-viewer" onClick={(event) => event.stopPropagation()}>
                <Viewer fileUrl={resumeFile} plugins={[defaultLayoutPluginInstance]}/>
            </div>
          </div>
        }
      </Worker>

    </div>
   );
}
 
export default Resume;