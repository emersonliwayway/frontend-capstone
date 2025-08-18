import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import CreateBookmark from "../account/CreateBookmark";
import Tags from "../tags/Tags";

export default function Post({ post }) {
  const { token } = useAuth();

  const {
    data: tags,
    loading,
    error,
  } = useQuery(`/posts/${post.id}/tags`, "tags");
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <article className="postCard">
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        {/* <hr /> */}
        <div>
          {tags && tags.length === 0 ? (
            <p>No tags...</p>
          ) : (
            tags && <Tags tags={tags} />
          )}
        </div>
        <div>{token && <CreateBookmark post={post} />}</div>
      </article>
    </>
  );
}
