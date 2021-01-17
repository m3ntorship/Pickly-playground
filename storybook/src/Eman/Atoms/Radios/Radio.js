import React, { useState } from "react";
import PropTypes from "prop-types";

export const RADIO = {
  SIZE: {
    DEFAULT: "Default",
    SMALL: "Small",
  },
};

export const Radio = ({ size, disabled, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleChange = (e) => {
    setValue(e.target.id);
  };

  const divSize = size === RADIO.SIZE.DEFAULT ? "w-6 h-6" : "w-4 h-4";
  const spanSize = size === RADIO.SIZE.DEFAULT ? "w-2.5 h-2.5" : "w-1.5 h-1.5";
  return (
    <>
      {isChecked && (
        <div
          className={`relative rounded-lg bg-primary flex justify-center items-center hover:bg-primary-shd8 focus:ring-2 focus:ring-offset-primary-shd6 focus:outline-none ${divSize} ${
            disabled && "bg-primary-shd7"
          }`}
          onClick={handleCheck}
        >
          <span className={`bg-white rounded-lg ${spanSize}`}></span>
          <input
            onChange={handleChange}
            disabled={disabled}
            value={value}
            id={id}
            name="tab"
            type="radio"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
      {!isChecked && (
        <div
          className={`relative border border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:ring-2 focus:border-offset-grey-shd2 focus:outline-none ${divSize} ${
            disabled && "border-2 border-grey-shd6"
          }`}
          onClick={handleCheck}
        >
          <input
            onChange={handleChange}
            disabled={disabled}
            value={value}
            id={id}
            name="tab"
            type="radio"
            className="opacity-0 absolute cursor-pointer w-full h-full"
          />
        </div>
      )}
    </>
  );
};

Radio.propTypes = {
  size: PropTypes.oneOf(["Default", "Small"]),
  disabled: PropTypes.bool,
  value: PropTypes.string,
};
