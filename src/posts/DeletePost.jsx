import useMutation from "../api/useMutation";

export default function DeletePost({ post }) {
  return (
    <>
      <button
        onClick={() =>
          console.log(`Remove post id: ${post.id} user_id: ${post.user_id}`)
        }
      >
        Delete post
      </button>
    </>
  );
}
