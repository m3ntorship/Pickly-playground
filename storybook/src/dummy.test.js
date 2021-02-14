import React from "react";
import { render } from "@testing-library/react";

const TestComponent = () => {
  return <div>dummy component</div>;
};

test("renders test component", () => {
  const { getByText } = render(<TestComponent />);
  const TestElement = getByText("dummy component");
  expect(TestElement).toBeInTheDocument();
});
