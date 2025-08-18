import Search from "./Search";
import Feed from "./Feed";
import { useState } from "react";
import useQuery from "../api/useQuery";
import FilteredFeed from "./FilteredFeed";
import Autocomplete from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

export default function Home() {
  const [value, setValue] = useState();
  const { data: tags, loading, error } = useQuery("/tags", "tags");

  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      {tags && (
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Autocomplete
            autoComplete
            autoHighlight
            options={tags}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setValue(newValue)}
            noOptionsText="No tags..."
          />
        </FormControl>
      )}
      {!value ? <Feed /> : <FilteredFeed key={value.id} tag={value} />}
    </>
  );
}
