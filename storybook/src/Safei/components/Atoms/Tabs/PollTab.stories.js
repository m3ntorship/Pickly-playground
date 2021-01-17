import React from "react";
import PollTab from "./PollTab";

export default {
  title: "Atoms/PollTab",
  component: PollTab,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "inline-radio",
        options: ["img", "poll", "file"],
      },
    },
  },
};

const Template = (args) => <PollTab {...args} />;
export const PollTabDisplay = Template.bind({});
PollTabDisplay.args = {
  type: "img",
  text: "Img Poll",
};
