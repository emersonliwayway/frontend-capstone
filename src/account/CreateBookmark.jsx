import useMutation from "../api/useMutation";

export default function CreateBookmark({ post }) {
  const handleClick = () => {
    // triggers mutation
  };
  return (
    <>
      <button onClick={() => console.log(`bookmark ${post.id}`)}>
        Bookmark
      </button>
    </>
  );
}
