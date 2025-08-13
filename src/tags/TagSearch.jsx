import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import useQuery from "../api/useQuery";
import Stack from "@mui/material/Stack";
import Tags from "./Tags";
import { useState } from "react";

export default function TagSearch({ handleSelect }) {
  const [values, setValues] = useState([]);
  const [newTags, setNewTags] = useState([]);

  const { data: tags, loading, error } = useQuery("/tags", "tags");
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const tagArray = tags.map((tag) => [tag.id, tag.name]);

  // const handleInput = (value) => {
  //   const tagValues = setValues(...[value]);
  //   handleSelect(tagValues);
  //   console.log(tags);
  // };

  // console.log(values);

  return (
    <>
      <Autocomplete
        multiple
        id="tags"
        options={tagArray}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => (option.id = value.id)}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      {/* <Autocomplete
        multiple
        id="tags"
        options={tags.map((tag) => tag.name)}
        freeSolo
        onChange={(event, value) => handleInput(value)}
        renderValue={(tags, getItemProps) =>
          tags.map((tag) => {
            const { key, ...itemProps } = getItemProps({ tag });

            return (
              <Chip
                variant="outlined"
                label={tag.name}
                key={tag.id}
                {...itemProps}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="Tags" value={values} />
        )}
      /> */}
    </>
  );
}
