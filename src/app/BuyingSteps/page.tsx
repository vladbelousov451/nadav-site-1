// components/StepImage.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/Hero";

const layers = [
  "/images/appartament-3.jpg",
  "/images/appartament-1.jpg",
  "/images/appartament-2.jpg",
  "/images/appartament-3.jpg",
  "/images/appartament-4.jpg",
  "/images/appartament-5.jpg",
  "/images/appartament-6.jpg",
  "/images/appartament-7.jpg",
];

const stepTexts = [
  {
    title: "ניתוח מעמיק: הבנת צרכים ומטרות",
    description:
      "אנחנו ביחד מההתחלה ועד הסוף – נבין את הצרכים והמטרות שלכם, נלמד את היכולות הכלכליות ונבנה תכנית מותאמת אישית.",
  },
  {
    title: "בניית תכנית עסקית",
    description:
      "ננתח את הכדאיות הכלכלית, נבנה תזרים, נחשב עלויות ותשואות, ונבין יחד את הפוטנציאל הכלכלי של העסקה.",
  },
  {
    title: "בחירת השוק האידיאלי עבורכם",
    description:
      "נאתר את הנכסים האידיאליים בהתאם לפרופיל שלכם, נבצע משא ומתן ונבחר את העסקה המנצחת.",
  },
  {
    title: "השגת המימון הנדרש",
    description:
      "נלווה אתכם בגיוס מימון בהתאם לתכנית – נוודא שהעסקה מתבצעת בביטחון מלא.",
  },
  {
    title: "גיבוי משפטי מלא",
    description:
      "עורך דין מומחה ילווה אתכם, יבצע את כל הבדיקות המשפטיות ויסגור את העסקה בראש שקט.",
  },
  {
    title: "השבחת הנכס והום סטיילינג",
    description:
      "ננהל את שיפוץ הנכס כולו – כולל עיצוב חדש, מיתוג וניהול הקבלנים בשטח.",
  },
  {
    title: "לקטוף את הפירות",
    description:
      "הנכס מוכן להשכרה – אנחנו מוצאים שוכר, מנהלים חוזים ואתם מקבלים תשואה."
  },
];

export default function StepImageScroll() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute("data-step") || "0", 10);
            setVisibleStep(stepIndex);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero/>
    <div className="relative bg-white">
      <div className="sticky top-0 z-10 h-[70vh] flex items-center justify-center bg-white">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[80%] h-[80%] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={layers[visibleStep]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={layers[visibleStep]}
                  alt={`Step ${visibleStep}`}
                  fill
                  className="object-cover rounded shadow"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-1/2 pr-8 text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepTexts[visibleStep].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded shadow p-8 max-w-xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-sky-800 mb-2">
                {stepTexts[visibleStep].title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {stepTexts[visibleStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="pt-[70vh]">
        {stepTexts.map((_, i) => (
          <div
            key={i}
            data-step={i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className="min-h-[100vh]"
          />
        ))}
      </div>
    </div>
    </div>
  );
}