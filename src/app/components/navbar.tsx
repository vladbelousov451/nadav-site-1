"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars2Icon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent text-white">
      {/* Logo */}
      <Link href="/" className="block z-50">
        <img
          src="/images/822216_1013.svg"
          alt="IRM Logo"
          className="w-24 h-24 object-contain"
        />
      </Link>

      {/* Mobile menu toggle */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <XCircleIcon className="w-8 h-8" />
          ) : (
            <Bars2Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0
          fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
          bg-black/90 md:bg-transparent text-white
          flex flex-col md:flex-row items-center justify-center md:justify-end
          space-y-6 md:space-y-0 md:space-x-8 text-xl font-bold
          transition-transform duration-300 ease-in-out
        `}
      >
        <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>אודות</Link>
        <Link href="/services" className="hover:underline" onClick={() => setIsOpen(false)}>שירותים</Link>
        <Link href="/Properties" className="hover:underline" onClick={() => setIsOpen(false)}>דירות</Link>
        <Link href="/#contact" className="hover:underline" onClick={() => setIsOpen(false)}>צור קשר</Link>
        <Link href="/BuyingSteps" className="hover:underline" onClick={() => setIsOpen(false)}>ליווי משקיעים</Link>
        <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>דף הבית</Link>
      </nav>
    </header>
  );
}
