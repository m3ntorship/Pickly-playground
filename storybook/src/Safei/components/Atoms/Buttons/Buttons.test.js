import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

it("should click", () => {
  const mockClick = jest.fn();
  render(<Button onClick={mockClick}></Button>);
  const btn = screen.getByTestId(/btn-case/i);
  userEvent.click(btn);
  expect(mockClick).toHaveBeenCalledTimes(1);
});
// expect(mockClick).toHaveBeenCalledTimes(1);
//Testing libr:
// describe("test button comp on click functoinality", () => {
//   it("should return 0 clicks when the button is clicekd while disabled and text passed", () => {
//     const handleClick = jest.fn();
//     const { unmount } = render(
//       <Button onClick={handleClick} text={"Click Me"} />
//     );
//     userEvent.click(screen.queryByTestId("btn-case"));
//     expect(handleClick).toHaveBeenCalledTimes(0);
//     unmount();
//   });
// });
// it("should return 1 clicks when the button is clicekd while active and text passed", () => {
//   const handleClick = jest.fn();
//   const { unmount } = render(<Button onClick={handleClick} />);
//   userEvent.click(screen.queryByTestId("btn-case"));
//   expect(handleClick).toHaveBeenCalledTimes(1);
//   unmount();
// });
// //Snapshot:
// describe("render a primary lg button", () => {
//   it("render primary button comp large size", () => {
//     const tree = renderer
//       .create(<Button size={"lg"} type={"primary"} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it("render secondary button comp md size", () => {
//     const tree = renderer
//       .create(<Button size={"md"} type={"secondary"} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it("render text button comp sm size", () => {
//     const tree = renderer.create(<Button size={"sm"} type={"text"} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("render primary small button comp when no props are passed", () => {
//     const tree = renderer.create(<Button />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

