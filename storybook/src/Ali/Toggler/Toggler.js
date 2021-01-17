import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const TogglerButton = (props) => {
  const { disabled, size } = props;
  const [toggler, setToggler] = useState(false);
  const togglerClicked = () => {
    setToggler(!toggler);
  };
  return (
    <button
      disabled={disabled}
      className={`
      ${disabled && " cursor-not-allowed "}${
        size === "Default" ? " p-1 w-11 " : " p-0.5 w-7 "
      } disabled:opacity-25 rounded-full transition-colors duration-100 focus:ring-2 focus:outline-none ${
        !toggler
          ? ` bg-grey-shd4 focus:ring-grey-shd3 ${
              !disabled && " hover:bg-grey-shd3 "
            } `
          : ` bg-primary-shd7 focus:ring-primary-shd5 ${
              !disabled && " hover:bg-primary-shd6 "
            }  `
      } `}
      onClick={togglerClicked}
    >
      <div
        className={`${
          size === "Default"
            ? ` ${toggler && " translate-x-5 "} w-4 h-4 `
            : ` ${toggler && "ml-0.5 translate-x-3 "} w-2.5 h-2.5 `
        } rounded-full transform  transition-all duration-100
        ${!toggler ? "bg-white" : "bg-primary r"}`}
      >
        {" "}
      </div>
    </button>
  );
};

TogglerButton.propTypes = {
  size: PropTypes.oneOf(["Default", "Small"]),
  disabled: PropTypes.bool,
};
export default TogglerButton;
