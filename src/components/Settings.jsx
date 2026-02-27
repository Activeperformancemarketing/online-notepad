import React, { useState } from 'react';

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [themeColor, setThemeColor] = useState('#ffffff');

    const handleThemeToggle = () => {
        setIsDarkMode(prev => !prev);
    };

    const handleFontChange = (event) => {
        setSelectedFont(event.target.value);
    };

    const handleColorChange = (event) => {
        setThemeColor(event.target.value);
    };

    return (
        <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
            <h2>Settings</h2>
            <div>
                <label>
                    Dark Mode
                    <input type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
                </label>
            </div>
            <div>
                <label>
                    Font Selection:
                    <select value={selectedFont} onChange={handleFontChange}>
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Theme Color:
                    <input type="color" value={themeColor} onChange={handleColorChange} />
                </label>
            </div>
        </div>
    );
};

export default Settings;