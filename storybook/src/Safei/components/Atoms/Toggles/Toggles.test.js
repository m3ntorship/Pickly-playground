import React from "react";
import renderer from "react-test-renderer";
import Toggle from "./Toggle";
import Checkbox from "./CheckBox";

describe("Test my small components", () => {
  //(1)
  it("renders a Toggle Button ", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render a Checkbox", () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
