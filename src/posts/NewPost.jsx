import useMutation from "../api/useMutation";
import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import AddPostTags from "./AddPostTags";
import useQuery from "../api/useQuery";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

export default function NewPost() {
  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  const {
    mutate: createTags,
    data,
    loading: load,
    error: err,
  } = useMutation("POST", "/tags", ["tags"]);

  const {
    mutate: createPost,
    loading: isLoading,
    error: hasError,
  } = useMutation("POST", "/posts", ["posts"]);

  const { data: tags, loading, error } = useQuery("/tags", ["tags"]);
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  // const handleTagList = () => {
  //   const tagList = [];
  //   value.map((tag) => {
  //     if (!tag.id) {
  //       tagList.push(tag);
  //     }
  //   });
  //   tagList.map((tag) => {
  //     const name = tag.inputValue;
  //     createTags({ name });
  //   });
  // };

  const onSubmit = (FormData) => {
    const title = FormData.get("title");
    const body = FormData.get("body");
    const timestamp = new Date();

    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>New post</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog layout="center" size="lg">
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" id="title" name="title"></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Body</FormLabel>
              <Textarea id="body" name="body"></Textarea>
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
