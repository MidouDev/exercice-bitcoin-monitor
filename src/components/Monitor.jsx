import React, { Component } from "react";
import Display from "./Display";
import "../styles/Monitor.css";
import Axios from "axios";

class Monitor extends Component {
  state = {
    previousRate: [{ USD: "" }, { GBP: "-" }, { EUR: "-" }],
    currentRate: [{ USD: "" }, { GBP: "" }, { EUR: "" }]
  };

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    Axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => {
      this.setState({
        currentRate: {
          USD: res.data.bpi.USD.rate_float.toFixed(6),
          GBP: res.data.bpi.GBP.rate_float.toFixed(6),
          EUR: res.data.bpi.EUR.rate_float.toFixed(6)
        }
      });
    });
  };

  handleRefreshClick = () => {
    this.setState(prevState => ({
      previousRate: prevState.currentRate
    }));
    this.getInitialData();
  };

  render() {
    return (
      <div className="monitor">
        <Display
          currentRate={this.state.currentRate}
          previousRate={this.state.previousRate}
        />
        <div className="mt-4 text-center">
          <button className="refresher" onClick={this.handleRefreshClick}>
            <i className="fas fa-sync-alt fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Monitor;
