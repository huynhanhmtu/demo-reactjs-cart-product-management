import React from 'react'

export default function AdminDashboard() {
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
        <a className="nav-link disabled">Logout</a>
      </li>
    </ul>
  )
}
