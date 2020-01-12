import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import PopItunes from "./PopItunes";

export default class SearchItunes extends Component {
  state = {
    search: "",
    flag: (Boolean = false),
    popup: (Boolean = false),
    topItunes: []
  };

  

  // this.setState({search:event.target.value});
  onChange = event => this.setState({ search: event.target.value });

  onSubmit = event => {
    event.preventDefault();
  };

  onClose = () => {
    this.setState({ popup: false });
  };

  setFlag = () => {
    this.setState({ popup: true });
  };

  render() {
    const search = this.state.search;




    return (
      <form onSubmit={this.props.getItunes.bind(this, search)}>
        <div
          className="container"
          style={{ marginRight: "0", marginLeft: "0", margin: "auto" }}
        >
          <div className="row">
            

            <b>
                <div>
                  
                  <Popup
                    open={this.state.flag}
                    onClose={this.onClose}
                    position="right center"
                    trigger={<button
                      className="btn btn-info"
                      
                      onClick={ async () => {
                        const top = await this.props.getTopItunes();
                        this.setState({ topItunes: top})
                      }}
                    >
                      Top 10
                    </button>}
                  >

                  <PopItunes ></PopItunes>
                    
                  </Popup>
                </div>
             
            </b>

            <input
              type="text"
              name="title"
              style={{ flex: "10", padding: "5px", marginLeft: "50px" }}
              placeholder="Search..."
              value={this.state.search}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
              style={{ flex: "1", marginLeft: "5px" }}
            />
          </div>
        </div>
      </form>
    );
  }
}

SearchItunes.propTypes = {
  getItunes: PropTypes.func.isRequired,
  getTopItunes: PropTypes.func.isRequired,
  topItunes: PropTypes.array.isRequired,
};

