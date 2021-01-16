import React, { useState } from "react";
import PropTypes from "prop-types";

export const CHECKBOX = {
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Checkbox = ({ size, disabled }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const divSize = size === CHECKBOX.SIZE.DEFAULT ? "w-6 h-6" : "w-4 h-4";
  const iconSize = size === CHECKBOX.SIZE.DEFAULT ? "16" : "12";

  return (
    <>
      {isChecked && (
        <div
          className={`relative rounded-sm  flex justify-center  items-center bg-primary
          ${
            !disabled && "hover:bg-primary-shd8"
          } focus:outline-none focus:ring-2 focus:ring-offset-primary-shd6 ${divSize} 
          ${disabled && "bg-primary-shd7"}`}
          onClick={handleCheck}
        >
          <svg
            className="text-white"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66632 10.3907L4.47099 8.19539L3.52832 9.13806L6.66632 12.2761L13.1377 5.80473L12.195 4.86206L6.66632 10.3907Z"
              fill="white"
            />
          </svg>
          <input
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            disabled={disabled}
            checked={isChecked}
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
      {!isChecked && (
        <div
          className={`relative rounded-sm flex justify-center items-center border border-grey-shd4 focus:outline-none  focus:ring-2 focus:ring-offset-grey-shd2 ${
            !disabled && "hover:border  hover:border-grey-shd1"
          } ${divSize} ${disabled && "border-grey-shd6"}`}
          onClick={handleCheck}
        >
          <input
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            disabled={disabled}
            checked={isChecked}
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
    </>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["Default", "Small"]),
};
