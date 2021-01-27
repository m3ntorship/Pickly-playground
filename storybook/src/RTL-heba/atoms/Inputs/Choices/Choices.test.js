import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
import { Choices, INPUT } from "./Choices";
import "@testing-library/react/dont-cleanup-after-each";

//afterEach(cleanup);
it("renders Choices component", () => {
  const { getByLabelText, debug, unmount, rerender } = render(
    <Choices label="hi" />
  );
  const TestElement = getByLabelText("label-test");
  expect(TestElement).toBeTruthy();
  // screen.getByText('hi');

  // expect(screen.getByText('hi')).toBeInTheDocument();
  fireEvent.change(TestElement, { target: { value: "heba saad" } });
  // expect(TestElement.value).toContain("hiiiii");
  // user.type(TestElement, "heba saad");
  // expect(TestElement).toHaveValue("heba saad")
  render(<Choices label="hello" />);
  debug();
  unmount();
  //debug(TestElement);
  debug();
});
describe("btnClick", () => {
  it("onclick", () => {
    const { queryByTitle } = render(<Choices />);
    const TestElement = queryByTitle("Choices");
    fireEvent.click(TestElement);
  });
});
