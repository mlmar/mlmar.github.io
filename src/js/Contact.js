import React from 'react';

const email = "marcloussm@gmail.com";
const github = "https://github.com/mlmar";
const linkedin = "https://linkedin.com/in/martinez-marcus";

const MAIL_PNG = require("../images/Mail.png");
const GITHUB_PNG = require("../images/GitHub.png");
const LINKEDIN_PNG = require("../images/LinkedIn.png");

function Contact() {
  return (
    <div className="contact" id="contact">
      <span className="icons">
        <a href={"mailto:" + email} className="icon"> <img src={MAIL_PNG} alt="github" title="Email Me"/> </a>
        <a href={github} className="icon"> <img src={GITHUB_PNG} alt="github" title="Github"/>  </a>
        <a href={linkedin} className="icon"> <img src={LINKEDIN_PNG} alt="linkedin" title="LinkedIn"/> </a>
      </span>
      <br/>
      <label className="small"> {email} </label>
    </div>
  )
}

export default Contact;