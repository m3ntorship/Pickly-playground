import React from "react";
import { BlogPage } from "./BlogPageWithChildren";
 import { PostContent } from "./PostContent";
import { render, fireEvent, cleanup } from "@testing-library/react";

jest.mock("./PostContent", () => ({
    PostContent: ({ children }) => (
      <div data-testid="PostContent">{children}</div>
    )
  }));

  test("BlogPage", () => {
    const{queryByTestId ,debug}= render(<BlogPage url="http://example.com/blog/my-web-page" />);
     expect(queryByTestId("PostContent")).toBeInTheDocument();
    debug();
   });

  it("render button as a child of PostContent", () => {
 const {getByTestId,queryByRole}  = render(<BlogPage url="http://example.com/blog/my-web-page" />)
  
    const postContentElement =getByTestId("PostContent")
  
    const button = queryByRole(
      "button", { name: "Sign up" })
  
    expect(postContentElement).toContainElement(button)
  })
  it("constructs a PostContent with an id prop created from the url", () => {
    const postId = "my-amazing-post"
    render(<BlogPage url={`http://example.com/blog/${postId}`} />)
    expect(() => expect(PostContent).toHaveBeenCalledTimes(1));
    expect(() => expect(PostContent).toHaveBeenCalledWith( { id: postId },
      expect.anything()));
  });
