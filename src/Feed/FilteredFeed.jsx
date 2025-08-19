import useQuery from "../api/useQuery";
import Post from "../posts/Post";

export default function FilteredFeed({ tag }) {
  const {
    data: posts,
    loading,
    error,
  } = useQuery(`/tags/${tag.id}/posts`, "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      {posts && posts.length === 0 ? (
        <p>No posts yet...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}
