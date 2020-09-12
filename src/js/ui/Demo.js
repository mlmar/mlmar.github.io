import React from 'react';

/* Floating Demo component
 *    {this.props.description}  : text in the title bar
 *    {this.props.onClose}      : action to close the demo
 *    {this.props.children}     : content of the demo component
 */
class Demo extends React.Component {
  render() {
    return (
      <div className="demo fade-fast">
        <span className="bar">
          <label className="small max-width"> {this.props.description} </label>
          <button onClick={this.props.onClose}> x </button>
        </span>
        <div className="item">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Demo;