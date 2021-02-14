import React from "react";
import renderer from "react-test-renderer";
import { Radio } from "./Radio";

describe("Testing Radio", () => {
  it("Testing Radio size Default", () => {
    const tree = renderer.create(<Radio size="Default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Radio size Small", () => {
    const tree = renderer.create(<Radio size="Small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Radio with no props", () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
