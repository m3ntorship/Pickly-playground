import React from "react";
import renderer from "react-test-renderer";
import Photo from "./Photo";

describe("Render the Photo component", () => {
  it("Kareem: Render Photo in Normal Case ", () => {
    const tree = renderer
      .create(<Photo imageSrc="normal" status="normal" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Photo in loading Case ", () => {
    const tree = renderer
      .create(<Photo imageSrc="normal" status="loading" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Photo in not loading Case ", () => {
    const tree = renderer
      .create(<Photo imageSrc="normal" status="notload" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render Photo in default case without Paramters ", () => {
    const tree = renderer.create(<Photo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
