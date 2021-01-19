import React from "react";
import PropTypes from "prop-types";
import DownArrow from "./../../../assets/icons/Buttons/DownArrow";

export const ICON_OPTIONS = {
  POSTION: {
    LEFT: "left",
    RIGHT: "right",
  },
};
export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};

export const ButtonIcon = ({ children, iconPosition, size }) => {
  const IconDir =
    iconPosition == ICON_OPTIONS.POSTION.LEFT ? "order-first" : "order-last";

  const IconSize = size === BUTTON_OPTIONS.SIZE.BIG ? "24" : "16";

  return (
    <button
      className={`flex items-center rounded-full  bg-primary  text-white hover:bg-primary-shd8 focus:outline-none focus:border-2 focus:border-primary-shd9 focus:border-opacity-100 disabled:opacity-5
          ${size === BUTTON_OPTIONS.SIZE.BIG && "px-xl py-s font-bold text-md"},
          ${
            size === BUTTON_OPTIONS.SIZE.MEDIUM &&
            "px-l py-xs font-semibold  text-base"
          },
          ${
            size === BUTTON_OPTIONS.SIZE.SMALL &&
            "px-m py-xxs font-semibold text-sm"
          }
          `}
    >
      <DownArrow className={IconDir} width={IconSize} height={IconSize} />
      {children}
    </button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "medium", "big"]),
};
