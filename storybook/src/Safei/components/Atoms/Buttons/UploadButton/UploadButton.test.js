import React from "react";
import renderer from "react-test-renderer";
import UploadButton from "./UploadButton";

describe("UploadButton  field", () => {
  it("renders  UploadButton ", () => {
    const tree = renderer.create(<UploadButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
