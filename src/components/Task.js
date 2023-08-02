import React, { useContext } from "react";
import crossImg from "../../images/icon-cross.svg";
import TaskContext from "../utils/TaskContext";
import ShowContext from "../utils/ShowContext";

const Task = ({ data, desc, stat, taskList, setTaskList }) => {
  const { allTaskList, setAllTaskList } = useContext(TaskContext);
  const { show, setShow } = useContext(ShowContext);

  // console.log(taskList);
  function checkHandler(e) {
    console.log(e.target.id);
    //
    // console.log(taskList);
    // const list2 = taskList.map((task) => {
    //   console.log(task);
    //   console.log(e.target.id === task.id);
    //   if (e.target.id === task.id) {
    //     console.log(task.status);
    //     task.status = task.status === "pending" ? "completed" : "pending";
    //     console.log(task.status);
    //     console.log(task);
    //     return task;
    //   } else {
    //     return task;
    //   }
    // });
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = tasks.map((task) => {
      if (e.target.id === task.id) {
        task.status = task.status === "pending" ? "completed" : "pending";
        return task;
      } else {
        return task;
      }
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

    // setAllTaskList(list);
    // console.log(list2);
    // const mode = show;
    // // console.log(mode);
    // setShow("all");
    // setShow(show);
    // setTaskList(list2);
    // console.log(localStorage.getItem("tasks"));
  }

  function deleteHandler(e) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = tasks.filter((task) => {
      if (task.id !== e.target.id) return task;
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
    // console.log(list);
    // setTaskList(list);
    // setAllTaskList(list);
  }

  //? Tried to implement, the drag and drop thing, did it, but the ux was terrible to scrapped it.

  // function dragStartHandler(e) {
  //   console.log("Drag Start Handler");
  //   // e.target.style.opacity = 0.5;
  //   // e.target.classList.add("dragging");
  //   e.target.classList.add("opacity-50");
  //   dragSrcEl = e.target;

  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("text/html", e.target.innerHTML);
  // }

  // function dragEndHandler(e) {
  //   // e.target.style.opacity = 1;
  //   console.log("Drag End Handler");

  //   e.target.classList.remove("opacity-50");
  //   const tasksEle = document.querySelectorAll(".task");
  //   console.log(tasksEle);
  //   // e.target.classList.remove("dragging");
  //   tasksEle.forEach((ele) => {
  //     ele.classList.remove("blur-sm");
  //   });
  // }

  // function dragOverHandler(e) {
  //   e.preventDefault();
  //   return false;
  // }

  // function dragEnterHandler(e) {
  //   // e.stopPropagation();
  //   console.log("Drag Enter Handler");

  //   e.target.classList.add("blur-[]2px");
  // }
  // function dragLeaveHandler(e) {
  //   // e.stopPropagation();
  //   console.log("Drag Leave Handler");

  //   e.target.classList.remove("blur-[2px]");
  // }

  // function dropHandler(e) {
  //   console.log("Drop Handler");

  //   if (dragSrcEl !== e.target) {
  //     dragSrcEl.innerHTML = e.target.innerHTML;
  //     e.target.innerHTML = e.dataTransfer.getData("text/html");
  //   }

  //   e.stopPropagation(); // stops the browser from redirecting.
  //   return false;
  // }

  return (
    <div
      className={`task hover:cursor-pointer op bg-skin-taskContainer group border-b-[1px] border-b-skin-baseBorderOrTaskCompleted w-full px-6 py-4 outline-none text-skin-taskPending flex justify-between items-center overflow-x-auto gap-4 `}
      // draggable="true"
      // onDragStart={dragStartHandler}
      // onDragEnd={dragEndHandler}
      // onDrop={dropHandler}
      // onDragEnter={dragEnterHandler}
      // onDragLeave={dragLeaveHandler}
      // onDragOver={dragOverHandler}
    >
      <div className="flex items  gap-5">
        <input
          type="checkbox"
          id={data}
          checked={stat === "completed"}
          onChange={checkHandler}
          className="hover:cursor-pointer"
        />
        <label
          htmlFor={data}
          className={`leading-5 hover:cursor-pointer  ${
            stat === "completed" ? "line-through text-skin-base" : ""
          }`}
        >
          {desc}
        </label>
      </div>
      <img
        src={crossImg}
        alt="cross"
        className="hover:cursor-pointer lg:group-hover:opacity-100 lg:opacity-0"
        onClick={deleteHandler}
        id={data}
      />
    </div>
  );
};

export default Task;
