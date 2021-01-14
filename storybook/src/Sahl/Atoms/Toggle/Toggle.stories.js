import React from "react";

import Toggle from "./Toggle";

const defaultExport = {
  title: "Sahl/Atoms/Toggle",
  component: Toggle,
  argTypes: {
    onChange: { control: "checked" },
  },
};

export default defaultExport;

const Template = (args) => <Toggle {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
  size: "lg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
