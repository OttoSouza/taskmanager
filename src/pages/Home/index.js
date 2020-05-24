import React from "react";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import Header from "../../components/Header";
import TaskContextProvider from "../../context/Task";
import "../../App.css";
function PageHome() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
            <Header/>
          <div className="main">
            <TaskForm/>
            <TaskList />;
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default PageHome;
