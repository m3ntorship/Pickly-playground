import React from "react";
import { ImagePoll } from "./ImagePoll";

export default {
  title: "Omar/Organisms/ImagePoll",
  component: ImagePoll,
  argTypes: {
    avatarSize: {
      control: {
        type: "select",
        options: ["lg", "md", "sm"],
      },
    },
    uploadedState: {
      control: {
        type: "select",
        options: ["default", "uploading", "notUpload"],
      },
    },
  },
};

const Template = (args) => <ImagePoll {...args} />;
export const imagepoll = Template.bind({});
imagepoll.args = {
  avatarType: true,
  avatarSize: "lg",
  tabDisabled: false,
  tabText1: "Image",
  tabText2: "Text",
  tabText3: "File",
  placeHolder: "What do you ask about?",
  buttonDisabled: false,
  buttonsSize: "md",
  uploaded: false,
  uploadedState: "default",
  uploadCaption: "Type caption (optional)",
};
