import React from "react";

const NotesForm = ({ value, setValue, submitHandler, isEdit }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Note"
        value={value}
        required
        className="p-1 w-50"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-1">
        {isEdit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default NotesForm;
