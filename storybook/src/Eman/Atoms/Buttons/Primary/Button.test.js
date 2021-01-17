import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

describe("Testing Button", () => {
  it("Testing Button size big", () => {
    const tree = renderer.create(<Button size="big" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button size medium", () => {
    const tree = renderer.create(<Button size="medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button size small", () => {
    const tree = renderer.create(<Button size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type primary", () => {
    const tree = renderer.create(<Button type="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type secondary", () => {
    const tree = renderer.create(<Button type="secondary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type primary size big", () => {
    const tree = renderer.create(<Button type="primary" size="big" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type primary size medium", () => {
    const tree = renderer
      .create(<Button type="primary" size="medium" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type primary size small", () => {
    const tree = renderer
      .create(<Button type="primary" size="small" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type secondary size big", () => {
    const tree = renderer
      .create(<Button type="secondary" size="big" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type secondary size medium", () => {
    const tree = renderer
      .create(<Button type="secondary" size="medium" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button type secondary size small", () => {
    const tree = renderer
      .create(<Button type="secondary" size="small" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Button with no props", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
