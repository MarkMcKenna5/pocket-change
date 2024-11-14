'use client'

import { useState } from 'react';

export default function ToggleDarkMode() {
    const [darkMode, setDarkMode] = useState(false);


      const toggleDarkMode = () => {
        const isDarkMode = document.documentElement.classList.toggle('bg-dark-mode-bg');
        document.documentElement.classList.toggle('text-dark-mode-text');
        setDarkMode(isDarkMode)
      };

      return (
        <button onClick={toggleDarkMode} className="p-2 text-xs bg-[#f782a5] hover:bg-[#df2b64bd] text-white rounded-full absolute top-4 right-4">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      );
}