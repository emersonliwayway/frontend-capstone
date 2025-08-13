import useQuery from "../api/useQuery";

import { useAuth } from "../auth/AuthContext";
import CreateBookmark from "../account/CreateBookmark";
import Tags from "../tags/Tags";
import DeletePost from "./DeletePost";
import DeleteBookmark from "../account/DeleteBookmark";

export default function Post({ post, user }) {
  const { token } = useAuth();

  const {
    data: tags,
    loading,
    error,
  } = useQuery(`/posts/${post.id}/tags`, "tags");
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  //
  return (
    <>
      <article className="postCard">
        <h4>{post.title}</h4>
        <p>{post.body}</p>

        {tags && tags.length === 0 ? (
          <p>No tags...</p>
        ) : (
          tags && <Tags tags={tags} />
        )}
        <div className="actions"></div>
        {token && <CreateBookmark post={post} />}
      </article>
    </>
  );
}
