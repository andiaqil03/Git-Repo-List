import { NavLink } from "react-router-dom";
import { AiOutlineFire, AiOutlineSetting } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div className="
      fixed bottom-0 left-0 right-0 
      bg-white shadow-md border-t 
      p-2 flex justify-around items-center
      z-50
    ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs font-medium ${
            isActive ? "text-blue-600" : "text-gray-500"
          }`
        }
      >
        <AiOutlineFire size={26} />
        <span>Trending</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs font-medium ${
            isActive ? "text-blue-600" : "text-gray-500"
          }`
        }
      >
        <AiOutlineSetting size={26} />
        <span>Settings</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
