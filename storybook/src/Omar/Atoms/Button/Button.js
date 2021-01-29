import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const {
    disabled = false,
    size = "sm",
    variant = "primary",
    content,
    onClick,
  } = props;

  return (
    <button
      data-testid="btn-case"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border disabled:opacity-30 flex items-center ${
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary-shd9 focus:outline-none focus:border-primary-shd9"
          : "bg-white text-primary border-primary border-solid hover:bg-grey-bg2 focus:border-2 focus:outline-none"
      } ${
        size === "lg"
          ? "text-md py-3.5 px-xl"
          : size === "sm"
          ? "text-sm py-1.5 px-m"
          : "text-base py-xs px-l"
      }`}
    >
      <span>{content}</span>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
  content: PropTypes.string,
};
