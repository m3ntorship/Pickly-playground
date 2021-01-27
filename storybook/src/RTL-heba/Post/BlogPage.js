import React from "react";
import { PostContent } from "./PostContent";

const getPostIdFromUrl = url =>
  url.substr(url.lastIndexOf("/") + 1)

export const BlogPage = ({ url }) => {

  const id = getPostIdFromUrl(url)

  return (
    <PostContent id={id} titile={id}/>
  )
}