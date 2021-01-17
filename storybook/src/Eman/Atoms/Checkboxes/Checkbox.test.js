import React from "react";
import renderer from "react-test-renderer";
import { Checkbox } from "./Checkbox";

describe("Testing Checkbox", () => {
  it("Testing Checkbox size Default", () => {
    const tree = renderer.create(<Checkbox size="Default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Checkbox size Small", () => {
    const tree = renderer.create(<Checkbox size="Small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Checkbox with no props", () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
