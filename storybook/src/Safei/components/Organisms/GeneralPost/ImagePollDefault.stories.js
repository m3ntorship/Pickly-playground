import React from "react";
import ImagePollDefault from "./ImagePollDefault";
//tabsCount, avatarType, postBtnDisabled
export default {
  title: "Organisms/ImagePollDefault",
  component: ImagePollDefault,
  argTypes: {
    postBtnDisabled: {
      control: {
        type: "boolean",
      },
    },
    avatarType: {
      control: {
        type: "radio",
        options: ["anon", "default", "user"],
      },
    },
    tabsCount: {
      control: {
        type: "text",
      },
    },
    avatarSize: {
      control: {
        type: "radio",
        options: ["lg", "md", "sm"],
      },
    },
  },
};

const Template = (args) => <ImagePollDefault {...args} />;
export const _ImagePollDefault = Template.bind({});
_ImagePollDefault.args = {
  tabsCount: 2,
  avatarType: "user",
  postBtnDisabled: false,
  avatarSize: "lg",
};
