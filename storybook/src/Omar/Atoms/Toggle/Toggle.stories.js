import React from "react";
import { Toggler } from "./Toggle";
export default {
  title: "Omar/Atoms/Toggle",
  component: Toggler,
};

const Template = (args) => <Toggler {...args} />;
export const toggle = Template.bind({});
toggle.args = {
  disabled: false,
};
