import Hero from "./components/Hero";
import Services from "./components/Services";
import Properties from "./components/Properties";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import WhyBudapest from "./components/WhyBudapest";
import Stats from "./components/Stats";



export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero/>
      <Stats/> 
      <Services />
      <WhyBudapest/>
      <Properties />
      <Partners />
      <Contact/>
    </main>
  );
}