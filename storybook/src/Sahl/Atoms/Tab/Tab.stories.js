import React from "react";

import Tab from "./Tab";

const defaultExport = {
  title: "Sahl/Atoms/Tab",
  component: Tab,
};

export default defaultExport;

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  label: 'Label',
  disabled: 'false',
};

/* export const PollImage = Template.bind({});
PollImage.args = {
  type: "poll",
  pollType: "image",
  label: 'Label'
};

export const PollText = Template.bind({});
PollText.args = {
  type: "poll",
  pollType: "text",
  label: 'Label'
};

export const PollSurvey = Template.bind({});
PollSurvey.args = {
  type: "poll",
  pollType: "survey",
  label: 'Label'
};
 */