import React from 'react';

/*  "Unscroll" animation for any children elements
 *    {this.props.direction}  : direction of the scroll (up, down, left, right);
 *    {this.props.duration}   : optional scroll duration, 2 seconds by default
 *    {this.props.delay}      : optional scroll delay, 0 seconds by default
 *    
 *    css located under .scroll in css.main
 */

class Scroll extends React.Component {
  render() {
    var style =  { animationDuration : "2s", animationDelay : "0s", animationDirection : "normal"};
    style.animationDuration = this.props.duration ? this.props.duration + "s" : "2s";
    style.animationDelay = this.props.delay ? this.props.delay + "s" : "0s";
    style.animationDirection = this.props.type ? this.props.type : "normal";

    return (
      <span className="scroll">
        <div className={this.props.direction.toLowerCase()} style={style}></div>
        {this.props.children}
      </span>
    )
  }
}

export default Scroll;