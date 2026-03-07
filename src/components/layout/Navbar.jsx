import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Complaint-Box, KIOT</h2>
      <div className="navbar-actions">
        <button type="button">Home</button>
        <button type="button">My Complaints</button>
        <button type="button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
