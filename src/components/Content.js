import React from "react";
import List from "./List";
import NotesForm from "./NotesForm";

const Content = ({
  notes,
  checkHandler,
  deleteHandler,
  value,
  setValue,
  submitHandler,
}) => {
  return (
    <main>
      <NotesForm
        value={value}
        setValue={setValue}
        submitHandler={submitHandler}
      />
      <List
        notes={notes}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
    </main>
  );
};

export default Content;
