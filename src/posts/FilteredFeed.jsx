import useQuery from "../api/useQuery";
import Post from "./Post";

export default function FilteredFeed({ tag }) {
  const {
    data: posts,
    loading,
    error,
  } = useQuery(`/tags/${tag.id}/posts`, "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>{posts && posts.map((post) => <Post key={post.id} post={post} />)}</>
  );
}
