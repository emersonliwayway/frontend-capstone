import useQuery from "../api/useQuery";
import Tags from "./Tags";

export default function PostTags({ post }) {
  const {
    data: tags,
    loading,
    error,
  } = useQuery(`/posts/${post.id}/tags`, "tags");

  return (
    <>
      <div key={post.id}>{tags && <Tags tags={tags} />}</div>
    </>
  );
}
