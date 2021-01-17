import React from "react";
import renderer from "react-test-renderer";
import { LabelwIcon } from "./LabelwIcon";

describe("Testing LabelwIcon", () => {
  it("Testing LabelwIcon type Default", () => {
    const tree = renderer.create(<LabelwIcon type="Default" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon type Success", () => {
    const tree = renderer.create(<LabelwIcon type="Success" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon type Error", () => {
    const tree = renderer.create(<LabelwIcon type="Error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon type Disabled", () => {
    const tree = renderer.create(<LabelwIcon type="Disabled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon icon left", () => {
    const tree = renderer.create(<LabelwIcon icon="left" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon icon right", () => {
    const tree = renderer.create(<LabelwIcon icon="right" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing LabelwIcon with no props", () => {
    const tree = renderer.create(<LabelwIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
