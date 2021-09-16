import React,  {Component} from 'react';
import "../App.css";
// import SinglePagePDFViewer from "../components/pdf/single_page";
// import AllPagesPDFViewer from "../components/pdf/all_pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../pdf/resume_latest.pdf";


class Resume extends Component {
  render(){
    return (
        <div className="Resume" align="center">
          
          <iframe title="res" src={`${samplePDF}#view=fitH`} 
            width="70%" 
            height="700"
            allow="autoplay"
          ></iframe>
          
          
        </div>
      );
  }
    
}

export default Resume;