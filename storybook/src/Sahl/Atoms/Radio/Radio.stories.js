import React from "react";

import Radio from "./Radio";

const defaultExport = {
  title: "Sahl/Atoms/Radio",
  component: Radio,
};

export default defaultExport;

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
  disabled: false,
  label: "test",
};
