import useQuery from "../api/useQuery";
import Post from "./Post";
import { useAuth } from "../auth/AuthContext";
import CreatePost from "./CreatePost";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PostForm from "./PostForm";

export default function Feed() {
  const { data: posts, loading, error } = useQuery("/posts", "posts");
  const { token } = useAuth();

  if (loading || !posts) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <Box>
        {token && (
          <div id="newPost">
            {/* <CreatePost /> */}
            <PostForm />
          </div>
        )}
      </Box>
      <Box>
        <Grid container spacing={1}>
          {posts.map((post) => (
            <Grid key={post.id} size="auto">
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
