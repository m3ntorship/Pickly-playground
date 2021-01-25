import React from "react";

import Slider from "./Slider";

const defaultExport = {
  title: "Sahl/Atoms/Slider",
  component: Slider,
  argTypes: {
    // Default without options
    // progress: { control: "range" },
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 2,
      },
    },
  },
};

export default defaultExport;

const Template = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 20,
};
