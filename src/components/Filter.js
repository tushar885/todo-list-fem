import React, { useContext } from "react";
import TaskContext from "../utils/TaskContext";
import ShowContext from "../utils/ShowContext";

const Filter = ({ taskList, setTaskList }) => {
  const { allTaskList, setAllTaskList } = useContext(TaskContext);
  const { show, setShow } = useContext(ShowContext);

  function filterList(status) {
    setShow(status);
    // console.log(setTaskList);
  }

  return (
    <div className="flex grow justify-evenly rounded-md text-lg bg-skin-taskContainer left-0 right-0 px-6 py-4 absolute  sm:relative sm:top-auto top-20 sm:px-0 sm:py-0">
      <p
        onClick={() => {
          // setTaskList(allTaskList);
          filterList("all");
        }}
      >
        <button
          className={`${
            show === "all" ? "text-skin-constant" : ""
          } hover:text-skin-taskPending  focus:text-skin-constant`}
        >
          All
        </button>
      </p>
      <p
        onClick={() => {
          filterList("pending");
        }}
      >
        <button
          className={`${
            show === "pending" ? "text-skin-constant" : ""
          } hover:text-skin-taskPending focus:text-skin-constant`}
        >
          Active
        </button>
      </p>
      <p
        onClick={() => {
          filterList("completed");
        }}
      >
        <button
          className={`${
            show === "completed" ? "text-skin-constant" : ""
          } hover:text-skin-taskPending focus:text-skin-constant`}
        >
          Completed
        </button>
      </p>
    </div>
  );
};

export default Filter;
