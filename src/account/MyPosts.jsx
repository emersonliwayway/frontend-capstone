import useQuery from "../api/useQuery";
import DeletePost from "../posts/DeletePost";

export default function MyPosts() {
  const { data: posts, loading, error } = useQuery("/users/posts", "posts");
  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <>
      <div>
        {posts & (posts.length === 0) ? (
          <p>No posts yet...</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="myPost">
              <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
              <div>
                <DeletePost post={post} />
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
