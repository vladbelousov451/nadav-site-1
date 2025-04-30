'use client';

import { useEffect, useState } from "react";

const stats = [
  { value: 75000, prefix: "€ ", label: "השקעה מינימלית" },
  { value: 35000, prefix: "", label: " בנוי שאוכלס ובתכנון" },
  { value: 270, suffix: "+", label: "קהילת המשקיעים" },
  { value: 70, prefix: "€ ", suffix: " M", label: "מנוהלים בהשקעות" }
];

function AnimatedNumber({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-2xl md:text-3xl font-bold text-sky-800">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white text-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <AnimatedNumber target={item.value} prefix={item.prefix} suffix={item.suffix} />
            <div className="text-lg mt-2 font-medium text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}