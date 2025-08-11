// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* You can replace this text with a logo later */}
            <Link href="/" className="text-2xl font-bold text-green-800">
              Olarahmah's Farm
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link href="/products" className="text-gray-700 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Our Products
              </Link>
              <Link href="/services" className="text-gray-700 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Farmer Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}