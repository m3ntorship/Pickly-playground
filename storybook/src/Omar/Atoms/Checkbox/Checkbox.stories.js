import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Omar/Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const checkbox = Template.bind({});
checkbox.args = {
  disabled: false,
};
