import Hero from "./components/Hero";
import Services from "./components/Services";
import Properties from "./components/Properties";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WhyBudapest from "./components/WhyBudapest";



export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <WhyBudapest/>
      <Properties />
      <Partners />
      <Contact/>
      <Footer />
    </main>
  );
}