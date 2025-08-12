import useQuery from "../api/useQuery";
import DeleteBookmark from "./DeleteBookmark";

export default function Bookmarks() {
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
          <div key={e.post_id}>
            <p>Bookmark of Post #{e.id}</p>
            <DeleteBookmark key={e.id} bookmark={e} />
          </div>
        ))
      )}
    </>
  );
}
