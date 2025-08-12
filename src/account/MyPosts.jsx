import useQuery from "../api/useQuery";
import DeletePost from "../posts/DeletePost";

export default function MyPosts() {
  const { data: posts, loading, error } = useQuery("/users/posts", "posts");
  return (
    <>
      <h1>My Posts</h1>
      {posts && posts.length === 0 ? (
        <p>You have no posts yet.</p>
      ) : (
        posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <DeletePost post={post} />
          </div>
        ))
      )}
    </>
  );
}
