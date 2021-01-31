import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { Button } from "./Button";

it("should click", () => {
  const mockClick = jest.fn();
  render(<Button onClick={mockClick}></Button>);
  const btn = screen.getByRole("button");
  userEvent.click(btn);
  expect(mockClick).toHaveBeenCalledTimes(1);
});

describe("Button Testing", () => {
  it("Button default testing with primary, size small and content 'button'", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button disable state", () => {
    const tree = renderer.create(<Button disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with size medium", () => {
    const tree = renderer.create(<Button size="md" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with size large", () => {
    const tree = renderer.create(<Button size="lg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with variant secondary", () => {
    const tree = renderer.create(<Button variant="secondary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
