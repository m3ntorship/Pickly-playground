import React, { useState } from "react";
import PropTypes from "prop-types";

export const TOGGLE = {
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Toggle = ({ size, disabled }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const divSize = size === TOGGLE.SIZE.DEFAULT ? "w-10 h-6" : "w-7 h-4";
  const spanSize = size === TOGGLE.SIZE.DEFAULT ? "w-4 h-4" : "w-2.5 h-2.5";

  return (
    <>
      {isChecked && (
        <div
          className={`relative bg-primary-shd7 hover:bg-primary-shd6 focus:border-primary-shd5 focus:outline-none focus:border rounded-full flex items-center flex-row-reverse ${divSize} ${
            disabled && "bg-primary-shd7"
          }`}
        >
          <span
            className={`mr-1 inline-block rounded-lg bg-primary ${spanSize} ${
              disabled && "bg-primary-shd4"
            }`}
          ></span>
          <input
            disabled={disabled}
            onClick={handleCheck}
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
      {!isChecked && (
        <div
          className={`relative bg-grey-shd4 hover:bg-grey-shd3 focus:border-grey-shd4 focus:outline-none rounded-full flex items-center ${divSize} ${
            disabled && "bg-grey-shd6"
          }`}
        >
          <span
            className={`inline-block ml-1 rounded-lg bg-white ${spanSize} ${
              disabled && "bg-white"
            }`}
          ></span>
          <input
            disabled={disabled}
            onClick={handleCheck}
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
    </>
  );
};

Toggle.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["Default", "Small"]),
};
