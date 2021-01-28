import React from "react";
import Privacy from "./Privacy";

export default {
  title: "Tramsi/Molecules/Privacy/Privacy",
  component: Privacy,
};

const Template = (args) => <Privacy {...args} />;

export const privacy = Template.bind({});
privacy.args = {
  identityText: "Hide my identity",
  firstPrivacyOptionAvailable: true,
  secondPrivacyOptionAvailable: true,
  thirdPrivacyOptionAvailable: true,
  fourthPrivacyOptionAvailable: true,
};
