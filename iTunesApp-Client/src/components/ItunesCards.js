import React, { Component } from "react";
import PropTypes from "prop-types";
import Itune from "./Itune";
export default class ItunesCards extends Component {
  render() {
    return (
      <div className="row">
        {this.props.itunes.map((itune, index) => (
          <Itune key={index} itune={itune} />
        ))}
      </div>
    );
  }
}

ItunesCards.propTypes = {
  itunes: PropTypes.array.isRequired
};
