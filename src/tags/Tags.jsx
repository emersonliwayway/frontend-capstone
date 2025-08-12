export default function Tags({ tags }) {
  return (
    <>
      <div>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </div>
    </>
  );
}
