import React, { useContext, useEffect, useState, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import BackgroundImg from "./components/BackgroundImg";
import MainContainer from "./components/MainContainer";
import TaskContext from "./utils/TaskContext";
import ThemeContext from "./utils/ThemeContext";

const AppLayout = () => {
  const [taskList, setTaskList] = useState([]);
  const [allTaskList, setAllTaskList] = useState([]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log("Jackass");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setAllTaskList(tasks);
    setTaskList(tasks);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TaskContext.Provider value={{ allTaskList, setAllTaskList }}>
        <div
          className={`bg-skin-bodyContainer w-full    min-h-screen  relative flex items-start p-8 font-Josefin sm:justify-center ${
            theme === "light" ? "theme_light" : ""
          }`}
        >
          <BackgroundImg />
          <MainContainer taskList={taskList} setTaskList={setTaskList} />
        </div>
      </TaskContext.Provider>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
