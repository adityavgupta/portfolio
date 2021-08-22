import React,  {Component} from 'react';

import SinglePagePDFViewer from "../components/pdf/single_page";
// import AllPagesPDFViewer from "../components/pdf/all_pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../pdf/resume.pdf";


class Resume extends Component {
  render(){
    return (
        <div className="Resume">
          <SinglePagePDFViewer pdf={samplePDF} />
          
        </div>
      );
  }
    
}

export default Resume;