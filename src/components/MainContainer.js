import React from "react";
import Header from "./Header";
import NewTask from "./NewTask";
import TaskContainer from "./TaskContainer";
import Task from "./Task";

const MainContainer = ({ taskList, setTaskList }) => {
  return (
    <div className="z-10 relative w-full sm:w-[35em]">
      <Header />
      <NewTask taskList={taskList} setTaskList={setTaskList} />
      <TaskContainer taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default MainContainer;
