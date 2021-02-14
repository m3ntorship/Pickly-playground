import React from "react";
import Photo from "./Photo";

export default {
  title: "kareem/Atoms/Photo",
  component: Photo,
  argTypes: {
    imageSrc: {
      control: {
        type: "radio",
        options: ["normal", "other"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["normal", "loading", "notload"],
      },
    },
  },
};

const Template = (args) => <Photo {...args} />;
export const Input = Template.bind({});
Input.args = {
  imageSrc: "normal",
  status: "normal",
};
