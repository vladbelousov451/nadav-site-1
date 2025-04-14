export default function Hero() {
    return (
      <section className="relative h-[90vh] bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">Over 250 Apartments. One Vision.</h1>
          <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded shadow">VIEW PROPERTIES</button>
        </div>
      </section>
    );
  }