import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function CreatePostTags() {
  const {
    mutate: createPostTag,
    loading,
    error,
  } = useMutation("PUT", "/posttags", ["posttags"]);

  return (
    <>
      <select name="" id=""></select>
    </>
  );
}
