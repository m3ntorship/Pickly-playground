import React from "react";
import ImageCaption from "./ImageCaption";

export default {
  title: "Mollecules/ImageCaption",
  component: ImageCaption,
  argTypes: {
    letter: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <ImageCaption {...args} />;
export const _ImageCaption = Template.bind({});
_ImageCaption.args = {
  letter: "a",
};
