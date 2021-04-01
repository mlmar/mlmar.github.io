import React from 'react';
import DropDown from './ui/DropDown.js';

const COURSES = require("../data/courses.json");

function Education({ courses }) {
  // shows course with highlighted languages beneath
  const CourseLabel = (props) => {
    return (
      <div className="course medium">
        <label> {props.title} : {props.description} </label>
        {props.languages && 
          <label className="languages highlight"> {props.languages.join(", ")} </label>
        }
      </div>
    )
  }

  return (
    <div className="education" id="education">

      <label className="large bold"> Education </label>
      
      <div className="item flex">
        <span>
          <label className="medium bold"> University of California, San Diego</label>
          <label className="medium"> (2018 - Present) </label>
        </span>

        <br/>
        
        <div className="item">
          <div className="major">
            <p className="small highlight"> <label className="small"> Cognitive Science B.S </label> with a specialization in Design and Interaction </p>
            <p className="small"> Computer Science Minor </p>
          </div>
          
          <br/>
          { courses &&
            <DropDown description="See Relevant Coursework" alt="Hide Relevant Coursework">
              { 
                COURSES?.map((course, i) => <CourseLabel {...course} key={i}/> )
              }
            </DropDown>
          }


        </div>
      </div>
      
    </div>
    )
}

export default Education;