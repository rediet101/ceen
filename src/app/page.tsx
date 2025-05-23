import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Whyus from "@/components/Whyus";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Products/>
     <Whyus/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
