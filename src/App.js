import React from 'react';
import './App.css';
import './css/main.css';

// fun stuff
import Name from './js/design/Name.js';

// moodules
import Education from './js/Education.js';
import Projects from './js/Projects.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index : 1,

      info  : {
        email : "marcloussm@gmail.com"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main">

          <div className="header">
            <div className="item">
              <Name/>
              <a href={"mailto:" + this.state.info.email}> <label className="medium"> {this.state.info.email} </label> </a>
              <a href="#projects" className="medium"> Projects </a>
              <a href="#education" className="medium"> Education </a>
            </div>
          </div>
          
          <div className="content">
            <div className="wrapper">
              <Projects/>
              <Education/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default App;