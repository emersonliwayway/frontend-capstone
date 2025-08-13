import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Tags({ tags }) {
  const handleClick = () => {};

  return (
    <>
      <div>
        <Stack direction="row" spacing={1}>
          {tags.map((tag) => (
            <Chip
              clickable
              key={tag.id}
              label={tag.name}
              className="tagChip"
              size="small"
              onClick={() => console.log("click")}
            />
          ))}
        </Stack>
      </div>
    </>
  );
}
