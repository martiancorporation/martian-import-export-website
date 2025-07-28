import Image from "next/image";
import Hero from "./Home/Hero";
import ProductCategories from "./Home/product-categories";
import Services from "./Home/services";
import Certification from "./Home/certification";
import AboutUs from "./Home/about-us";
import GlobalPresence from "./Home/global-presence";
import WhyChooseUs from "./Home/why-choose-us";
import Testimonials from "./Home/testimonials";
import ContactUs from "./Home/contact-us";

export default function Home() {
  return (
    <main className="min-h-screen font-lato">
      <Hero />
      <ProductCategories />
      <Services />
      <Certification />
      <AboutUs />
      <GlobalPresence />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs/>
    </main>
  );
}
