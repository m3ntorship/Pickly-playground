import React from "react";
import { Upload } from "./Upload";

export default {
  title: "Omar/Atoms/Upload",
  component: Upload,
};

const Template = (args) => <Upload {...args} />;

export const upload = Template.bind({});
upload.args = {
  text: "Upload one or multiple  images",
};
