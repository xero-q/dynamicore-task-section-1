import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-blue-400 w-full px-6 py-1 rounded-2xl text-white font-bold">
      <Link to="/users">Users</Link>
      <Link to="/user-form">User Form</Link>
    </div>
  );
};

export default Nav;
