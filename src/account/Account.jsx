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
      <div>
        <h1>My account</h1>
        <h3>{user.username}</h3>
        <div>
          <MyPosts />
          <Bookmarks />
        </div>
      </div>
    </>
  );
}
