import useMutation from "../api/useMutation";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
      <IconButton onClick={onCreate}>
        <BookmarkIcon fontSize="large" />
      </IconButton>
    </>
  );
}
