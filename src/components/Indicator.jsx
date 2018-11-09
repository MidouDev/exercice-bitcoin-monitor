import React from "react";

const Indicator = props => {
  let indicator = null;

  if (props.currentRate) {
    if (props.currentRate > props.previousRate) {
      indicator = <i className="fas fa-angle-up text-success my-auto" />;
    } else if (props.currentRate < props.previousRate) {
      indicator = <i className="fas fa-angle-down text-danger my-auto" />;
    } else {
      indicator = <i className="fas fa-minus text-muted my-auto" />;
    }
  }
  return indicator;
};

export default Indicator;
