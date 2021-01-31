import React, { useState } from "react";
import PropTypes from "prop-types";
export const RADIO = {
  SIZE: {
    DEFAULT: "default",
    SMALL: "small",
  },
};
export const Radio = (props) => {
  const { disabled, size, label } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label htmlFor="radio-label1">{label}</label>
      {isChecked && (
        <div
          className={` relative rounded-lg bg-primary flex justify-center items-center hover:bg-primary-shd8 focus:ring-2 focus:ring-offset-primary-shd6 focus:outline-none ${
            size === RADIO.SIZE.SMALL ? "w-4 h-4" : "w-6 h-6"
          } ${disabled && "bg-primary-shd7"}`}
        >
          <input
            data-testid="inputTest"
            type="radio"
            className={`opacity-0 absolute cursor-pointer w-full h-full ${
              disabled && "cursor-not-allowed"
            }`}
            onClick={handleCheck}
            id="radio-label1"
            name="radio"
            defaultChecked
            disabled={disabled}
          />
          <div
            className={`${
              size === RADIO.SIZE.SMALL ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
            } rounded-lg bg-white`}
          ></div>
        </div>
      )}
      {!isChecked && (
        <div
          htmlFor="radio-label1"
          className={` relative border border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:ring-2 focus:border-offset-grey-shd2 focus:outline-none w-4 h-4 ${
            size === RADIO.SIZE.SMALL ? "w-4 h-4" : "w-6 h-6"
          } ${disabled && "border-2 border-grey-shd6"}`}
        >
          <input
            data-testid="inputTest"
            type="radio"
            className={`opacity-0 absolute cursor-pointer w-full h-full ${
              disabled && "cursor-not-allowed"
            }`}
            onClick={handleCheck}
            id="radio-label1"
            name="radio"
            defaultChecked
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["default", "small"]),
  label: PropTypes.string,
};
