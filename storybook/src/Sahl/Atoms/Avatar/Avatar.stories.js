import React from "react";

import Avatar from "./Avatar";

const defaultExport = {
  title: "Sahl/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default defaultExport;

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  type: "default",
};

export const Anonymous = Template.bind({});
Anonymous.args = {
  size: "medium",
  type: "anonymous",
};

export const Personal = Template.bind({});
Personal.args = {
  size: "large",
  type: "personal",
  src: "/avatar.jpg",
};
