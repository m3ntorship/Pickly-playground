import React from "react";

import { Button } from "./Button";

export default {
  title: "Omar/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "sm",
  variant: "primary",
  disabled: false,
  children: "Button Text",
  leftIcon: false,
  rightIcon: true,
};
