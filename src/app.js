import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundImg from "./components/BackgroundImg";
import MainContainer from "./components/MainContainer";

const AppLayout = () => {
  return (
    <div className="bg-skin-bodyContainer min-w-full min-h-screen h-fit relative flex items-start p-8 font-Josefin ">
      <BackgroundImg />
      <MainContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
