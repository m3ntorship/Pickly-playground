import React from "react";
import UserInfo from "./UserInfo";

export default {
  title: "kareem/Atoms/UserInfo",
  component: UserInfo,
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
  },
};

const Template = (args) => <UserInfo {...args} />;
export const Input = Template.bind({});
Input.args = {
  Name: "Ahmad Ayoub",
  Hours: "2",
};
