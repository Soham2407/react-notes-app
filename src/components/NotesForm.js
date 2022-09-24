import React from "react";

const NotesForm = ({ value, setValue, submitHandler, isEdit }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Note"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">{isEdit ? "Edit" : "Add"}</button>
    </form>
  );
};

export default NotesForm;
