import React from "react";
import { useTheme } from "../context/ThemeContext";

const SettingsPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
        <span className="text-lg">Dark Mode</span>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg border dark:border-gray-600"
        >
          {darkMode ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
