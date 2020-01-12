import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Itune extends Component {
  render() {

    return (
      <div className="col-sm py-2">
        <div className="card h-100" style={cardStyle}>
          <div className="card-body">
            <h5 className="card-title">Name: {this.props.itune.artistName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Track:{this.props.itune.trackName}
            </h6>
            <p className="card-text">
              collection: {this.props.itune.collectionName}
            </p>
            <Link to={{ pathname: `/about/${this.props.itune.trackId}` }}>
              Go To {this.props.itune.kind}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Itune.propTypes = {
  itune: PropTypes.object.isRequired
};

const cardStyle = {
  width: "18rem",
  margin: "30px",
  backgroundImage: `url("https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/06/itunes.jpg")`

};
