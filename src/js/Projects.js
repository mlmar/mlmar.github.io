import React, { useState } from 'react';
import Demo from './ui/Demo.js';

// tonedeaf demo
import TrackList from './demos/tonedeaf/TrackList.js';

// links
const TONEDEAF_SITE = "https://tonedeaf.vercel.app";
const TONEDEAF_GITHUB = "https://github.com/mlmar/tonedeaf";
const TONEDEAF = { link: TONEDEAF_SITE, text: "Visit" };
const TONEDEAF_PNG = require("../images/tonedeaf-screen.png");


const BLOCK_SITE = "https://mlmar.github.io/Block";
const BLOCK_GITHUB = "https://github.com/mlmar/Block";
const BLOCK = { link: BLOCK_SITE, text: "Play" };
const BLOCK_GIF = require("../images/block-screen.gif");

// github button
const GITHUB_PNG = require("../images/GitHub.png");

function Projects() {
  const [demo, setDemo] = useState(null) // open demo of the same name if not null

  const selectDemo = (showDemo) => {
    setDemo(demo === showDemo ? null : showDemo);
  }

  /*  renders a project item
   *    link  {site}        : link to the actual project
   *    link  {github}      : link to github repo
   *    html  {demo}        : primary contents of the item
   */
  const ButtonPanel = ({ site, github, showDemo }) => {
    // only render the params that exist
    return (
      <span className="button-panel small">
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
          <button className="yellow" onClick={() => selectDemo(showDemo)}> Demo </button>
        }

      </span>
    )
  }

  const handleKeyDown = (e) => {
    if(e.key === "Escape") selectDemo();
  }

  return (
    <div className="projects" id="projects" tabIndex={-1} onKeyDown={handleKeyDown}>
      <label className="medium bold underline"> Projects </label>

      { /* TONEDEAF */ }
      <div className="item">
        <label href={TONEDEAF_SITE} className="small bold flex space head"> Tonedeaf </label>
        <div className="subcontent small">

          <p className="description">
            Sign in with Spotify to view information about your top 50 artists/tracks and find music recommendations.
          </p>

          <ul className="points">
            <li> UI for Spotify API </li>
            <li> View data that you can't see through the normal Spotify app </li>
            <li> <span className="highlight"> ReactJS </span> </li>
          </ul>

          <div className="image-wrapper"> <img src={TONEDEAF_PNG} className="clickable" title="tonedeaf" alt="tonedeaf" onClick={() => selectDemo("tonedeaf_png")}/>  </div>
          <ButtonPanel site={TONEDEAF}  github={TONEDEAF_GITHUB} showDemo="tonedeaf"/> 
          
        </div>
      </div>



      { /* BLOCK */ }
      {/* <div  className="item">
        <span className="flex space head">
          <label href={BLOCK_SITE} className="small bold flex space"> Block </label>
          <ButtonPanel site={BLOCK} github={BLOCK_GITHUB}/>
        </span>
        <div className="subcontent small">
          <div>
            <p>
              A simple game where the objective is to avoid being crushed by blocks.
            </p>
            <ul className="points">
              <li> Learned to create a web game that can be played on desktop and mobile </li>
              <li> <span className="highlight"> JavaScript </span> </li>
            </ul>
          </div>
          <div className="image-wrapper"> <img src={BLOCK_GIF} className="clickable" alt="block" onClick={() => selectDemo("block_gif")}/> </div>
        </div>
      </div> */}





      { demo === "tonedeaf_png" &&
        <Demo onClose={setDemo} className="image-float">
          <img src={TONEDEAF_PNG} alt="tonedeaf"/>
        </Demo>
      }

      { demo === "tonedeaf" &&
        <Demo onClose={setDemo} className="tonedeaf">
          <TrackList/>
        </Demo>
      }

      { demo === "block_gif" &&
        <Demo onClose={setDemo} className="image-float">
          <img src={BLOCK_GIF} alt="block"/>
        </Demo>
      }

    </div>
  )
}

export default Projects;