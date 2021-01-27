import React from "react";
import { Toggle, TOGGLE } from "./Toggle";

export default {
  title: "Eman/Atoms/Toggles",
  component: Toggle,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [TOGGLE.SIZE.DEFAULT, TOGGLE.SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
  disabled: false,
  size: TOGGLE.SIZE.DEFAULT,
};
