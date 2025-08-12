import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useState } from "react";

export default function TagSearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [postTags, setPostTags] = useState([]);
  const [isNewTag, setIsNewTag] = useState(false);

  const { data: tags, loading, error } = useQuery("/tags", "tags");

  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  // const {
  //   mutate: addTag,
  //   loading: isLoading,
  //   error: hasError,
  // } = useMutation("POST", "/tags", ["tags"]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // filter results
    const filteredResults = tags.filter((tag) =>
      tag.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredResults(filteredResults);
    if (!filteredResults) {
      setIsNewTag(true);
    }
  };

  const handleSelect = (value) => {
    setInputValue(value);
    postTags.push(value);
    setInputValue("");
    setFilteredResults([]);
  };

  const handleDeselect = (value) => {
    const index = postTags.indexOf(value);
    postTags.splice(index, 1);
    setPostTags([...postTags]);
    console.log(postTags);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />

      <div onClick={() => handleSelect(i)}>{inputValue}</div>

      {filteredResults &&
        filteredResults.map((e) => (
          <li
            key={e.id}
            value={e.id}
            onClick={() => handleSelect([e.id, e.name])}
          >
            {e.name}
          </li>
        ))}
      <div>
        {postTags &&
          postTags.map((tag, index) => (
            <li key={index} value={tag} onClick={() => handleDeselect()}>
              {tag}
            </li>
          ))}
      </div>
    </>
  );
}
