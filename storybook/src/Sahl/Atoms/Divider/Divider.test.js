import React from "react";
import renderer from "react-test-renderer";
import Divider from "./Divider";

describe("Divider Component", () => {
  it("should render a horizontal divider by default", () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a vertival divider when passing direction=vertical", () => {
    const tree = renderer.create(<Divider direction="vertical" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
