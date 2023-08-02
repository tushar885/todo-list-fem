import React, { useContext } from "react";
import sunImg from "../../images/icon-sun.svg";
import moonImg from "../../images/icon-moon.svg";
import ThemeContext from "../utils/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function clickHandler(e) {
    if (theme === "dark") {
      setTheme("light");
      e.target.src = moonImg;
      e.target.alt = "moon";
    } else {
      setTheme("dark");
      e.target.src = sunImg;
      e.target.alt = "sun";
    }
  }

  return (
    <div className="m-auto flex w-full justify-between items-center">
      <h1 className="text-white text-3xl tracking-[0.4em] font-bold hover:cursor-pointer">
        TODO
      </h1>
      <img
        src={sunImg}
        alt="sun"
        className="mr-0 hover:cursor-pointer"
        onClick={clickHandler}
        tabIndex={2}
      />
    </div>
  );
};

export default Header;
