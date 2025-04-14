import { GlobeEuropeAfricaIcon, BuildingOffice2Icon, SparklesIcon } from "@heroicons/react/24/outline";
const steps = [
    {
      title: "Strategic Location",
      text: "Budapest is at the heart of Europe, offering strong connectivity and accessibility for international investors.",
      icon: <GlobeEuropeAfricaIcon className="w-20 h-20 text-teal-600" />
    },
    {
      title: "Growing Real Estate Market",
      text: "Property values in Budapest continue to rise with high rental yields and increasing demand.",
      icon: <BuildingOffice2Icon className="w-20 h-20 text-teal-600" />
    },
    {
      title: "Tourism & Lifestyle",
      text: "A vibrant cultural scene and affordable living make Budapest attractive for both residents and visitors.",
      icon: <SparklesIcon className="w-20 h-20 text-teal-600" />
    }
  ];
  
  export default function WhyBudapest() {
    return (
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Budapest?</h2>
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
              <div className="w-full md:w-1/2 flex justify-center">{step.icon}</div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }