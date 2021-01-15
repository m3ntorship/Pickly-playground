import React from "react";

import Button from "./Button";

const defaultExport = {
  title: "Sahl/Atoms/Button",
  component: Button,
};

export default defaultExport;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  variant: "primary",
  disabled: false,
  children: "Button Text",
};
