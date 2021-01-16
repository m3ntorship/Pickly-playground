import React from "react";
import Button from "./Button";

export default {
  title: "Tramsi/Atoms/Buttons/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  size: "Large",
  variant: "Primary",
  disabled: false,
  children: "Button Text",
};
