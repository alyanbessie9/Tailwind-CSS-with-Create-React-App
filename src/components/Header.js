import React from "react";
import { FaSearch } from "react-icons/fa"; // Ensure you have installed react-icons

function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 flex items-center justify-between z-20 relative">
      {/* Logo React yang berputar */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Replace with local logo URL if needed
          alt="React Logo"
          className="w-8 h-8 mr-2 animate-spin" // Logo size and spinning animation
        />
        <h1 className="text-lg mr-4">My Website</h1> {/* Text for My Website */}
      </div>

      {/* Elemen Pencarian */}
      <div className="flex items-center border rounded-lg overflow-hidden bg-white flex-grow max-w-xs mr-2">
        {" "}
        {/* Added mr-2 for spacing */}
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border-none outline-none rounded-l-lg w-full" // Full width for the input
        />
        <button className="bg-gray-200 text-black p-2 rounded-r-lg flex items-center">
          <FaSearch /> {/* Magnifying glass icon */}
        </button>
      </div>

      {/* Elemen Profil */}
      <div className="flex items-center">
        <img
          src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-701751695033488zipyc2pvo5.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </header>
  );
}

export default Header;
