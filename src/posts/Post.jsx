import Tags from "../tags/Tags";
import useQuery from "../api/useQuery";

export default function Post({ post }) {
  const {
    data: tags,
    loading,
    error,
  } = useQuery(`/posts/${post.id}/tags`, "tags");
  return (
    <>
      <div key={post.id}>
        <h2 onClick={() => console.log(`popup of ${post.post_id}`)}>
          {post.title}
        </h2>
        <p>{post.body}</p>
        <div>
          <h4>Tags</h4>
          {tags && tags.length === 0 ? (
            <p>No tags...</p>
          ) : (
            tags && <Tags tags={tags} />
          )}
        </div>
      </div>
    </>
  );
}
