import './App.css';
import React, {useState} from 'react';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([]);

  return (
    <>
      <h1>Your favorite place to store your notes!</h1>
      <CreateNote notes={notes} setNotes={setNotes} />
      {notes.map((note) => <Note notes={notes} setNotes={setNotes} title={note.title} text={note.text} id={note.ID}/>)}
    </>
  );
}

export default App;
