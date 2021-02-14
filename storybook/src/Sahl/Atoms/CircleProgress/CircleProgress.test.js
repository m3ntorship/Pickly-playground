import React from "react";
import renderer from "react-test-renderer";
import CircleProgress from "./CircleProgress";

describe("CircleProgress Component", () => {
  it("should give error when no props are passed", () => {
    const tree = renderer.create(<CircleProgress />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when only progress prop is passed", () => {
    const tree = renderer.create(<CircleProgress progress={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change background color when background is passed as color string", () => {
    const tree = renderer
      .create(<CircleProgress progress={50} backgroundColor="#819" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change circle color when circle color is passed as color string", () => {
    const tree = renderer
      .create(<CircleProgress progress={50} circleColor="#812" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change circle radius when passing size", () => {
    const tree = renderer
      .create(<CircleProgress progress={50} size={32} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
