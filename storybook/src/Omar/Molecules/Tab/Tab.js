import { React, useState } from "react";
import PropTypes from "prop-types";
export const SIZE = {
  BUTTONSIZE: {
    DEFAULT: "default",
    SMALL: "small",
  },
  RADIOSIZE: {
    DEFAULT: "default",
    SMALL: "small",
  },
};

export const ICONS = {
  IMAGE: "image",
  TEXT: "text",
  DOCUMENT: "document",
};
export const Tab = (props) => {
  const { disabled, ButtonSize, LabelText, Icons } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <button
      className={`focus:outline-none mr-5 ${
        ButtonSize === SIZE.BUTTONSIZE.SMALL ? "w-28 h-2" : "w-32 h-4"
      }`}
    >
      <label
        htmlFor="radio-label1"
        className={`relative cursor-pointer flex flex-row justify-around items-center border border-grey rounded-full py-1.5 pr-3.5 pl-3 hover:bg-grey-shd6 ${
          disabled && "bg-grey-shd6 border-none opacity-60"
        }`}
      >
        <>
          {isChecked && (
            <label
              htmlFor="radio-label1"
              className={` relative rounded-lg bg-primary flex justify-center items-center hover:bg-primary-shd8 focus:ring-2 focus:ring-offset-primary-shd6 focus:outline-none ${
                ButtonSize === SIZE.BUTTONSIZE.SMALL ? "w-4 h-4" : "w-5 h-5"
              } ${disabled && "bg-primary-shd7"}`}
              onClick={handleCheck}
            >
              <input
                type="radio"
                className={`opacity-0 absolute cursor-pointer w-full h-full ${
                  disabled && "cursor-not-allowed"
                }`}
                id="radio-label1"
                name="radio"
                checked={disabled}
              />
              <div
                className={`${
                  ButtonSize === SIZE.BUTTONSIZE.SMALL
                    ? "w-1.5 h-1.5"
                    : "w-2 h-2"
                } rounded-lg bg-white`}
              ></div>
            </label>
          )}
          {!isChecked && (
            <label
              htmlFor="radio-label1"
              className={` relative border border-grey-shd4 rounded-lg flex justify-center items-center hover:border-grey-shd1 focus:ring-2 focus:border-offset-grey-shd2 focus:outline-none w-4 h-4 ${
                ButtonSize === SIZE.BUTTONSIZE.SMALL ? "w-4 h-4" : "w-5 h-5"
              } ${disabled && "border-2 border-grey-shd6"}`}
              onClick={handleCheck}
            >
              <input
                type="radio"
                className={`opacity-0 absolute cursor-pointer w-full h-full ${
                  disabled && "cursor-not-allowed"
                }`}
                id="radio-label1"
                name="radio"
                checked={disabled}
              />
            </label>
          )}
        </>
        <>
          {Icons === ICONS.IMAGE ? (
            <svg
              className="mt-0.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99927 7.3335C5.55155 7.3335 5.99927 6.88578 5.99927 6.3335C5.99927 5.78121 5.55155 5.3335 4.99927 5.3335C4.44698 5.3335 3.99927 5.78121 3.99927 6.3335C3.99927 6.88578 4.44698 7.3335 4.99927 7.3335Z"
                fill="#5B6366"
              />
              <path
                d="M6.99927 9.33317L5.99927 7.99984L3.99927 10.6665H5.99927H7.99927H11.9993L8.99927 6.6665L6.99927 9.33317Z"
                fill="#5B6366"
              />
              <path
                d="M13.3328 2.6665H2.6661C1.93076 2.6665 1.33276 3.2645 1.33276 3.99984V11.9998C1.33276 12.7352 1.93076 13.3332 2.6661 13.3332H13.3328C14.0681 13.3332 14.6661 12.7352 14.6661 11.9998V3.99984C14.6661 3.2645 14.0681 2.6665 13.3328 2.6665ZM2.6661 11.9998V3.99984H13.3328L13.3341 11.9998H2.6661Z"
                fill="#5B6366"
              />
            </svg>
          ) : Icons === ICONS.TEXT ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.6665 7.33333H9.33317V8.66666H4.6665V7.33333ZM4.6665 4.66666H11.9798V6H4.6665V4.66666ZM4.6665 10H13.3332V11.3333H4.6665V10ZM2.6665 2.66666H3.99984V13.3333H2.6665V2.66666Z"
                fill="#5B6366"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2685 5.724C13.2358 5.65334 13.1952 5.586 13.1378 5.52867L9.13784 1.52867C9.0805 1.47134 9.01317 1.43067 8.9425 1.398C8.9225 1.38867 8.90117 1.38334 8.87984 1.376C8.82384 1.35734 8.7665 1.34534 8.70717 1.342C8.69317 1.34067 8.6805 1.33334 8.6665 1.33334H3.99984C3.2645 1.33334 2.6665 1.93134 2.6665 2.66667V13.3333C2.6665 14.0687 3.2645 14.6667 3.99984 14.6667H11.9998C12.7352 14.6667 13.3332 14.0687 13.3332 13.3333V6C13.3332 5.986 13.3258 5.97334 13.3245 5.95867C13.3212 5.89934 13.3098 5.842 13.2905 5.786C13.2838 5.76467 13.2778 5.744 13.2685 5.724ZM11.0572 5.33334H9.33317V3.60934L11.0572 5.33334ZM3.99984 13.3333V2.66667H7.99984V6C7.99984 6.36867 8.29784 6.66667 8.6665 6.66667H11.9998L12.0012 13.3333H3.99984Z"
                fill="#5B6366"
              />
              <path
                d="M5.3335 8H10.6668V9.33334H5.3335V8ZM5.3335 10.6667H10.6668V12H5.3335V10.6667ZM5.3335 5.33334H6.66683V6.66667H5.3335V5.33334Z"
                fill="#5B6366"
              />
            </svg>
          )}
        </>
        <span
          className={`text-dark-grey ${
            ButtonSize === SIZE.BUTTONSIZE.SMALL ? "text-sm" : "text-base"
          }`}
        >
          {LabelText}
        </span>
      </label>
    </button>
  );
};

Tab.propTypes = {
  disabled: PropTypes.bool,
  LabelText: PropTypes.string,
  ButtonSize: PropTypes.oneOf(["default", "small"]),
  Icons: PropTypes.oneOf(["image", "text", "document"]),
};
