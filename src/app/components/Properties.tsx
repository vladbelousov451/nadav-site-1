export default function Properties() {
    const properties = [
      { title: "Old Town, Budapest", image: "/images/appartament-1.jpg" },
      { title: "Palace District, Budapest", image: "/images/appartament-3.jpg" },
      { title: "Palace District, Budapest", image: "/images/appartament-3.jpg" },
      { title: "Palace District, Budapest", image: "/images/appartament-3.jpg" },
    ];
    return (
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((p, i) => (
            <div key={i} className="rounded overflow-hidden shadow">
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <a href="#" className="text-teal-600 hover:underline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }