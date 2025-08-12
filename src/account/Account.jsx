import Bookmarks from "./Bookmarks";
import useQuery from "../api/useQuery";
import MyPosts from "./MyPosts";

export default function Account() {
  const { data: user, loading, error } = useQuery("/users/me", ["user"]);
  if (loading || !user) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Account</h1>
      {user && (
        <div>
          <h2>{user.username}</h2>
        </div>
      )}
      <MyPosts />
      <Bookmarks />
    </>
  );
}
