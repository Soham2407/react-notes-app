import React from "react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const ListItem = ({ note, checkHandler, deleteHandler }) => {
  const { id, title, isChecked } = note;
  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => checkHandler(id)}
      />
      <label>{title}</label>
      <FaTrashAlt onClick={() => deleteHandler(id)} />
      <FaPencilAlt />
    </li>
  );
};

export default ListItem;
