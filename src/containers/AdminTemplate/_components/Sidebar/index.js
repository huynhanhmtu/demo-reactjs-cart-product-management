import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to="/add-user">Add User</NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</Link>
      </li>
    </ul>
  )
}