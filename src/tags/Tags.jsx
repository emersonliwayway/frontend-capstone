export default function Tags({ tags }) {
  return (
    <>
      <div>
        <ul className="chipList">
          {tags.map((tag) => (
            <li
              className="chip"
              key={tag.id}
              onClick={() => console.log("click")}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
