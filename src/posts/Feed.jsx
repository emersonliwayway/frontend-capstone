import useQuery from "../api/useQuery";
import Post from "./Post";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
import AddPostTags from "./AddPostTags";
import NewPost from "./NewPost";
import Autocomplete from "@mui/joy/Autocomplete";
import FilteredFeed from "./FilteredFeed";

export default function Feed() {
  const { token } = useAuth();
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState();

  const { data: posts, loading, error } = useQuery("/posts", "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <NewPost />
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </>
  );
}
