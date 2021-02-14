import React from "react";
import { BlogPage } from "./BlogPage";
import { PostContent } from "./PostContent";
import { TopFivePostsPage } from "./TopFivePostsPage";
import { render, fireEvent, cleanup } from "@testing-library/react";

//Testing multiple instances of the same mocked component

jest.mock("./PostContent", () => ({
  PostContent: (props) => <div data-testid="PostContent" {...props}/>,
}));
afterEach(() => {
  jest.restoreAllMocks();
});
test("BlogPage", () => {
 const{queryByTestId ,debug}= render(<BlogPage url="http://example.com/blog/my-web-page" />);
  expect(queryByTestId("PostContent")).toBeInTheDocument();
 debug();
});

describe("BlogPage", () => {
  it("renders five PostContent components", () => {
    const{queryAllByTestId}=  render(<TopFivePostsPage />)
    expect(queryAllByTestId("PostContent"))
      .toHaveLength(5)
  })
})
it("constructs a PostContent for each top 5 entry", () => {
  render(<TopFivePostsPage />)
  expect(() => expect(PostContent).toHaveBeenCalledWith(
    { id: "top1" }, expect.anything()))
    expect(() => expect(PostContent).toHaveBeenCalledWith(
    { id: "top2" }, expect.anything()))
    expect(() => expect(PostContent).toHaveBeenCalledWith(
    { id: "top3" }, expect.anything()))
    expect(() => expect(PostContent).toHaveBeenCalledWith(
    { id: "top4" }, expect.anything()))
    expect(() => expect(PostContent).toHaveBeenCalledWith(
    { id: "top5" }, expect.anything()))
})