import React from "react";
import PropTypes from "prop-types";

export const DIVIDER = {
  TYPE: {
    HORIZONTAL: "Horizontal",
    VERTICAL: "Vertical",
  },
  RANGE: {
    MIN: "4",
    MAX: "20",
    STEP: "1px",
  },
};

export const Divider = ({ type, range }) => {
  return (
    <>
      {type === DIVIDER.TYPE.HORIZONTAL && (
        <div className={`h-0.5 bg-grey-shd6 w-${range}`}></div>
      )}
      {type === DIVIDER.TYPE.VERTICAL && (
        <div className={`w-0.5 bg-grey-shd6 h-${range}`}></div>
      )}
    </>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(["Horizontal", "Vertical"]),
  range: PropTypes.any,
};
