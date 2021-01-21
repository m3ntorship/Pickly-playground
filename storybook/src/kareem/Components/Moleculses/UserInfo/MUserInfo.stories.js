import React from "react";
import MUserInfo from "./MUserInfo";

export default {
  title: "kareem/Moleculses/UserInfo",
  component: MUserInfo,
  argTypes: {
    Name: {
      control: {
        type: "text",
      },
    },
    Hours: {
      control: {
        type: "text",
      },
    },
    status: {
      control: {
        type: "radio",
        options: ["normal", "anonymous", "notfilled"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medieum", "small"],
      },
    },
  },
};

const Template = (args) => <MUserInfo {...args} />;
export const Input = Template.bind({});
Input.args = {
  Name: "Ahmad Ayoub",
  Hours: "2",
  status: "normal",
  size: "medieum",
};
