import { useTheme } from "../context/ThemeContext";

const SettingsPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Settings</h1>

      <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
        <span className="text-lg">Enable Dark Mode</span>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {darkMode ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
