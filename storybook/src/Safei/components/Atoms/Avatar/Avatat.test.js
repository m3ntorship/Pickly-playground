import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
//testing library:
describe("Avatar comp DOM test", () => {
  it("display anon pic as avatar img and updated alt text to include proper description", () => {
    render(<Avatar type={"anon"} />);
    const avtElement = screen.getByAltText("anon avatar img");
    expect(avtElement).toBeInTheDocument();

  it("display user pic as avatar img and updated alt text to include proper description", () => {
    render(<Avatar type={"user"} />);
    const avtElement = screen.getByAltText("user avatar img");
    expect(avtElement).toBeInTheDocument();


  });
});

//Snapshot testing:
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
