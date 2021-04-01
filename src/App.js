import React from 'react';
import './App.css';
import './css/main.css';

// moodules
import Education from './js/Education.js';
import Projects from './js/Projects.js';
import Contact from './js/Contact.js';

function App() {

  return (
    <div className="App">
      <div className="main">
        <div className="content">
          <div className="wrapper">
            <p className="about large fade-1">
              Hi I'm Marcus Martinez. I'm a junior at <span className="highlight"> UCSD </span> majoring in cognitive science and minoring in computer science. 
              I am currently pursuing an internship and any career opportunities in web development.
            </p>
            <Projects className="fade-2"/>
            <Education/>
          </div>
        </div>
        <Contact/> 
      </div>
    </div>
  )
}

export default App;