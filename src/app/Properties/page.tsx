// app/properties/page.tsx
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
      <Hero/>
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-black  tracking-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)] mb-12">
          Apartments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {apartments.map((apartment, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={apartment.image}
                alt={apartment.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <div className="bg-white p-4 text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{apartment.title}</h3>
                <p className="text-sm text-gray-600">גודל הדירה: {apartment.size}</p>
                <p className="text-sm text-gray-600">{apartment.units}</p>
                <p className="text-sm text-sky-700 font-bold mt-2">{apartment.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <BudapestMapSection/>
    </div>
  );
}
