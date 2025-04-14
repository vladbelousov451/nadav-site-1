// app/about/page.tsx
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
    <main className="bg-white text-gray-900 py-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">About Our Services</h1>
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
          >
            <div className="md:w-1/2 flex justify-center">{service.icon}</div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {service.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}