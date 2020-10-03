import React from 'react';
import './App.css';
import './css/main.css';

import Nav from './js/Nav.js';

// moodules
import Education from './js/Education.js';
import Projects from './js/Projects.js';
import Contact from './js/Contact.js';

function App() {

  return (
    <div className="App">
      <div className="main">
        <Nav/>
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