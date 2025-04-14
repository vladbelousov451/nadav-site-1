import Link from "next/link";
export default function Navbar() {
    return (
      <header className="absolute  w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent text-white">
        <div className="text-2xl font-bold">IRM</div>
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </header>
    );
  }