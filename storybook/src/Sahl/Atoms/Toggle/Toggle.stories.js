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

export const Defualt = Template.bind({});
Defualt.args = {
  disabled: false,
  size: "lg",
};
