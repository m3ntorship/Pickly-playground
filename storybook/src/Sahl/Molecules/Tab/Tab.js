import React from "react";
import PropTypes from "prop-types";
import Radio from "../../Atoms/Radio/Radio";
import ImageIcon from "../../assets/icons/Image-outlined";
import FileIcon from "../../assets/icons/File-outlined";
import PollIcon from "../../assets/icons/Poll-outlined";

export default function Tab(props) {
  const {
    disabled = false,
    label,
    type = "default",
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
        <ImageIcon width="w-4" height="h-4" className="mr-2" />
      )}
      {pollType === "text" && (
        <PollIcon width="w-4" height="h-4" className="mr-2" />
      )}
      {pollType === "survey" && (
        <FileIcon width="w-4" height="h-4" className="mr-2" />
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
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
