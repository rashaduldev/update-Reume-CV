"use client";
// src/components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image/logo-removebg-preview.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Added isOpen state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to adjust the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isScrolled ? "bg-gray-600 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-black">
           <Image
           className="text-white"
           width={150}
           height={0}
           src={logo}
           alt="logo"
           />
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
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
            <Link href="#about" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-black">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-black">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
