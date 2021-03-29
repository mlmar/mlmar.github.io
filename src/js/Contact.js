import React from 'react';

const email = "mlmartin@ucsd.edu";
const github = "github.com/mlmar";
const linkedin = "linkedin.com/in/martinez-marcus";

const MAIL_PNG = require("../images/Mail.png");
const GITHUB_PNG = require("../images/GitHub.png");
const LINKEDIN_PNG = require("../images/LinkedIn.png");

function Contact({ compact }) {
  return (
    <div className="contact">
      { !compact ?
        <>
          <br/>
          <span className="links">
            <span> <a href={"mailto:" + email} className="icon flex center"> <img src={MAIL_PNG} alt="github" title="Email Me"/> </a> <label className="small"> {email} </label> </span>
            <a href={"https://" + github}> <span className="icon"> <img src={GITHUB_PNG} alt="github" title="Github"/> </span> <label className="small"> {github} </label> </a>
            <a href={"https://" + linkedin}> <span className="icon"> <img src={LINKEDIN_PNG} alt="linkedin" title="LinkedIn"/> </span> <label className="small"> {linkedin} </label> </a>
          </span>
          <br/>
        </>
        :
        <>
          <span className="compact-links">
            <a href={"mailto:" + email} className="icon"> <img src={MAIL_PNG} alt="github" title="Email Me"/> {} </a>
            <a href={github} className="icon"> <img src={GITHUB_PNG} alt="github" title="Github"/> {} </a>
            <a href={linkedin} className="icon"> <img src={LINKEDIN_PNG} alt="linkedin" title="LinkedIn"/> {} </a>
          </span>
          <br/>
          <label className="small"> {email} </label>
        </>
      }

    </div>
  )
}

export default Contact;