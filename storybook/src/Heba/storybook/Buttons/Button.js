import React from "react";
import cn from "classnames";

export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};

export const Button = ({ primary, size }) => {
  return (
    <div className="flex justify-start items-center ">
      <button
        type="button"
        className={cn(
          "flex  items-center justify-center",
          primary
            ? "text-white bg-primary rounded-full focus:ring-2 focus:ring-primary-shd9 focus:outline-none disabled:opacity-25 mr -4"
            : " text-primary bg-white  border border-primary rounded-full  focus:ring-2 focus:ring-primary-shd9 focus:outline-none mr-4 disabled:opacity-25 fill-current",
          { "py-3 px-3 ": size === BUTTON_OPTIONS.SIZE.BIG },
          {
            "py-2 px-2": size === BUTTON_OPTIONS.SIZE.MEDIUM,
          },

          {
            "py-2 px-2": size === BUTTON_OPTIONS.SIZE.SMALL,
          }
        )}
        disabled
      >
        <svg
          className={cn(
            { "w-8 h-auto ": size === BUTTON_OPTIONS.SIZE.BIG },
            {
              "w-auto h-6": size === BUTTON_OPTIONS.SIZE.MEDIUM,
            },

            {
              "w-3 h-auto": size === BUTTON_OPTIONS.SIZE.SMALL,
            }
          )}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.724 12.3906L16 18.1146L10.276 12.3906L8.39062 14.276L16 21.8853L23.6093 14.276L21.724 12.3906Z"
            className={cn(
              primary ? "text-white fill-current" : "text-primary fill-current"
            )}
          />
        </svg>
      </button>
    </div>
  );
};
