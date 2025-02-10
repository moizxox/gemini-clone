import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import RecentBox from "./RecentBox";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallerDisplay, setIsSmallerDisplay] = useState(false);
  const checkScreenSize = () => {
    if (window.innerWidth < 768) {
      setIsSmallerDisplay(true);
      setExtended(false);
    } else {
      setIsSmallerDisplay(false);
      setExtended(true);
    }
  };

  window.addEventListener("resize", checkScreenSize);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside
      className={`${
        isSmallerDisplay
          ? "fixed z-20 h-full"
          : "bg-light-secondary relative dark:bg-dark-secondary "
      } transition-all duration-300 pt-20 flex flex-col gap-5 overflow-hidden ${
        extended
          ? "w-[320px] px-3 bg-light-secondary dark:bg-dark-secondary"
          : "w-[60px] px-2"
      }`}
    >
      <button
        className={`text-accent cursor-pointer rounded-full ${
          isSmallerDisplay && "size-10"
        } bg-light-secondary dark:bg-dark-secondary p-2`}
        onClick={() => setExtended(!extended)}
      >
        <IoMenu size={24} />
      </button>
      <button
        className={`flex items-center bg-[#e7ecef] dark:bg-accent cursor-pointer rounded-full p-3 gap-2 text-nowrap justify-center transition-all duration-100 ${
          extended
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <FaPlus size={20} />
        <span>New Chat</span>
      </button>
      <div
        className={`transition-opacity duration-300 ${
          extended ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <RecentBox />
      </div>
      {(!isSmallerDisplay || extended) && (
        <button
          className="text-accent cursor-pointer w-full absolute bottom-[30px] left-[50%] translate-x-[-50%]"
          onClick={toggleDarkMode}
        >
          <div className="text-accent cursor-pointer ml-[15px] relative">
            <IoMdSunny
              size={24}
              className={`transition-all duration-300 ${
                !isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            />
            <FaMoon
              size={22}
              className={`transition-all duration-300 absolute top-0 ${
                isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
