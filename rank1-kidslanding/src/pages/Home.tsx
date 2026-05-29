import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import WhyShop from "../components/WhyShop";
import FeaturedCollections from "../components/FeaturedCollections";
import ValueForMoney from "../components/ValueForMoney";
import PlayComfort from "../components/PlayComfort";
import Testimonials from "../components/Testimonials";
import StoreSection from "../components/StoreSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
      <WhyShop/>
      <FeaturedCollections/>\
      <ValueForMoney/>
      <PlayComfort/>
      <Testimonials/>
      <StoreSection/>\
      <Footer/>
    </div>
  );
}