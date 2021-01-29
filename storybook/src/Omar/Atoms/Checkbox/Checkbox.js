import React, { useState } from "react";
import PropTypes from "prop-types";
const Checkbox = ({ disabled }) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      {isChecked && (
        <label className="relative" data-testid="label">
          <input
            className={`w-l h-l appearance-none outline-none border border-grey-shd4 rounded-sm text-white align-baseline cursor-pointer bg-primary ${
              disabled && "bg-primary-shd7"
            } ${!disabled && "hover:bg-primary-shd8"} `}
            type="checkbox"
            data-testid="input"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            disabled={disabled}
            checked={isChecked}
          />
          <svg
            style={{ left: "7px" }}
            className={`absolute bottom-3`}
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66632 6.39073L1.47099 4.19539L0.52832 5.13806L3.66632 8.27606L10.1377 1.80473L9.19499 0.862061L3.66632 6.39073Z"
              fill="white"
            />
          </svg>
        </label>
      )}
      {!isChecked && (
        <label className="relative" data-testid="label">
          <input
            className={`w-l h-l appearance-none outline-none border border-grey-shd4 rounded-sm text-white align-baseline cursor-pointer ${
              !disabled && "hover:border  hover:border-grey-shd1"
            }`}
            type="checkbox"
            data-testid="input"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            disabled={disabled}
            checked={isChecked}
          />
        </label>
      )}
    </>
  );
};
Checkbox.propTypes = {
  disabled: PropTypes.bool,
};

export default Checkbox;
