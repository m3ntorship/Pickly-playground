import React from "react";
import { PostContent } from "./PostContent";
export const BlogPage = ({ url }) => {
    const getPostIdFromUrl = url =>
    url.substr(url.lastIndexOf("/") + 1)
    const id = getPostIdFromUrl(url)
  
    const handleSignUp = () => {
      // ...
    }
  
    return (
      <PostContent id={id}>
        <input title="inputField" type="email" placeholder="Sign up to my mailing list!" />
        <button onClick={handleSignUp}>Sign up</button>
      </PostContent>
    )
  }