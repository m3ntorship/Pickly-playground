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
    pollOptionsGroupName,
  } = props;
  const [pollChecked, setPollChecked] = useState("Img");
  const onChange = (e) => {
    setPollChecked(e.target.value);
  };
  return (
    <div className={`flex`}>
      {showImgPoll && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Img"}
          pollText={imgPollText}
          groupName={pollOptionsGroupName}
          onChange={onChange}
        />
      )}
      {showTextPoll && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Text"}
          pollText={textPollText}
          groupName={pollOptionsGroupName}
          onChange={onChange}
        />
      )}
      {showMiniSurvey && (
        <PollOption
          pollChecked={pollChecked}
          setPollChecked={setPollChecked}
          pollName={"Mini-Survey"}
          pollText={miniSurveyText}
          groupName={pollOptionsGroupName}
          onChange={onChange}
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
  pollOptionsGroupName: PropTypes.string,
};
