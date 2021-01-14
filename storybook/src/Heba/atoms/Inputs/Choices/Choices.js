import React, { useState } from "react";
import PropTypes from "prop-types";

export const INPUT = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
};

export const Choices = ({ label, type, placeholder }) => {
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
          A
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="focus:outline-none focus:placeholder-dark focus:text-dark disabled:opacity-50"
          disabled={type === INPUT.STATUS.DISABLED && "disabled"}
        />
        {type === INPUT.STATUS.ERROR && !value ? (
          <svg
            className="absolute right-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96883 1.33337C4.31016 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6622 1.33337 7.96883 1.33337ZM8.00016 13.3334C5.0595 13.3334 2.66683 10.9407 2.66683 8.00004C2.66683 5.05937 5.04483 2.66671 7.96883 2.66671C10.9275 2.66671 13.3335 5.05937 13.3335 8.00004C13.3335 10.9407 10.9408 13.3334 8.00016 13.3334Z"
              fill="#FE544A"
            />
            <path
              d="M7.3335 4.66663H8.66683V9.33329H7.3335V4.66663ZM7.3335 9.99996H8.66683V11.3333H7.3335V9.99996Z"
              fill="#FE544A"
            />
          </svg>
        ) : type === INPUT.STATUS.SUCCESS && !value ? (
          <svg
            className="absolute right-3"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66681 6.39061L1.47148 4.19527L0.528809 5.13794L3.66681 8.27594L10.1381 1.8046L9.19547 0.861938L3.66681 6.39061Z"
              fill="#07B255"
            />
          </svg>
        ) : (
          ""
        )}
        {focus && value && (
          <svg
            className="absolute right-3 cursor-pointer"
            onClick={handleIconClick}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z"
              fill="#8D9A9E"
            />
          </svg>
        )}
      </div>
    </>
  );
};

Choices.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  placeholder: PropTypes.string,
};
