//npm run dev
import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSlectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSlectItem }: Props) {
  //items = [];

  const [selectedIndex, setelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading} </h1>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setelectedIndex(index);
              onSlectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
