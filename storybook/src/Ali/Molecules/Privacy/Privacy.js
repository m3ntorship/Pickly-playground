import React from "react";
import TogglerButton from "../../Atoms/Toggler/Toggler";
import PropTypes from "prop-types";

const Privacy = (props) => {
  const {
    togglerDisabled,
    identityText,
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
            <select className="text-sm font-medium text-dark-grey focus:outline-none cursor-pointer">
              <option
                className={`font-medium ${
                  !firstPrivacyOptionAvailable && "hidden"
                } `}
                value={`Public`}
              >
                {`Public`}
              </option>
              <option
                className={`font-medium ${
                  !secondPrivacyOptionAvailable && "hidden"
                } `}
                value={`Friends`}
              >
                {`Friends`}
              </option>
              <option
                className={`font-medium ${
                  !thirdPrivacyOptionAvailable && "hidden"
                } `}
                value={`Family`}
              >
                {`Family`}
              </option>
              <option
                className={`font-medium ${
                  !fourthPrivacyOptionAvailable && "hidden"
                } `}
                value={`Private`}
              >
                {`Private`}
              </option>
            </select>
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
  firstPrivacyOptionAvailable: PropTypes.bool,
  secondPrivacyOptionAvailable: PropTypes.bool,
  thirdPrivacyOptionAvailable: PropTypes.bool,
  fourthPrivacyOptionAvailable: PropTypes.bool,
};
