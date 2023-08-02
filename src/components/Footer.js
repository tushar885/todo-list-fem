import React, { useContext, useState, useEffect } from "react";
import Filter from "./Filter";
import ShowContext from "../utils/ShowContext";
import TaskContext from "../utils/TaskContext";

const Footer = ({ taskList, setTaskList }) => {
  const { show, setShow } = useContext(ShowContext);

  const { allTaskList, setAllTaskList } = useContext(TaskContext);

  let pendingCount = 0;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((element) => {
    if (element.status === "pending") pendingCount++;
  });

  function clearCompleted(e) {
    const list = tasks.filter((task) => {
      return task.status !== "completed";
    });

    localStorage.setItem("tasks", JSON.stringify(list));
    if (show === "all") {
      setAllTaskList(list);
    } else {
      const temp = list.filter((task) => {
        return show === task.status;
      });
      setAllTaskList(temp);
    }
  }

  return (
    <div className="bg-skin-taskContainer border-t-[1px] border-skin-baseBorderOrTaskCompleted text-skin-base text-sm flex px-6 py-4 justify-between items-center gap-8 rounded-b-md relative">
      <p>{pendingCount} items left</p>
      <Filter taskList={taskList} setTaskList={setTaskList} />
      <p onClick={clearCompleted}>
        <button className="hover:text-skin-taskPending ">
          Clear Completed
        </button>
      </p>
    </div>
  );
};

export default Footer;
