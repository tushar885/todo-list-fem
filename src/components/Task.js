import React from "react";
import crossImg from "../../images/icon-cross.svg";

const Task = ({ data }) => {
  return (
    <div
      className={`border-b-[1px] border-b-skin-baseBorderOrTaskCompleted w-full px-6 py-5 outline-none text-skin-taskPending flex justify-between items-center overflow-x-scroll gap-4`}
    >
      <div className="flex items gap-5">
        <input type="checkbox" name={`task${data}`} id={`task${data}`} />
        <label htmlFor={`task${data}`} className="leading-5">
          Okay, this is a testing task.
        </label>
      </div>
      <img src={crossImg} alt="cross" className="inline-block" />
    </div>
  );
};

export default Task;
