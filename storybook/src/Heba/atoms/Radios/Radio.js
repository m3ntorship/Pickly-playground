import React from "react";
import PropTypes from "prop-types";

export const RADIO = {
  STATUS: {
    ON: "on",
    OFF: "off",
  },
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Radio = ({ status, size }) => {
  return (
    <>
      {size === RADIO.SIZE.DEFAULT && status === RADIO.STATUS.ON && (
        <button className="w-6 h-6 rounded-lg bg-primary flex justify-center items-center hover:bg-primary-shd8 focus:border-2 focus:border-primary-shd6 focus:outline-none">
          <span className="w-2.5 h-2.5 bg-white rounded-lg"></span>
        </button>
      )}
      {size === RADIO.SIZE.DEFAULT && status === RADIO.STATUS.OFF && (
        <button className="w-6 h-6 border border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:border-2 focus:border-grey-shd2 focus:outline-none"></button>
      )}
      {size === RADIO.SIZE.SMALL && status === RADIO.STATUS.ON && (
        <button className="w-4 h-4 rounded-lg bg-primary flex justify-center items-center hover:bg-primary-shd8 focus:border-2 focus:border-primary-shd6 focus:outline-none">
          <span className="w-1.5 h-1.5 bg-white rounded-lg"></span>
        </button>
      )}
      {size === RADIO.SIZE.SMALL && status === RADIO.STATUS.OFF && (
        <button className="w-4 h-4 border border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:border-2 focus:border-grey-shd2 focus:outline-none"></button>
      )}
    </>
  );
};

Radio.propTypes = {
  status: PropTypes.oneOf(["on", "off"]),
  size: PropTypes.oneOf(["Default", "Small"]),
};
