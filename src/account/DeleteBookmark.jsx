import useMutation from "../api/useMutation";

export default function DeleteBookmark({ bookmark }) {
  const {
    mutate: deleteBookmark,
    loading,
    error,
  } = useMutation("DELETE", `/bookmarks/${bookmark.id}`);
  return (
    <>
      <button
        onClick={() =>
          console.log(
            `Remove bookmark id: ${bookmark.id} post_id: ${bookmark.post_id}`
          )
        }
      >
        Remove{" "}
      </button>
    </>
  );
}
