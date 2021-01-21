import React from "react";
import UploadImage from "./UploadImage";

export default {
  title: "kareem/Moleculses/UploadImage",
  component: UploadImage,
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
    fullRound: {
      control: {
        type: "boolean",
        options: [true, false],
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <UploadImage {...args} />;
export const Input = Template.bind({});
Input.args = {
  imageSrc: "normal",
  status: "normal",
  fullRound: false,
  width: "704px",
};
