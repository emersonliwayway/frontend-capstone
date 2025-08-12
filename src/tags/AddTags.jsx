import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function AddTags() {
  const {
    mutate: addNewTag,
    loading: isLoading,
    error: hasError,
  } = useMutation("POST", "/tags", ["tags"]);

  const { data: tags, loading, error } = useQuery("/tags", "tags");
  if (loading || !tags) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <input type="search" name="" id="" />
    </>
  );
}
