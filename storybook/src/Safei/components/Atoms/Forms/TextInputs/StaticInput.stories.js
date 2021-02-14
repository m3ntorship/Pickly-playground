import React from "react";
import StaticInput from "./StaticInput";

export default {
  title: "Atoms/TextInputs/IconInput",
  component: StaticInput,
  argTypes: {
    status: {
      control: {
        type: "inline-radio",
        options: ["normal", "error", "success"],
      },
    },
    icon: {
      control: {
        type: "inline-radio",
        options: ["none", "home"],
      },
    },
  },
};

const Template = (args) => <StaticInput {...args} />;
export const IconInput = Template.bind({});
IconInput.args = {
  status: "error",
  prefix: "+20",
  icon: "home",
  disabled: false,
  // direction: 'flex-row'
};
