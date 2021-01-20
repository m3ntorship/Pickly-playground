import React from "react";
import { ImageUpload, IMAGEUPLOAD } from "./ImageUpload";

export default {
  title: "Heba/Molecules/ImageUpload",
  component: ImageUpload,
  argTypes: {
    multiple: {
      control: {
        type: "radio",
        options: [IMAGEUPLOAD.MULTIPLE.OFF, IMAGEUPLOAD.MULTIPLE.ON],
      },
    },
  },
};

const Template = (args) => <ImageUpload {...args} />;
export const upload = Template.bind({});
upload.args = {
  multiple: IMAGEUPLOAD.MULTIPLE.OFF,
};
