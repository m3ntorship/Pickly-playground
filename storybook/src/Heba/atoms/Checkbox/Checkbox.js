import React from "react";
import PropTypes from "prop-types";

export const CHECKBOX = {
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Checkbox = ({ status, size }) => {
  return (
    <>
      {size === CHECKBOX.SIZE.DEFAULT && status && (
        <button className="w-6 h-6 rounded-sm bg-primary flex justify-center  items-center">
          <svg
            className="text-white"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66632 10.3907L4.47099 8.19539L3.52832 9.13806L6.66632 12.2761L13.1377 5.80473L12.195 4.86206L6.66632 10.3907Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {size === CHECKBOX.SIZE.DEFAULT && !status && (
        <button className="w-6 h-6 border border-grey-shd4 rounded-sm flex justify-center items-center "></button>
      )}
      {size === CHECKBOX.SIZE.SMALL && status && (
        <button className="w-4 h-4 rounded-sm bg-primary flex justify-center  items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99998 7.79298L3.35348 6.14648L2.64648 6.85348L4.99998 9.20698L9.85348 4.35348L9.14648 3.64648L4.99998 7.79298Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {size === CHECKBOX.SIZE.SMALL && !status && (
        <button className="w-4 h-4 border border-grey-shd4 rounded-sm flex justify-center items-center "></button>
      )}
    </>
  );
};

Checkbox.propTypes = {
  status: PropTypes.bool,
  size: PropTypes.oneOf(["Default", "Small"]),
};
