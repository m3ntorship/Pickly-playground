import React from "react";
import renderer from "react-test-renderer";
import UploadImage from "./UploadImage";
//status, imageSrc, fullRound, width, icon
describe("Render the UploadImage component", () => {
  it("Kareem: Render UploadImage in status normal ", () => {
    const tree = renderer
      .create(
        <UploadImage
          status="normal"
          imageSrc="normal"
          fullRound={false}
          width="704px"
          icon="A"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render UploadImage in loading case ", () => {
    const tree = renderer
      .create(
        <UploadImage
          status="loading"
          imageSrc="normal"
          fullRound={false}
          width="704px"
          icon="A"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render UploadImage in notload case ", () => {
    const tree = renderer
      .create(
        <UploadImage
          status="notload"
          imageSrc="normal"
          fullRound={false}
          width="704px"
          icon="A"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
