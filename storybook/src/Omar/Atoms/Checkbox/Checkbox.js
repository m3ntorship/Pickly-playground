import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckboxSVG from "./../../assets/CheckboxSVG";
export const CHECKBOX = {
  SIZE: {
    LARGE: "lg",
    SMALL: "sm",
  },
};
export const Checkbox = ({ disabled, size, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxSize = size === CHECKBOX.SIZE.LARGE ? "w-l h-l" : "w-m h-m";
  const checkboxHeight = size === CHECKBOX.SIZE.LARGE ? "9" : "7";
  const checkboxWidth = size === CHECKBOX.SIZE.LARGE ? "11" : "8";
  return (
    <>
      {isChecked && (
        <label
          className={`${checkboxSize} relative cursor-pointer flex justify-center  items-center`}
          data-testid="label"
        >
          <input
            className={`${checkboxSize} appearance-none outline-none border border-grey-shd4 rounded-sm text-white align-baseline bg-primary ${
              disabled && "bg-primary-shd7"
            } ${!disabled && "hover:bg-primary-shd8"} `}
            type="checkbox"
            data-testid="input"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onClick={onClick}
            disabled={disabled}
            checked={isChecked}
          />
          <CheckboxSVG
            className="absolute"
            width={checkboxWidth}
            height={checkboxHeight}
          />
        </label>
      )}
      {!isChecked && (
        <label
          className={`${checkboxSize} relative cursor-pointer flex justify-center  items-center`}
          data-testid="label"
        >
          <input
            className={`${checkboxSize} appearance-none outline-none border border-grey-shd4 rounded-sm text-white align-baseline cursor-pointer ${
              !disabled && "hover:border  hover:border-grey-shd1"
            }`}
            type="checkbox"
            data-testid="input"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onClick={onClick}
            disabled={disabled}
            checked={isChecked}
          />
        </label>
      )}
    </>
  );
};
Checkbox.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "sm"]),
};
