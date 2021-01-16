import React from "react";
import "@storybook/addon-actions";

import UploadButton from "./UploadButton";

export default {
  title: "Atoms/Buttons/UploadButton",
  component: UploadButton,
  // parameters: { actions: { argTypesRegex: "^on.*" } },
  // argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <UploadButton {...args} />;
export const Upload = Template.bind({});
Upload.args = {
  //   disabled: false,
  //   size: "lg",
};
