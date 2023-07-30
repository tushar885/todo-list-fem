import React from "react";
import sunImg from "../../images/icon-sun.svg";

const Header = () => {
  return (
    <div className="m-auto flex w-full justify-between items-center">
      <h1 className="text-white text-3xl tracking-[0.2em] font-bold ">TODO</h1>
      <img src={sunImg} alt="sun" className="mr-0" />
    </div>
  );
};

export default Header;
