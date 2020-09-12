
/*
 *      DEMO TOPTRACK.JS FROM TONEDEAF.VERCEL.APP
 *
 */

import React from 'react';
import './tonedeaf.css';

import Track from './Track.js';

const TONEDEAF_SAMPLE = require("../../../data/tonedeaf-sample.json");

class TopTracks extends React.Component {
  artistsToString(artists) {
    var result = "";
    for(var i = 0; i < artists.length; i++) {
      result += (i < artists.length - 1) ? artists[i].name + ", " : artists[i].name;
    }
    return result;
  }

  render() {
    return (
      <div className="td-div-toptracks">
        {
          TONEDEAF_SAMPLE.map((track, i) => {
            return (
              <Track
                image={track.album.images[0].url}
                title={track.name}
                artist={this.artistsToString(track.artists)}
                url={track.external_urls.spotify}
                year={track.album.release_date.split("-")[0]}
                type={track.album.type}
                album={track.album.name}
                rank={i + 1}
                key={i}
              />
            )
          })
        }
      </div>
    )
  }
}

export default TopTracks;