import React from "react";
import LabelInput from "./LabelInput";

export default {
  title: "Atoms/TextInputs/LabelInput",
  component: LabelInput,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["normal", "error", "success"],
      },
    },
  },
};

const Template = (args) => <LabelInput {...args} />;
export const Input = Template.bind({});
Input.args = {
  status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
