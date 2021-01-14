import React from "react";
import PropTypes from "prop-types";

export default function Divider(props) {
  const { className, direction = "horizontal" } = props;
  return (
    <div
      className={`bg-grey-shd6 ${
        direction === "horizontal" ? "w-full h-px" : "h-full w-px"
      } ${className}`}
    ></div>
  );
}

Divider.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  className: PropTypes.string,
};
