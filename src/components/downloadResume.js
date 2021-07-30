import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import "./downloadResume.css";
import jsPDF from "jspdf";
import pic1 from '../assets/Resume1.png';
import pic2 from '../assets/Resume2.png';

 class DownloadResume extends Component {
     pdfGenerate = () => {
         var doc = new jsPDF('portrait', 'px', 'a4', 'false');
         var width = doc.internal.pageSize.getWidth();
         var height = doc.internal.pageSize.getHeight();
         doc.addImage(pic1, 'PNG', 0, 0, width, height);
         doc.addPage();
         doc.addImage(pic2, 'PNG', 0, 0,width,height );
         doc.save('resume.pdf');

     }
  render() {
    return (
      <div id ="resume">
          <div className= "resume-wrapper">
        <h1 className = "resume-heading">Download my Resume </h1>
        <div className = "emptySpace_downloadResume"></div>
        <Button className = "resume-Button" onClick = {this.pdfGenerate}>  Click Here to download </Button>
        <div className = "resume_EmptySpace"></div>
        </div>
      </div>
    )
  }
}
export default DownloadResume;

