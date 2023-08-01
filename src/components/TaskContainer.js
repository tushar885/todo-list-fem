import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import Footer from "./Footer";
import TaskContext from "../utils/TaskContext";
import ShowContext from "../utils/ShowContext";
import ListPlaceHolder from "./ListPlaceHolder";

const TaskContainer = ({ taskList, setTaskList }) => {
  const [show, setShow] = useState("all");
  console.log(show);
  const { allTaskList, setAllTaskList } = useContext(TaskContext);
  // console.log(setTaskList);

  useEffect(() => {
    console.log("Jackass - TaskContainer");
    // const filList =
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (show === "all") {
      setAllTaskList(tasks);
    } else {
      const list = tasks.filter((task) => {
        return show === task.status;
      });
      setAllTaskList(list);
    }
    // setTaskList(allTaskList);
  }, [show]);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      <div className="TaskContainer rounded-md bg-skin-taskContainer h-fit">
        <div className="max-h-[19em] overflow-y-auto">
          {allTaskList.length > 0 ? (
            allTaskList.map(({ id, description, status }) => {
              // console.log("Dfndfadsfads");
              return (
                <Task
                  key={id}
                  data={id}
                  desc={description}
                  stat={status}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              );
            })
          ) : (
            // <Task data={0} desc={"Add a todo task."} stat={"pending"} />

            <ListPlaceHolder
              desc={
                show === "all"
                  ? "You don't have any tasks logged."
                  : show === "pending"
                  ? "You don't have any tasks logged that is pending."
                  : "You don't have any tasks logged that has been completed."
              }
            />
          )}
        </div>
        <Footer taskList={taskList} setTaskList={setTaskList} />
      </div>
    </ShowContext.Provider>
  );
};

export default TaskContainer;
