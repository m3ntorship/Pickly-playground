import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./../../../assets/icons/Inputs/Error";
import Success from "./../../../assets/icons/Inputs/Success";
import Close from "./../../../assets/icons/Inputs/Close";
import Arrow from "../../../assets/icons/Inputs/Arrow";
import Home from "../../../assets/icons/Inputs/Home";

export const INPUT = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
  ICON: {
    LEFT: "left",
    RIGHT: "right",
  },
};

export const LabelwIcon = ({ label, type, icon, placeholder }) => {
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

  const padding = icon === INPUT.ICON.LEFT ? "px-xxl" : "px-m";
  const rightPostion = icon === INPUT.ICON.LEFT ? "right-3" : "right-10";

  return (
    <>
      <label className="block mb-2 text-xs text-dark-grey">{label}</label>
      <div
        className={`
          flex items-center  w-72 ${padding}  py-xs relative  rounded-md  text-sm text-grey-shd1 hover:border-grey-shd2 focus:border-2 focus:border-dark
          ${style}`}
      >
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full focus:outline-none focus:placeholder-dark focus:text-dark disabled:opacity-50 placeholder-grey-shd1"
          disabled={type === INPUT.STATUS.DISABLED && "disabled"}
        />
        {type === INPUT.STATUS.ERROR && !value ? (
          <Error className={`absolute ${rightPostion}`} />
        ) : type === INPUT.STATUS.SUCCESS && !value ? (
          <Success className={`absolute ${rightPostion}`} />
        ) : (
          ""
        )}
        {focus && value && (
          <Close
            className={`absolute ${rightPostion} cursor-pointer`}
            onClick={handleIconClick}
          />
        )}

        {icon === INPUT.ICON.RIGHT && (
          <Arrow className="absolute right-3 cursor-pointer" />
        )}
        {icon === INPUT.ICON.LEFT ? (
          !focus ? (
            <Home className="absolute left-3" color="#94ACB5" />
          ) : (
            <Home className="absolute left-3" color="#5B6366" />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

LabelwIcon.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  icon: PropTypes.oneOf(["left", "right"]),
  placeholder: PropTypes.string,
};
