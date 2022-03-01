import React from 'react'

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
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a>
      </li>
    </ul>
  )
}