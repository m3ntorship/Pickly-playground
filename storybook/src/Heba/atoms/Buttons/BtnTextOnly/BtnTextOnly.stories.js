import React from "react";
import { Button, BUTTON_OPTIONS } from "./BtnTextOnly";

export default {
  title: "Heba/atoms/Buttons/BtnTextOnly",
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
    iconDir: {
      control: {
        type: "radio",
        options: [BUTTON_OPTIONS.ICON.LEFT, BUTTON_OPTIONS.ICON.RIGHT],
      },
    },
  },
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Button Text",
  iconDir: BUTTON_OPTIONS.ICON.LEFT,
  size: BUTTON_OPTIONS.SIZE.BIG,
};
