import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>Navigation</h2>
            <ul>
                <li>Folders</li>
                <li>Tags</li>
                <li>Favorites</li>
                <li>Archive</li>
                <li>Trash</li>
            </ul>
        </div>
    );
};

export default Sidebar;