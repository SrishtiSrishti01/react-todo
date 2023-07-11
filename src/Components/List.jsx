import React from "react";
import ListItem from "./ListItem";

function List({ itemList, onDelete, toggleItem, updateItem }) {
  return (
    <>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.completed ? (
              <del>
                <ListItem
                  item={item}
                  onDelete={onDelete}
                  toggleItem={toggleItem}
                  updateItem={updateItem}
                ></ListItem>
              </del>
            ) : (
              <ListItem
                item={item}
                toggleItem={toggleItem}
                updateItem={updateItem}
                onDelete={onDelete}
              ></ListItem>
            )}
            {/* <ListItem item = {item} onDelete = {onDelete}></ListItem> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
