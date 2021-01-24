import React from "react";
import renderer from "react-test-renderer";
import Tab from "./Tab";

describe("Tab Component", () => {
  it("should render with label when passing label prop ", () => {
    const tree = renderer.create(<Tab label="label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with only label when passing type='default'", () => {
    const tree = renderer.create(<Tab label="label" type="default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with radio button when passing type='poll' ", () => {
    const tree = renderer.create(<Tab label="label" type="poll" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled when passing disabled prop ", () => {
    const tree = renderer.create(<Tab label="label" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with radio button & image icon when passing type='poll' & pollType='image'", () => {
    const tree = renderer
      .create(<Tab label="label" type="poll" pollType="image" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with radio button & text icon when passing type='poll' & pollType='text'", () => {
    const tree = renderer
      .create(<Tab label="label" type="poll" pollType="text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with radio button & file icon when passing type='poll' & pollType='survey'", () => {
    const tree = renderer
      .create(<Tab label="label" type="poll" pollType="survey" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
