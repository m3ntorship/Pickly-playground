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

export const Divider = ({ type, range, color = "" }) => {
  return (
    <>
      {type === DIVIDER.TYPE.HORIZONTAL && (
        <div
          className={`h-0.5 w-${range} ${color === "" && "bg-grey-shd6"}`}
          style={{ backgroundColor: color }}
        ></div>
      )}
      {type === DIVIDER.TYPE.VERTICAL && (
        <div
          className={`w-0.5 h-${range} ${color === "" && "bg-grey-shd6"}`}
          style={{ backgroundColor: color }}
        ></div>
      )}
    </>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(["Horizontal", "Vertical"]),
  range: PropTypes.any,
  color: PropTypes.string,
};
