"use client";

import { motion } from "framer-motion";
import {
  GlobeEuropeAfricaIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "מיקום אסטרטגי",
    text: "בודפשט ממוקמת בלב אירופה ומציעה נגישות מעולה למשקיעים בינלאומיים.",
    icon: <GlobeEuropeAfricaIcon className="w-24 h-24 text-sky-900" />,
  },
  {
    title: "שוק נדל\"ן בצמיחה",
    text: "ערך הנכסים בבודפשט עולה בהתמדה עם ביקוש גובר ותשואות גבוהות להשכרה.",
    icon: <BuildingOffice2Icon className="w-24 h-24 text-sky-900" />,
  },
  {
    title: "תיירות ואיכות חיים",
    text: "עיר עם תרבות עשירה, חיי לילה ומחייה נוחה הופכת את בודפשט למוקד משיכה.",
    icon: <SparklesIcon className="w-24 h-24 text-sky-900" />,
  },
];

export default function WhyBudapest() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-sky-900 mb-16 drop-shadow">
        ? למה בודפשט 
      </h2>

      <div className="space-y-24">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              {step.icon}
            </div>
            <div className="md:w-2/3 text-right">
              <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
