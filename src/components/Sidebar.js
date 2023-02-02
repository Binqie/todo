import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Todos</NavLink>
          <NavLink to="/important" className={({isActive}) => (isActive ? "active" : "")}>Important</NavLink>
          <NavLink to="/completed" className={({isActive}) => (isActive ? "active" : "")}>Completed</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
