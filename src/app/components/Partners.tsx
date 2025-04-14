export default function Partners() {
    const partners = [
      { name: "Nadav Laluz", image: "/images/nadav.png" },
      { name: "Ido Hatuka", image: "/images/ido.jpeg" },
      { name: "Yehonatan Wolshtein", image: "/images/yehonatan.png" }
    ];
    return (
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Business Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <div key={i}>
              <img src={p.image} alt={p.name} className="w-28 h-28 rounded-full mx-auto mb-4" />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }