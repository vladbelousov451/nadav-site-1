export default function Partners() {
  const partners = [
    { name: "Nadav Laluz", image: "/images/nadav-1.png" },
    { name: "Ido Hatuka", image: "/images/ido.png" },
    { name: "Yehonatan Wolshtein", image: "/images/yehonatan-1.png" }
  ];

  return (
    <section className="py-16 px-4 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Business Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <div key={i} className="rounded-lg shadow-lg overflow-hidden bg-white">
            <img src={p.image} alt={p.name} className="w-full h-96 object-cover" />
            <div className="p-4 bg-sky-900 bg-opacity-75">
              <p className="text-lg font-semibold text-white">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}