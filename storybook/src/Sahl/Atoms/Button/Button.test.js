import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render without any props", () => {
    const tree = renderer.create(<Button>Test Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled when passing disabled", () => {
    const tree = renderer
      .create(<Button disabled>Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with children when passing it", () => {
    const tree = renderer.create(<Button>Test Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with left Arrow when passing leftArrow", () => {
    const tree = renderer
      .create(<Button leftArrow>Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with right arrow when passing rightArrow", () => {
    const tree = renderer
      .create(<Button rightArrow>Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with both left & right arrow when passing leftArrow & rightArrow", () => {
    const tree = renderer
      .create(
        <Button leftArrow rightArrow>
          Test Button
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with medium size as default when no size is passed", () => {
    const tree = renderer.create(<Button>Test Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with small size when size="sm" is passed', () => {
    const tree = renderer
      .create(<Button size="sm">Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with large size when size="lg" is passed', () => {
    const tree = renderer
      .create(<Button size="lg">Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with primary variant as default without passing any props", () => {
    const tree = renderer.create(<Button>Test Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with secondary variant when variant="secondary"', () => {
    const tree = renderer
      .create(<Button variant="secondary">Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button Component DOM testing", () => {
  it("renders Button component", () => {
    // screen.debug();
    const { rerender } = render(<Button>Click here</Button>);
    // Implicit as it returns false if it is not there
    // screen.getByText("Click here");
    // Explicit and recommended
    expect(screen.getByText("Click here")).toBeInTheDocument();
    // re-render the same component with different props
    rerender(<Button>Register</Button>);
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});
