import Button from "@mui/material/Button";
import { useState } from "react";

export default function BookmarkButton() {
  const [isClicked, setIsClicked] = useState(false);

  function create() {
    setIsClicked(false);
  }

  function remove() {
    setIsClicked(true);
  }

  const handleClick = () => {};
  return (
    <>
      <Button>button</Button>
    </>
  );
}
