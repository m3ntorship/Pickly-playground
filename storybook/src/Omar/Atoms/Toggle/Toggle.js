import { React, useState } from "react";
import PropTypes from "prop-types";
export const TOGGLE = {
  SIZE: {
    SMALL: "small",
    DEFAULT: "default",
  },
};
export const Toggler = ({ disabled, size, label }) => {
  const [isChecked, setisChecked] = useState(false);
  const toggleSize = size === TOGGLE.SIZE.DEFAULT ? "w-10 h-6" : "w-8 h-4";
  const spanSize = size === TOGGLE.SIZE.DEFAULT ? "w-4 h-4" : "w-3 h-3";
  label = isChecked ? "ON" : "OFF";
  const handleCheck = () => {
    setisChecked(!isChecked);
  };
  return (
    <>
      <label htmlFor="labelId">{label}</label>
      {isChecked && (
        <div
          className={`relative ${toggleSize} bg-primary-shd7 hover:bg-primary-shd6 focus:outline-none focus:border focus:border-primary-shd5  rounded-full flex items-center flex-row-reverse ${
            disabled && "bg-primary-shd7 "
          }`}
        >
          <span
            className={` inline-block mr-1 rounded-lg bg-primary ${spanSize} ${
              disabled && "bg-primary-shd4"
            }
            `}
          ></span>
          <input
            id="labelId"
            type="checkbox"
            className={`opacity-0 absolute cursor-pointer w-full h-full ${
              disabled && "cursor-not-allowed"
            }`}
            disabled={disabled}
            onClick={handleCheck}
          />
        </div>
      )}
      {!isChecked && (
        <div
          className={`relative ${toggleSize} bg-grey-shd4 hover:bg-grey-shd3 focus:outline-none focus:border focus:border-grey-shd4  rounded-full flex items-center flex-row-reverse ${
            disabled && "bg-grey-shd6"
          }`}
        >
          <span
            className={`inline-block ${
              size === TOGGLE.SIZE.SMALL ? "mr-4" : "mr-5"
            } rounded-lg bg-white ${spanSize} ${disabled && "bg-white"}
            `}
          ></span>
          <input
            id="labelId"
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
            disabled={disabled}
            onClick={handleCheck}
          />
        </div>
      )}
    </>
  );
};

Toggler.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default"]),
};
