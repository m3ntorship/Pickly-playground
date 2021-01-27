import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Buttons/SmallButton",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["lg", "md", "sm"],
      },
    },
    type: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "text"],
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    hasIcon: {
      control: {
        type: "boolean",
      },
    },
    iconDirection: {
      control: {
        type: "inline-radio",
        options: ["left", "right"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const _Button = Template.bind({});
_Button.args = {
  disabled: false,
  size: "lg",
  text: "Me Button?",
  type: "primary",
  hasIcon: false,
  iconDirection: "left",
};
