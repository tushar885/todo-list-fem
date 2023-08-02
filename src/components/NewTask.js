import React, { useState, useContext } from "react";
import TaskContext from "../utils/TaskContext";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState("");
  const { allTaskList, setAllTaskList } = useContext(TaskContext);

  function changeHandler(e) {
    setNewTask(e.target.value);
  }

  function keyDownHandler(e) {
    const str = newTask.trim();
    if (e.key === "Enter") {
      if (str.length > 0) {
        const list = [
          { id: uuidv4(), description: str, status: "pending" },
          ...allTaskList,
        ];

        setAllTaskList(list);
        localStorage.setItem("tasks", JSON.stringify(list));
        setNewTask("");
        console.log(list);
      } else {
        console.log("Can't set a empty task, dumb!");
        setNewTask("");
      }
    }
  }

  return (
    <div className=" flex items-center my-8">
      {/* <input type="checkbox" id="newTask" name="newTask" disabled /> */}
      <input
        onChange={changeHandler}
        className="bg-skin-taskContainer w-full  px-6 py-4 rounded-md outline-none caret-skin-hoverBg text-skin-base "
        type="text"
        minLength={1}
        placeholder="Create a new todo..."
        value={newTask}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default NewTask;
