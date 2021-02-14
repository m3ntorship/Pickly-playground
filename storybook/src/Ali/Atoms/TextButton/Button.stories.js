import React from "react";
import Button from "./Button";

export default {
  title: "Tramsi/Atoms/Buttons/Button",
  component: Button,
  argTypes: {
    textButtonsize: { control: { type: "inline-radio" } },
    textButtonvariant: { control: { type: "inline-radio" } },
  },
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  textButtonsize: "Large",
  textButtonvariant: "Primary",
  textButtonDisabled: false,
  textButtonchildren: "Button Text",
};
