import React from "react";
import PropTypes from "prop-types";

export default function DownArrow(props) {
  const { width, height, color, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
        fill={color || `#5B6366`}
      />
    </svg>
  );
}

DownArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};
