import React, { useState } from 'react';
import './contacts.css';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

function Contacts() {

  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors}  = useForm();
  const serviceID = "service_ID";
  const templateID = "template_icly7w6";
  const userID = "user_9zbAcoAfNls8lmj5E8XRu";

  const onSubmit = (data, r) =>
  {
    sendEmail(serviceID, templateID, 
      {
        name :data.name,
        phone: data.phone,
        email:data.email,
        subject:data.subject,
        description: data.description
      }, userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {


    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form Sent successfully. I will get back to you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}.`));
  }

  return (

    <div className="contacts">
       <div className="text-center">
         <h1> Contact Me</h1>
         <p>Please fill out the form and briefly say about your project specifications. I will contact you as soon as possible</p> 
          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit = {handleSubmit(onSubmit)}>
          <div className="row">
            <div className = "col-md-6 col-xs-12">
              {/* Name Input */}
              <input
              id = "name"
              type = "text"
               className ="form-control"
               placeholder = "Name"
               
                {
                 ...register('name', {
                   required: "Please enter your name",
                   maxlength:{
                     value:20,
                     message: "Please enter a name with fewer characters"
                   }

                 })
               }
              />
              <span className = "error-message">
                {errors}
                </span>
              
              {/* Phone Input */}
              <input
              id = "phone"
              type = "text"
               className ="form-control"
               placeholder = "Phone"
              
                {...register('phone',{
                  required: "Please enter your phone",
                })
              }
              />
              <span className = "error-message">
                {errors}
              </span>
              {/* Email Input */}
              <input
              id = "email"
              type = "text"
               className ="form-control"
               placeholder = "Email"
              
                {
                ...register('email', {
                  required: "Please enter your email",
                  pattern:{
                    value:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
                    message: "invalid Email"
                  }

                })
              }
              />
              <span className = "error-message">
                {errors}
              </span>
              
              <input
              id = "subject"
              type = "text"
               className ="form-control"
               placeholder = "Subject"
               name = "subject"
               {
                ...register('subject', {
                  required: "Please enter your subject",

                })
              }
              />
              <span className = "error-message">
                {errors}
              </span>
              </div>
              <div className = "col-md-6 col-xs-12">
                <div className="textarea">
                  <input
                  id = "description"
                  className = "form-control"
                  placeholder = "Description"
                 
                   {
                    ...register('description',{
                      required: "Please enter your description",
    
                    })
                  }
                  />
                  <span className = "error-message">
                {errors}
              </span>
                  <button className = "contact-submit" type = "submit">Contact Me</button>
                </div>
              </div>
          </div>
          </form>
        </div>
     </div>
  )
}

export default Contacts
