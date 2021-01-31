import React from "react";
import { Toggler, TOGGLE } from "./Toggle";
export default {
  title: "Omar/Atoms/Toggle",
  component: Toggler,
  size: {
    control: {
      type: "select",
      options: [TOGGLE.SIZE.DEFAULT, TOGGLE.SIZE.SMALL],
    },
  },
};

const Template = (args) => <Toggler {...args} />;
export const toggle = Template.bind({});
toggle.args = {
  disabled: false,
  size: TOGGLE.SIZE.DEFAULT,
};
