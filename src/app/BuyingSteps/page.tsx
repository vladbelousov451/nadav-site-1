"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/Hero";

const layers = [
  "/images/appartament-3.jpg",
  "/images/appartament-4.jpg",
  "/images/appartament5.jpg",
  "/images/appartament-3.jpg",
  "/images/appartament-3.jpg",
  "/images/appartament-3.jpg",
];

const stepTexts = [
  {
    title: "🧠 ניתוח מעמיק – כי הכול מתחיל בהבנה אמיתית",
    description:
      "לפני שמתחילים לדבר על דירות, השקעות ומספרים – אנחנו עוצרים. מקשיבים. מבינים מי אתם, מה חשוב לכם, איפה אתם רואים את עצמכם בעוד חמש שנים ומה הכי מפחיד אתכם בתהליך. זה לא רק נדל\"ן – זו החלטה שמשפיעה על החיים, ואנחנו כאן כדי לוודא שהיא מדויקת עבורכם. נבדוק את היכולות הכלכליות שלכם, נגדיר מטרות ברורות – ונתחיל לרקום את התמונה יחד.",
  },
  {
    title: "📈 בונים תכנית עסקית שמבוססת על מספרים ולא על תחושות",
    description:
      "אחרי שיש לנו את התמונה הכללית – זה הזמן לצלול לפרטים. אנחנו יושבים יחד ובונים תכנית עסקית מקיפה. מה זה כולל? ניתוח מעמיק של הכדאיות הכלכלית, תזרים מזומנים מדויק, חישובי עלויות מול תשואות, תרחישים שונים ותחזיות לעתיד. כל שורה בטבלה נבחנת, כל נתון מקבל מקום. אתם תצאו מהשלב הזה עם ודאות ועם ביטחון שאתם יודעים בדיוק למה אתם נכנסים.",
  },
  {
    title: "🌍 מחפשים – ומוצאים – את ההשקעה שתפורה בדיוק לכם",
    description:
      "כאן מתחיל החלק המרגש – איתור הנכס. לא נזרוק לכם לינקים ולא נשלח אתכם \"להסתכל באתר\". אנחנו נכנסים לעבודה אמיתית: מחפשים נכסים שמתאימים לפרופיל ההשקעה שבנינו יחד, בודקים כל פרט, מבצעים הערכות שוק, בוחנים סביבות מגורים, פוטנציאל השבחה והשכרה – וכל זה תוך כדי שיח פתוח איתכם. בסוף, ננהל גם את המו\"מ – ונדאג שתצאו עם עסקה חזקה ביד.",
  },
  {
    title: "🏦 סוגרים את הפינה הכלכלית – מימון בתנאים שמתאימים לכם",
    description:
      "השגת מימון יכולה להיות כאב ראש – אבל לא איתנו. אנחנו נלווה אתכם יד ביד, נבחן את אפשרויות המימון, נמליץ על פתרונות שמתאימים לכם (ולא רק לבנק), ונוודא שאתם מקבלים את התנאים הכי טובים שאפשר. בשקט. בביטחון. בלי הפתעות.",
  },
  {
    title: "⚖️ ליווי משפטי בלי אותיות קטנות",
    description:
      "עסקה טובה היא עסקה שבנויה נכון גם משפטית. לכן עורך דין מומחה בתחום יבדוק כל מסמך, יבחן כל סעיף, יטפל בכל פרט משפטי – ואתם תדעו שיש מי ששומר עליכם. לא תצטרכו להתמודד לבד עם חוזים, תקנות או רגולציות זרות – אנחנו דואגים להכול.",
  },
  {
    title: "🏗️ משפצים, משדרגים, מעצבים – עד שהנכס נראה מיליון דולר",
    description:
      "כאן מתחילה ההשבחה. אנחנו נכנסים לשטח, מביאים קבלנים, מעצבים, הום סטיילינג – הכול בתיאום מלא איתכם. בין אם מדובר בשיפוץ מלא ובין אם רק בליטוש קל – אנחנו נדאג שהנכס ייראה מדויק, מרשים ומוכן להזמנה של השוכר הראשון.",
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
      <Hero />

      <div className="relative bg-white">
        <div className="sticky top-0 z-10 h-[70vh] flex flex-col md:flex-row bg-white">
          {/* Image */}
          <div className="w-full md:w-1/2 h-[70vh] flex items-center justify-center">
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

          {/* Text */}
          <div className="w-full md:w-1/2 h-[70vh] flex items-center justify-center px-4 md:px-8 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={stepTexts[visibleStep].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded shadow p-6 md:p-8 max-w-xl w-full"
              >
                <h2 className="text-2xl font-bold text-sky-800 mb-4">
                  {stepTexts[visibleStep].title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {stepTexts[visibleStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Invisible scroll steps */}
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
