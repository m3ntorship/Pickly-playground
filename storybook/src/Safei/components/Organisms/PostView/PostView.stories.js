import React from "react";
import PostView from "./PostView";

export default {
  title: "Organisms/PostView",
  component: PostView,
  argTypes: {
    single: {
      control: {
        type: "boolean",
      },
    },
    isVoted: {
      control: {
        type: "boolean",
      },
    },
  },
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <PostView {...args} />;
export const _PostView = Template.bind({});
_PostView.args = {
  single: true,
  isVoted: false,
};
