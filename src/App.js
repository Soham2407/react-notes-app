import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  const [value, setValue] = useState("");

  const setAndSaveItems = (items) => {
    setNotes(items);
    localStorage.setItem("notes", JSON.stringify(items));
  };

  const checkHandler = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, isChecked: !note.isChecked } : note
    );
    setAndSaveItems(newNotes);
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setAndSaveItems(newNotes);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const note = {
      id: new Date().getTime().toString(),
      title: value,
      isChecked: false,
    };
    if (value) {
      const newNotes = [...notes, note];
      setAndSaveItems(newNotes);
      setValue("");
    } else {
      return;
    }
  };
  return (
    <div>
      <Header title="Notes App" />
      <Content
        notes={notes}
        setValue={setValue}
        value={value}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
        submitHandler={submitHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
