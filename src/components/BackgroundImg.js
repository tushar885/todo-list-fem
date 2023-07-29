import React from "react";
import backImg from "../../images/bg-mobile-dark.jpg";

const BackgroundImg = () => {
  return (
    <div className="absolute top-0 w-full left-0 right-0">
      {" "}
      <img src={backImg} alt="BackGround Image" className="w-full" />{" "}
    </div>
  );
};

export default BackgroundImg;
