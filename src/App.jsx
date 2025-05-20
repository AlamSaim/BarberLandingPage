import "./App.css";
import AboutSection from "./components/AboutSection";
import Barbers from "./components/Barbers";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurLocation from "./components/OurLocation";
import Pricing from "./components/Pricing";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Barbers />
      <OurLocation />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
