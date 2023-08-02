import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import bg_dark_mobImg from "../../images/bg-mobile-dark.jpg";
import bg_light_mobImg from "../../images/bg-mobile-light.jpg";

const BackgroundImg = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`absolute top-0 w-full left-0 right-0 ${
        theme === "light" ? "bg-bgl_mob" : "bg-bgd_mob"
      } ${
        theme === "light" ? "sm:bg-bgl_desk" : "sm:bg-bgd_desk"
      } h-[214px]   bg-no-repeat bg-cover bg-top`}
    ></div>
  );
};

export default BackgroundImg;
