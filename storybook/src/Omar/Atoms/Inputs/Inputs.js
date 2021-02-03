import { React, useState } from "react";
import PropTypes from "prop-types";
import Success from "./../../assets/Success";
import Error from "./../../assets/Error";
import Close from "./../../assets/Close";
import Home from "./../../assets/Home";
import Caption from "./../../assets/Caption";
import RightIcon from "./../../assets/RightIcon";
export const OPTION = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
};

export const Inputs = ({ type, label, placeHolder, icon, leftIcon }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleIconCloseClick = () => {
    setValue("");
  };
  const style =
    type === OPTION.STATUS.DEFAULT && !value
      ? "border border-grey-shd5 hover:border-grey-shd2"
      : type === OPTION.STATUS.SUCCESS && !value
      ? "border border-success"
      : type === OPTION.STATUS.ERROR && !value
      ? "border border-error"
      : type === OPTION.STATUS.DISABLED && !value
      ? "border border-grey-shd7"
      : "border border-dark-default";
  const stateIconStyling =
    icon === "rightIcon" ? "absolute left-60 top-3" : "absolute left-64 top-3";
  const leftIconStyling = icon === "leftIcon" ? "pl-10" : "pl-4";
  return (
    <>
      <label htmlFor="input" className="block my-2 text-xs  text-dark-grey">
        {label}
      </label>
      <div className="relative">
        {icon === "leftIcon" ? (
          leftIcon === "Home" ? (
            <Home className="absolute left-3.5 top-3" />
          ) : (
            <Caption className="absolute left-3.5 top-3" />
          )
        ) : icon === "rightIcon" ? (
          <RightIcon className="absolute left-64 ml-2.5 top-4" />
        ) : (
          ""
        )}
        <input
          id="input"
          className={`w-72 h-10 ${style} outline-none rounded-md text-sm py-2.5 ${leftIconStyling} pr-4 mb-10 placeholder-grey-shd1`}
          type="text"
          placeholder={placeHolder}
          data-testid="textChange"
          value={value}
          onChange={handleChange}
          disabled={type === OPTION.STATUS.DISABLED ? true : false}
        />
        {type === OPTION.STATUS.SUCCESS && !value ? (
          <Success className={stateIconStyling} />
        ) : type === OPTION.STATUS.ERROR && !value ? (
          <Error className={stateIconStyling} />
        ) : (
          ""
        )}
        {value && (
          <Close
            className={`${stateIconStyling} cursor-pointer	`}
            onClick={handleIconCloseClick}
          />
        )}
      </div>
    </>
  );
};

Inputs.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  placeHolder: PropTypes.string,
  icon: PropTypes.oneOf(["default", "rightIcon", "leftIcon"]),
  leftIcon: PropTypes.oneOf(["Home", "Caption"]),
};
