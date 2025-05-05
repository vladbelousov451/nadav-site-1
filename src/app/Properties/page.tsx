import Image from "next/image";
import Hero from "../components/Hero";
import BudapestMapSection from "../components/BudapestMapSection";

const apartments = [
  {
    title: "דירה ליד הפרלמנט",
    image: "/images/appartament-3.jpg",
    size: "50 מ",
    units: "2 יחידות דיור",
    price: "€75,000",
  },
  {
    title: "דירת לופט במרכז",
    image: "/images/appartament-1.jpg",
    size: "60 מ",
    units: "1 יחידת דיור",
    price: "€85,000",
  },
  {
    title: "דירה עם מרפסת",
    image: "/images/apartament-4.png",
    size: "55 מ",
    units: "3 יחידות דיור",
    price: "€92,000",
  },
  {
    title: "דירה עם מרפסת",
    image: "/images/apartament-5.png",
    size: "55 מ",
    units: "3 יחידות דיור",
    price: "€92,000",
  },
  {
    title: "דירה עם מרפסת",
    image: "/images/appartament-3.jpg",
    size: "55 מ",
    units: "3 יחידות דיור",
    price: "€92,000",
  },
  {
    title: "דירה עם מרפסת",
    image: "/images/apartament-5.png",
    size: "55 מ",
    units: "3 יחידות דיור",
    price: "€92,000",
  },
  {
    title: "דירה עם מרפסת",
    image: "/images/appartament-2.avif",
    size: "55 מ",
    units: "3 יחידות דיור",
    price: "€92,000",
  },
];

export default function ApartmentsPage() {
  return (
    <div>
      <Hero />

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight drop-shadow-md mb-12">
            דירות נבחרות
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {apartments.map((apartment, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={apartment.image}
                    alt={apartment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-right" dir="rtl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{apartment.title}</h3>
                  <p className="text-sm text-gray-600">גודל הדירה: {apartment.size}</p>
                  <p className="text-sm text-gray-600">{apartment.units}</p>
                  <p className="text-md font-semibold text-sky-800 mt-4">{apartment.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BudapestMapSection />
    </div>
  );
}
