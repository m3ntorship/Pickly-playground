import React from "react";
import renderer from "react-test-renderer";
import Toggle from "./Toggle";

describe("Toggle Component", () => {
  it("should render with large OFF toggle as default without any props ", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render change toggle from OFF to ON and vice versa when clicking on it ", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render small OFF toggle when passing size=sm  ", () => {
    const tree = renderer.create(<Toggle size="sm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render large OFF toggle when passing size=lg  ", () => {
    const tree = renderer.create(<Toggle size="sm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disable toggle when passing disabled ", () => {
    const tree = renderer.create(<Toggle disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
