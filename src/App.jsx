import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const filteredNotes = notes.filter(note =>
    note.title.includes(searchQuery) || note.content.includes(searchQuery)
  );

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header>
        <h1>Online Notepad</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
        <input 
          type="text" 
          placeholder="Search notes..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </header>
      <main>
        {
          filteredNotes.length ? (
            filteredNotes.map((note, index) => (
              <div key={index} className="note">
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </div>
            ))
          ) : (
            <p>No notes found.</p>
          )
        }
      </main>
      <footer>
        <button onClick={() => addNote({ title: 'New Note', content: '' })}>
          Add Note
        </button>
      </footer>
    </div>
  );
};

export default App;