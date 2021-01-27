import React from "react";
import PropTypes from "prop-types";
import DownArrow from "./../../../assets/icons/Buttons/DownArrow";

export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};

export const ButtonIconOnly = ({ size }) => {
  const IconSize =
    size === BUTTON_OPTIONS.SIZE.BIG
      ? "32"
      : size === BUTTON_OPTIONS.SIZE.MEDIUM
      ? "24"
      : "16";

  return (
    <button className="flex items-center rounded-full  bg-primary  text-white hover:bg-primary-shd8 focus:outline-none focus:border-2 focus:border-primary-shd9 focus:border-opacity-100 disabled:opacity-5">
      <DownArrow width={IconSize} height={IconSize} />
    </button>
  );
};

ButtonIconOnly.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "big"]),
};
