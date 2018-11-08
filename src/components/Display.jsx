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
            <th scope="row">USD</th>
            <td>15023.336</td>
            <td className="d-flex justify-content-center">
              15200.225&nbsp;&nbsp;
              <Indicator />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Display;
