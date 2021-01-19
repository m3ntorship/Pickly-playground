import React from "react";
import renderer from "react-test-renderer";
import { Tab } from "./Tab";

describe("Testing Tab", () => {
  it("Testing Tab styles Active", () => {
    const tree = renderer.create(<Tab styles="Active" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab styles Inactive", () => {
    const tree = renderer.create(<Tab styles="Inactive" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab styles Disabled", () => {
    const tree = renderer.create(<Tab styles="Disabled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab icon Image", () => {
    const tree = renderer.create(<Tab icon="Image" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab icon Text", () => {
    const tree = renderer.create(<Tab icon="Text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab icon More", () => {
    const tree = renderer.create(<Tab icon="More" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab icon None", () => {
    const tree = renderer.create(<Tab icon="None" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Tab with no props", () => {
    const tree = renderer.create(<Tab />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
