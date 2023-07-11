import React, { useState } from "react";

function InputBar({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onAdd(title)}>Add To List</button>
    </div>
  );
}

export default InputBar;
