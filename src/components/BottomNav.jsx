import { NavLink } from "react-router-dom";
import { AiOutlineFire, AiOutlineSetting } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-2 flex justify-around">
      
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-blue-500" : "text-gray-500 dark:text-gray-300"
          }`
        }
      >
        <AiOutlineFire size={22} />
        <span>Trending</span>
      </NavLink>

      <NavLink 
        to="/settings" 
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-blue-500" : "text-gray-500 dark:text-gray-300"
          }`
        }
      >
        <AiOutlineSetting size={22} />
        <span>Settings</span>
      </NavLink>

    </div>
  );
};

export default BottomNav;
