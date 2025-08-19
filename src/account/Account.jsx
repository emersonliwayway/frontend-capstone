import Bookmarks from "./Bookmarks";
import useQuery from "../api/useQuery";
import MyPosts from "./MyPosts";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Account() {
  const { data: user, loading, error } = useQuery("/users/me", ["user"]);
  if (loading || !user) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <div className="accountPage">
        <h1>Welcome {user.username}!</h1>
        <div>
          <h2>My Posts</h2>
          <MyPosts />
          <h2>Bookmarks</h2>
          <Bookmarks />
        </div>
      </div>
    </>
  );
}
