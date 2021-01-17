import React from "react";
import renderer from "react-test-renderer";
import InputImage from "./InputImage";
//fullRound, width, icon, placeholder
describe("Render the InputImage component", () => {
  it("Kareem: Render InputImage fullrounded 700px with iconA  ", () => {
    const tree = renderer
      .create(
        <InputImage
          fullRound={true}
          width="700px"
          icon="A"
          placeholder="Type Here"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render InputImage default Case without paramter  ", () => {
    const tree = renderer.create(<InputImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
