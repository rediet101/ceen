"use client";

import Link from "next/link";
import Image from 'next/image';
import { Button } from "./ui/button";

const NavbarHero = () => {
  const brandLogos = [
    { name: 'Amplitude', img: 'amplitude.svg', filter: 'none' },
    { name: 'Invoice2go', img: 'invoice.svg', filter: 'none' },
    { name: 'PENG', img: 'peng.svg', filter: 'none' },
    { name: 'VEOXKIOOC', img: 'verox.svg', filter: 'none' },
    { name: 'RPUBLICA', img: 'rpublica.svg', filter: 'none' },
  ];

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-8">
        {/* Logo */}
        <div className="flex items-center h-10 ml-4 mt-3">
          <img src="logo.svg" alt="ceen logo" />
        </div>

        {/* Nav Links */}
        <div className="space-x-10 mr-10">
          <Link href="/" className="text-black hover:underline hover:decoration-pink-500">
            Home
          </Link>
          <Link href="/about" className="text-black hover:underline hover:decoration-pink-500">
            About Us
          </Link>
          <Link href="/product" className="text-black hover:underline hover:decoration-pink-500">
            Products
          </Link>
          <Link href="/contact" className="text-black hover:underline hover:decoration-pink-500">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 gap-12">

          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left relative" style={{ top: '-20px' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Natural Beauty,<br />
              Perfected for You
            </h1>
            <p className="text-lg md:text-xl text-black">
              Experience the glow of naturally radiant, healthy skin with CEEN products.<br />
              Our ingredients rich in antioxidants and deeply nourishing.<br />
              Paired with this formula delivers proven results.
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-md">
              Explore →
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="flex-1 flex items-center justify-center relative min-h-[600px]">
            {/* Second bottle (background) */}
            <div style={{ position: 'absolute', right: '1px', top: '-150px', zIndex: 10 }}>
              <Image
                src="/Hero2.svg"
                alt="Product 2"
                width={440}
                height={200}
                className="rounded-lg"
              />
            </div>

            {/* First bottle (front) */}
            <div style={{ position: 'absolute', left: '-150px', top: '-100px', zIndex: 20 }}>
              <Image
                src="/Hero.svg"
                alt="Product 1"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden">

              {/* Carousel track */}
              <div className="flex animate-infinite-scroll gap-8 whitespace-nowrap items-center">
                {[...brandLogos, ...brandLogos].map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="inline-flex items-center">
                    <img
                      src={`/${logo.img}`}
                      alt={logo.name}
                      className="h-5 object-contain mx-10"
                      style={{ filter: logo.filter }}
                    />
                  </div>
                ))}
              </div>

              {/* Gradient fade effects */}
              {/* Left Fade */}
              <div className="pointer-events-none absolute top-0 left-0 w-32 h-full z-20" style={{ background: 'linear-gradient(to right, #f9e0eb, transparent)' }}></div>

              {/* Right Fade */}
              <div className="pointer-events-none absolute top-0 right-0 w-32 h-full z-20" style={{ background: 'linear-gradient(to left, #f9e0eb, transparent)' }}></div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarHero;
