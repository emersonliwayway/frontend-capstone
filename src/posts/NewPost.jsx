import useMutation from "../api/useMutation";
import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import AddPostTags from "./AddPostTags";
import useQuery from "../api/useQuery";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";

export default function NewPost() {
  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState([]);

  const {
    mutate: createTags,
    data,
    loading: load,
    error: err,
  } = useMutation("POST", "/tags", ["tags"]);
  console.log(data);

  const {
    mutate: createPost,
    loading: isLoading,
    error: hasError,
  } = useMutation("POST", "/posts", ["posts"]);

  const { data: tags, loading, error } = useQuery("/tags", ["tags"]);
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const handleNewTags = async () => {
    console.log(value);
    const tagsArray = value
      .filter((tag) => {
        console.log(tag.inputValue);
        tag.inputValue !== undefined;
        return tag.inputValue;
      })
      .map((tag) => tag.inputValue);

    createTags({ name: tagsArray });
  };

  const onSubmit = (FormData) => {
    handleNewTags();
    const timestamp = new Date();
    const title = FormData.get("title");
    const body = FormData.get("body");
    const post_tags = [];

    data &&
      data.map((e) => {
        post_tags.push(e.id);
      });
    value &&
      value.map((e) => {
        post_tags.push(e.id);
      });
    createPost({ title, body, timestamp, post_tags });

    setOpen(false);
    setValue([]);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>New idea</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog layout="center" size="lg">
          <form action={onSubmit}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <input type="text" id="title" name="title"></input>
            </FormControl>
            <FormControl>
              <FormLabel>Body</FormLabel>
              <textarea id="body" name="body"></textarea>
            </FormControl>
            <FormControl>
              <FormLabel>Tags</FormLabel>
              <AddPostTags tags={tags} value={value} setValue={setValue} />
            </FormControl>
            <button type="submit">Submit</button>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
