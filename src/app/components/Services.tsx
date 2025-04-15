import Link from "next/link";
import { ChartBarIcon, WrenchScrewdriverIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function Services() {
  const items = [
    {
      title: <><span className="text-4xl text-teal-600 font-bold">I</span>nvestment</>,
      desc: "השקעות נדל בהתאמה אישיתאנו מתמחים באיתור וביצוע עסקאות נדלן במגוון אסטרטגיות, ביניהן:",
      icon: <ChartBarIcon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
    },
    {
      title: <><span className="text-4xl text-teal-600 font-bold">R</span>enovation</>,
      desc: "שיפוץ והשבחת נכסיםלאחר איתור הנכס, אנו מבצעים תהליך השבחה מקיף בהתאם לייעוד הנכס ולדרישות המשקיע.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
    },
    {
      title: <><span className="text-4xl text-teal-600 font-bold">M</span>anagement</>,
      desc: "השקעה בראש שקט – אנחנו דואגים להכול, אתם נהנים מהתשואה.",
      icon: <BuildingOfficeIcon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
    }
  ];
  return (
    <section className="bg-white py-16 px-4 text-center max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="shadow p-6 rounded-lg">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/services" className="inline-block bg-teal-600 text-white py-3 px-6 rounded shadow hover:bg-teal-700 transition">See More</Link>
      </div>
    </section>
  );
}