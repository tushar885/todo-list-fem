import React from "react";
import Header from "./Header";
import NewTask from "./NewTask";

const MainContainer = () => {
  return (
    <div className="z-10 relative w-full">
      <Header />
      <NewTask />
    </div>
  );
};

export default MainContainer;
