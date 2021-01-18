import React from "react";
import cn from "classnames";
export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
  ICON: {
    LEFT: "left",
    RIGHT: "right",
  },
};
export const Button = ({ children, size, iconDir }) => {
  return (
    <div className="flex justify-start items-center ">
      <button
        type="button"
        className={cn(
          iconDir === BUTTON_OPTIONS.ICON.RIGHT
            ? "flex  items-center justify-center"
            : "flex  items-center justify-center flex-row-reverse",
          " text-primary hover:text-primary-shd2 focus:outline-none focus:underline mr-4",
          { "py-4 px-8 font-bold text-md": size === BUTTON_OPTIONS.SIZE.BIG },
          {
            "py-2 px-6 text-base font-medium":
              size === BUTTON_OPTIONS.SIZE.MEDIUM,
          },

          {
            "py-1 px-4 font-medium text-sm": size === BUTTON_OPTIONS.SIZE.SMALL,
          }
        )}
      >
        <span className="mx-3"> {children}</span>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-white"
          >
            <path
              d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
              className={cn(" text-primary fill-current")}
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
