import React from "react";

import Tab from "./Tab";

const defaultExport = {
  title: "Sahl/Molecules/Tab",
  component: Tab,
};

export default defaultExport;

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  label: "Label",
  disabled: false,
};
