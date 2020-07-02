import React from "react";

const Content = () => {
  return (
    <div className="col-md-9 main-content">
      <div className="row">
        <div className="col-md-6">
          <h1>Todo list</h1>
          <p>Today you have X tasks</p>
        </div>
        <div className="col-md-6">
          <button>Add Task</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Today's Schedule</h2>
          {/* List of tasks */}
        </div>
        <div className="col-md-6">
          <h3>Upcoming</h3>
          {/* List of tasks */}
          <h3>Past</h3>
          {/* List of tasks */}
        </div>
      </div>
    </div>
  );
};

export default Content;
