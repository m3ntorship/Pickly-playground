import React from "react";
import PollOption from "../PollOption/PollOption";
import { useState } from "react";
import PropTypes from "prop-types";

const PollOptions = (props) => {
  const {
    showImgPoll,
    showTextPoll,
    showMiniSurvey,
    imgPollText,
    textPollText,
    miniSurveyText,
  } = props;
  const [pollChecked, setPollChecked] = useState("");

  return (
    <div className={`flex`}>
      {showImgPoll && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Img"}
          pollText={imgPollText}
        />
      )}
      {showTextPoll && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Text"}
          pollText={textPollText}
        />
      )}
      {showMiniSurvey && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Mini-Survey"}
          pollText={miniSurveyText}
        />
      )}
    </div>
  );
};

export default PollOptions;
PollOptions.propTypes = {
  showImgPoll: PropTypes.bool,
  imgPollText: PropTypes.string,
  showTextPoll: PropTypes.bool,
  textPollText: PropTypes.string,
  showMiniSurvey: PropTypes.bool,
  miniSurveyText: PropTypes.string,
};
