import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="uppercase space-x-4 text-center  mt-5 mb-4 font-bold font-mono text-xl text-fuchsia-900">
        <Link to="/home">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
