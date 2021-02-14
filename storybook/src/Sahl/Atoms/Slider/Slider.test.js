import React from "react";
import renderer from "react-test-renderer";
import Slider from "./Slider";

describe("Slider Component", () => {
  it("should change its width when passing different values to progress prop ", () => {
    const tree = renderer.create(<Slider progress={24} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change its width when passing different values to progress prop ", () => {
    const tree = renderer.create(<Slider progress={85} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
