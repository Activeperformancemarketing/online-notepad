import React from 'react';

const NoteList = ({ notes, onSelect }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} className="note-item" onClick={() => onSelect(note.id)}>
                    <h3>{note.title}</h3>
                    <p>{note.preview}</p>
                    <small>{new Date(note.date).toUTCString()}</small>
                    <div className="tags">
                        {note.tags.map(tag => (<span key={tag} className="tag">{tag}</span>))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;