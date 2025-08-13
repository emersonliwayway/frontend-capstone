import useQuery from "../api/useQuery";
import Post from "./Post";
import { useAuth } from "../auth/AuthContext";
import CreatePost from "./CreatePost";
import Search from "./Search";
import { useState } from "react";

export default function Feed() {
  const { token } = useAuth();
  const [searchResults, setSearchResults] = useState();

  const { data: posts, loading, error } = useQuery("/posts", "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <div className="search">{/* <Search /> */}</div>
      <div className="postForm">{token && <CreatePost />}</div>

      <div className="feed">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
