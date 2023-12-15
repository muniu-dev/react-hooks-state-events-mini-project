import React from "react";

function Task({ onDelete, text, category }) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;