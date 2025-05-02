"use client";

import Navbar from "./navbar";

export default function Hero() {
  return (
    <section className="relative h-[60vh] text-white overflow-hidden">
      {/* 🎥 Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 📌 Navbar */}
      <Navbar />

      {/* 📋 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          חולמים על נכס מניב בלב אירופה?
        </h1>
        <p className="text-lg sm:text-2xl md:text-xl font-medium mb-6 leading-relaxed drop-shadow-md">
          אנחנו ב־IRM מתמחים בליווי משקיעים ישראלים לרכישת דירות להשקעה בבודפשט – משלב התיווך,
          דרך ניהול נכסים, ועד השבחה וניהול שוטף. <br />
          השקעה בנדל"ן בהונגריה מעולם לא הייתה פשוטה יותר – עם ליווי אישי, שקיפות מלאה ותשואה גבוהה.
        </p>
        <a
          href="#contact"
          className="mt-4 bg-sky-900 hover:bg-sky-700 text-white text-lg sm:text-xl font-medium py-3 px-6 rounded shadow-lg transition duration-200"
        >
          השאירו פרטים
        </a>
      </div>
    </section>
  );
}
