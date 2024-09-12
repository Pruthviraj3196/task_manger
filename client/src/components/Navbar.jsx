import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-300">
          Task Scheduler
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="space-x-8">
        <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">
          View List
        </Link>
        <Link to="/create" className="hover:text-yellow-300 transition-colors duration-200">
          Create Task
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
