import Link from "next/link"
import Footer from "@/components/Footer"
const productpage = () => {
    
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
                <h2 className="text-[15vh] font-bold mr-160">PRODUCTS</h2>
              </div>
            </section>

            <section className="bg-[#FFEDF6B2]/70 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with underline */}
        <h1 className="text-5xl font-bold inline-block border-b border-black pb-2">
          Cleanser Products
        </h1>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Product images */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
  {/* Product 1 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product11.svg" alt="Product 1" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Product 1</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <a
    href="#"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_50_1282)">
<path d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z" fill="#FF6BB8"/>
</g>
<defs>
<clipPath id="clip0_50_1282">
<rect width="17.48" height="17.3333" fill="white" transform="matrix(1 0 0 -1 0.94043 17.7285)"/>
</clipPath>
</defs>
</svg>
</span>
  </a>
</div>

</div>

{/* Product 2 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product22.svg" alt="Product 2" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Product 2</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <Link
    href="/product/detail"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE
    <span>
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_50_1282)">
          <path
            d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z"
            fill="#FF6BB8"
          />
        </g>
        <defs>
          <clipPath id="clip0_50_1282">
            <rect
              width="17.48"
              height="17.3333"
              fill="white"
              transform="matrix(1 0 0 -1 0.94043 17.7285)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  </Link>
</div>

</div>

{/* Product 3 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product33.svg" alt="Product 3" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Product 3</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <a
    href="#"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_50_1282)">
<path d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z" fill="#FF6BB8"/>
</g>
<defs>
<clipPath id="clip0_50_1282">
<rect width="17.48" height="17.3333" fill="white" transform="matrix(1 0 0 -1 0.94043 17.7285)"/>
</clipPath>
</defs>
</svg>
</span>
  </a>
</div>

</div>

    </div>
    </div>
    </section>
             {/*anti aging */}
    <section className="bg-[#FFEDF6B2]/70 py-5 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with underline */}
        <h1 className="text-5xl font-bold inline-block border-b border-black pb-2">
        Anti-Aging Products
        </h1>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto ">
        Our CEEN Anti-Aging Set contains three of the most effective anti-aging products in a pleasant travel size. These are the plumping Hyaluron Serum, the deeply effective Retinol Serum and the refreshing Vitamin C Serum. If you come together all these products, you get an extensive and highly effective care program for the home. This set is also ideal as a gift set. Convince yourself and discover the natural care routine
        </p>

        {/* Product images */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
  {/* Product 1 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product11.svg" alt="Product 1" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Hyaluron Serum</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <a
    href="/product/hyalurondetail"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_50_1282)">
<path d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z" fill="#FF6BB8"/>
</g>
<defs>
<clipPath id="clip0_50_1282">
<rect width="17.48" height="17.3333" fill="white" transform="matrix(1 0 0 -1 0.94043 17.7285)"/>
</clipPath>
</defs>
</svg>
</span>
  </a>
</div>

</div>

{/* Product 2 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product22.svg" alt="Product 2" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Retinol Serum</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <a
    href="/product/retinoldetail"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_50_1282)">
<path d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z" fill="#FF6BB8"/>
</g>
<defs>
<clipPath id="clip0_50_1282">
<rect width="17.48" height="17.3333" fill="white" transform="matrix(1 0 0 -1 0.94043 17.7285)"/>
</clipPath>
</defs>
</svg>
</span>
  </a>
</div>

</div>

{/* Product 3 */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="h-[450px] flex items-center justify-center">
    <img src="/product33.svg" alt="Product 3" className="h-full object-contain" />
  </div>
  <div className="mt-4 bg-white rounded-2xl shadow-md p-5 w-[320px] min-h-[240px] hover:shadow-xl transition duration-300">
  <h3 className="mt-6 text-2xl font-semibold mb-3">Vitamin C Serum</h3>
  <p className="text-base text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit.
  </p>
  <a
    href="/product/vitamincdetail"
    className="text-pink-500 text-base font-semibold hover:underline inline-flex items-center gap-1"
  >
    LEARN MORE <span><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_50_1282)">
<path d="M12.6934 3.15397C12.5692 3.02984 12.4225 2.96777 12.2533 2.96777C12.084 2.96777 11.9373 3.02984 11.8132 3.15397C11.689 3.26682 11.627 3.40788 11.627 3.57715C11.627 3.74642 11.689 3.89312 11.8132 4.01725L16.248 8.45215H1.62305C1.45378 8.45215 1.3099 8.51139 1.19141 8.62988C1.07292 8.74837 1.01367 8.89225 1.01367 9.06152C1.01367 9.23079 1.07292 9.37467 1.19141 9.49316C1.3099 9.61165 1.45378 9.6709 1.62305 9.6709H16.248L11.8132 14.1058C11.689 14.2186 11.627 14.3625 11.627 14.5374C11.627 14.7123 11.689 14.8562 11.8132 14.9691C11.9373 15.0932 12.084 15.1553 12.2533 15.1553C12.4225 15.1553 12.5692 15.0932 12.6934 14.9691L18.1608 9.50163C18.2849 9.3775 18.347 9.23079 18.347 9.06152C18.347 8.89225 18.2849 8.74555 18.1608 8.62142L12.6934 3.15397Z" fill="#FF6BB8"/>
</g>
<defs>
<clipPath id="clip0_50_1282">
<rect width="17.48" height="17.3333" fill="white" transform="matrix(1 0 0 -1 0.94043 17.7285)"/>
</clipPath>
</defs>
</svg>
</span>
  </a>
</div>

</div>

             </div>
             </div>
             </section>
             {/* photo section */}
             <section
              className="relative w-full flex items-center justify-center p-4 overflow-hidden py-20 px-4"
              style={{
                minHeight: '83vh',
                backgroundImage: "url('/splash.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
             </section>
             <section
  className="relative w-full flex items-center justify-start overflow-hidden"
  style={{
    minHeight: '100vh',
    backgroundImage: "url('/VisitUs.svg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Changed from 'cover' to 'contain'
   
  }}
>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start relative z-10 w-full">
    {/* Text content on left */}
    <div className="md:w-1/2 mb-15 md:mb-0 md:pr-7">
    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 -ml-15">
        Visit Our Store to Buy <br/>
        Beauty Products
      </h1>
      <p className="text-white text-md md:text-md max-w-md leading-relaxed mb-10 text-left -ml-15">
      Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Etiam accumsan arcu est, at lobortis nulla porta
eu. Aenean vel dolor enim. Etiam aliquam mauris
eros, eget ornare diam volutpat eu. Fusce auctor
pretium tellus vitae bibendum. Proin eget accumsan
felis.
      </p>

      <div className="flex flex-col items-start">
        <button className="bg-white text-pink-500 font-semibold text-lg px-8 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-pink-100 transition-all transform hover:scale-105 -ml-15">
          View Our Store
          {/* Your existing arrow icon */}
          <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.167 4.55566C16.4247 4.55571 16.6734 4.64472 16.8711 4.80664L16.9521 4.88086L24.9521 12.8809C25.1603 13.0892 25.2773 13.3715 25.2773 13.666C25.2773 13.9237 25.1882 14.1724 25.0264 14.3701L24.9521 14.4512L16.9531 22.4492C16.7443 22.6475 16.4669 22.7574 16.1787 22.7549C15.8875 22.7523 15.6093 22.6356 15.4033 22.4297C15.1974 22.2238 15.0798 21.9455 15.0771 21.6543C15.0746 21.363 15.1873 21.0816 15.3896 20.8721L15.3887 20.8711L20.2012 15.9082L21.2969 14.7773H2.83301C2.53859 14.7772 2.2561 14.6603 2.04785 14.4521C1.83948 14.2438 1.72266 13.9607 1.72266 13.666C1.72267 13.3714 1.83961 13.0892 2.04785 12.8809C2.23018 12.6985 2.46928 12.5858 2.72363 12.5605L2.83301 12.5547H21.2969L20.2012 11.4248L15.3887 6.45898L15.3818 6.45117L15.3076 6.37012C15.1457 6.17242 15.0557 5.92382 15.0557 5.66602C15.0557 5.37141 15.1735 5.08921 15.3818 4.88086L15.3809 4.87988C15.5631 4.69781 15.8025 4.58584 16.0566 4.56055L16.167 4.55566Z" fill="#FF6BB8" stroke="#FF6BB8" strokeWidth="1.33333"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
<div className="pt-35">
     <Footer/>  
     </div>      
     </main>
         </div>
  )
}

export default productpage