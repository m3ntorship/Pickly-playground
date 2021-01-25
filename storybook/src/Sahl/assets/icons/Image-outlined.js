import React from "react";
import PropTypes from "prop-types";

export default function ImageOutlined(props) {
  const { width, height, color, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill={color || `#5B6366`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11Z"
        fill="#5B6366"
      />
      <path
        d="M10.499 14L8.99902 12L5.99902 16H8.99902H11.999H17.999L13.499 10L10.499 14Z"
        fill="#5B6366"
      />
      <path
        d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z"
        fill="#5B6366"
      />
    </svg>
  );
}

ImageOutlined.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};
