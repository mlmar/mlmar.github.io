import React from 'react';

function Nav() {
  return (
    <div className="nav">
      <div className="flex col fade-slow">
        <label className="title flex center"> Marcus Martinez </label>
        <br/>
        <div className="flex links">
          <a href="#projects" className="medium"> Projects </a>
          <a href="#education" className="medium"> Education </a>
          <a href="#contact" className="medium"> Contact </a>
        </div>
      </div>
    </div>
  )
}

export default Nav;