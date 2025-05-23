import { ArrowBigRight } from "lucide-react";

export default function product() {
  return (
    <section className="bg-[#fff8fa] min-h-screen flex flex-col items-center justify-center px-4 py-10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-10 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Luxurious Beauty Products Tailored <br /> to Every Skin Type and Concern
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Our Products combines the power of nature and science to deliver visible results. 
          Crafted with the finest ingredients, it nourishes, hydrates, and rejuvenates your skin, 
          leaving it soft, smooth, and radiant.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex flex-col items-center justify-center">
      <div className="flex items-end justify-center gap-15 relative">
  {/* Left product */}
  <img src="/product1.svg" alt="Product Left" className="w-1/5 h-auto" />

  {/* Center product (main focus) */}
  <img src="/product2.svg" alt="Product Center" className="w-1/6 h-auto z-10" />

  {/* Right product */}
  <img src="/product3.svg" alt="Product Right" className="w-1/5 h-auto" />



    {/* Text block positioned above center-right */}
    <div className="absolute bottom-70 -ml-55 translate-x-1/2 md:left-[60%] text-left  p-4  max-w-xs">
      <h2 className="text-lg font-bold">Luxurious Beauty</h2>
      <p className="text-sm text-gray-400 mt-1 leading-snug">
        Lorem ipsumLorem IpsumLorem IpsumLorem IpsumLorem I <br />
        Lorem IpsumLO
      </p>
      <button className="mt-3 text-[#FF6BB8] bg-[#FFEDF6] px-4 py-1 rounded-full shadow hover:underline text-sm flex items-center gap-1 font-bold">
  Show Detail <span><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3747 8.37301L10.3747 14.373C10.1868 14.5609 9.932 14.6664 9.66632 14.6664C9.40065 14.6664 9.14585 14.5609 8.95799 14.373C8.77013 14.1852 8.66459 13.9304 8.66459 13.6647C8.66459 13.399 8.77013 13.1442 8.95799 12.9563L13.2505 8.66551H1.00049C0.735272 8.66551 0.480918 8.56015 0.293382 8.37262C0.105845 8.18508 0.000488281 7.93073 0.000488281 7.66551C0.000488281 7.40029 0.105845 7.14594 0.293382 6.9584C0.480918 6.77087 0.735272 6.66551 1.00049 6.66551H13.2505L8.95966 2.37218C8.77179 2.18432 8.66625 1.92952 8.66625 1.66384C8.66625 1.39817 8.77179 1.14337 8.95966 0.95551C9.14752 0.767649 9.40231 0.662109 9.66799 0.662109C9.93367 0.662109 10.1885 0.767649 10.3763 0.95551L16.3763 6.95551C16.4696 7.04854 16.5435 7.15907 16.5939 7.28076C16.6443 7.40245 16.6702 7.53289 16.67 7.66461C16.6699 7.79632 16.6437 7.92671 16.593 8.04827C16.5423 8.16984 16.4681 8.2802 16.3747 8.37301Z" fill="#FF6BB8"/>
</svg>
</span>
</button>

    </div>
  </div>
</div>


      {/* Pagination dots (optional) */}
      <div className="mt-10 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
}