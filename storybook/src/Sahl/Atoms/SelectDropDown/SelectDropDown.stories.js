import React from "react";

import SelectDropDown from "./SelectDropDown";

const defaultExport = {
  title: "Sahl/Atoms/SelectDropDown",
  component: SelectDropDown,
  // argTypes: {
  //   options: {
  //     control: {
  //       type: "select",
  //       options: ["Item One", "Item Two", "Item Three"],
  //     },
  //   },
  // },
};

export default defaultExport;

const Template = (args) => <SelectDropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["public", "friends", "custom"],
  label: "label",
  className: "",
};
