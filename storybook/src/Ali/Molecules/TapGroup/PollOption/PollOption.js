import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PollOption = (props) => {
  let { pollName, pollChecked, pollText, groupName, onChange } = props;
  const [isChecked, setIsChecked] = useState(false);
  let svg = "";

  useEffect(() => {
    setIsChecked(pollName === pollChecked);
  }, [pollChecked]);

  if (pollName === "Img") {
    svg = (
      <svg
        className={`mx-2`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99927 7.33331C5.55155 7.33331 5.99927 6.8856 5.99927 6.33331C5.99927 5.78103 5.55155 5.33331 4.99927 5.33331C4.44698 5.33331 3.99927 5.78103 3.99927 6.33331C3.99927 6.8856 4.44698 7.33331 4.99927 7.33331Z"
          fill="#5B6366"
        />
        <path
          d="M6.99927 9.33335L5.99927 8.00002L3.99927 10.6667H5.99927H7.99927H11.9993L8.99927 6.66669L6.99927 9.33335Z"
          fill="#5B6366"
        />
        <path
          d="M13.3328 2.66669H2.6661C1.93076 2.66669 1.33276 3.26469 1.33276 4.00002V12C1.33276 12.7354 1.93076 13.3334 2.6661 13.3334H13.3328C14.0681 13.3334 14.6661 12.7354 14.6661 12V4.00002C14.6661 3.26469 14.0681 2.66669 13.3328 2.66669ZM2.6661 12V4.00002H13.3328L13.3341 12H2.6661Z"
          fill="#5B6366"
        />
      </svg>
    );
    // !pollText && `Image Poll`;
  } else if (pollName === "Text") {
    svg = (
      <svg
        className={`mx-2`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66675 7.33335H9.33341V8.66669H4.66675V7.33335ZM4.66675 4.66669H11.9801V6.00002H4.66675V4.66669ZM4.66675 10H13.3334V11.3334H4.66675V10ZM2.66675 2.66669H4.00008V13.3334H2.66675V2.66669Z"
          fill="#5B6366"
        />
      </svg>
    );
    // pollText = `Text Poll`;
  } else {
    svg = (
      <svg
        className={`mx-2`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2687 5.72398C13.2361 5.65331 13.1954 5.58598 13.1381 5.52865L9.13808 1.52865C9.08075 1.47131 9.01341 1.43065 8.94275 1.39798C8.92275 1.38865 8.90141 1.38331 8.88008 1.37598C8.82408 1.35731 8.76675 1.34531 8.70741 1.34198C8.69341 1.34065 8.68075 1.33331 8.66675 1.33331H4.00008C3.26475 1.33331 2.66675 1.93131 2.66675 2.66665V13.3333C2.66675 14.0686 3.26475 14.6666 4.00008 14.6666H12.0001C12.7354 14.6666 13.3334 14.0686 13.3334 13.3333V5.99998C13.3334 5.98598 13.3261 5.97331 13.3247 5.95865C13.3214 5.89931 13.3101 5.84198 13.2907 5.78598C13.2841 5.76465 13.2781 5.74398 13.2687 5.72398ZM11.0574 5.33331H9.33341V3.60931L11.0574 5.33331ZM4.00008 13.3333V2.66665H8.00008V5.99998C8.00008 6.36865 8.29808 6.66665 8.66675 6.66665H12.0001L12.0014 13.3333H4.00008Z"
          fill="#5B6366"
        />
        <path
          d="M5.33325 7.99998H10.6666V9.33331H5.33325V7.99998ZM5.33325 10.6666H10.6666V12H5.33325V10.6666ZM5.33325 5.33331H6.66659V6.66665H5.33325V5.33331Z"
          fill="#5B6366"
        />
      </svg>
    );
    // pollText = `Mini Survey`;
  }
  return (
    <label
      htmlFor={pollName}
      className={`${
        isChecked ? "border border-grey" : "border border-grey-bg bg-grey-bg"
      } mx-2 py-1.5 pl-3 pr-3.5 rounded-full w-max flex items-center cursor-pointer`}
    >
      <input
        className={`hidden`}
        type="radio"
        id={pollName}
        name={groupName}
        value={pollName}
        onChange={onChange}
      />
      <div
        className={`w-4 h-4  ${
          isChecked ? " bg-primary " : " border border-grey-shd4 "
        } rounded-full flex justify-center items-center`}
      >
        <div className={`w-1.5 h-1.5 bg-white rounded-full`}></div>
      </div>
      <span className={`flex justify-center items-center`}>{svg}</span>
      <span className={`font-medium text-sm text-dark-grey`}>{pollText}</span>
    </label>
  );
};

export default PollOption;
PollOption.propTypes = {
  pollName: PropTypes.oneOf(["Img", "Text", "Mini-Survey"]),
  pollText: PropTypes.string,
};
