import useQuery from "../api/useQuery";

export default function TagList({ input, handleSelectValue }) {
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
          <li key={tag.id} onClick={() => handleSelectValue(tag)}>
            {tag.name}
          </li>
        ))}
      </ul>
    </>
  );
}
