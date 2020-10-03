import React, { useState } from 'react';
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

function Projects() {
  const [demo, setDemo] = useState(null) // open demo of the same name if not null

  /*  renders a project item
   *    link  {site}        : link to the actual project
   *    link  {github}      : link to github repo
   *    html  {demo}        : primary contents of the item
   */
  const ButtonPanel = ({ site, github, showDemo }) => {
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

        { showDemo &&
          <button className="yellow" onClick={() => setDemo(demo === showDemo ? null : showDemo)}> Demo </button>
        }

      </span>
    )
  }

  return (
    <div className="projects" id="projects">
      <label className="large bold line"> Projects </label>

      { /* TEAMEASY */ }
      <div  className="item">
        <div className="flex">
          <div className="right">
            <span className="flex space head">
              <label href={TONEDEAF_SITE} className="small bold"> 
                TeamEasy 
              </label>
              <ButtonPanel site={TONEDEAF} github={TONEDEAF_GITHUB}/> 
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
        <div className="flex">
          <div className="right">
            <span className="flex space head">
              <label href={TONEDEAF_SITE} className="small bold flex space"> Tonedeaf </label>
              <ButtonPanel site={TONEDEAF} showDemo="tonedeaf"/>
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
          
          { demo === "tonedeaf" &&
            <Demo description="TopTracks and Tracks component demo with sample my data" onClose={() => setDemo(null)}>
              <div className="tonedeaf">
                <TopTracks/>
              </div>
            </Demo>
          }

        </div>
      </div>

      { /* BLOCK */ }
      <div  className="item">
        <div className="flex">
          <div className="right">
            <span className="flex space head">
              <label href={BLOCK_SITE} className="small bold flex space"> Block </label>
              <ButtonPanel site={BLOCK} github={BLOCK_GITHUB}/>
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

export default Projects;