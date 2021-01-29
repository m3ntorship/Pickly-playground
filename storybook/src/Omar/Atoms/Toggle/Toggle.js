import { React, useState } from "react";
import PropTypes from "prop-types";
export const Toggler = ({ disabled }) => {
  const [isChecked, setisChecked] = useState(true);
  const handleCheck = () => {
    setisChecked(!isChecked);
  };
  return (
    <>
      {isChecked && (
        <div
          className={`relative w-10 h-6 bg-primary-shd7 hover:bg-primary-shd6 focus:outline-none focus:border focus:border-primary-shd5  rounded-full flex items-center flex-row-reverse ${
            disabled && "bg-primary-shd7 "
          }`}
        >
          <span
            className={` inline-block mr-1 rounded-lg bg-primary w-4 h-4 ${
              disabled && "bg-primary-shd4"
            }
            `}
          ></span>
          <input
            type="checkbox"
            className={`opacity-0 absolute cursor-pointer w-full h-full ${
              disabled && "cursor-not-allowed"
            }`}
            disabled={disabled}
            onClick={handleCheck}
          />
        </div>
      )}
      {!isChecked && (
        <div
          className={`relative w-10 h-6 bg-grey-shd4 hover:bg-grey-shd3 focus:outline-none focus:border focus:border-grey-shd4  rounded-full flex items-center flex-row-reverse ${
            disabled && "bg-grey-shd6"
          }`}
        >
          <span
            className={`inline-block mr-5 rounded-lg bg-white w-4 h-4 ${
              disabled && "bg-white"
            }
            `}
          ></span>
          <input
            type="checkbox"
            className="opacity-0 absolute cursor-pointer w-full h-full"
            disabled={disabled}
            onClick={handleCheck}
          />
        </div>
      )}
    </>
  );
};

Toggler.propTypes = {
  disabled: PropTypes.bool,
};
