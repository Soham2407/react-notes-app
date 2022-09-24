import React from "react";
import List from "./List";

const Content = ({ notes, checkHandler, deleteHandler, editHandler }) => {
  return (
    <main>
      <List
        notes={notes}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </main>
  );
};

export default Content;
