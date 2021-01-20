import React from "react";
import { Toggle, TOGGLE } from "./Toggle";

export default {
  title: "Heba/atoms/Toggle",
  component: Toggle,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [TOGGLE.STATUS.ON, TOGGLE.STATUS.OFF],
      },
    },
    size: {
      control: {
        type: "radio",
        options: [TOGGLE.SIZE.DEFAULT, TOGGLE.SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
  status: TOGGLE.STATUS.ON,
  size: TOGGLE.SIZE.DEFAULT,
};
