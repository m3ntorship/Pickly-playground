import React from "react";
import ImageUpload from "./ImageUpload";

export default {
  title: "Tramsi/Molecules/ImageUpload/ImageUpload",
  component: ImageUpload,
};

const Template = (args) => <ImageUpload {...args} />;

export const imageUpload = Template.bind({});
imageUpload.args = {
  imageUploadText: "Upload one or multiple  images",
};
