import React from "react";

import Input from "./Input";

const defaultExport = {
  title: "Sahl/Atoms/Input",
  component: Input,
};

export default defaultExport;

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  type: "text",
  error: false,
  success: false,
  leftIcon: "",
  disabled: false,
  placeholder: "This is input...",
  dropDownOptions: ["+20", "+984", "+44"],
};
