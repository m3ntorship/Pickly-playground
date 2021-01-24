import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Toggle(props) {
  // Props
  const { disabled = false, size = "lg", onChange } = props;

  const [checked, setChecked] = useState(false);

  /////////////////////////////////////////
  // Style Classes
  ////////////////
  // container class
  let containerClasses = [
    "relative",
    "inline-block",
    "rounded-full",
    "focus:outline-none",
    "focus:border-2",
    "group",
  ];
  size === "lg"
    ? containerClasses.push("w-10 h-6 ")
    : containerClasses.push("w-7 h-4 ");

  if (disabled) containerClasses.push("opacity-30");

  checked
    ? containerClasses.push("focus:border-primary-shd1")
    : containerClasses.push("focus:border-grey");

  // Background Class
  let backgroundClasses = [
    "absolute",
    "cursor-pointer",
    "top-0",
    "left-0",
    "right-0",
    "bottom-0",
    "w-full",
    "h-full",
    "block",
    "transition",
    "duration-300",
    "rounded-full",
  ];
  checked
    ? (backgroundClasses = [
        ...backgroundClasses,
        "bg-primary-shd7",
        "group-hover:bg-primary-shd5",
        "group-focus:border",
        "group-focus:border-primary-shd3",
      ])
    : (backgroundClasses = [
        ...backgroundClasses,
        "bg-grey-shd4",
        "group-hover:bg-grey-shd3",
        "group-focus:border",
        "group-focus:border-solid",
        "group-focus:border-primary-shd1",
      ]);

  // Toggle Classes

  let toggleClasses = [
    "absolute",
    "left-1",
    "rounded-full",
    "transition",
    "duration-300",
  ];
  size === "lg"
    ? (toggleClasses = [...toggleClasses, "w-4 h-4", "bottom-1"])
    : (toggleClasses = [...toggleClasses, "w-3 h-3", "bottom-0.5"]);
  !checked
    ? toggleClasses.push("bg-white")
    : size === "lg"
    ? (toggleClasses = [
        ...toggleClasses,
        "bg-primary-shd8",
        "transform",
        "translate-x-4",
      ])
    : (toggleClasses = [
        ...toggleClasses,
        "bg-primary-shd8",
        "transform",
        "translate-x-2",
      ]);
  /////////////////////////////////////////
  // Handlers
  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <label className={containerClasses.join(" ")}>
      <input
        disabled={disabled}
        type="checkbox"
        className="hidden"
        onChange={onChange}
        onClick={onClick}
      />
      {/* Background */}
      <span className={backgroundClasses.join(" ")}>
        {/* Toggle */}
        <span className={toggleClasses.join(" ")}></span>
      </span>
    </label>
  );
}

Toggle.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  // onChange: PropTypes.func,
};
