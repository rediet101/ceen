import { fillOffset } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Community Section */}
      <section className="mt-20 bg-pink-400 text-white rounded-xl px-8 py-12 mx-4 lg:mx-8 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8  ">
        <div className="max-w-lg mt-10">
          <h3 className="text-2xl font-bold mb-3 ">Join Our Beauty Community</h3>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Id tempus enim nisl lorem
            id morbi vitae. Vitae viverra sed nam non mi elementum. Quam vitae
            nisl suspendisse proin ultricies tur.
          </p>
          <Link href="#">
          <button className="bg-white text-pink-500 font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-pink-100 transition">
            Follow Us
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8892 1.55371C17.6401 1.55378 18.2572 1.80845 18.7788 2.33008C19.3004 2.85171 19.5551 3.46874 19.5552 4.21973C19.5552 4.9707 19.3003 5.58774 18.7788 6.10938C18.2572 6.631 17.6401 6.88665 16.8892 6.88672C16.5255 6.88672 16.1938 6.82282 15.8892 6.69922C15.5733 6.57106 15.3005 6.39704 15.0659 6.17773L14.7036 5.83887L14.2749 6.08887L6.46924 10.6445L6.02197 10.9053L6.16455 11.4033C6.19075 11.495 6.20567 11.5764 6.21143 11.6484C6.21927 11.7469 6.22283 11.8618 6.22217 11.9941C6.22148 12.1305 6.2175 12.2512 6.21045 12.3564C6.20596 12.4233 6.19299 12.4991 6.16748 12.584L6.01611 13.0869L6.46924 13.3516L14.2749 17.9072L14.7046 18.1572L15.0669 17.8174C15.3011 17.5978 15.5732 17.4241 15.8882 17.2969C16.1932 17.1737 16.525 17.1101 16.8892 17.1094C17.6401 17.1094 18.2572 17.3641 18.7788 17.8857C19.3004 18.4074 19.5551 19.0244 19.5552 19.7754C19.5552 20.5264 19.3003 21.1434 18.7788 21.665C18.2572 22.1867 17.6401 22.4423 16.8892 22.4424C16.1381 22.4424 15.5212 22.1867 14.9995 21.665C14.4778 21.1433 14.2222 20.5265 14.2222 19.7754C14.2222 19.7585 14.2251 19.6973 14.2388 19.5693C14.2517 19.4486 14.272 19.2884 14.2993 19.0879L14.3599 18.6465L13.9751 18.4219L6.16943 13.8662L5.73975 13.6162L5.37744 13.9561C5.14302 14.1758 4.87054 14.3495 4.55518 14.4775C4.32686 14.5702 4.08342 14.6299 3.82275 14.6533L3.55615 14.6641H3.55518C2.80419 14.664 2.18716 14.4093 1.66553 13.8877C1.14391 13.3661 0.889209 12.7491 0.88916 11.998C0.88916 11.247 1.14401 10.63 1.66553 10.1084C2.18716 9.58677 2.80419 9.33113 3.55518 9.33105C3.91884 9.33105 4.25053 9.39495 4.55518 9.51855C4.87101 9.64671 5.14386 9.82073 5.37842 10.04L5.74072 10.3789L6.16943 10.1289L13.9751 5.57324L14.4224 5.3125L14.2798 4.81445C14.2538 4.72351 14.24 4.64377 14.2349 4.57422C14.2274 4.47332 14.2229 4.35546 14.2222 4.21973C14.2222 3.46874 14.4779 2.85171 14.9995 2.33008C15.5211 1.80859 16.1382 1.55371 16.8892 1.55371Z"
                fill="#FF6BB8"
                stroke="#FF6BB8"
                strokeWidth="1.33333"
              />
            </svg>
          </button>
          </Link>
        </div>

        {/* Parent container should NOT hide overflow */}
<div className="absolute overflow-visible">
  {/* Product image - extending out */}
  <div className="relative bottom-25  left-180 ">
    <img
      src="/footer.png"
      alt="Cleansing Cream"
      className="w-140 lg:w-140 object-contain drop-shadow-xl mt-10"
    />
  </div>
