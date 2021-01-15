import React from "react";
import PropTypes from "prop-types";
import DownArrow from "../../assets/icons/DownArrow";

function Button(props) {
  const {
    disabled = false,
    size = "md",
    variant = "primary",
    leftArrow = false,
    rightArrow = false,
    className,
    children,
  } = props;

  return (
    <button
      disabled={disabled}
      className={`${className} rounded-full border disabled:opacity-30 flex items-center ${
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary-shd9 focus:border-primary-shd9 focus:border-solid focus:outline-none"
          : "bg-white text-primary border-primary border-solid hover:bg-grey-bg2 focus:border-2 focus:outline-none"
      } ${
        size === "lg"
          ? "py-3.5 px-8"
          : size === "sm"
          ? "py-1.5 px-4"
          : "py-2.5 px-6"
      }`}
    >
      {leftArrow && (
        <DownArrow
          path1Fill={variant === "primary" ? "#FFF" : "rgba(112, 72, 232)"}
        />
      )}
      <span>{children}</span>
      {rightArrow && (
        <DownArrow
          path1Fill={variant === "primary" ? "#FFF" : "rgba(112, 72, 232)"}
        />
      )}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  leftArrow: PropTypes.bool,
  rightArrow: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
