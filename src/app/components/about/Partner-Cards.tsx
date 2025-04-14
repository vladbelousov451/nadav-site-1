const partners = [
    {
      name: "Nadav Laluz",
      role: "Co-Founder & Investment Director",
      image: "/images/nadav.png",
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
      image: "/images/ido.jpeg",
      description: `מבעלי IRM עם ניסיון של מעל ל 6 שנים בנדל״ן בבודפשט
      עידו מביא עימו ניסיון שטח עצום וניסיון בכל תחומי העיסוק של נדל״ן, משיפוץ ועד הפן המשפטי והמיסויי.
      עידו גר בבודפשט קרוב ל 3 שנים ועד היום חי על הקו בין ישראל לבודפשט.
      בהובלתו IRM ליוותה מעל ל - 100 משקיעים בשנתיים האחרונות.`
      
    },
    {
      name: "Yehonatan Wolshteiin",
      role: "Co-Founder & Client Success Lead",
      image: "/images/yehonatan.png",
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
              <div key={index} className="bg-zinc-50 rounded-lg shadow-md overflow-hidden text-center p-6">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl text-black font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm text-black">{partner.role}</p>
                <p className="text-black font-bold text-sm">{partner.description} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }