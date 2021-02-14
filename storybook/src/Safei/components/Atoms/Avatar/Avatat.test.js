import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";

describe("renders the avatar comp", () => {
  it("renders  large Avatar ", () => {
    const tree = renderer.create(<Avatar size={"lg"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders  md Avatar ", () => {
    const tree = renderer.create(<Avatar size={"md"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders  small  Avatar with default photo on file ", () => {
    const tree = renderer.create(<Avatar size={"sm"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders  no props  Avatar, should display a small  avatar with default photo ", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
