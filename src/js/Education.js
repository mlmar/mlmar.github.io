import React from 'react';
import DropDown from './ui/DropDown.js';

const COURSES = require("../data/courses.json");

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.courseLabel = this.courseLabel.bind(this);
  }

  // shows course with highlighted languages beneath
  courseLabel(course, i) {
    return (
      <div className="course" key={i}>
        <label> {course.title} : {course.description} </label>
        <label className="languages highlight"> {course.languages.join(", ")} </label>
      </div>
    )
  }

  render() {
    return (
      <div className="education" id="education">

        <label className="large bold"> Education </label>
        
        <div className="item flex">
          <span>
            <label className="medium"> University of California, San Diego </label>
            <label className="small"> (2018 - Present) </label>
          </span>
          
          <div className="item gap">
            <div className="major">
              <p className="small highlight"> <label className="bold"> Cognitive Science B.S </label> with a specialization in Design and Interaction </p>
              <p className="small bold"> Computer Science Minor </p>
            </div>

            <DropDown description="See Relevant Coursework" alt="Hide Relevant Coursework">
              { 
                COURSES.map((course, i) => {
                  return this.courseLabel(course, i);
                })
              }
            </DropDown>

          </div>
        </div>
        
      </div>
    )
  }
}

export default Education;