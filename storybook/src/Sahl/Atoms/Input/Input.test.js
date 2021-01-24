import React from "react";
import renderer from "react-test-renderer";
import Input from "./Input";

describe("Input Component", () => {
  it("should render a default input wihtout any props ", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled when disabled is passed ", () => {
    const tree = renderer.create(<Input disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with close icon to right when typing only ", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with check icon to right when passing sccess", () => {
    const tree = renderer.create(<Input success />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with x icon to right when passing error", () => {
    const tree = renderer.create(<Input error />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with left home icon when passing leftIcon=home", () => {
    const tree = renderer.create(<Input leftIcon="home" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with empty select dropdown at left when passing dropDownPrefix", () => {
    const tree = renderer.create(<Input dropDownPrefix />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with select dropdown with its options when passing dropDownPrefix & dropDownOptions=[1,2,3]", () => {
    const tree = renderer
      .create(<Input dropDownPrefix dropDownOptions={[1, 2, 3, 4]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
