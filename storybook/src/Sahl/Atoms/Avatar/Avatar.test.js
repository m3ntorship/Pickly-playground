import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
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

describe("Avatar Component DOM testing", () => {
  it("renders default svg as defualt wihtout passing any props", () => {
    render(<Avatar />);
    const element = screen.getByTestId("default-svg");
    expect(element).toBeInTheDocument();
  });

  it("renders anonymous svg when passing type='anonymous'", () => {
    render(<Avatar type="anonymous" />);
    const element = screen.getByTestId("anonymous-svg");
    expect(element).toBeInTheDocument();
  });

  it("renders personal image when passing type='personal' src='./avatar.jpg'", () => {
    render(<Avatar type="personal" src=".avatar.jpg" />);
    const element = screen.getByTestId("personal-img");
    expect(element).toBeInTheDocument();
  });
});
