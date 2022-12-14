import Note from "./components/Note";
import { useState } from "react";

const App = ({ notes: n }) => {
  const [notes, setNotes] = useState(n);
  const [note, setNote] = useState("Add a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNote("");
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show important" : "Show all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={note} onChange={(e) => setNote(e.target.value)} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