</div>

      </section>

      {/* Navigation and Links */}
      <section className="px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 ml-10 mt-10">
          {/* Main Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link href="/" className="hover:text-pink-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-pink-400 transition-colors">About</Link>
            <Link href="/product" className="hover:text-pink-400 transition-colors">Product</Link>
            <Link href="/contact" className="hover:text-pink-400 transition-colors">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: facebookIcon, alt: "Facebook" },
              { icon: instagramIcon, alt: "Instagram" },
              { icon: twitterIcon, alt: "Twitter" },
              { icon: youtubeIcon, alt: "YouTube" }
            ].map((social, index) => (
              <a key={index} href="#" className="hover:opacity-80 transition-opacity">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-black/20 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 ml-10">
          <p className="text-sm">© 2025 CEEN. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="CEEN logo" className="h-25" />
          </div>

          <div className="flex gap-4">
            <Link href="/terms" className="text-xs hover:text-pink-400 transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/privacy-policy" className="text-xs hover:text-pink-400 transition-colors">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

// Social Icons Components (define these outside the Footer component)
const facebookIcon = (
  <svg width="24" height="24" viewBox="0 0 49 48" fill="none">
    <path d="M48.5 24C48.5 10.7453 37.7547 0 24.5 0C11.2453 0 0.5 10.7453 0.5 24C0.5 35.255 8.24912 44.6995 18.7026 47.2934V31.3344H13.7538V24H18.7026V20.8397C18.7026 12.671 22.3995 8.8848 30.4194 8.8848C31.94 8.8848 34.5637 9.18336 35.637 9.48096V16.129C35.0706 16.0694 34.0866 16.0397 32.8645 16.0397C28.9294 16.0397 27.4088 17.5306 27.4088 21.4061V24H35.2482L33.9013 31.3344H27.4088V47.8243C39.2926 46.3891 48.501 36.2707 48.501 24H48.5Z" fill="black"/>
    <path d="M33.9005 31.3344L35.2473 24H27.408V21.406C27.408 17.5305 28.9286 16.0396 32.8636 16.0396C34.0857 16.0396 35.0697 16.0694 35.6361 16.1289V9.48093C34.5628 9.18237 31.9392 8.88477 30.4185 8.88477C22.3987 8.88477 18.7017 12.671 18.7017 20.8396V24H13.7529V31.3344H18.7017V47.2934C20.5584 47.7542 22.5005 48 24.4992 48C25.4832 48 26.4537 47.9395 27.407 47.8243V31.3344H33.8995H33.9005Z" fill="white"/>
  </svg>
);

const instagramIcon = (
  <svg width="24" height="24" viewBox="0 0 49 48" fill="none">
    <path d="M24.5 4.32187C30.9125 4.32187 31.6719 4.35 34.1938 4.4625C36.5375 4.56562 37.8031 4.95938 38.6469 5.2875C39.7625 5.71875 40.5688 6.24375 41.4031 7.07812C42.2469 7.92188 42.7625 8.71875 43.1938 9.83438C43.5219 10.6781 43.9156 11.9531 44.0188 14.2875C44.1313 16.8187 44.1594 17.5781 44.1594 23.9813C44.1594 30.3938 44.1313 31.1531 44.0188 33.675C43.9156 36.0188 43.5219 37.2844 43.1938 38.1281C42.7625 39.2438 42.2375 40.05 41.4031 40.8844C40.5594 41.7281 39.7625 42.2438 38.6469 42.675C37.8031 43.0031 36.5281 43.3969 34.1938 43.5C31.6625 43.6125 30.9031 43.6406 24.5 43.6406C18.0875 43.6406 17.3281 43.6125 14.8063 43.5C12.4625 43.3969 11.1969 43.0031 10.3531 42.675C9.2375 42.2438 8.43125 41.7188 7.59688 40.8844C6.75313 40.0406 6.2375 39.2438 5.80625 38.1281C5.47813 37.2844 5.08438 36.0094 4.98125 33.675C4.86875 31.1438 4.84063 30.3844 4.84063 23.9813C4.84063 17.5688 4.86875 16.8094 4.98125 14.2875C5.08438 11.9437 5.47813 10.6781 5.80625 9.83438C6.2375 8.71875 6.7625 7.9125 7.59688 7.07812C8.44063 6.23438 9.2375 5.71875 10.3531 5.2875C11.1969 4.95938 12.4719 4.56562 14.8063 4.4625C17.3281 4.35 18.0875 4.32187 24.5 4.32187Z" fill="black"/>
    <path d="M24.5 11.6719C17.6938 11.6719 12.1719 17.1938 12.1719 24C12.1719 30.8062 17.6938 36.3281 24.5 36.3281C31.3062 36.3281 36.8281 30.8062 36.8281 24C36.8281 17.1938 31.3062 11.6719 24.5 11.6719ZM24.5 31.9969C20.0844 31.9969 16.5031 28.4156 16.5031 24C16.5031 19.5844 20.0844 16.0031 24.5 16.0031C28.9156 16.0031 32.4969 19.5844 32.4969 24C32.4969 28.4156 28.9156 31.9969 24.5 31.9969Z" fill="white"/>
    <path d="M40.1937 11.1848C40.1937 12.7785 38.9 14.0629 37.3156 14.0629C35.7219 14.0629 34.4375 12.7691 34.4375 11.1848C34.4375 9.59102 35.7313 8.30664 37.3156 8.30664C38.9 8.30664 40.1937 9.60039 40.1937 11.1848Z" fill="white"/>
  </svg>
);

const twitterIcon = (
  <svg width="24" height="24" viewBox="0 0 45 41" fill="none">
    <path d="M35.1526 0.808594H41.8995L27.1594 17.6556L44.5 40.5805H30.9225L20.2881 26.6767L8.11989 40.5805H1.36886L17.1349 22.5608L0.5 0.808594H14.4222L24.0348 13.5173L35.1526 0.808594ZM32.7846 36.5422H36.5232L12.3908 4.63486H8.37892L32.7846 36.5422Z" fill="black"/>
  </svg>
);

const youtubeIcon = (
  <svg width="24" height="24" viewBox="0 0 461 461" fill="none">
    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" fill="black"/>
  </svg>
);

export default Footer;