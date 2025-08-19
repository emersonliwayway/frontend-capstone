import useQuery from "../api/useQuery";
import DeleteBookmark from "./DeleteBookmark";
import { useNavigate } from "react-router";
import Tags from "../tags/Tags";

export default function Bookmarks() {
  const navigate = useNavigate();
  const {
    data: bookmarks,
    loading,
    error,
  } = useQuery("/bookmarks", "bookmarks");
  if (loading || !bookmarks) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <div>
        {bookmarks && bookmarks.length === 0 ? (
          <p>No bookmarks...</p>
        ) : (
          bookmarks.map((post) => (
            <BookmarkPost key={post.id} id={post.post_id} bookmark={post} />
          ))
        )}
      </div>
    </>
  );
}

export function BookmarkPost({ id, bookmark }) {
  const {
    data: tags,
    loading: isLoading,
    error: hasError,
  } = useQuery(`/posts/${id}/tags`, "tags");

  const { data: post, loading, error } = useQuery(`/posts/${id}`, "posts");
  if (loading || !post) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <article className="bookmarkPost">
        {post && tags && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Tags tags={tags} />
          </div>
        )}
        <DeleteBookmark bookmark={bookmark} />
      </article>
    </>
  );
}
