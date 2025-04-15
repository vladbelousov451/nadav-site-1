// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="hidden md:grid grid-cols-12 items-center px-8 py-4">
        <div className="col-span-2">
          <Link href="/" className="block">
            <img
              src="/images/logo-no-background.svg"
              alt="IRM Logo"
              className="w-24 h-24 object-contain"
            />
          </Link>
        </div>
        <nav className="col-span-10 flex justify-end gap-8 font-bold text-lg">
          
          <Link href="/about" className="hover:underline">אודות</Link>
          <Link href="/services" className="hover:underline">שירותים</Link>
          <Link href="/Properties" className="hover:underline">נכסים</Link>
          <Link href="#contact" className="hover:underline">צור קשר</Link>
          <Link href="/blog" className="hover:underline">בלוג</Link>
          <Link href="/" className="hover:underline">דף הבית</Link>
        </nav>
      </div>

      {/* Mobile version */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <Link href="/">
          <img
            src="/images/logo-no-background.svg"
            alt="IRM Logo"
            className="w-16 h-16 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
