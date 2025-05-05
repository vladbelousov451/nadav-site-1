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
          src="/images/822216_1013.svg"
          alt="IRM Logo"
          className="w-24 h-24 object-contain"
        />
      </Link>

      {/* Mobile Toggle */}
      <div className="md:hidden">
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

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-white font-bold space-x-6" dir="rtl">
        <Link href="/about" className="hover:underline">אודות</Link>
        <Link href="/services" className="hover:underline">שירותים</Link>
        <Link href="/Properties" className="hover:underline">דירות</Link>
        <Link href="/#contact" className="hover:underline">צור קשר</Link>
        <Link href="/BuyingSteps" className="hover:underline">ליווי משקיעים</Link>
        <Link href="/" className="hover:underline">דף הבית</Link>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 text-2xl font-bold z-40" dir="rtl">
          <Link href="/about" onClick={() => setIsOpen(false)}>אודות</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>שירותים</Link>
          <Link href="/Properties" onClick={() => setIsOpen(false)}>דירות</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>צור קשר</Link>
          <Link href="/BuyingSteps" onClick={() => setIsOpen(false)}>ליווי משקיעים</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>דף הבית</Link>
        </div>
      )}
    </header>
  );
}
