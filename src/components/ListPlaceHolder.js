import React from "react";

const ListPlaceHolder = ({ desc }) => {
  return (
    <div
      className={`border-b-[1px] border-b-skin-baseBorderOrTaskCompleted w-full px-6 py-4 outline-none text-skin-taskPending flex justify-between items-center overflow-x-auto gap-4`}
    >
      {desc}
    </div>
  );
};

export default ListPlaceHolder;
