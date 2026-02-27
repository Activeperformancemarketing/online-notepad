import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoteEditor = () => {
    const [note, setNote] = useState('');

    const handleChange = (value) => {
        setNote(value);
    };

    return (
        <div>
            <ReactQuill 
                value={note} 
                onChange={handleChange} 
                modules={{
                    toolbar: [
                        [{'header': [1, 2, false]}, 'bold', 'italic', 'underline',
                        'strike', 'blockquote', 'code-block'],
                        [ 'link', 'image', 'video'],
                        ['clean']
                    ]
                }}
            />
        </div>
    );
};

export default NoteEditor;