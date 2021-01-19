import React from "react";
import Toggle from "./Toggle";

export default {
  title: "Atoms/Toggles/Toggler",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;
export const Check = Template.bind({});
Check.args = {
  disabled: false,
  on: false,
  size: "lg",
};
