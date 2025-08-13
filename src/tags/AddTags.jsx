import { useState } from "react";
import TagList from "./TagList";

export default function AddTags({ handleSelectValue }) {
  const [inputValue, setInputValue] = useState();

  const handleInput = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
  };

  return (
    <>
      <input type="text" onChange={handleInput} name="input" list=""></input>
      <TagList input={inputValue} handleSelectValue={handleSelectValue} />
    </>
  );
}
