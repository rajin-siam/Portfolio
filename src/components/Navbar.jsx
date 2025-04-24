import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 h-[10vh]">
      <div className="flex items-center gap-5">
        <img
          src="/images/myprofile.jpg"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <span className="text-2xl font-medium">Md. Rajin Mashrur Siam</span>
      </div>

      <ul className="hidden md:flex gap-10 text-xl mr-1">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#problem-solving" className="hover:underline">
            Problem Solving
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
