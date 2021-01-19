import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const TextInput = (props) => {
  const {
    textInputPlaceHolder,
    textInputDisabled,
    textInputstatus,
    borderRadius,
  } = props;
  const [textInputValue, setTextInputValue] = useState("");
  const onChangeTextInputValue = (e) => {
    setTextInputValue(e.target.value);
  };
  const removeTextImputValue = () => {
    setTextInputValue("");
  };
  const svgDefault = (
    <svg
      className={`${
        (!textInputValue || textInputstatus !== "Default") && " hidden "
      } absolute  right-3 bottom-0.5 cursor-pointer`}
      onClick={removeTextImputValue}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 1.33337C4.32416 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6762 1.33337 8.00016 1.33337ZM10.8048 9.86204L9.86216 10.8047L8.00016 8.94271L6.13816 10.8047L5.1955 9.86204L7.0575 8.00004L5.1955 6.13804L6.13816 5.19537L8.00016 7.05737L9.86216 5.19537L10.8048 6.13804L8.94283 8.00004L10.8048 9.86204Z"
        fill="#8D9A9E"
      />
    </svg>
  );
  const svgError = (
    <svg
      className={`${
        textInputstatus !== "Error" && " hidden "
      } absolute  right-3 bottom-0.5`}
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
  );
  const svgSuccess = (
    <svg
      className={`${
        textInputstatus !== "Success" && " hidden "
      } absolute  right-3 bottom-0.5`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z"
        fill="#07B255"
      />
    </svg>
  );
  return (
    <label className="relative">
      <input
        disabled={textInputDisabled}
        type={`text`}
        value={textInputValue}
        placeholder={textInputPlaceHolder}
        onChange={onChangeTextInputValue}
        className={`bg-white w-full px-m py-2.5 text-dark-grey placeholder-grey-shd1 text-normal focus:outline-none text-sm border ${
          !borderRadius ? " rounded-md " : `${borderRadius}`
        } ${textInputDisabled && " border-grey-shd7  "}${
          !textInputDisabled &&
          textInputstatus === "Default" &&
          " border-grey-shd5 hover:border-grey-shd2 focus:border-dark focus:text-dark"
        }
        ${textInputDisabled && "cursor-not-allowed"}
        ${textInputstatus === "Error" && !textInputDisabled && " border-error "}
        ${
          textInputstatus === "Success" &&
          !textInputDisabled &&
          " border-success "
        }`}
      />
      {svgDefault}
      {svgError}
      {svgSuccess}
    </label>
  );
};

TextInput.propTypes = {
  textInputstatus: PropTypes.oneOf(["Default", "Error", "Success"]),
  textInputDisabled: PropTypes.bool,
  textInputPlaceHolder: PropTypes.string,
  borderRadius: PropTypes.string,
};
export default TextInput;
