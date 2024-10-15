import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Add dark mode class
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="p-8">
        <h1 className="text-4xl">Hello, Tailwind CSS</h1>
        <p className="mt-2">
          This is a {isDarkMode ? 'dark' : 'light'} mode implementation.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
