import useQuery from "../api/useQuery";
import Chip from "@mui/joy/Chip";
import { useState } from "react";

export default function TagList({ input, handleSelectValue }) {
  const [searchResults, setSearchResults] = useState([]);

  const { data: tags, loading, error } = useQuery("/tags", "tags");
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const filteredTags = tags.filter((tag) => {
    if (input !== "") {
      return tag.name.toLowerCase().includes(input);
    } else {
      return input;
    }
  });

  return (
    <>
      <ul>
        {filteredTags.map((tag) => (
          <li key={tag.id} id={tag.id}>
            <Chip
              onClick={() => handleSelectValue(tag.id)}
              label={tag.name}
            ></Chip>
          </li>
        ))}
      </ul>
    </>
  );
}
