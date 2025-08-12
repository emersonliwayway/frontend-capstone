import useMutation from "../api/useMutation";

export default function CreateBookmark({ post }) {
  const {
    mutate: createBookmark,
    loading,
    error,
  } = useMutation("POST", "/bookmarks", ["bookmarks"]);

  const onCreate = () => {
    const post_id = post.id;
    createBookmark({ post_id });
  };
  return (
    <>
      <button onClick={onCreate}>Bookmark</button>
    </>
  );
}
