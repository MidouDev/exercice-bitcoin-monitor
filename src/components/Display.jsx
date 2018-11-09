import React from "react";
import Indicator from "./Indicator";

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
                indicatorState={
                  props.currentRate.USD - props.previousRate.USD > 0
                    ? "fas fa-angle-up text-success"
                    : props.currentRate.USD - props.previousRate.USD < 0
                    ? "fas fa-angle-down text-danger"
                    : "fas fa-minus text-muted"
                }
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
                indicatorState={
                  props.currentRate.GBP - props.previousRate.GBP > 0
                    ? "fas fa-angle-up text-success"
                    : props.currentRate.GBP - props.previousRate.GBP < 0
                    ? "fas fa-angle-down text-danger"
                    : "fas fa-minus text-muted"
                }
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
                indicatorState={
                  props.currentRate.EUR - props.previousRate.EUR > 0
                    ? "fas fa-angle-up text-success"
                    : props.currentRate.EUR - props.previousRate.EUR < 0
                    ? "fas fa-angle-down text-danger"
                    : "fas fa-minus text-muted"
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Display;
