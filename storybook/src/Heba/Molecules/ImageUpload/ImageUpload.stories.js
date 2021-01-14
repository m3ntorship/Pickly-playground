import React from "react";
import { ImageUpload } from "./ImageUpload";

export default {
  title: "Heba/Molecules/ImageUpload",
  component: ImageUpload,
};

const Template = (args) => <ImageUpload {...args} />;
export const upload = Template.bind({});
