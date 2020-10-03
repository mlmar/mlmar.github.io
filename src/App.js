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

        <div className="nav">
          <div className="flex col fade-slow">
            <label className="title"> Marcus Martinez </label>
            <br/>
            <div className="flex links">
              <a href="#projects" className="medium"> Projects </a>
              <a href="#education" className="medium"> Education </a>
              <a href="#contact" className="medium"> Contact </a>
            </div>
          </div>
        </div>
        
        <div className="content">
          <div className="wrapper">
            <Projects/>
            <Education/>
          </div>
        </div>

        <Contact/> 

      </div>

    </div>
  )
}

export default App;