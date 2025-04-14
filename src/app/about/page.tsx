import AboutIntro from "../components/about/AboutIntro";
import PartnerCards from "../components/about/Partner-Cards";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { ChartBarIcon, WrenchScrewdriverIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Investment",
    icon: <ChartBarIcon className="w-12 h-12 text-teal-600" />,
    content: [
      "We specialize in identifying real estate opportunities with high potential for ROI.",
      "Our team constantly analyzes the market trends to locate underpriced properties or emerging neighborhoods.",
      "We also assist in building tailored investment strategies for short-term flips or long-term growth."
    ]
  },
  {
    title: "Renovation",
    icon: <WrenchScrewdriverIcon className="w-12 h-12 text-teal-600" />,
    content: [
      "From minor updates to full-scale renovations, we handle it all.",
      "Our renovation experts ensure each property is modern, efficient, and visually stunning.",
      "We work with trusted contractors to maintain high standards and meet deadlines."
    ]
  },
  {
    title: "Management",
    icon: <BuildingOfficeIcon className="w-12 h-12 text-teal-600" />,
    content: [
      "We offer full-service property management — from marketing and leasing to maintenance and tenant relations.",
      "Our management services reduce vacancies and improve profitability.",
      "We handle everything so our clients enjoy stress-free ownership."
    ]
  }
];

export default function AboutPage() {
  return (
    <main>
        <Hero></Hero>
        <PartnerCards/>
         <AboutIntro></AboutIntro>
         <Contact></Contact>
    </main>
  );
}