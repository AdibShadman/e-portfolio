import React from 'react';
import VideoPlayer from 'react-video-js-player';
import Sports_CMS from '../assets/sports-cms_V9spHRGF_hkb2.mp4';
import TicketHub from '../assets/TicketHub.mp4';
import "./project.css";


function projects() {

    const videoSrc1 = Sports_CMS;
    const poster1 = "https://images.pexels.com/photos/5741292/pexels-photo-5741292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    

    const videoSrc2 =TicketHub;
    const poster2 = "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div className = "project-container">
        <h1 className="projects_Name"> Projects </h1>
        <div className="row">

            <div className = "col"> 
            <h2>Sports-CMS</h2>
            <VideoPlayer
            className = "VideoPlayer"
            src = {videoSrc1}
            poster = {poster1}
            width = "720"
            height  = "420"
            />
            </div>
            <div className = "col"> 

            <h2>TicketHub</h2>
            <VideoPlayer
            className = "VideoPlayer"
            src = {videoSrc2}
            poster = {poster2}
            width = "720"
            height  = "420"
            />
            </div>
               
        </div>
      
    </div>
  )
}

export default projects
