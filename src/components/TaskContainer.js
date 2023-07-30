import React from "react";
import Task from "./Task";
import Footer from "./Footer";

const TaskContainer = () => {
  return (
    <div className="TaskContainer rounded-md bg-skin-taskContainer">
      {Array(5)
        .fill("0")
        .map((e, i) => {
          console.log("Dfndfadsfads");
          return <Task data={i} />;
        })}
      <Footer />
    </div>
  );
};

export default TaskContainer;
