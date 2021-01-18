import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const TogglerButton = (props) => {
  const { togglerDisabled, togglerSize } = props;
  const [toggler, setToggler] = useState(false);
  const togglerClicked = () => {
    setToggler(!toggler);
  };
  return (
    <button
      disabled={togglerDisabled}
      className={`
      ${togglerDisabled && " cursor-not-allowed "}${
        togglerSize === "Default" ? " p-1 w-11 " : " p-0.5 w-7 "
      } disabled:opacity-25 rounded-full transition-colors duration-100 focus:ring-2 focus:outline-none ${
        !toggler
          ? ` bg-grey-shd4 focus:ring-grey-shd3 ${
              !togglerDisabled && " hover:bg-grey-shd3 "
            } `
          : ` bg-primary-shd7 focus:ring-primary-shd5 ${
              !togglerDisabled && " hover:bg-primary-shd6 "
            }  `
      } `}
      onClick={togglerClicked}
    >
      <div
        className={`${
          togglerSize === "Default"
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
  togglerSize: PropTypes.oneOf(["Default", "Small"]),
  togglerDisabled: PropTypes.bool,
};
export default TogglerButton;
