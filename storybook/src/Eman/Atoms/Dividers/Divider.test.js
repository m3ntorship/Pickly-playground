import React from "react";
import renderer from "react-test-renderer";
import { Divider } from "./Divider";

describe("Testing Divider", () => {
  it("Testing Checkbox type Horizontal", () => {
    const tree = renderer.create(<Divider type="Horizontal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Divider type Vertical", () => {
    const tree = renderer.create(<Divider type="Vertical" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Divider with no props", () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
