import useMutation from "../api/useMutation";
import Modal from "react-modal";
import { useState } from "react";
import AddTags from "../tags/AddTags";
import TagList from "../tags/TagList";
import Chip from "@mui/material/Chip";
import useQuery from "../api/useQuery";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState([]);

  const {
    mutate: createPost,
    loading,
    error,
  } = useMutation("POST", "/posts", ["posts"]);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
    setSelectValue([]);
  }

  const handleSelectValue = (e) => {
    if (!selectValue.includes(e)) {
      selectValue.push(...[e]);
      setSelectValue(selectValue);
      console.log(selectValue);
    }
  };

  // const handleDeleteValue = (e) => {
  //   const index = selectValue.indexOf(e);
  //   selectValue.splice(index, 1);
  //   setSelectValue(selectValue);
  // };

  const handleSubmit = (FormData) => {
    const timestamp = new Date();
    const title = FormData.get("title");
    const body = FormData.get("body");
    const post_tags = [selectValue];

    createPost({ title, body, timestamp, post_tags });

    setIsOpen(false);
    setSelectValue();
  };
  console.log(selectValue);

  return (
    <>
      <button onClick={open}>New post</button>
      <div className="modalDiv">
        <Modal
          isOpen={isOpen}
          onRequestClose={close}
          ariaHideApp={false}
          className="formModal"
        >
          <form action={handleSubmit} className="postForm">
            <label>
              Title
              <input type="text" name="title" required />
            </label>
            <label>
              Body
              <textarea
                name="body"
                id="body"
                required
                defaultValue="Describe your idea"
              ></textarea>
            </label>
            <label>Add tags</label>
            <AddTags handleSelectValue={handleSelectValue} />
            <button type="submit">Post</button>
          </form>
        </Modal>
      </div>
    </>
  );
}
