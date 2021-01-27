import React from "react";
import PropTypes from "prop-types";

export default function Divider(props) {
  const { className, direction = "horizontal" } = props;
  return (
    // h-32 added only for purpose of demonestration in storybook. Later it should be h-full
    <div
      className={`bg-grey-shd6 ${
        direction === "horizontal" ? "w-full h-px" : "h-32 w-px"
      } ${className}`}
    ></div>
  );
}

Divider.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  // className: PropTypes.string,
};
