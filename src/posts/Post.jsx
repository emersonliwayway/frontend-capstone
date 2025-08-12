import PostTags from "../tags/PostTags";

export default function Post({ post }) {
  return (
    <>
      <div key={post.id}>
        <h2 onClick={() => console.log(`popup of ${post.post_id}`)}>
          {post.title}
        </h2>
        <p>{post.body}</p>
        <div>
          <h4>Tags</h4>
          <PostTags post={post} />
        </div>
      </div>
    </>
  );
}
