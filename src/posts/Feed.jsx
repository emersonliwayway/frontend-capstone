import useQuery from "../api/useQuery";
import Post from "./Post";
import { useAuth } from "../auth/AuthContext";
import CreatePost from "./CreatePost";
import CreateBookmark from "../account/CreateBookmark";

export default function Feed() {
  const { data: posts, loading, error } = useQuery("/posts", "posts");
  const { token } = useAuth();

  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <>
      <h1>Feed</h1>
      {token && (
        <div id="newPost">
          <CreatePost />
        </div>
      )}
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
          {token && (
            <div className="addBookmark">
              <CreateBookmark key={post.id} post={post} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
