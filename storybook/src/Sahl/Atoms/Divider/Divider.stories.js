import React from "react";
import Divider from "./Divider";

const defaultExport = {
  title: "Sahl/Atoms/Divider",
  component: Divider,
};

export default defaultExport;

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "horizontal",
};
