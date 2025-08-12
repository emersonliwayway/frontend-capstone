import useMutation from "../api/useMutation";
import Modal from "react-modal";
import { useState } from "react";
import AddTags from "../tags/AddTags";
import TagSearch from "../tags/TagSearch";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState();
  console.log(selectValue);

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
  }

  const handleSubmit = (FormData) => {
    if (loading || error) {
      if (error) console.log(error);
      return;
    }
    const timestamp = new Date();
    const title = FormData.get("title");
    const body = FormData.get("body");
    const post_tags = [selectValue];

    createPost({ title, body, timestamp, post_tags });

    setIsOpen(false);
    setSelectValue();
  };

  const handleSelectValue = (e) => {
    setSelectValue(e);
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

            <TagSearch />
            <button type="submit">Post</button>
          </form>
        </Modal>
      </div>
    </>
  );
}
