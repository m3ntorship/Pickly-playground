import React from "react";
import { render } from "@testing-library/react";
import { Avater } from "./Avatar";

test("renders Avatar component", () => {
  const {getByLabelText ,debug } = render(<Avater />);
  const TestElement = getByLabelText("avatarTest");
  expect(TestElement).toBeInTheDocument();
  // debug();
});
