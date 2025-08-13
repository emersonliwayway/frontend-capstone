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
      <h1>Bookmarks</h1>
      {bookmarks && bookmarks.length === 0 ? (
        <p>No bookmarks yet...</p>
      ) : (
        bookmarks &&
        bookmarks.map((e) => (
          <div key={e.id}>
            <BookmarkPost id={e.post_id} bookmark={e.id} />
          </div>
        ))
      )}
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
      <div className="postDiv">
        {post && tags && (
          <article className="postCard">
            <h4>{post.title}</h4>
            <Tags tags={tags} />
            <DeleteBookmark key={bookmark.id} bookmark={bookmark} />
          </article>
        )}
      </div>
    </>
  );
}
