import React from "react";
import { ImageUpload } from "./ImageUpload";

export default {
  title: "Heba/Molecules/ImageUpload",
  component: ImageUpload,
  argTypes: {},
};

const Template = (args) => <ImageUpload {...args} />;
export const upload = Template.bind({});
