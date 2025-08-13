import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
export default function TagSearch() {
  const filter = createFilterOptions();
  return (
    <>
      <Autocomplete
        filterOptions={(x) => x}
        renderInput={() => <TextField />}
      />
    </>
  );
}
