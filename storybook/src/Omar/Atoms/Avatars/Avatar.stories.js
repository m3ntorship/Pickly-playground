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
  },
};

const Template = (args) => <Avatar {...args} />;

export const Profile_Picture = Template.bind({});
Profile_Picture.args = {
  anonymous: true,
  size: AVATAR_OPTIONS.SIZE.BIG,
};
