import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Tramsi/Atoms/Inputs/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  textInputstatus: "Default",
  textInputDisabled: false,
  textInputPlaceHolder: "Enter text",
};
