import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gradient-to-b from-gray-900 to-[#00329e] text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 z-10 mt-16 shadow-lg">
      <NavLink
        to="/menu-a"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
      >
        Menu A
      </NavLink>
      <NavLink
        to="/menu-b"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
      >
        Menu B
      </NavLink>
      <NavLink
        to="/menu-c"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
      >
        Menu C
      </NavLink>
    </aside>
  );
}

export default Sidebar;
