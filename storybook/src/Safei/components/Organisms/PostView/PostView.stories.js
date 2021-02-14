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
    mainCaption: {
      control: {
        type: "text",
      },
    },
    secondaryCaption: {
      control: {
        type: "text",
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
  mainCaption: "Yes or No?",
  secondaryCaption: "Whatever Caption",
};
