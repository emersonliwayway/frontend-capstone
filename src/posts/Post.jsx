export default function Post({ post }) {
  return (
    <>
      <div key={post.post_id}>
        <h2 onClick={() => console.log(`popup of ${post.post_id}`)}>
          {post.title}
        </h2>
        <p>{post.body}</p>
        <div>
          <h4>Tags</h4>
        </div>
      </div>
    </>
  );
}
