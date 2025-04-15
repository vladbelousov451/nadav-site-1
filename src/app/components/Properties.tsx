// components/Properties.tsx
export default function Properties() {
  const properties = [
    {
      title: "בית מרכזי אמנותי ונעים ליד בתים יוקרתיים",
      image: "/images/apartament-4.png",
      size: "50 מ" + "ר",
      floor: "9",
      units: "2",
      revenue: "10%"
    },
    {
      title: "דירת יוקרה בלב פשט",
      image: "/images/apartament-5.png",
      size: "65 מ" + "ר",
      floor: "4",
      units: "1",
      revenue: "14%"
    },
    {
      title: "דירת יוקרה בלב פשט",
      image: "/images/appartament-3.jpg",
      size: "65 מ" + "ר",
      floor: "4",
      units: "1",
      revenue: "5%"
    },
    {
      title: "דירת יוקרה בלב פשט",
      image: "/images/appartament-2.avif",
      size: "65 מ" + "ר",
      floor: "4",
      units: "1",
      revenue: "5%"

    }
  ];

  return (
    <section id="properties" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-sm px-4 py-3 flex flex-col gap-1">
                  <div className="flex flex-wrap justify-between items-center text-xs md:text-sm">
                    <span>גודל הדירה מ"ר: <span className="font-bold">{property.size}</span></span>
                    <span>קומה: <span className="font-bold">{property.floor}</span></span>
                    <span>יחידות דיור: <span className="font-bold">{property.units}</span></span>
                    <span>תשואה ממוצעת: <span className="font-bold"><span className="text-2xl">{property.revenue}</span></span></span>
                  </div>
                  <div className="text-center text-sm md:text-base font-semibold">
                    {property.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}