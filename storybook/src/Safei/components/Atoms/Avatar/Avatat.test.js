import React from "react";
// import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
// import "react-testing-library/cleanup-after-each";
import Avatar from "./Avatar";

describe("test avatar comp", () => {
  it("display avatar comp with proper alt text", () => {
    const { unmount } = render(<Avatar type={"anon"} />);
    const avatar = screen.getByAltText(/anon avatar img/i);
    expect(avatar).toBeInTheDocument();
    unmount();
  });
  it("display avatar comp with proper alt text", () => {
    const { unmount } = render(<Avatar type={"user"} />);
    const avatar = screen.getByAltText(/user avatar img/i);
    expect(avatar).toBeInTheDocument();
    unmount();
  });
});

//Snapshot testing:
// describe("renders the avatar comp", () => {
//   it("renders  large Avatar ", () => {
//     const tree = renderer.create(<Avatar size={"lg"} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders  md Avatar ", () => {
//     const tree = renderer.create(<Avatar size={"md"} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders  small  Avatar with default photo on file ", () => {
//     const tree = renderer.create(<Avatar size={"sm"} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders  no props  Avatar, should display a small  avatar with default photo ", () => {
//     const tree = renderer.create(<Avatar />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// })
