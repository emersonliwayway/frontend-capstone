import { useState } from "react";
import Post from "./Post";
import { API } from "../api/ApiContext";

export default function RandomPost() {
  const [randomPost, setRandomPost] = useState();
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setRandomPost(null);
    fetch(API + "/posts/random")
      .then((res) => res.json())
      .then((post) => setRandomPost(post));
  };

  return (
    <>
      <h1>Random Post</h1>
      <button onClick={handleClick}>Generate</button>
      {randomPost && <Post post={randomPost} />}
    </>
  );
}
