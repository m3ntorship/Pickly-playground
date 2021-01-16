import React from "react";
import GeneralTextInput from "./GeneralTextInput";

export default {
  title: "Atoms/TextInputs/GeneralTextInput",
  component: GeneralTextInput,
};

const Template = (args) => <GeneralTextInput {...args} />;
export const GeneralInput = Template.bind({});
GeneralTextInput.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
