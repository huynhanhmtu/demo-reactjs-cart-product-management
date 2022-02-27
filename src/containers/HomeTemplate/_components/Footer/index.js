import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterHome() {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Footer</Link>
      <Link className="nav-link" to="/about" style={{ color: "rgba(0,0,0,.5)" }}>About Us</Link>
    </footer>
  )
}