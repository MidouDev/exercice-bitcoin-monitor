import React, { Component } from "react";
import Display from "./Display";
import "../styles/Monitor.css";
import Axios from "axios";

class Monitor extends Component {
  state = {
    currencies: []
  };

  componentDidMount() {
    Axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => {
      console.log(res.data.bpi);
    });
  }

  render() {
    return (
      <div className="monitor">
        <Display currencies={this.state.currencies} />
        <div className="mt-4 text-center">
          <button className="refresher">
            <i className="fas fa-sync-alt fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Monitor;
