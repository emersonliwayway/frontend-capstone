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
      <div>
        <h1>Need some inspo?</h1>
        <div>
          <button onClick={handleClick}>Give me an idea!</button>
          {randomPost && <Post post={randomPost} />}
        </div>
      </div>
    </>
  );
}
