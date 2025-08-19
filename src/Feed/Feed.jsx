import useQuery from "../api/useQuery";
import Post from "../posts/Post";

export default function Feed() {
  const { data: posts, loading, error } = useQuery("/posts", "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>{posts && posts.map((post) => <Post key={post.id} post={post} />)}</>
  );
}
