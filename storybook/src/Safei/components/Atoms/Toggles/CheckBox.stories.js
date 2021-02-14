import React from "react";
import CheckBox from "./CheckBox";

export default {
  title: "Atoms/Toggles/CheckBox",
  component: CheckBox,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <CheckBox {...args} />;
export const Check = Template.bind({});
Check.args = {
  disabled: false,
  size: "lg",
};
