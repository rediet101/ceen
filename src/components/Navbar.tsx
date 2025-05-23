import React from 'react'

const Navbar = () => {
  return (
    <div>
       {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-8">
        {/* Logo */}
        <div className="flex items-center h-10 ml-4 mt-3">
          <img src="/logo.svg" />{" "}
        </div>
        {/* Nav Links */}
        <div className="space-x-10 mr-10">
          <Link
            href="/"
            className="text-black hover:underline hover:decoration-pink-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:underline hover:decoration-pink-500"
          >
            About Us
          </Link>
          <Link
            href="/product"
            className="text-black hover:underline hover:decoration-pink-500"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-black hover:underline hover:decoration-pink-500"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar