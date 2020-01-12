import React, { Component } from "react";
import Sound from "react-sound";

// import {useParams} from 'react-router-dom'
import PropTypes from "prop-types";
const uuidv1 = require("uuid/v1");

export default class ItuneDetails extends Component {
  

  render() {
 
    return (
      <React.Fragment>
        <b>
          {this.props.itune.previewUrl ? (
            <Sound
              url={this.props.itune.previewUrl}
              playStatus={Sound.status.PLAYING}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          ) : null}
        </b>

        {Object.entries(this.props.itune).map(([type, value]) => (
          <li key={uuidv1()}>
            {type}:{value}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

ItuneDetails.propTypes = {
  itune: PropTypes.object.isRequired
};
