// app/steps/page.tsx
import {
    HomeIcon,
    WrenchIcon,
    HeartIcon,
    CurrencyDollarIcon
  } from "@heroicons/react/24/outline";
  import Hero from "../components/Hero";
  const steps = [
    {
      number: 2,
      title: "איחוד הנכס",
      text: "איחוד הנכס והעברת הבעלות על שמכם, כולל הסדרת ניירת, בדיקות משפטיות ותיאום מול הרשויות.",
      icon: HomeIcon,
    },
    {
      number: 3,
      title: "תכנון אדריכלי לשיפוץ",
      text: "תכנון מחודש של הנכס בהתאם לאסטרטגיה המוסכמת – השבחה, פיצול או מיתוג לדירות יוקרה.",
      icon: WrenchIcon,
    },
    {
      number: 4,
      title: "מציאת שוכרים",
      text: "בחינת שוק השוכרים ומתן פתרון לנכס – כולל ניהול פרסום, פגישות וסגירת חוזים.",
      icon: HeartIcon,
    },
    {
      number: 5,
      title: "מכירה של הנכס",
      text: "ליווי התהליך כולו עד למכירה – כולל שיווק למשקיעים, ניהול המו\"מ והעברת הבעלות.",
      icon: CurrencyDollarIcon,
    }
  ];
  
  export default function StepsPage() {
    return (
      <div>
        <Hero></Hero>
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            התהליך שתעברו לקניית דירה
          </h1>
  
          <div className="space-y-24">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center gap-10`}
                >
                  <div className="relative z-10 w-40 h-40 flex items-center justify-center">
                    <IconComponent className="absolute w-64 h-64 text-gray-100 top-10 left-12 opacity-60 z-20" />
                    <span className="text-sky-400 text-8xl font-extrabold z-10">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-sky-400 mb-4">{step.title}</h3>
                    <p className="text-xl font-bold leading-relaxed text-black/90">{step.text}</p>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
    );
  }