import useQuery from "../api/useQuery";
import { useState } from "react";

export default function RandomPost() {
  const [randomPost, setRandomPost] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const { data: post, loading, error } = useQuery("/posts/random", "post");

  if (loading || !post) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const handleClick = () => {
    setIsClicked(true);
    setRandomPost(post);
    console.log(post);
  };

  return (
    <>
      <h1>Random Post</h1>
      <button onClick={() => handleClick()}>Generate</button>
    </>
  );
}
