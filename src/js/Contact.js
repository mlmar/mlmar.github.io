import React from 'react';

const email = "marcloussm@gmail.com";
const github = "https://github.com/mlmar";
const linkedin = "https://linkedin.com/in/martinez-marcus";

function Contact() {
  return (
    <div className="contact" id="contact">
      <a href={github}> <label className="medium"> github </label> </a>
      <a href={"mailto:" + email}> <label className="medium"> {email} </label> </a>
      <a href={linkedin}> <label className="medium"> linkedin </label> </a>
    </div>
  )
}

export default Contact;