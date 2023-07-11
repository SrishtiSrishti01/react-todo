import React, { useState } from "react";

function ListItem({ item, onDelete, toggleItem, updateItem }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => toggleItem(item.id, e.target.checked)}
      />

      {edit ? (
        <>
          <input
            type="text"
            value={item.title}
            onChange={(e) => updateItem(item.id, e.target.value)}
          ></input>{" "}
          <button onClick={() => setEdit((edit) => !edit)}>Save</button>
        </>
      ) : (
        <>
          {item.title}
          <button onClick={() => setEdit((edit) => !edit)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </>
  );
}

export default ListItem;
