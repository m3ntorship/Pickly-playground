import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render with type=default, size=medium wihtout passing any props", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render anonymous pic when passing type=anonymous", () => {
    const tree = renderer.create(<Avatar type="anonymous" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render broken pic when passing type=personal without passing src", () => {
    const tree = renderer.create(<Avatar type="personal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render personal pic when passing type=personal and src", () => {
    const tree = renderer
      .create(<Avatar type="personal" src="/avatar.jpg" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render small size when passing size=small", () => {
    const tree = renderer.create(<Avatar size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render large size when passing size=large", () => {
    const tree = renderer.create(<Avatar size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
