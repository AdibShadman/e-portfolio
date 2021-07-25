import React from 'react'
import "./aboutMe.css"
import author from "../assets/Adib_graduation.jpg"

function aboutMe() {
  return (
    
    <div className = "container ">
      <div className="emptySpace_aboutMe"></div>
      <div className="row">
       <div className="col">
        <img className = "profile_img"src = {author} alt = "hello"  width= "700"
  height= "900" padding= ".3rem" border = "1px solid var(--primary_black)" />
       </div>

       <div className="col">
         <h1 className = "about_heading">About Me</h1>
         <p>A highly ambitious and successful Graduate software developer who is interested in full-stack development (MERN, LAMP) and building Content Management System.</p>

​

          <p>Previously developed a Commercial Content Management System for rating and analyzing sports in agile environment using LAMP stack. This has been done as part of final year project.</p>

          <p>Previously developed a website blog using Reactjs, Nodejs and MongoDB that lets user to see all the blogs, upvote them and add comments.</p>

​

            <p>Thrives on working in a fast-paced environment with the ability to prioritise multiple task and work well under pressure with a proven ability to exceed KPI, improving quality, customer satisfaction and employee morale at all times.</p>

​

            <p>My career goal is to secure a Web Developer/ Software Engineer position in addition to extend my learning curve in cloud hosting platform like AWS, Azure and Google cloud. </p>

​

                <p>Enduring love for travelling, reading books and music.</p>
       </div>
       </div>

      
    </div>
  )
}

export default aboutMe
