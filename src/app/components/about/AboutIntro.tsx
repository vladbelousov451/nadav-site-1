import Footer from "../Footer";

export default function AboutIntro() {
    return (
      <section className="relative bg-zinc-100 text-gray-900 py-24 px-4 overflow-hidden">
       
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-3xl font-bold mb-6">מי אנחנו</h2>
            <p className="leading-relaxed text-lg text-gray-700" dir="rtl">
            IRM היא חברה המתמחה בליווי אישי להשקעות נדל״ן בבודפשט, עם גישה ממוקדת תוצאה ויחס אנושי לאורך כל הדרך.
אנחנו מאמינים בשקיפות, מקצועיות ובשיתוף פעולה אמיתי עם כל לקוח – כי הצלחה אמיתית בונים ביחד.
הצוות שלנו כאן כדי להעניק לכם ביטחון, ידע וניסיון מוכח, במסע להשגת תשואה גבוהה ונכס שמייצר ערך אמיתי.
            </p>
            <button className="mt-6 bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition">עוד עלינו</button>
          </div>
          <div className="relative">
            <img
              src="/images/partnets-both.png"
              alt="IRM Team"
              className="rounded-xl shadow-2xl w-full object-cover md:absolute md:-right-16 md:top-1/2 md:-translate-y-1/2 md:w-[130%]"
            />
          </div>
        </div>
      </section>
    );
  }