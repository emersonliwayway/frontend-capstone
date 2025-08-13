import useQuery from "../api/useQuery";
import DeletePost from "../posts/DeletePost";
import Post from "../posts/Post";

export default function MyPosts() {
  const { data: posts, loading, error } = useQuery("/users/posts", "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <>
      <h1>My Posts</h1>
      {posts && posts.length === 0 ? (
        <p>You have no posts yet.</p>
      ) : (
        posts &&
        posts.map((post) => (
          <article className="postCard" key={post.id}>
            <h3>{post.title}</h3>
            <p className="postBody">{post.body}</p>
            <DeletePost post={post} />
          </article>
        ))
      )}
    </>
  );
}
