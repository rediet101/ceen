"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-10 py-8">
        <div className="flex items-center h-10 ml-4 mt-3">
          <img src="logo.svg" alt="ceen logo" />
        </div>
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
      <section
          className="relative w-full flex items-center justify-center p-4 overflow-hidden"
          style={{
            minHeight: '83vh',
            backgroundImage: "url('/aboutbg.svg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex">
            <h2 className="text-[15vh] font-bold mr-160">CONTACT US</h2>
          </div>
        </section>

      <section className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 gap-8 py-12">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
          <form className="space-y-4">
            <Input type="text" placeholder="Name *" required />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone number *" required />
            <Textarea placeholder="Write Message" className="min-h-[120px]" />
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white w-full">
              SEND
            </Button>
          </form>
          <div className="flex justify-between mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-pink-500">📞</span>
              <div>
                <p className="font-medium">PHONE</p>
                <p>03 5432 1234</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">🏢</span>
              <div>
                <p className="font-medium">Address</p>
                <p>Germany</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-500">📧</span>
              <div>
                <p className="font-medium">EMAIL</p>
                <p>info@ceen.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative rounded-tr-[70px] rounded-br-[70px] overflow-hidden h-full">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.104523834324!2d106.81089004144118!3d-6.190614308879753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f69dbf3077c5%3A0x617afe28c3769a0f!2sKebon%20Kacang%2C%20Tanah%20Abang%2C%20Central%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1748005601984!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[500px] rounded-xl"
          ></iframe>
        </div>
      </section>
      <div className="pt-35">
        <Footer/>  
      </div> 
    </div>
  );
}
