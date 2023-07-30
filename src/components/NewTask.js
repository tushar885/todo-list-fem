import React from "react";

const NewTask = () => {
  return (
    <div className=" flex items-center my-8">
      {/* <input type="checkbox" id="newTask" name="newTask" disabled /> */}
      <input
        className="bg-skin-taskContainer w-full  px-6 py-4 rounded-md outline-none caret-skin-hoverBg text-skin-base "
        type="text"
        minLength={1}
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default NewTask;
