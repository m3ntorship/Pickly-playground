import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

// fix: disabled doesn't work now
// fix: onClick on close svg doesn't work

export default function Input(props) {
  const {
    label = "",
    error = false,
    success = false,
    disabled = false,
    type = "text",
    leftIcon = "",
    name,
    placeholder = "",
    dropDownPrefix = false,
    dropDownOptions = [],
  } = props;

  let borderColor = "border-grey-shd5";
  let statusIcon = null;

  // State
  // input value in case of text/textarea
  const [value, setValue] = useState("");
  // input value in case of file
  const [file, setFile] = useState(null);
  // Handlers
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  if (error) {
    borderColor = "border-error";
    statusIcon = (
      <svg
        className="w-4 h-4 text-error"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    );
  }

  if (success) {
    borderColor = "border-success";
    statusIcon = (
      <svg
        className="w-4 h-4 text-success"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    );
  }

  // Markup
  let markup = null;
  switch (type) {
    case "text":
      markup = (
        <div className="w-full">
          <label htmlFor={name} className="block mb-2 text-2xs md:text-xs ">
            {label}
          </label>
          <div
            className={`bg-white flex items-center h-8 rounded-md px-3 py-4 border ${borderColor} hover:border-grey-shd3 group focus:border-dark-grey ${
              disabled && "opacity-40 cursor-not-allowed"
            }`}
          >
            {leftIcon === "home" ? (
              <svg
                className="w-6 h-4 border-r border-grey-shd5 pr-2 br mr-4 font-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            ) : leftIcon === "caption" ? (
              <svg
                className="w-6 h-4 border-r border-grey-shd5 pr-2 br mr-4 font-light"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                  fill="#F2F9FF"
                />
                <path
                  d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                  fill="#8D9A9E"
                />
              </svg>
            ) : null}
            {dropDownPrefix && (
              <SelectDropDown
                options={dropDownOptions}
                className="border-r border-grey-shd5 br mr-4"
              />
            )}
            <input
              id={name}
              disabled={disabled}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onInputChange}
              className={`outline-none block border-0 w-full mr-auto text-2xs md:text-xs ${
                disabled && "cursor-not-allowed"
              }`}
            />
            {/* Typing Icon... */}
            <svg
              className={`w-4 h-4 ${
                value.length > 0 ? "block" : "hidden"
              } mr-4 cursor-pointer`}
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                setValue("");
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM16.207 14.793L14.793 16.207L12 13.414L9.207 16.207L7.793 14.793L10.586 12L7.793 9.207L9.207 7.793L12 10.586L14.793 7.793L16.207 9.207L13.414 12L16.207 14.793Z"
                fill="#5B6366"
              />
            </svg>
            {statusIcon}
            {}
          </div>
        </div>
      );
      break;

    case "file":
      markup = (
        <button className="relative border-2 border-dashed border-accent bg-grey-shd7 rounded-md text-accent focus:outline-none flex justify-center items-center mx-2 sm:mx-0 w-full h-14">
          <input
            disabled={disabled}
            type={type}
            name={name}
            value={file}
            onChange={(e) => {
              setFile(e.target.value);
            }}
            className="cursor-pointer opacity-0 absolute w-full h-full border-2 border-success"
          />
          <svg
            className="mr-1 w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z"
              fill="currentColor"
            />
            <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="currentColor" />
            <path
              d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-link">Upload one or multiple images</span>
        </button>
      );
      break;

    default:
      break;
  }

  return <div className="bg-success h-28">{markup}</div>;
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["textarea", "file", "text"]),
  success: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  dropDownPrefix: PropTypes.bool,
  dropDownOptions: PropTypes.array,
};
