import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./../../../assets/icons/Inputs/Error";
import Success from "./../../../assets/icons/Inputs/Success";
import Close from "./../../../assets/icons/Inputs/Close";

export const INPUT = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
};

export const Choices = ({ label, type, placeholder, letterIndex }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleIconClick = () => {
    setValue("");
    setFocus(false);
  };

  const nextChar = (index) => {
    const charsArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const i = -1;
    return String.fromCharCode(
      charsArr[index].toUpperCase().charCodeAt() + 1 + i
    );
  };

  const style =
    type === INPUT.STATUS.DEFAULT
      ? "border border-grey-shd5"
      : type === INPUT.STATUS.ERROR
      ? "border border-error"
      : type === INPUT.STATUS.SUCCESS
      ? "border border-success"
      : "border border-grey-shd7";

  return (
    <>
      <label className="block my-2 text-xs  text-dark-grey">{label}</label>
      <div
        className={`
          flex items-center  w-72 px-m py-xs relative  rounded-md  text-sm text-grey-shd1 hover:border-grey-shd2 focus:border-dark
          ${style}`}
      >
        <div className="flex justify-center items-center bg-grey-shd7 rounded-sm px-2 py-1 mr-3 text-grey text-sm">
          {nextChar(letterIndex)}
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full focus:outline-none focus:placeholder-dark focus:text-dark disabled:opacity-50"
          disabled={type === INPUT.STATUS.DISABLED && "disabled"}
        />
        {type === INPUT.STATUS.ERROR && !value ? (
          <Error className="absolute right-3" />
        ) : type === INPUT.STATUS.SUCCESS && !value ? (
          <Success className="absolute right-3" />
        ) : (
          ""
        )}
        {focus && value && (
          <Close
            className="absolute right-3 cursor-pointer"
            onClick={handleIconClick}
          />
        )}
      </div>
    </>
  );
};

Choices.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  placeholder: PropTypes.string,
  letterIndex: PropTypes.number,
};
