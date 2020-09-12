import React from 'react';
import Scroll from './Scroll.js';

/* animate my name
 *
 *  M
 *  Marcus
 *  M
 *  Martinez
 *  
 *    Marcus
 *    Martinez
 */

class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName : null,
      frame : 0
    }
    
    this.getFrame = this.getFrame.bind(this);
  }

  // get correct animation frame
  getFrame() {
    switch(this.state.frame) {
      case 0:
        return (
          <Scroll direction="right" duration=".4" delay="1" key="0">
            <label className="title"> arcus </label>
          </Scroll>
        )
      
      case 1:
        return (
          <Scroll direction="right" duration=".4" delay="0" type="reverse" key="1">
            <label className="title"> arcus </label>
          </Scroll>
        )

      default:
        return (
          <Scroll direction="right" duration=".4" delay="0" key="2">
            <label className="title"> artinez </label>
          </Scroll>
        )
    }
  }

  componentDidMount() {
    setTimeout(() => { //reverse
      this.setState({
        frame : 1
      })
    }, 1500 );

    setTimeout(() => {
      this.setState({
        frame : 2
      })
    }, 2100 );

    setTimeout(() => {
      this.setState({
        firstName : <label className="title slide-up"> Marcus </label>
      })
    }, 2500 );

  }

  render() {
    return (
      <div className="name">
        {this.state.firstName}
        <div className="container">
          <label className="title"> M </label>
          <span className="segment">
            <label className="title placeholder"> artinez </label>

            {this.getFrame()}

          </span>
        </div>

      </div>
    )
  }
}

export default Name;