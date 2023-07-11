import React, { useState } from "react";
import InputBar from "./InputBar";
import ListItem from "./ListItem";
import List from "./List";

function Todo() {
  const [itemList, setItemList] = useState([]);

  function handleAdd(title) {
    setItemList([
      ...itemList,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function handleDelete(id) {
    setItemList(
      itemList.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function toggleItem(id, completed) {
    setItemList((itemList) => {
      return itemList.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  function updateItem(id, title) {
    setItemList((itemList) => {
      return itemList.map((item) => {
        if (item.id === id) return { ...item, title };
        return item;
      });
    });
  }

  return (
    <>
      <h1>TODO</h1>
      <InputBar onAdd={handleAdd}></InputBar>
      <List
        itemList={itemList}
        onDelete={handleDelete}
        toggleItem={toggleItem}
        updateItem={updateItem}
      ></List>
    </>
  );
}

export default Todo;
