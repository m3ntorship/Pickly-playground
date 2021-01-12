import React from "react";
import { Button, BUTTON_OPTIONS } from "./Button";

export default {
  title: "Atoms/Buttons",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [
          BUTTON_OPTIONS.SIZE.SMALL,
          BUTTON_OPTIONS.SIZE.MEDIUM,
          BUTTON_OPTIONS.SIZE.LARGE,
        ],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Button Text",
  primary: true,
  size: BUTTON_OPTIONS.SIZE.MEDIUM,
};
export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false };
