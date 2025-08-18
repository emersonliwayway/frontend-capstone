import Autocomplete from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { useState } from "react";

export default function Search({ tags, setValue, handleSearch }) {
  return (
    <>
      <form action={handleSearch} className="searchForm">
        <FormControl>
          <FormLabel>Search tags</FormLabel>
          <Autocomplete
            options={tags}
            onChange={(event, newValue) => setValue(newValue)}
            blurOnSelect
            getOptionLabel={(option) => option.name}
            noOptionsText="No tags found..."
            selectOnFocus
          />
        </FormControl>
        <input type="submit" value="Search" />
      </form>
    </>
  );
}
