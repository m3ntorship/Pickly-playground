import React from "react";
import renderer from "react-test-renderer";
import { ButtonIconOnly } from "./BtnIconOnly";

describe("Testing ButtonIconOnly", () => {
  it("Testing ButtonIconOnly size big", () => {
    const tree = renderer.create(<ButtonIconOnly size="big" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIconOnly size medium", () => {
    const tree = renderer.create(<ButtonIconOnly size="medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIconOnly size small", () => {
    const tree = renderer.create(<ButtonIconOnly size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIconOnly with no props", () => {
    const tree = renderer.create(<ButtonIconOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
