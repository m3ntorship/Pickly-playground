import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Tramsi/Atoms/Inputs/TextInput",
  component: TextInput,
  argTypes: {
    textInputstatus: { control: { type: "inline-radio" } },
  },
};

const Template = (args) => <TextInput {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  textInputstatus: "Default",
  textInputDisabled: false,
  textInputPlaceHolder: "Enter text",
};
