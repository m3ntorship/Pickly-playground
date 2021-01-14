import React from "react";
import renderer from "react-test-renderer";
import Radio from "./Radio";

describe("Radio Component", () => {
  it("should give a console error when running without any props", () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when passing only name prop", () => {
    const tree = renderer.create(<Radio name="polls" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with default size without passing size prop", () => {
    const tree = renderer.create(<Radio name="polls" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with large size when size='large'", () => {
    const tree = renderer.create(<Radio name="polls" size='large'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with disabled when passing disabled", () => {
    const tree = renderer.create(<Radio name="polls" disabled/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without label by default", () => {
    const tree = renderer.create(<Radio name="polls" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with label when passing label='testLabel'", () => {
    const tree = renderer.create(<Radio name="polls" label='testLabel'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
