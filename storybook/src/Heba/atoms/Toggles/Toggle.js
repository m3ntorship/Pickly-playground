import React from "react";
import PropTypes from "prop-types";

export const TOGGLE = {
  STATUS: {
    ON: "on",
    OFF: "off",
  },
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Toggle = ({ status, size }) => {
  return (
    <>
      {size === TOGGLE.SIZE.DEFAULT && status === TOGGLE.STATUS.ON && (
        <button className="bg-primary-shd7 hover:bg-primary-shd6 focus:border-primary-shd5 focus:outline-none focus:border w-10 h-6 rounded-full flex items-center flex-row-reverse">
          <span className="w-4 h-4 mr-1 inline-block rounded-lg bg-primary"></span>
        </button>
      )}
      {size === TOGGLE.SIZE.DEFAULT && status === TOGGLE.STATUS.OFF && (
        <button className="bg-grey-shd4 hover:bg-grey-shd3 focus:border-grey-shd4 focus:outline-none w-10 h-6 rounded-full flex items-center">
          <span className="w-4 h-4 inline-block ml-1 rounded-lg bg-white"></span>
        </button>
      )}
      {size === TOGGLE.SIZE.SMALL && status === TOGGLE.STATUS.ON && (
        <button className="bg-primary-shd7 hover:bg-primary-shd6 focus:border-primary-shd5 focus:outline-none focus:border w-7 h-4 rounded-full flex items-center flex-row-reverse">
          <span className="w-2.5 h-2.5 mr-1 inline-block rounded-lg bg-primary"></span>
        </button>
      )}
      {size === TOGGLE.SIZE.SMALL && status === TOGGLE.STATUS.OFF && (
        <button className="bg-grey-shd4 hover:bg-grey-shd3 focus:border-grey-shd4 focus:outline-none w-7 h-4 rounded-full flex items-center">
          <span className="w-2.5 h-2.5 inline-block ml-1 rounded-lg bg-white"></span>
        </button>
      )}
    </>
  );
};

Toggle.propTypes = {
  status: PropTypes.oneOf(["on", "off"]),
  size: PropTypes.oneOf(["Default", "Small"]),
};
