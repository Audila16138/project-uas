import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="https://s10.aconvert.com/convert/p3r68-cdx67/aj69l-pzne7.png"
          className="text-3xl font-bold tracking-widest"
        >
          Wed<span className="text-yellow-300">Ease</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 text-lg"
          >
            Home
          </Link>
          <Link
            to="/pesan-wo"
            className="hover:text-yellow-300 transition duration-300 text-lg"
          >
            Pesan WO
          </Link>
          <Link
            to="/wo-ku"
            className="hover:text-yellow-300 transition duration-300 text-lg"
          >
            WO Ku
          </Link>
          <Link
            to="/ulasan"
            className="hover:text-yellow-300 transition duration-300 text-lg"
          >
            Ulasan
          </Link>
        </nav>
      </div>
    </header>
  );
}
