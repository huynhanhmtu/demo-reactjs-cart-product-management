import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminSidebar(props) {
  const handleLogout = () => {
    if (window.confirm("Really?")) {
      localStorage.removeItem("UserInfo");
      props.transData(false);
    }
  }

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="/">Home Page</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to="/add-user">Add User</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a>
      </li>
    </ul>
  )
}