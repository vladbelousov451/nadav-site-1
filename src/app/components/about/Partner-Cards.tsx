const partners = [
  {
    name: "Nadav Laluz",
    role: "Co-Founder & Investment Director",
    image: "/images/nadav-1.png",
    description: `נדב, שותף ומנהל תחום הפיננסים וההשקעות בחברה, מלווה משקיעים לאורך כל הדרך – משלב ההיכרות ועד לתכנון הפיננסי המדויק של העסקה.
עם ניסיון עשיר בניתוח עסקאות ובבניית אסטרטגיות השקעה מותאמות אישית, נדב אחראי על ניהול התקציבים, תכנון התשואות ובחינת הכדאיות הפיננסית של כל נכס.
הוא מתמחה בזיהוי הזדמנויות בשוק המקומי והתאמתן לפרופיל המשקיע, תוך שימת דגש על שקיפות, מקצועיות ויחס אישי.
תחת ניהולו IRM מלווה מעל ל־250 נכסים פעילים ומתמקדת בהשקעות כמו פיצול דירות, Airbnb ודירות סטודנטים.
`
  },
  {
    name: "Ido Hatuka",
    role: "Co-Founder & Operations Manager",
    image: "/images/ido.png",
    description: `עידו, שותף ומנהל התפעול של IRM, מביא איתו ניסיון שטח רחב בכל היבטי הנדל"ן – משיפוצים וניהול קבלנים ועד להיבטים משפטיים ומיסויים.
לאורך למעלה מ־6 שנות פעילות, עידו ליווה פרויקטים מגוונים, עם ניהול אישי בכל שלב – מהביקור בנכסים ועד למסירתם לאחר שיפוץ מלא.
הוא חי בבודפשט קרוב ל־3 שנים ופועל על הקו מול ישראל, תוך שמירה על איכות ובקרה בשטח.
בהובלתו, החברה סייעה ליותר מ־100 משקיעים בשנים האחרונות והפכה את החזון שלהם להשקעה רווחית למציאות מוחשית.
`
  },
  {
    name: "Yehonatan Wolshteiin",
    role: "Co-Founder & Client Success Lead",
    image: "/images/yehonatan-1.png",
    description: `יהונתן, שותף ומוביל תחום הצלחת הלקוח ב־IRM, מחזיק בניסיון של למעלה מעשור בתחום השקעות נדל"ן בבודפשט.
הוא ליווה עשרות משקיעים בעסקאות מכל הסוגים – החל מפיצול דירות, דרך דירות לסטודנטים ו-Airbnb ועד לפרויקטים חדשים מקבלן.
יהונתן מתמחה בזיהוי מגמות בשוק וביצירת פתרונות מותאמים אישית למשקיעים – תוך דגש על ניתוח שוק, מינוף הזדמנויות ובניית מערך ליווי מלא.
תחת ניהולו IRM מנהלת כיום מעל ל־250 נכסים וממשיכה לצמוח כגוף מקצועי ואמין בקרב משקיעים מכל הסוגים.
`
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