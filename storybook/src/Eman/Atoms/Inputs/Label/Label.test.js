import React from "react";
import renderer from "react-test-renderer";
import { Label } from "./Label";

describe("Testing Label", () => {
  it("Testing Label type Default", () => {
    const tree = renderer.create(<Label type="Default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Label type Success", () => {
    const tree = renderer.create(<Label type="Success" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Label type Error", () => {
    const tree = renderer.create(<Label type="Error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Label type Disabled", () => {
    const tree = renderer.create(<Label type="Disabled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Label with no props", () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
