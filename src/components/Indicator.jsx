import React from "react";

const Indicator = props => (
  <div className="indicator">
    <i className={props.indicatorState} />
  </div>
);

export default Indicator;
