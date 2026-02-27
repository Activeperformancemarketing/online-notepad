import React, { useState } from 'react';

const TagManager = () => {
    const [tags, setTags] = useState(['example1', 'example2']); // default tags
    const [newTag, setNewTag] = useState('');

    const addTag = () => {
        if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
            setNewTag('');
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const editTag = (index, updatedTag) => {
        const updatedTags = [...tags];
        updatedTags[index] = updatedTag;
        setTags(updatedTags);
    };

    return (
        <div>
            <h2>Tag Manager</h2>
            <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a new tag"
            />
            <button onClick={addTag}>Add Tag</button>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}> 
                        <span>{tag}</span>
                        <button onClick={() => removeTag(tag)}>Remove</button>
                        <input
                            type="text"
                            onBlur={(e) => editTag(index, e.target.value)}
                            defaultValue={tag}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagManager;