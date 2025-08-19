import Feed from "./Feed";
import { useState } from "react";
import useQuery from "../api/useQuery";
import FilteredFeed from "./FilteredFeed";
import Autocomplete from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { useAuth } from "../auth/AuthContext";
import NewPost from "../posts/NewPost";

export default function Home() {
  const [value, setValue] = useState();
  const { data: tags, loading, error } = useQuery("/tags", "tags");
  const { token } = useAuth();

  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <div className="home">
        {token && <NewPost />}
        {tags && (
          <FormControl>
            <FormLabel>Search tags</FormLabel>
            <Autocomplete
              variant="outlined"
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
      </div>
    </>
  );
}
