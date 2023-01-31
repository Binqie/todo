import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const sidebarOpened = useSelector((state) => state.sidebarOpened);

  return (
    <div className={"sidebar " + (sidebarOpened ? "show" : "")}>
      <div className="sidebar-title">
        <h1 className="text-info">Todo app</h1>
      </div>
      <div className="sidebar-body">
        <div className="list-group">
          <Link to="/">Todos</Link>
          <Link to="/important">Important</Link>
          <Link to="/completed">Completed</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
