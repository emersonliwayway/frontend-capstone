import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import { useState } from "react";
const filter = createFilterOptions();

export default function AddPostTags({ tags, value, setValue }) {
  return (
    <>
      <Autocomplete
        id="tagList"
        multiple
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        freeSolo
        options={tags}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        getOptionKey={(option) => option.id}
        renderOption={(props, option) => (
          <AutocompleteOption {...props} key={option.name}>
            {option.name}
          </AutocompleteOption>
        )}
      />
    </>
  );
}
