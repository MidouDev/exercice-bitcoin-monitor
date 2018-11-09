import React from "react";
import Indicator from "./Indicator";
import currencies from "../lib/currencies.json";

const Display = props => (
  <div className="display">
    <div className="container">
      <table className="table table-dark text-center">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">BEFORE</th>
            <th scope="col">CURRENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <i className="fas fa-dollar-sign" />
            </th>
            <td>{props.previousRate.USD}</td>
            <td className="d-flex justify-content-center">
              {props.currentRate.USD}&nbsp;&nbsp;
              <Indicator
                currentRate={props.currentRate.USD}
                previousRate={props.previousRate.USD}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <i className="fas fa-pound-sign" />
            </th>
            <td>{props.previousRate.GBP}</td>
            <td className="d-flex justify-content-center">
              {props.currentRate.GBP}&nbsp;&nbsp;
              <Indicator
                currentRate={props.currentRate.GBP}
                previousRate={props.previousRate.GBP}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <i className="fas fa-euro-sign" />
            </th>
            <td>{props.previousRate.EUR}</td>
            <td className="d-flex justify-content-center">
              {props.currentRate.EUR}&nbsp;&nbsp;
              <Indicator
                currentRate={props.currentRate.EUR}
                previousRate={props.previousRate.EUR}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <select
                className="custom-select text-center"
                onChange={props.onCurrencyChange}
              >
                {currencies.map(currency => (
                  <option value={currency.currency} key={currency.currency}>
                    {currency.currency}
                  </option>
                ))}
              </select>
            </th>
            <td>{props.previousRate.OTHER}</td>
            <td className="d-flex justify-content-center">
              {props.currentRate.OTHER}&nbsp;&nbsp;
              <Indicator
                currentRate={props.currentRate.OTHER}
                previousRate={props.previousRate.OTHER}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Display;
