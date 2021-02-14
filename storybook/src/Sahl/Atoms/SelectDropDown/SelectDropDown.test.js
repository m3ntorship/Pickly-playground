import React from "react";
import renderer from "react-test-renderer";
import SelectDropDown from "./SelectDropDown";

describe("SelectDropDown Component", () => {
  it("should render with passed options options=['Option 1','Option 2','Option 3']", () => {
    const tree = renderer
      .create(<SelectDropDown options={["Option 1", "Option 2", "Option 3"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without label by default", () => {
    const tree = renderer
      .create(<SelectDropDown options={["Option 1", "Option 2", "Option 3"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with passed label", () => {
    const tree = renderer
      .create(
        <SelectDropDown
          options={["Option 1", "Option 2", "Option 3"]}
          label="testlabel"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
