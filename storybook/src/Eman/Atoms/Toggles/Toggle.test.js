import React from "react";
import renderer from "react-test-renderer";
import { Toggle } from "./Toggle";

describe("Testing Toggle", () => {
  it("Testing Toggle size Default", () => {
    const tree = renderer.create(<Toggle size="Default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Toggle size Small", () => {
    const tree = renderer.create(<Toggle size="Small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Toggle with no props", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
