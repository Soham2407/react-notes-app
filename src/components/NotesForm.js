import React from "react";

const NotesForm = ({ value, setValue, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="note">Add Note</label>
      <input
        type="text"
        id="note"
        placeholder="Enter Note"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NotesForm;
