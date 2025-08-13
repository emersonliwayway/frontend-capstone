import Post from "../posts/Post";
import useQuery from "../api/useQuery";
export default function TagPosts() {
  const { data: posts, loading, error } = useQuery("/posts", "posts");
  return <></>;
}
