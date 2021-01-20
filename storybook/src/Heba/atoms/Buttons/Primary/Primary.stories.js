import React from "react";
import { Button, BUTTON_OPTIONS } from "./Primary";

export default {
  title: "Heba/atoms/Buttons/PrimaryBtn",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [
          BUTTON_OPTIONS.SIZE.SMALL,
          BUTTON_OPTIONS.SIZE.MEDIUM,
          BUTTON_OPTIONS.SIZE.BIG,
        ],
      },
    },
    type: {
      control: {
        type: "radio",
        options: [BUTTON_OPTIONS.TYPE.PRIMARY, BUTTON_OPTIONS.TYPE.SECONDARY],
      },
    },
    disabled: {
      control: {
        type: "radio",
        options: [BUTTON_OPTIONS.DISABLED.OFF, BUTTON_OPTIONS.DISABLED.ON],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Button Text",
  size: BUTTON_OPTIONS.SIZE.BIG,
  type: BUTTON_OPTIONS.TYPE.PRIMARY,
  disabled: BUTTON_OPTIONS.DISABLED.OFF,
};
