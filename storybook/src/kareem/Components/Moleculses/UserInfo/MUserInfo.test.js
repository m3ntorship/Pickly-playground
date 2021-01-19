import React from "react";
import renderer from "react-test-renderer";
import MUserInfo from "./MUserInfo";
//status = "normal", size = "medieum", Name, Hours
describe("Render the UserInfo Moleculses ", () => {
  it("Kareem: Render UserInfo with anonymous in large size  ", () => {
    const tree = renderer
      .create(
        <MUserInfo
          status="anonymous"
          size="large"
          Name="Kareem Mohamed"
          Hours="4"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Kareem: Render UserInfowith default cases Normal case and size medium ", () => {
    const tree = renderer
      .create(<MUserInfo Name="Kareem Mohamed" Hours="4" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
