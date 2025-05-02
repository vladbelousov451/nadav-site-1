const partners = [
  {
    name: "Nadav Laluz",
    role: "Co-Founder & Investment Director",
    image: "/images/nadav-1.png",
    description: `בעלים של חברה לליווי משקיעים בבודפשט
      שמנהלת מעל ל 250 נכסים,
      יהונתן מביא ניסיון ארוך שנים בעסקאות
      בבודפשט וניסיון בליווי משקיעים בעסקאות מגוונות,
      החל מעסקאות של פיצול דירות,
      דירות סטודנטים דירות airbnb
      ופרויקטים חדשים מהקבלן`
  },
  {
    name: "Ido Hatuka",
    role: "Co-Founder & Operations Manager",
    image: "/images/ido.png",
    description: `מבעלי IRM עם ניסיון של מעל ל 6 שנים בנדל״ן בבודפשט
      עידו מביא עימו ניסיון שטח עצום וניסיון בכל תחומי העיסוק של נדל״ן, משיפוץ ועד הפן המשפטי והמיסויי.
      עידו גר בבודפשט קרוב ל 3 שנים ועד היום חי על הקו בין ישראל לבודפשט.
      בהובלתו IRM ליוותה מעל ל - 100 משקיעים בשנתיים האחרונות.`
  },
  {
    name: "Yehonatan Wolshteiin",
    role: "Co-Founder & Client Success Lead",
    image: "/images/yehonatan-1.png",
    description: `בעלים של חברה לליווי משקיעים בבודפשט
      שמנהלת מעל ל 250 נכסים,
      יהונתן מביא ניסיון ארוך שנים בעסקאות
      בבודפשט וניסיון בליווי משקיעים בעסקאות מגוונות,
      החל מעסקאות של פיצול דירות,
      דירות סטודנטים דירות airbnb
      ופרויקטים חדשים מהקבלן`
  }
];

export default function PartnerCards() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-12">הכירו את הצוות</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-128 object-cover"
              />
              <div className="p-4 text-center rounded-lg bg-sky-900 bg-opacity-75" dir="rtl">
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                <p className="text-md font-bold text-white mb-2">{partner.role}</p>
                <p className="text-sm text-white whitespace-pre-line">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}