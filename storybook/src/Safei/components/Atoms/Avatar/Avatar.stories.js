import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["anon", "default", "user"],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;
export const MainAvatar = Template.bind({});
MainAvatar.args = {
  size: "lg",
  type: "user",
};
