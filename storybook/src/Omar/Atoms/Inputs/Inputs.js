import React from "react";
import PropTypes from "prop-types";
export const OPTION = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
    DISABLED: "Disabled",
  },
};

export const Inputs = (props) => {
  const { type, label, placeHolder, onChange } = props;
  const style =
    type === OPTION.STATUS.DEFAULT
      ? "border border-grey-shd5"
      : type === OPTION.STATUS.SUCCESS
      ? "border border-success"
      : type === OPTION.STATUS.ERROR
      ? "border border-error"
      : "border border-grey-shd7";
  return (
    <>
      <label className="block my-2 text-xs  text-dark-grey">{label}</label>
      <div className="relative" onChange={onChange}>
        <svg
          className="absolute left-3.5 top-3"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9998 8.66663H2.66647V9.99996V13.3333C2.66647 14.0686 3.26447 14.6666 3.9998 14.6666H5.9998H9.9998H11.9998C12.7351 14.6666 13.3331 14.0686 13.3331 13.3333V9.99996V8.66663H13.9998C14.2691 8.66663 14.5131 8.50396 14.6158 8.2553C14.7191 8.00596 14.6618 7.7193 14.4711 7.52863L8.47113 1.52863C8.21047 1.26796 7.78913 1.26796 7.52847 1.52863L1.52847 7.52863C1.3378 7.7193 1.28047 8.00596 1.3838 8.2553C1.48647 8.50396 1.73047 8.66663 1.9998 8.66663ZM6.66647 13.3333V9.99996H9.33313V13.3333H6.66647ZM7.9998 2.94263L11.9998 6.94263V9.99996L12.0005 13.3333H10.6665V9.99996C10.6665 9.26463 10.0685 8.66663 9.33313 8.66663H6.66647C5.93113 8.66663 5.33313 9.26463 5.33313 9.99996V13.3333H3.9998V9.99996V7.99996V6.94263L7.9998 2.94263Z"
            fill="#8D9A9E"
          />
        </svg>
        <input
          className={`w-72 h-10 ${style} outline-none rounded-md text-sm py-2.5 px-10 mb-10 placeholder-grey-shd1`}
          type="text"
          placeholder={placeHolder}
          data-testid="textChange"
          disabled={"disabled" && style === OPTION.STATUS.DISABLED}
        />
        {type === OPTION.STATUS.SUCCESS ? (
          <svg
            className="absolute left-64 top-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z"
              fill="#07B255"
            />
          </svg>
        ) : type === OPTION.STATUS.ERROR ? (
          <svg
            className="absolute left-64 top-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96883 1.33337C4.31016 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6622 1.33337 7.96883 1.33337ZM8.00016 13.3334C5.0595 13.3334 2.66683 10.9407 2.66683 8.00004C2.66683 5.05937 5.04483 2.66671 7.96883 2.66671C10.9275 2.66671 13.3335 5.05937 13.3335 8.00004C13.3335 10.9407 10.9408 13.3334 8.00016 13.3334Z"
              fill="#FE544A"
            />
            <path
              d="M7.3335 4.66663H8.66683V9.33329H7.3335V4.66663ZM7.3335 9.99996H8.66683V11.3333H7.3335V9.99996Z"
              fill="#FE544A"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Inputs.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Default", "Success", "Error", "Disabled"]),
  placeHolder: PropTypes.string,
};
