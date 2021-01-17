import React from "react";
import PropTypes from "prop-types";

const Close = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z"
        fill="#8D9A9E"
      />
    </svg>
  );
};
export default Close;

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.string,
};
