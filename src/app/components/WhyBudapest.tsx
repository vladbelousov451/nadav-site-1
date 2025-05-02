"use client";

import { motion } from "framer-motion";
import {
  GlobeEuropeAfricaIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "מיקום אסטרטגי באירופה",
    text: "בודפשט שוכנת בלב אירופה ומציעה גישה נוחה למשקיעים מכל העולם. הקרבה למדינות האיחוד האירופי תורמת ליציבות הכלכלית ולהזדמנויות מגוונות.",
    icon: <GlobeEuropeAfricaIcon className="w-24 h-24 text-sky-900" />,
  },
  {
    title: "שוק נדל\"ן בצמיחה מתמדת",
    text: "שוק הנדל\"ן של בודפשט נמצא בעלייה מתמשכת עם ביקוש גובר להשכרה ודירות להשקעה. מחירי הנכסים עולים, ויחס התשואה נחשב לאחד הגבוהים באירופה.",
    icon: <BuildingOffice2Icon className="w-24 h-24 text-sky-900" />,
  },
  {
    title: "איכות חיים גבוהה ותיירות משגשגת",
    text: "בודפשט מציעה חיי תרבות עשירים, בילויים, עלויות מחייה נוחות ותשתיות מתקדמות – מה שהופך אותה ליעד אידיאלי להשקעה, מגורים והשכרה לטווח קצר או ארוך.",
    icon: <SparklesIcon className="w-24 h-24 text-sky-900" />,
  },
];

export default function WhyBudapest() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="why-budapest">
      <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-16 drop-shadow">
        למה להשקיע בנדל״ן בבודפשט?
      </h2>

      <div className="space-y-24">
        {steps.map((step, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/3 flex justify-center">{step.icon}</div>
            <div className="md:w-2/3 text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
