import React from "react";

import CheckBox from "./CheckBox";

const defaultExport = {
  title: "Sahl/Atoms/CheckBox",
  component: CheckBox,
};

export default defaultExport;

const Template = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  size: "default",
};
