import React from "react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const ListItem = ({ note, checkHandler, deleteHandler, editHandler }) => {
  const { id, title, isChecked } = note;
  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => checkHandler(id)}
      />
      <label style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {title}
      </label>
      <FaTrashAlt onClick={() => deleteHandler(id)} />
      <FaPencilAlt onClick={() => editHandler(id)} />
    </li>
  );
};

export default ListItem;
