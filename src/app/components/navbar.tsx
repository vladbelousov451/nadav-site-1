// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars2Icon, XCircleIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white shadow-md">
      <Link href="/" className="block">
        <img
          src="/images/logo-no-background.svg"
          alt="IRM Logo"
          className="w-24 h-24 object-contain"
        />
      </Link>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <XCircleIcon className="w-6 h-6" /> : <Bars2Icon className="w-6 h-6" />}
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-white md:bg-transparent md:relative md:flex md:space-x-6 text-right md:text-left px-6 md:px-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col md:flex-row items-end md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-gray-800 font-bold hover:text-emerald-600">דף הבית</Link>
          <Link href="/about" className="text-gray-800 font-bold hover:text-emerald-600">אודות</Link>
          <Link href="/#services" className="text-gray-800 font-bold hover:text-emerald-600">שירותים</Link>
          <Link href="/properties" className="text-gray-800 font-bold hover:text-emerald-600">דירות</Link>
          <Link href="/#contact" className="text-gray-800 font-bold hover:text-emerald-600">צור קשר</Link>
        </div>
      </nav>
    </header>
  );
}
