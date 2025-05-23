'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const brandLogos = [
    { name: 'Amplitude', img: 'amplitude.svg', filter: 'none' },
    { name: 'Invoice2go', img: 'invoice.svg', filter: 'none' },
    { name: 'PENG', img: 'peng.svg', filter: 'none' },
    { name: 'VEOXKIOOC', img: 'verox.svg', filter: 'none' },
    { name: 'RPUBLICA', img: 'rpublica.svg', filter: 'none' },
  ]

  const faqs = [
    {
      question: 'Are CEEN Cosmetics products cruelty-free?',
      answer:
        'Yes! We are committed to ethical beauty and never test our products on animals. Each product page includes detailed descriptions and recommendations. You can also take our skincare quiz for personalized suggestions.',
    },
    { question: 'How can I find the right product for my skin type?', answer: '' },
    { question: 'Do you offer international shipping?', answer: '' },
    { question: 'Do your products contain any harmful chemicals?', answer: '' },
    { question: 'What is your return policy?', answer: '' },
    { question: 'What is your return policy?', answer: '' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/bg.svg')" }}>
      {/* Navbar */}
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

      <main className="w-full bg-[#fff8fa] overflow-hidden">
        {/* About Header */}
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
            <h2 className="text-[15vh] font-bold mr-160">ABOUT US</h2>
          </div>
        </section>

        {/* History and Principles */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden max-w-md w-full">
                <img src="/history1.svg" alt="Skincare Product Demonstration" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="space-y-6 -ml-25 pb-30">
                <h3 className="text-4xl font-bold mb-10">History</h3>
                <p className="text-gray-600 leading-relaxed text-justify ">
                  Lorem ipsum dolor sit amet consectetur. Sit platea eget velit urna nisl pretium id semper. 
                  Sollicitudin venenatis ut tellus egestas fermentum ligula sagittis. Odio pellentesque mattis 
                  sit aliquam nulla velit ipsum. Auctor eget rhoncus tortor consectetur nunc tellus feugiat morbi arcu.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias natus dolor aperiam sunt accusamus quo expedita, officia adipisci libero voluptatum, impedit blanditiis debitis in quod, reiciendis earum quia repellat quibusdam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam mollitia dicta provident eum aspernatur, tempore placeat consequatur, similique exercitationem inventore facere ex nihil, eos deserunt labore velit quaerat voluptates!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus quis a fugiat ab soluta obcaecati tempore dolorem, quasi incidunt aliquid beatae ex! Consectetur natus inventore, cumque molestias quaerat eveniet!               
                </p>
              </div>

            <div className="space-y-6 pl-10">
  <h3 className="text-4xl font-bold mb-4">Our Principles</h3>
  <p className="text-gray-600 leading-relaxed text-justify">
    Lorem ipsum dolor sit amet consectetur. Sit platea eget velit urna nisl pretium id semper. 
    Sollicitudin venenatis ut tellus egestas fermentum ligula sagittis. Odio pellentesque mattis 
    sit aliquam nulla velit ipsum. Auctor eget rhoncus tortor consectetur nunc tellus feugiat morbi arcu.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto ipsum repudiandae dignissimos, at autem odit tempore adipisci vero qui deleniti? Ad maxime dolorem esse tempora quibusdam distinctio adipisci illum?
  </p>
</div>
            <div className="flex justify-start">
              <div className="rounded-lg overflow-hidden max-w-md w-full">
                <img src="/history2.svg" alt="Skincare Products" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Middle section with icon */}
        <section
          className="relative w-full flex items-center justify-center p-4 overflow-hidden"
          style={{
            minHeight: '80vh',
            backgroundImage: "url('/img.svg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <svg fill="#fff" height="100px" width="100px" viewBox="0 0 512 512">
              <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"></path>
              <polygon points="189.776,141.328 189.776,370.992 388.672,256.16 "></polygon>
            </svg>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-20 bg-[#fff8fa] relative overflow-hidden">
          <div className="font-semibold text-center text-4xl mb-12">
            <h1>Our Partners</h1>
          </div>
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="relative overflow-hidden">
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
                <div className="pointer-events-none absolute top-0 left-0 w-32 h-full z-20" style={{ background: 'linear-gradient(to right, #f9e0eb, transparent)' }}></div>
                <div className="pointer-events-none absolute top-0 right-0 w-32 h-full z-20" style={{ background: 'linear-gradient(to left, #f9e0eb, transparent)' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* User Count Statement */}
        <div className="text-center text-xl">
          <h2>CEEN is used by over 100,000+ clients across the globe</h2>
        </div>

        <section className="bg-[#fff8fa] py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center gap-2 text-[#1d133f] font-semibold text-lg">
            <Plus className="w-5 h-5 text-[#1d133f] group-hover:hidden" />
            <Minus className="w-5 h-5 text-green-500 hidden group-hover:block" />
            <span>{faq.question}</span>
          </div>

          {/* Slide-down answer on hover */}
          <div
            className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out"
          >
            <p className="text-gray-600 mt-4 leading-relaxed text-sm">
              {faq.answer || 'Stay tuned. We’ll update this answer soon.'}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </main>
      <div className="pt-35">
     <Footer/>  
     </div> 
    </div>
  )
}

export default AboutPage
