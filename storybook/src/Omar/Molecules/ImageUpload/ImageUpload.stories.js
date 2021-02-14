import React from "react";
import { ImageUpload, STATES } from "./ImageUpload";

export default {
  title: "Omar/Molecules/ImageUpload",
  component: ImageUpload,
  argTypes: {
    state: {
      type: {
        control: {
          type: "select",
          options: [STATES.DEFAULT, STATES.UPLOADING, STATES.NOTUPLOAD],
        },
      },
    },
  },
};

const Template = (args) => <ImageUpload {...args} />;
export const Default = Template.bind({});
Default.args = {
  state: STATES.DEFAULT,
  placeHolder: "Type caption (optional)",
};
