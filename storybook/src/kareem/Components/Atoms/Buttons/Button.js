import React from "react";
import PropTypes from "prop-types";
import clsname from "classnames";

export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
  },
};

export function Button({ primary, children, size }) {
  return (
    <div>
      <button
        type="button"
        className={clsname(
          primary
            ? "bg-primary text-white font-sans rounded-full focus:ring-2 focus:ring-primary-shd9 focus:outline-none disabled:opacity-25 mr -4"
            : "text-primary bg-white font-sans border border-primary rounded-full  focus:ring-2 focus:ring-primary-shd9 focus:outline-none mr-4 disabled:opacity-25",
          {
            "py-3.5 px-8 font-bold text-md": size === BUTTON_OPTIONS.SIZE.LARGE,
          },
          {
            "py-2 px-6 text-base font-medium":
              size === BUTTON_OPTIONS.SIZE.MEDIUM,
          },
          {
            "py-1.5 px-4 font-medium text-sm":
              size === BUTTON_OPTIONS.SIZE.SMALL,
          }
        )}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  children: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  primary: true,
  size: "medium",
  children: this.props.children,
};

export default Button;
