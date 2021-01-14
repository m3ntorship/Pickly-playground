import React from "react";
import PropTypes from "prop-types";

export default function Radio(props) {
  const {
    value,
    name,
    disabled = false,
    label,
    size = "default",
    className,
    onChange,
    checked = "false",
  } = props;

  //////////////////////////////////
  // Classes
  ///////////
  // label Classes
  let labelClasses = [
    "flex",
    "items-center",
    "justify-end",
    "relative",
    "cursor-pointer",
    "rounded-full",
    "group",
  ];
  // Add the props classes
  if (className)
    labelClasses = [...labelClasses, className];

  // CustomRadio Classes
  let customRadioClasses = [
    "absolute",
    "inset-0",
    "m-auto",
    "border",
    "border-solid",
    "rounded-full",
  ];
  // Dot Classes
  const dotClasses = [
    "bg-white",
    "rounded-full",
    "w-1/2",
    "h-1/2",
    "absolute",
    "z-10",
    "inset-0",
    "m-auto",
  ];
  // Change colors if the raido checked
  if (checked) {
    customRadioClasses = [
      ...customRadioClasses,
      "border-primary",
      "bg-primary",
      "group-hover:bg-primary-shd8",
    ];
    dotClasses.push("block");
  } else {
    customRadioClasses = [
      ...customRadioClasses,
      "border-grey-shd4",
      "bg-white",
      "group-hover:border-grey",
    ];
    dotClasses.push("hidden");
  }

  // Change size
  if (size === "default") {
    customRadioClasses = [...customRadioClasses, "h-4", "w-4"];
    if (label) dotClasses.push("ml-12");
  } else {
    customRadioClasses = [...customRadioClasses, "h-6", "w-6"];
    if (label) dotClasses.push("ml-14");
  }

  // Change opacity if disabled
  if (disabled) labelClasses.push("opacity-40");

  return (
    <label className={`${labelClasses.join(" ")}`}>
      <input
        disabled={disabled}
        type="radio"
        onChange={onChange}
        checked={checked}
        className="opacity-0 relative z-10"
        name={name}
        value={value}
      />
      {/* CustomRadio */}
      <div className={`${customRadioClasses.join(" ")}`}>
        {/* Dot */}
        <div className={`${dotClasses.join(" ")}`}></div>
      </div>
      <span className={`block`}>{label}</span>
    </label>
  );
}

Radio.propTypes = {
  size: PropTypes.oneOf(["default", "large"]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};
