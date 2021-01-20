import React from "react";
import TogglerButton from "../../Atoms/Toggler/Toggler";
import PropTypes from "prop-types";

const Privacy = (props) => {
  const {
    togglerDisabled,
    identityText,
    firstPrivacyOption,
    secondPrivacyOption,
    thirdPrivacyOption,
    fourthPrivacyOption,
    firstPrivacyOptionAvailable,
    secondPrivacyOptionAvailable,
    thirdPrivacyOptionAvailable,
    fourthPrivacyOptionAvailable,
  } = props;

  return (
    <div className={`flex items-center`}>
      <TogglerButton togglerDisabled={togglerDisabled} />
      <div className="flex items-center justify-items-center">
        <div className="flex items-center">
          <span className="pl-xs pr-m border-r text-xs font-normal text-dark-grey border-grey-shd6">
            {identityText}
          </span>
        </div>
        <div className="flex items-center pl-m">
          <span className="pr-xs text-xs font-normal text-dark-grey">
            Privacy:
          </span>
          <div className="flex relative">
            <select className="text-sm font-medium text-dark-grey pr-m focus:outline-none cursor-pointer appearance-none">
              <option
                className={`${!firstPrivacyOptionAvailable && "hidden"} `}
              >
                {firstPrivacyOption}
              </option>
              <option
                className={`${!secondPrivacyOptionAvailable && "hidden"} `}
              >
                {secondPrivacyOption}
              </option>
              <option
                className={`${!thirdPrivacyOptionAvailable && "hidden"} `}
              >
                {thirdPrivacyOption}
              </option>
              <option
                className={`${!fourthPrivacyOptionAvailable && "hidden"} `}
              >
                {fourthPrivacyOption}
              </option>
            </select>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              className="fill-current text-dark-grey absolute right-0 top-1/2 transform -translate-y-1/2	 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86198 0.195343L3.99998 3.05734L1.13798 0.195343L0.195312 1.13801L3.99998 4.94268L7.80465 1.13801L6.86198 0.195343Z"
                fill="#5B6366"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
Privacy.propTypes = {
  togglerDisabled: PropTypes.bool,
  identityText: PropTypes.string,
  firstPrivacyOption: PropTypes.string,
  firstPrivacyOptionAvailable: PropTypes.bool,
  secondPrivacyOption: PropTypes.string,
  secondPrivacyOptionAvailable: PropTypes.bool,
  thirdPrivacyOption: PropTypes.string,
  thirdPrivacyOptionAvailable: PropTypes.bool,
  fourthPrivacyOption: PropTypes.string,
  fourthPrivacyOptionAvailable: PropTypes.bool,
};
