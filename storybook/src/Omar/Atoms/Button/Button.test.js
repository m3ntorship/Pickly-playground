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
  it("Button default testing with primary, size small and content 'Button Text'", () => {
    const tree = renderer.create(<Button>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button disable state", () => {
    const tree = renderer.create(<Button disabled={true}></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with size medium", () => {
    const tree = renderer
      .create(<Button size="md">Button Text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with size large", () => {
    const tree = renderer
      .create(<Button size="lg">Button Text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with variant secondary", () => {
    const tree = renderer
      .create(<Button variant="secondary">Button Text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with left arrow when leftIcon is passed", () => {
    const tree = renderer
      .create(<Button leftIcon>Button Text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button with right arrow when rightIcon is passed", () => {
    const tree = renderer
      .create(<Button rightIcon>Button Text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button with both right arrow and left arrow when both icons are passed", () => {
    const tree = renderer
      .create(
        <Button leftIcon rightIcon>
          Button Text
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
