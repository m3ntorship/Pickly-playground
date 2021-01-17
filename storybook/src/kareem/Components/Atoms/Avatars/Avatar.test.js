import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";
import { render, screen } from "@testing-library/react";

describe("Render the avatar component", () => {
  it("Kareem: Render Large Avatar ", () => {
    const tree = renderer.create(<Avatar size={"large"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Kareem: Render Medium Avatar ", () => {
    const tree = renderer.create(<Avatar size={"medieum"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Kareem: Render Small Avatar  ", () => {
    const tree = renderer.create(<Avatar size={"small"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Image Status in normal case  ", () => {
    const tree = renderer.create(<Avatar status="normal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Image Status in Anonymus case  ", () => {
    const tree = renderer.create(<Avatar status="anonymous" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Image Status in notfilled case  ", () => {
    const tree = renderer.create(<Avatar status="notfilled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render  no props  Avatar, should display a Large  avatar with default photo ", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

//React Testing Lib
describe("Avatar Component", () => {
  it("Render Default Avatar: ReactTestingLib", () => {
    const { getByTitle } = render(<Avatar />);
    const element = getByTitle("dummyImg");
    expect(element).toBeTruthy();
  });

  it("Renders default Avatar as defualt wihtout props using getBytestID", () => {
    render(<Avatar />);
    const element = screen.getByTestId("testidImg");
    expect(element).toBeInTheDocument("hier");
  });
});
