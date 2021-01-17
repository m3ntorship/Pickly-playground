import React from "react";
import TogglerButton from "./Toggler";

export default {
  title: "Tramsi/Atoms/Buttons",
  component: TogglerButton,
};

const Template = (args) => <TogglerButton {...args} />;

export const togglerButton = Template.bind({});
togglerButton.args = {
  size: "Default",
  disabled: false,
};
