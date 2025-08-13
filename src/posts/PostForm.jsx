import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMutation from "../api/useMutation";
import TagSearch from "../tags/TagSearch";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";

export default function PostForm() {
  const [formTags, setFormTags] = useState([]);

  const {
    mutate: createPost,
    loading,
    error,
  } = useMutation("POST", "/posts", ["posts"]);

  if (loading || error) {
    if (error) console.log(error);
    return;
  }

  const handleSubmit = (FormData) => {
    const title = FormData.get("title");
    const body = FormData.get("body");
    const timestamp = new Date();
    const post_tags = [formTags];

    createPost({ title, body, timestamp, post_tags });
  };

  const handleSelect = (value) => {
    setFormTags(value);
  };
  return (
    <>
      <form action={handleSubmit}>
        <Typography>Got an idea?</Typography>
        <Stack>
          <TextField required label="Title" name="title" id="title" />
          <TextField required label="Body" multiline id="body" name="body" />
        </Stack>
        <TagSearch handleSelect={handleSelect} />

        <Button type="submit">Post</Button>
      </form>
    </>
  );
}
