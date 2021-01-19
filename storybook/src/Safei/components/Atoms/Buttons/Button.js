import React from "react";
import "./Button.css";

// const Button = ({ size, type, isActive, hasIcon, iconLocation }) => {
//   //hasIcon = ['true', false] >>> Boolean
//   //iconLocation = ['left', 'right', 'center']

// export default Button;
const Button = ({ size, type, disabled, text }) => {
  let opacity, _size, _type;
  if (!text) {
    text = "Button";
  } //make sure btn not empty if no text passed.
  ////size = ['lg', 'md', 'sm]:
  if (size == "lg") _size = "px-xl py-3.5 text-md font-bold ";
  else if (size == "md") _size = "px-l py-xs text-base font-medium";
  else {
    _size = "px-m py-1.5 font-medium text-sm";
  }
  //type = ['primary', 'secondary', 'text']
  if (type == "secondary") {
    _type = "secondary bg-white text-primary border border-primary";
  } else if (type == "text") {
    _type = "text text-accent focus-within";
  } else {
    _type = "primary bg-primary text-white border-2 border-primary";
  }
  //dsiabled?
  if (disabled) {
    opacity = "opacity-25";
  }

  return (
    <button
      className={` ${_type} ${_size}   rounded-full hover-state focus:outline-none focus-state flex items-center justify-center content-center ${opacity}`}
      disabled={disabled}
    >
      <span className="inline-block font-medium	">{text}</span>
    </button>
  );
};

export default Button;
