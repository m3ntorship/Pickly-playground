import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.862 6.19537L7.99998 9.05737L5.13798 6.19537L4.19531 7.13804L7.99998 10.9427L11.8046 7.13804L10.862 6.19537Z"
        fill="#94ACB5"
      />
    </svg>
  );
};
export default Arrow;

Arrow.propTypes = {
  className: PropTypes.string,
};
