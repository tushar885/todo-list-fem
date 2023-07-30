import React from "react";
import Status from "./Status";
import Filter from "./Filter";

const Footer = () => {
  return (
    <div className="bg-skin-taskContainer text-skin-base text-sm flex px-6 py-4 justify-between gap-8 rounded-b-md relative">
      <p>5 items left</p>
      <Filter />
      <p>Clear Completed</p>
    </div>
  );
};

export default Footer;
