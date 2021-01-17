import React from "react";
import PropTypes from "prop-types";

export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
  TYPE: {
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  DISABLED: {
    ON: "on",
    OFF: "off",
  },
};

export const Button = ({ type, content, size, disabled }) => {
  return (
    <button
      className={`
  ${
    type === BUTTON_OPTIONS.TYPE.PRIMARY
      ? "rounded-full  bg-primary  text-white hover:bg-primary-shd8 focus:outline-none focus:border-2 focus:border-primary-shd9 focus:border-opacity-100 disabled:opacity-5"
      : "rounded-full  text-primary  border-2 border-primary"
  },
        ${size === BUTTON_OPTIONS.SIZE.BIG && "px-xl py-s font-bold text-md"},
        ${
          size === BUTTON_OPTIONS.SIZE.MEDIUM &&
          "px-l py-xs font-semibold  text-base"
        },
        ${
          size === BUTTON_OPTIONS.SIZE.SMALL &&
          "px-m py-xxs font-semibold text-sm"
        },
        ${disabled === BUTTON_OPTIONS.DISABLED.ON && "opacity-25"}
        `}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  content: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "big"]),
  disabled: PropTypes.oneOf(["on", "off"]),
};
