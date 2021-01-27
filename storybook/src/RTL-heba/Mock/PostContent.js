import React,{useState,useEffect} from "react";

export const PostContent = ({ id }) => {
  const [ text, setText ] = useState("")

  useEffect(() => {
    fetchPostContent(id)
  }, [id])

  const fetchPostContent = async () => {
    const result = await fetch(`/post?id=${id}`)
    if (result.ok) {
      setText(await result.text())
    }
  }

  return <p>{text}</p>
};
  