import React from "react";
import Header from "./Header";
import NewTask from "./NewTask";
import TaskContainer from "./TaskContainer";
import Task from "./Task";

const MainContainer = () => {
  return (
    <div className="z-10 relative w-full">
      <Header />
      <NewTask />
      <TaskContainer />
    </div>
  );
};

export default MainContainer;
