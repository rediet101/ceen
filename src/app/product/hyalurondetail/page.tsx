import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function VitamincDetailPage() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
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

      <main className="w-full bg-[#fff8fa] overflow-hidden">
        {/* Product Header */}
        <section
          className="relative w-full flex items-center justify-center p-4 overflow-hidden"
          style={{
            minHeight: "83vh",
            backgroundImage: "url('/aboutbg.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex">
            <h2 className="text-[15vh] font-bold mr-160">PRODUCTS</h2>
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="max-w-7xl mx-auto py-26 px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="p-4">
                <Image
                  src="/product2.svg"
                  alt="Cleansing Cream"
                  width={300}
                  height={300}
                  className="object-contain mx-auto"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xl bg-[#FFEDF6] hover:shadow-md"
                  >
                    <Image
                      src={`/product333.png`}
                      alt={`Thumbnail ${i}`}
                      width={180}
                      height={180}
                      className="object-contain rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-gray-800 mb-2">
              Hyaluron Serum
              </h1>
              <div className="flex items-center mb-6 pt-2">
                <div className="flex text-yellow-400 ">
                  <svg
                    width="104"
                    height="22"
                    viewBox="0 0 104 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_119_620)">
                      <path
                        d="M12.6936 7.01887L9.83527 1.22754L6.97694 7.01887L0.585938 7.94754L5.2106 12.4555L4.1186 18.8209L9.83527 15.8155L15.5519 18.8209L14.4599 12.4555L19.0846 7.94754L12.6936 7.01887Z"
                        fill="#FF6BB8"
                        stroke="#FF6BB8"
                        strokeWidth="0.583333"
                      />
                      <path
                        d="M33.3596 7.01887L30.5013 1.22754L27.643 7.01887L21.252 7.94754L25.8766 12.4555L24.7846 18.8209L30.5013 15.8155L36.218 18.8209L35.126 12.4555L39.7506 7.94754L33.3596 7.01887Z"
                        fill="#FF6BB8"
                        stroke="#FF6BB8"
                        strokeWidth="0.583333"
                      />
                      <path
                        d="M54.0276 7.01887L51.1693 1.22754L48.3109 7.01887L41.9199 7.94754L46.5446 12.4555L45.4526 18.8209L51.1693 15.8155L56.8859 18.8209L55.7939 12.4555L60.4186 7.94754L54.0276 7.01887Z"
                        fill="#FF6BB8"
                        stroke="#FF6BB8"
                        strokeWidth="0.583333"
                      />
                      <path
                        d="M74.6936 7.01887L71.8353 1.22754L68.9769 7.01887L62.5859 7.94754L67.2106 12.4555L66.1186 18.8209L71.8353 15.8155L77.5519 18.8209L76.4599 12.4555L81.0846 7.94754L74.6936 7.01887Z"
                        fill="#FF6BB8"
                        stroke="#FF6BB8"
                        strokeWidth="0.583333"
                      />
                      <path
                        d="M95.3596 7.01887L92.5013 1.22754L89.643 7.01887L83.252 7.94754L87.8766 12.4555L86.7846 18.8209L92.5013 15.8155L98.218 18.8209L97.126 12.4555L101.751 7.94754L95.3596 7.01887Z"
                        fill="#FF6BB8"
                        stroke="#FF6BB8"
                        strokeWidth="0.583333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_119_620">
                        <rect
                          width="103.333"
                          height="21.3333"
                          fill="white"
                          transform="translate(0.585938 0.154297)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-gray-600 ml-2">(1 customer review)</span>
              </div>
              <p className="text-[#818181] mb-8 pt-5">
                {" "}
                Our CEEN Anti-Aging Set contains three of the most effective 
                anti-aging  <br /> products in a pleasant travel size. These are the 
                plumping Hyaluron Serum, the <br /> deeply effective Retinol Serum and
                the refreshing Vitamin C Serum. If you <br /> come together all these 
                products, you get an extensive and highly effective <br /> care program 
                for the home. This set is also ideal as a gift set. Convince <br />
                yourself and discover the natural care routine! 
              </p>
              {/* Application Tips */}
              <div className="mb-8 pt-5">
                <h3 className="font-semibold text-lg mb-2">
                  Application Tips:
                </h3>
                <p className="text-[#818181]">
                  Apply 2 to 3 times a week in the evening to cleansed skin
                  (neck and décolleté) and massage slowly.
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
                <p className="text-[#818181]">
                  
                  ALOE BARBADENSIS LEAF JUICE, AQUA, SODIUM HYALURONATE, ROSA <br />
                  CANINA FRUIT EXTRACT, GLYCERIN, CUCUMIS SATIVUS (CUCUMBER)  <br />
                  JUICE, RETINOL, ALLANTOIN, CANNABIS SATIVA (HEMP) SEED OIL, <br />
                  TOCOPHEROL, PANTHENOL, HAEMATOCOCCUS PLUVIALIS EXTRACT <br />
                  (ASTAXANTHIN), ROSMARINUS OFFICINALIS LEAF EXTRACT, OLEA <br />
                  EUROPAEA FRUIT OIL, DEXTRIN, ACACIA GUM, LECITHIN, CITRUS <br />
                  AURANTIUM OIL, SODIUM BENZONATE, SORBIC ACID, SODIUM <br />
                  HYDROXIDE, BENZYL ALCOHOL, LINALOOL, LIMONENE <br />
                </p>
              </div>

              <div className="mb-8 pt-5">
                <div className="border-t border-black/10 w-130 mb-2"></div>
                <h3 className="font-semibold text-lg mb-2">Share:</h3>
                <div className="flex space-x-10">
                  <svg
                    width="289"
                    height="33"
                    viewBox="0 0 289 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6782 32.3418H2.35209C1.37639 32.3418 0.585938 31.5509 0.585938 30.5755V2.10794C0.585938 1.13236 1.37651 0.341797 2.35209 0.341797H30.8199C31.7952 0.341797 32.5859 1.13236 32.5859 2.10794V30.5755C32.5859 31.551 31.7951 32.3418 30.8199 32.3418H22.6655V19.9496H26.825L27.4478 15.1202H22.6655V12.0369C22.6655 10.6387 23.0537 9.6858 25.0588 9.6858L27.6161 9.68469V5.36519C27.1739 5.30634 25.6558 5.17484 23.8896 5.17484C20.2025 5.17484 17.6782 7.42548 17.6782 11.5586V15.1202H13.508V19.9496H17.6782V32.3418Z"
                      fill="#FF6BB8"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M203.236 9.4815C203.097 12.6371 200.918 16.9507 196.715 22.4244C192.364 28.1479 188.679 31.0078 185.666 31.0078C183.804 31.0078 182.225 29.2679 180.936 25.7765C180.073 22.5732 179.215 19.3699 178.353 16.1762C177.393 12.6829 176.366 10.9372 175.267 10.9372C175.028 10.9372 174.195 11.4466 172.757 12.4673L171.252 10.5003C172.829 9.09802 174.383 7.69003 175.916 6.28585C178.016 4.44286 179.595 3.47558 180.648 3.37446C183.132 3.13026 184.663 4.85305 185.241 8.53711C185.856 12.515 186.289 14.9876 186.528 15.9568C187.247 19.2535 188.033 20.8981 188.895 20.8981C189.563 20.8981 190.568 19.8335 191.907 17.7024C193.247 15.5676 193.96 13.9459 194.058 12.8279C194.25 10.9849 193.533 10.0691 191.907 10.0691C191.141 10.0691 190.351 10.2332 189.54 10.5766C191.121 5.38915 194.131 2.86697 198.579 3.01388C201.874 3.10736 203.43 5.26705 203.236 9.4815Z"
                      fill="#FF6BB8"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M117.92 6.16467C116.744 6.70012 115.478 7.06222 114.15 7.22402C115.506 6.39195 116.547 5.07258 117.037 3.50089C115.767 4.27133 114.364 4.83182 112.866 5.13229C111.671 3.82447 109.964 3.00781 108.074 3.00781C104.451 3.00781 101.511 6.02214 101.511 9.73948C101.511 10.2672 101.568 10.7796 101.68 11.2726C96.2241 10.9914 91.3876 8.31418 88.1475 4.23666C87.5822 5.23437 87.2591 6.39195 87.2591 7.62464C87.2591 9.95906 88.418 12.02 90.1798 13.2276C89.1055 13.1949 88.0912 12.8886 87.2047 12.3879V12.4707C87.2047 15.7335 89.468 18.455 92.4732 19.0714C91.9229 19.2293 91.3425 19.3083 90.7433 19.3083C90.3207 19.3083 89.9075 19.2678 89.5074 19.1889C90.3432 21.8623 92.7662 23.8095 95.6399 23.8615C93.3935 25.6682 90.5611 26.7449 87.4864 26.7449C86.9567 26.7449 86.4327 26.7141 85.9199 26.6524C88.8256 28.5593 92.2778 29.6745 95.9837 29.6745C108.061 29.6745 114.663 19.4181 114.663 10.5215C114.663 10.2287 114.657 9.93594 114.646 9.64896C115.929 8.6994 117.043 7.51485 117.92 6.16467Z"
                      fill="#FF6BB8"
                      fillOpacity="0.8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M286.994 7.36474C287.953 8.34263 288.266 10.5633 288.266 10.5633C288.266 10.5633 288.586 13.1716 288.586 15.779V18.2242C288.586 20.8326 288.266 23.44 288.266 23.44C288.266 23.44 287.953 25.6606 286.994 26.6385C285.898 27.7953 284.682 27.9148 283.995 27.9824C283.919 27.9898 283.85 27.9966 283.788 28.0041C279.31 28.3304 272.586 28.3405 272.586 28.3405C272.586 28.3405 264.266 28.264 261.706 28.0162C261.585 27.9934 261.438 27.9756 261.271 27.9555C260.46 27.8576 259.187 27.7038 258.177 26.6385C257.218 25.6606 256.906 23.44 256.906 23.44C256.906 23.44 256.586 20.8326 256.586 18.2242V15.779C256.586 13.1716 256.906 10.5633 256.906 10.5633C256.906 10.5633 257.218 8.34263 258.177 7.36474C259.276 6.20629 260.493 6.08806 261.18 6.02129C261.254 6.01405 261.323 6.00742 261.384 6.00013C265.862 5.67383 272.579 5.67383 272.579 5.67383H272.593C272.593 5.67383 279.31 5.67383 283.788 6.00013C283.849 6.00743 283.917 6.01407 283.992 6.02132C284.679 6.0881 285.896 6.20648 286.994 7.36474ZM269.281 12.1322L269.282 21.1869L277.927 16.6752L269.281 12.1322Z"
                      fill="#FF6BB8"
                      fillOpacity="0.8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16 flex flex-col items-center">
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                {["Description", "Additional information", "Reviews (1)"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`py-2 px-1 font-medium ${
                        tab === "Description"
                          ? "text-pink-500 border-b-2 border-pink-500"
                          : "text-gray-500"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="text-gray-700 text-center mb-5">
              <p>
                Lorem ipsum dolor sit amet, et natum albucius vis. Ius iuvaret
                legimus referrentur an, qui harum verear ea, vim te porro
                detracto. Minim aeterno vis in. Duo error nobis mnesarchum ad,
                latine feugait in sea. His ad diam altera percipit, illud
                nostrud docendi vim ei. Hinc constituam cum cu. Per an
                sadipscing necessitatibus, vel quas idque recusabo an, sale
                constituam est ne.
              </p>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Related products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#FFEDF6B2]/70 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <Image
                      src="/product333.png"
                      alt="Cleansing Cream"
                      width={300}
                      height={300}
                      className="w-full object-contain"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-center">
                      Cleansing Cream
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="pt-35">
        <Footer />
      </div>
    </div>
  );
}
