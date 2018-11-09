import React, { Component } from "react";
import Display from "./Display";
import "../styles/Monitor.css";
import Axios from "axios";

class Monitor extends Component {
  state = {
    previousRate: [{ USD: "" }, { GBP: "" }, { EUR: "" }, { OTHER: "" }],
    currentRate: [{ USD: "" }, { GBP: "" }, { EUR: "" }, { OTHER: "" }],
    selectedCurrency: [{ OTHER: "" }],
    previouslySelectedCurrency: [{ OTHER: "" }],
    currencyName: ""
  };

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    Axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => {
      this.setState(prevState => ({
        currentRate: {
          USD: res.data.bpi.USD.rate_float.toFixed(6),
          GBP: res.data.bpi.GBP.rate_float.toFixed(6),
          EUR: res.data.bpi.EUR.rate_float.toFixed(6)
        }
      }));
    });
  };

  getSelectedCurrency = name => {
    Axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice/" + name + ".json"
    ).then(res => {
      console.log(res.data.bpi[name].rate_float);
      this.setState(prevState => ({
        selectedCurrency: { OTHER: res.data.bpi[name].rate_float.toFixed(6) }
      }));
    });
  };

  handleCurrencyChange = event => {
    this.setState({
      currencyName: event.target.value,
      previouslySelectedCurrency: [{ OTHER: "" }]
    });
    console.log(event.target.value);
    this.getSelectedCurrency(event.target.value);
  };

  handleRefreshClick = () => {
    this.setState(prevState => ({
      previousRate: prevState.currentRate
    }));
    this.getInitialData();
    this.setState(prevState => ({
      previouslySelectedCurrency: prevState.selectedCurrency
    }));
    this.getSelectedCurrency(this.state.currencyName);
  };

  render() {
    return (
      <div className="monitor">
        <Display
          currentRate={this.state.currentRate}
          selectedCurrency={this.state.selectedCurrency}
          previousRate={this.state.previousRate}
          previouslySelectedCurrency={this.state.previouslySelectedCurrency}
          onCurrencyChange={this.handleCurrencyChange}
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
