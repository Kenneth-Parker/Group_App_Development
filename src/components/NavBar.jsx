import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header className="styled-header"></header>
      <nav className="styled-nav">
        <Link to="/" className="styled-link">
          Home
        </Link>
        <Link to="/about" className="styled-link">
          About
        </Link>
        <Link to="/contact" className="styled-link">
          Contact
        </Link>
      </nav>
    </>
  );
}
