import useMutation from "../api/useMutation";

export default function DeletePost({ post }) {
  const {
    mutate: deletePost,
    loading,
    error,
  } = useMutation("DELETE", `/posts/${post.id}`, ["posts"]);

  const onDelete = () => {
    const id = post.id;
    deletePost({ id });
  };
  return (
    <>
      <button onClick={onDelete}>Delete post</button>
    </>
  );
}
