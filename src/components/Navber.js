"use client"
// src/components/Navbar.js
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-indigo-400">
            MyPortfolio
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-6`}
        >
          <li>
            <Link href="#about" className="hover:text-indigo-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-indigo-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-indigo-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-indigo-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
