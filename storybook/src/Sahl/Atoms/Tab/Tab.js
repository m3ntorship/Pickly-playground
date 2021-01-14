import React from "react";
import PropTypes from "prop-types";
import Radio from "../Radio/Radio";

export default function Tab(props) {
  const {
    disabled = false,
    label,
    type,
    onClick,
    pollType,
    className,
    selected,
    value,
  } = props;

  // Style Classes
  let buttonClasses = [
    "h-19",
    "flex",
    "items-center",
    "rounded-full",
    "py-1.5",
    "px-7",
    "focus:outline-none",
    "hover:bg-grey-shd6",
  ];
  disabled ? buttonClasses.push("disabled:opacity-30") : buttonClasses.push("");

  // Handlers

  if (selected) {
    console.log(selected, "[Tab.js]");
    buttonClasses = [
      ...buttonClasses,
      "bg-white",
      "border",
      "border-solid",
      "border-grey-dark",
    ];
  } else {
    buttonClasses = [...buttonClasses, "bg-grey-bg"];
  }

  // Markup
  const pollElements = (
    <>
      <Radio
        value={value}
        name={`${type} tab`}
        checked={selected}
        onChange={onClick}
        className="mr-4"
      />
      {/* ////// Image /////// */}
      {pollType === "image" && (
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11Z"
            fill="#5B6366"
          />
          <path
            d="M10.499 14L8.99902 12L5.99902 16H8.99902H11.999H17.999L13.499 10L10.499 14Z"
            fill="#5B6366"
          />
          <path
            d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z"
            fill="#5B6366"
          />
        </svg>
      )}
      {pollType === "text" && (
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 11H14V13H7V11ZM7 7H17.97V9H7V7ZM7 15H20V17H7V15ZM4 4H6V20H4V4Z"
            fill="#5B6366"
          />
        </svg>
      )}
      {pollType === "survey" && (
        <svg
          className="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.903 8.586C19.854 8.48 19.793 8.379 19.707 8.293L13.707 2.293C13.621 2.207 13.52 2.146 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.236 2.036 13.15 2.018 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.982 8.849 19.965 8.763 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.553 12.447 10 13 10H18L18.002 20H6Z"
            fill="#5B6366"
          />
          <path
            d="M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z"
            fill="#5B6366"
          />
        </svg>
      )}
    </>
  );

  return (
    <button
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses.join(" ")} ${className}`}
    >
      {type === "poll" && pollElements}
      <span className="text-body-small text-dark-grey capitalize">{label}</span>
    </button>
  );
}

Tab.propTypes = {
  type: PropTypes.oneOf(["default", "poll"]),
  pollType: PropTypes.oneOf(["image", "text", "survey"]),
  onClick: PropTypes.func,
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.number,
  className: PropTypes.string,
};
