import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    textButtonDisabled,
    textButtonsize,
    textButtonvariant,
    textButtonchildren,
  } = props;

  return (
    <button
      disabled={textButtonDisabled}
      className={`capitalize rounded-full focus:outline-none disabled:opacity-25 ${
        textButtonvariant === "Primary"
          ? `bg-primary-shd1  text-white ${
              !textButtonDisabled && "hover:bg-primary"
            } focus:border-primary focus:border focus:ring-1 focus:ring-primary-shd1`
          : `border text-primary-shd1 border-primary-shd1 ${
              !textButtonDisabled && "hover:bg-grey-bg"
            } focus:ring-1 focus:ring-primary-shd1`
      } ${
        textButtonsize === "Large"
          ? "text-md font-bold px-xl py-3.5 "
          : textButtonsize === "Medium"
          ? "text-base font-medium px-l py-xs "
          : "text-sm font-medium px-m py-1.5 "
      }
      ${textButtonDisabled && "cursor-not-allowed"}`}
    >
      {textButtonchildren}
    </button>
  );
};

Button.propTypes = {
  textButtonsize: PropTypes.oneOf(["Small", "Medium", "Large"]),
  textButtonvariant: PropTypes.oneOf(["Primary", "Secondary"]),
  textButtonDisabled: PropTypes.bool,
  textButtonchildren: PropTypes.string,
};
export default Button;
