import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Tramsi/Atoms/Avatar/Avatar",
  component: Avatar,
  argTypes: {
    Avatarsize: { control: { type: "inline-radio" } },
    Userstatus: { control: { type: "inline-radio" } },
  },
};

const Template = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  Avatarsize: "Medium",
  Userstatus: "Filled",
};
