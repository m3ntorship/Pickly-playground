import React from "react";
import { Button, BUTTON_OPTIONS } from "./BtnTextOnly";

export default {
  title: "Heba/atoms/Buttons/BtnTextOnly",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [
          BUTTON_OPTIONS.SIZE.SMALL,
          BUTTON_OPTIONS.SIZE.MEDIUM,
          BUTTON_OPTIONS.SIZE.BIG,
        ],
      },
    },
  },
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Button Text",
  iconDir: true,
  size: BUTTON_OPTIONS.SIZE.BIG,
};
