import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import TagList from "./TagList";

export default function AddTags({ handleSelectValue }) {
  const [inputValue, setInputValue] = useState("");

  // const {
  //   mutate: addNewTag,
  //   loading: isLoading,
  //   error: hasError,
  // } = useMutation("POST", "/tags", ["tags"]);

  const handleInput = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };

  return (
    <>
      <TextField
        variant="outlined"
        label="Search tags"
        id="tagSearch"
        onChange={handleInput}
      />
      <TagList input={inputValue} handleSelectValue={handleSelectValue} />
    </>
  );
}
