// src/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" text-gray-900 py-4 w-[90vw] mx-auto">
      <div className="  flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Bakaluba Services
        </Link>
        <div className="space-x-4">
          <Link
            href="/construction"
            className="hover:border-b-2 hover:border-gray-700 transition-all duration-200"
          >
            Construction
          </Link>
          <Link
            href="/speaking"
            className="hover:border-gray-700 transition-all duration-200"
          >
            Speaking
          </Link>
          <Link
            href="/contact"
            className="hover:border-gray-700 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
