import React from "react";
import Avatar from "./Avatar";

export default {
  title: "kareem/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: ["normal", "anonymous", "notfilled"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medieum", "small"],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;
export const Input = Template.bind({});
Input.args = {
  status: "normal",
  size: "large",
};
