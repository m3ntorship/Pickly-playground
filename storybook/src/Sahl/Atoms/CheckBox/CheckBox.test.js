import React from "react";
import renderer from "react-test-renderer";
import CheckBox from "./CheckBox";

describe("CheckBox component", () => {
  it("should render without passing any props", () => {
    const tree = renderer.create(<CheckBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be disabled when passing disabled", () => {
    const tree = renderer.create(<CheckBox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should be rendered with large size no size is passed", () => {
    const tree = renderer.create(<CheckBox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should be rendered with large size when size=small", () => {
    const tree = renderer.create(<CheckBox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
