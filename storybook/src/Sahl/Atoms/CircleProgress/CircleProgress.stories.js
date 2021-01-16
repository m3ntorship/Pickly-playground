import React from "react";

import CircleProgress from "./CircleProgress";

const defaultExport = {
  title: "Sahl/Atoms/CircleProgress",
  component: CircleProgress,
  argTypes: {
    // Default without options
    // progress: { control: "range" },
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 5,
      },
    },
    circleColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

export default defaultExport;

const Template = (args) => <CircleProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 40,
  strokeWidth: 7,
  size: 72,
};
