import React from "react";
import "./Button.css";

// const Button = ({ size, type, isActive, hasIcon, iconLocation }) => {
//   //hasIcon = ['true', false] >>> Boolean
//   //iconLocation = ['left', 'right', 'center']

// export default Button;
const Button = ({ size, type, disabled, text, hasIcon, iconDirection }) => {
  let opacity, _size, _type, iconOrder, marginSetting, iconColor;
  iconOrder = `flex-row`;
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
    opacity = "opacity-25 cursor-not-allowed";
  }

  if (!hasIcon) {
    return (
      <button
        onClick={() => {
          alert("clicked me?");
        }}
        className={` ${_type} ${_size}   rounded-full hover-state focus:outline-none focus-state flex items-center justify-center content-center ${opacity}`}
        disabled={disabled}
      >
        <span className="inline-block font-medium	">{text}</span>
      </button>
    );
  }
  if (hasIcon) {
    iconOrder = iconDirection == "left" ? "flex-row" : "flex-row-reverse";
    marginSetting = iconDirection == "left" ? "ml" : "mr";
    iconColor =
      type == "text" ? "#00A8E8" : type == "secondary" ? "#7048E8" : "white";
    return (
      <button
        className={` ${_type} ${_size}   rounded-full hover-state focus:outline-none focus-state flex ${iconOrder} items-center justify-center content-center ${opacity}`}
        disabled={disabled}
      >
        <span className="inline-block font-medium	">{text}</span>
        <span className="inline-block">
          <svg
            className={`h-3 w-3 mt-2.5 ${marginSetting}-3.5`}
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.293 0.29303L5.99997 4.58603L1.70697 0.29303L0.292969 1.70703L5.99997 7.41403L11.707 1.70703L10.293 0.29303Z"
              fill={`${iconColor}`}
            />
          </svg>
        </span>
      </button>
    );
  }
};

export default Button;
