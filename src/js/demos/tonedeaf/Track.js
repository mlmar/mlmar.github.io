
/*
 *      DEMO TRACK.JS FROM TONEDEAF.VERCEL.APP
 *
 */

import React from 'react';

class Track extends React.Component {
  render() {
    // if rank is provided, prepend it the title
    var rank = this.props.rank ? this.props.rank + ". " : "";

    return (
      <div className="td-panel td-animate-drop">
        <div className="td-div-track">
          <a href={this.props.url} className="td-link-center">
            <img className="td-img--medium" src={this.props.image} width="100" height="100" alt="track art"/>
          </a>
          <div className="td-info">
            <label className="td-label-medium"> {rank} {this.props.title} </label>
            <label className="td-label-small"> {this.props.artist} </label>
            <br/>
            <label className="td-label-small"> {this.props.album} &#124; {this.props.year} </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Track;