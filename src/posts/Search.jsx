import { useState } from "react";

export default function Search({ posts, tags }) {
  const [searchValue, setSearchValue] = useState();

  const filterTags = () => {};
  return (
    <>
      <div className="searchDiv">
        <input type="search" />
        <button>Search tags</button>
      </div>
    </>
  );
}
