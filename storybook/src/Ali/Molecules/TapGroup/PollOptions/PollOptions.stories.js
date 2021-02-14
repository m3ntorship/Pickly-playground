import React from "react";
import PollOptions from "./PollOptions";

export default {
  title: "Tramsi/Molecules/PollOptions",
  component: PollOptions,
};

const Template = (args) => <PollOptions {...args} />;

export const pollOptions = Template.bind({});
pollOptions.args = {
  showImgPoll: true,
  showTextPoll: true,
  showMiniSurvey: true,
  pollOptionsGroupName: "PollOptions1",
  imgPollText: "Image Poll",
  textPollText: "Text Poll",
  miniSurveyText: "Mini Survey",
};
