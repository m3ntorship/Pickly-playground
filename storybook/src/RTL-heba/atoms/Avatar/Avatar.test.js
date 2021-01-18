import React from "react";
import { render } from "@testing-library/react";
import { Avater } from "./Avatar";

test("renders Avatar component", () => {
  const {getByTitle } = render(<Avater />);
  const TestElement = getByTitle("avatarTest");
  expect(TestElement).toBeInTheDocument();
});
