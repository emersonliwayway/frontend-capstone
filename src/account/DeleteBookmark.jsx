import useMutation from "../api/useMutation";

export default function DeleteBookmark({ bookmark }) {
  const {
    mutate: deleteBookmark,
    loading,
    error,
  } = useMutation("DELETE", `/bookmarks/${bookmark.id}`);

  const onDelete = () => {
    const id = bookmark.id;
    deleteBookmark({ id });
  };
  return (
    <>
      <button onClick={onDelete}>Remove</button>
    </>
  );
}
