import { useState, useEffect } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotesForm from "./components/NotesForm";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editNoteId, setEditNoteId] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const checkHandler = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, isChecked: !note.isChecked } : note
    );
    setNotes(newNotes);
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      const updatedNotes = notes.map((note) => {
        if (note.id === editNoteId) {
          return { ...note, id: editNoteId, title: value };
        } else {
          return note;
        }
      });
      setNotes(updatedNotes);
      setValue("");
      setIsEdit(false);
    } else {
      const note = {
        id: new Date().getTime().toString(),
        title: value,
        isChecked: false,
      };
      if (value) {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        setValue("");
      } else {
        return;
      }
    }
  };

  const editHandler = (id) => {
    setIsEdit(true);
    const editNote = notes.find((note) => note.id === id);
    setEditNoteId(id);
    setValue(editNote.title);
  };

  return (
    <>
      <Header title="Notes App" />
      <main className="container mt-4">
        <NotesForm
          value={value}
          setValue={setValue}
          submitHandler={submitHandler}
          isEdit={isEdit}
        />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Content
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          setValue={setValue}
          value={value}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          submitHandler={submitHandler}
          editHandler={editHandler}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
