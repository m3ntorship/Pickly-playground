import React from "react";
import TogglerButton from "./Toggler";

export default {
  title: "Tramsi/Atoms/Buttons",
  component: TogglerButton,
  argTypes: {
    togglerSize: { control: { type: "inline-radio" } },
  },
};

const Template = (args) => <TogglerButton {...args} />;

export const togglerButton = Template.bind({});
togglerButton.args = {
  togglerSize: "Default",
  togglerDisabled: false,
};
