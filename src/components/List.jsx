import PropTypes from "prop-types";
import { useMemo } from "react";

const List = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("list çalıştı!");
    return items.sort((a, b) => b - a);
  }, [items]);

  const listItems = sortedItems;

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
