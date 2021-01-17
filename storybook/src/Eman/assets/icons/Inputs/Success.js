import React from "react";
import PropTypes from "prop-types";

const Success = ({ className }) => {
  return (
    <svg
      className={className}
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66681 6.39061L1.47148 4.19527L0.528809 5.13794L3.66681 8.27594L10.1381 1.8046L9.19547 0.861938L3.66681 6.39061Z"
        fill="#07B255"
      />
    </svg>
  );
};
export default Success;

Success.propTypes = {
  className: PropTypes.string,
};
