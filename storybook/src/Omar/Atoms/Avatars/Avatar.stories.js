import React from "react";
import { Avatar, AVATAR_OPTIONS } from "./Avatar";

export default {
  title: "Omar/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [
          AVATAR_OPTIONS.SIZE.SMALL,
          AVATAR_OPTIONS.SIZE.MEDIUM,
          AVATAR_OPTIONS.SIZE.BIG,
        ],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["filled", "notFilled", "anon"],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Profile_Picture = Template.bind({});
Profile_Picture.args = {
  type: "filled",
  size: AVATAR_OPTIONS.SIZE.BIG,
};
