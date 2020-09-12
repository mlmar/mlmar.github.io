import React from 'react';
import Scroll from './Scroll.js';

class Name extends React.Component {
  render() {
    return (
      <div>
        <span className="scroll">
          <div className="right"></div>
          <label className="title"> Marcus </label>
        </span>
      </div>
    )
  }
}

export default Name;