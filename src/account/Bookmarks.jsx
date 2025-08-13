import useQuery from "../api/useQuery";
import DeleteBookmark from "./DeleteBookmark";
import { useNavigate } from "react-router";

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
            <BookmarkPost id={e.post_id} />
            <DeleteBookmark key={e.id} bookmark={e.id} />
          </div>
        ))
      )}
    </>
  );
}

export function BookmarkPost({ id }) {
  const { data: post, loading, error } = useQuery(`/posts/${id}`, "posts");
  if (loading || !post) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <div className="postDiv">{post && <h4>{post.title}</h4>}</div>
    </>
  );
}
