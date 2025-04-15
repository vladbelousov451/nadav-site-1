import Navbar from "./navbar";
export default function Hero() {
    return (
      <section className="relative h-[60vh] bg-cover    bg-center text-white" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
         <Navbar />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">?חולם על נכס מניב בלב אירופה</h1>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-semiibold mb-4">אנחנו כאן להגשים – בליווי אישי, מתיווך ועד ניהול והשבחה מלאה בבודפשט</h3>
          <button className="mt-4 bg-emerald-800 text-xl hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded shadow">השאירו פרטים</button>
        </div>
      </section>
    );
  }