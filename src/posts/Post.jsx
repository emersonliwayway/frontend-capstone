import Tags from "../tags/Tags";
import useQuery from "../api/useQuery";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAuth } from "../auth/AuthContext";
import CreateBookmark from "../account/CreateBookmark";
import Button from "@mui/material/Button";

export default function Post({ post }) {
  const {
    data: tags,
    loading,
    error,
  } = useQuery(`/posts/${post.id}/tags`, "tags");

  const { token } = useAuth();
  //
  return (
    <>
      <Card
        variant="outlined"
        key={post.id}
        sx={{ maxWidth: 360 }}
        className="card"
      >
        <CardContent>
          <Stack>
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" noWrap="true">
              {post.body}
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            {tags && tags.length === 0 ? (
              <Typography>No tags...</Typography>
            ) : (
              tags && <Tags tags={tags} />
            )}
            {token && <CreateBookmark post={post} />}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
