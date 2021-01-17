import React from "react";
import renderer from "react-test-renderer";
import UserInfo from "./UserInfo";

describe("Render the UserInfo component", () => {
  it("Kareem: Render UserInfo ", () => {
    const tree = renderer
      .create(<UserInfo Name={"Kareem Elhosseny"} Hours={"3"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
