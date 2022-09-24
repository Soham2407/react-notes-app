import React from "react";
import ListItem from "./ListItem";

const List = ({ notes, checkHandler, deleteHandler }) => {
  return (
    <section>
      {notes.length ? (
        <ul>
          {notes.map((note) => (
            <ListItem
              note={note}
              key={note.id}
              checkHandler={checkHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No Notes Found 😮</p>
      )}
    </section>
  );
};

export default List;
