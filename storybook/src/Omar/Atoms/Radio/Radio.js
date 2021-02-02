import React, { useState } from "react";
import PropTypes from "prop-types";
export const RADIO = {
  SIZE: {
    DEFAULT: "default",
    SMALL: "small",
  },
};
export const Radio = (props) => {
  const { disabled, size, label1, label2 } = props;
  const [radio1, setRadio1] = useState(true);
  const [radio2, setRadio2] = useState(false);
  const handleChange1 = () => {
    setRadio1(true);
    setRadio2(false);
  };
  const handleChange2 = () => {
    setRadio2(true);
    setRadio1(false);
  };

  const radioStyle1 = radio1 ? "bg-primary hover:bg-primary-shd8" : "";
  const radioStyle2 = radio2 ? "bg-primary hover:bg-primary-shd8" : "";
  return (
    <>
      <label htmlFor="radio-label1" className={"cursor-pointer"}>
        {label1}
        <div
          className={` ${radioStyle1} relative rounded-lg  border border-grey-shd4 flex justify-center items-center focus:ring-2 focus:ring-offset-primary-shd6 focus:outline-none ${
            size === RADIO.SIZE.SMALL ? "w-4 h-4" : "w-6 h-6"
          } ${disabled && "border-2 border-grey-shd6 bg-white hover:bg-white"}`}
        >
          <input
            data-testid="radio1"
            type="radio"
            className={`opacity-0 absolute cursor-pointer ${
              disabled && "cursor-not-allowed"
            }`}
            onChange={handleChange1}
            id="radio-label1"
            name="radio"
            disabled={disabled}
            checked={radio1}
          />
          <div
            className={`${
              size === RADIO.SIZE.SMALL ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
            } rounded-lg bg-white`}
          ></div>
        </div>
      </label>
      <label htmlFor="radio-label2" className={"cursor-pointer"}>
        {label2}
        <div
          className={`${radioStyle2} relative border  border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:ring-2 focus:border-offset-grey-shd2 focus:outline-none ${
            size === RADIO.SIZE.SMALL ? "w-4 h-4" : "w-6 h-6"
          } ${disabled && "border-2 border-grey-shd6"}`}
        >
          <input
            data-testid="radio2"
            type="radio"
            className={`opacity-0 absolute  cursor-pointer w-full h-full ${
              disabled && "cursor-not-allowed"
            }`}
            onChange={handleChange2}
            id="radio-label2"
            name="radio"
            disabled={disabled}
            checked={radio2}
          />
          <div
            className={`${
              size === RADIO.SIZE.SMALL ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
            } rounded-lg bg-white`}
          ></div>
        </div>
      </label>
    </>
  );
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["default", "small"]),
  label1: PropTypes.string,
  label2: PropTypes.string,
};
