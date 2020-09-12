import React from 'react';
import Demo from './ui/Demo.js';

// tonedeaf demo
import TopTracks from './demos/tonedeaf/TopTracks.js';

// links
const TONEDEAF_SITE = "https://tonedeaf.vercel.app";
const TONEDEAF_GITHUB = "https://github.com/mlmar/tonedeaf"
const TONEDEAF = { link: TONEDEAF_SITE, text: "Visit" };


const BLOCK_SITE = "https://mlmar.github.io/Block";
const BLOCK_GITHUB = "https://github.com/mlmar/Block";
const BLOCK = { link: BLOCK_SITE, text: "Play" };

// github button
const GITHUB_PNG = require("../images/GitHub.png");

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      demo : null // open demo of the same name if not null
    }

    this.buttonPanel = this.buttonPanel.bind(this);
  }

  /*  renders a project item
   *    link  {site}        : link to the actual project
   *    link  {github}      : link to github repo
   *    html  {demo}        : primary contents of the item
   */
  buttonPanel(site, github, demo) {
    // only render the params that exist
    return (
      <span className="button-panel">
        { site &&
          <a href={site.link}> <button className="blue"> {site.text} </button> </a>
        }

        { github &&
          <a href={github}> 
            <button className="green"> 
              <img src={GITHUB_PNG} alt="github source" className="first"/> 
              Src 
            </button> 
          </a>
        }

        { demo &&
          <button className="yellow" onClick={() => this.setState({ 
            demo : this.state.demo === demo ? null : demo
          })}> Demo </button>
        }

      </span>
    )
  }

  render() {
    return (
      <div className="projects" id="projects">
        <label className="large bold"> Projects </label>

        { /* TEAMEASY */ }
        <div  className="item">
          <div className="flex gap">
            <div className="right">
              <span className="flex space">
                <label href={TONEDEAF_SITE} className="medium bold"> 
                  TeamEasy 
                </label>
                {this.buttonPanel(TONEDEAF, TONEDEAF_GITHUB)} 
              </span>
              <p>
                ** todo **
              </p>
              <ul className="points">
                <li> <span className="highlight"> ReactjS, Mongo, Express, Node </span> </li>
              </ul>
            </div>
          </div>
        </div>

        { /* TONEDEAF */ }
        <div className="item">
          <div className="flex gap">
            <div className="right">
              <span className="flex space">
                <label href={TONEDEAF_SITE} className="medium bold flex space"> Tonedeaf </label>
                {this.buttonPanel(TONEDEAF, TONEDEAF_GITHUB, "tonedeaf")}
              </span>
              <p>
                Sign in with Spotify to view your top 50 artists/tracks and find recommendations.
              </p>
              <ul className="points">
                <li> UI for Spotify Web API to display track lists and info </li>
                <li> View data inaccessible through the normal Spotify app </li>
                <li> <span className="highlight"> ReactJS, CSS </span> </li>
              </ul>


            </div>
            
            { this.state.demo === "tonedeaf" &&
              <Demo description="TopTracks and Tracks component demo with sample my data" onClose={() => this.setState({ demo : null })}>
                <div className="tonedeaf">
                  <TopTracks/>
                </div>
              </Demo>
            }

          </div>
        </div>

        { /* BLOCK */ }
        <div  className="item">
          <div className="flex gap">
            <div className="right">
              <span className="flex space">
                <label href={BLOCK_SITE} className="medium bold flex space"> Block </label>
                {this.buttonPanel(BLOCK, BLOCK_GITHUB)}
              </span>
              <p>
                A simple game where the objective is to avoid being crushed by blocks.
              </p>
              <ul className="points">
                <li> Learned to create a web game that can be played on desktop and mobile </li>
                <li> <span className="highlight"> JavaScript, CSS </span> </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;