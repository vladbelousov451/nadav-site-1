// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars2Icon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent text-white">
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
          className="text-white focus:outline-none"
        >
          {isOpen ? <XCircleIcon className="w-6 h-6" /> : <Bars2Icon className="w-6 h-6" />}
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black/80 md:bg-transparent px-6 md:px-0 text-right md:text-left transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col md:flex-row items-end md:items-center space-y-4 md:space-y-0 md:space-x-6">
          
          <Link href="/about" className="hover:underline">אודות</Link>
          <Link href="/services" className="hover:underline">שירותים</Link>
          <Link href="/Properties" className="hover:underline">דירות</Link>
          <Link href="/#contact" className="hover:underline">צור קשר</Link>
          <Link href="/" className="hover:underline">ליווי משקיעים </Link>
          <Link href="/" className="hover:underline">דף הבית</Link>
        </div>
      </nav>
    </header>
  );
}
