import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="profile-header">
        <img
          src="public/images/myprofile.jpg"
          alt="Profile"
          className="navbar-profile-img"
        />
        <span className="navbar-name">Md. Rajin Mashrur Siam</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#problem-solving">Problem Solving</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
