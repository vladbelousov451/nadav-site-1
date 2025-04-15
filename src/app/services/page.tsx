// app/services/page.tsx
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { BuildingOffice2Icon, ArrowTrendingUpIcon, HomeModernIcon, WrenchScrewdriverIcon, BuildingStorefrontIcon, CurrencyDollarIcon, UsersIcon, DocumentTextIcon, ArrowsRightLeftIcon, WrenchIcon, UserGroupIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const services = [
  {
    title: "השקעות בפרויקטים חדשים",
    icon: <BuildingOffice2Icon className="w-14 h-14 text-teal-600 mb-2" />, 
    image: "/images/invest-1.jpeg",
    subtitle: "השקעות Presale בפרויקטים חדשים",
  },
  {
    title: "עסקאות Flip להגדלת ההון",
    icon: <ArrowTrendingUpIcon className="w-14 h-14 text-teal-600 mb-2" />, 
    image: "/images/invest-2.jpeg",
    subtitle: "עסקאות Flip להגדלת ההון",
  },
  {
    title: "דירות לפיצול והשבחה",
    icon: <HomeModernIcon className="w-14 h-14 text-teal-600 mb-2" />, 
    image: "/images/invest-3.jpeg",
    subtitle: "דירות לפיצול והשבחה",
  }
];

const renovations = [
  {
    image: "/images/renovation-2.jpeg",
    icon: <WrenchScrewdriverIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "יצירת בידול ויתרון בשוק באמצעות עיצובים בחומרים איכותיים",
  },
  {
    image: "/images/renovation-2.jpeg",
    icon: <BuildingStorefrontIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "התמחות בנכסים יוקרתיים, דירות לחיילים ודירות לפיצול",
  },
  {
    image: "/images/renovation-3.jpeg",
    icon: <CurrencyDollarIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "תכנון ממוקד להשבחת ערך הנכס ומיצוי הפוטנציאל שבו",
  },
  {
    image: "/images/renovation-4.jpeg",
    icon: <UsersIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "צוות מומחים הכולל אדריכלים, מעצבי פנים, חשמלאים ואנשי מקצוע",
  }
];

const management = [
  {
    image: "/images/managment-3.jpeg",
    icon: <DocumentTextIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "טיפול מלא בבירוקרטיה – הופכת רישויות, תשלומי חשבונות ודיווחים לשירותים",
  },
  {
    image: "/images/managment-2.jpeg",
    icon: <ArrowsRightLeftIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "ניהול תמחור דינמי לפי ביקוש, אירועים וחיוניות עונתית",
  },
  {
    image: "/images/managment-3.jpeg",
    icon: <WrenchIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "שירותי ניקיון, כניסה, אחזקה שוטפת ותחזוקה טכנית",
  },
  {
    image: "/images/managment-2.jpeg",
    icon: <UserGroupIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "שירות לקוחות 24/7 וטיפול בדיירים",
  },
  {
    image: "/images/managment-5.jpeg",
    icon: <BuildingLibraryIcon className="w-14 h-14 text-teal-600 mb-2" />,
    subtitle: "השקעות Presale בפרויקטים חדשים",
  }
];

export default function ServicesPage() {
  return (
    <>
      <Hero />

      {/* Investments Section */}
      <section className="bg-white text-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">INVESTMENTS</h1>
          <p className="text-xl mb-2">השקעות נדל"ן בהתאמה אישית</p>
          <p className="mb-10 text-xl max-w-2xl mx-auto">
            אנו מתמחים באיתור ובביצוע עסקאות נדל"ן במגוון אסטרטגיות, ביניהן:
            כל השקעה מותאמת אישית לסטטוס ולמטרות המשקיע, תוך תכנון מקצועי ובניית אסטרטגיה מסודרת.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-xs">
                  <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg shadow-md object-cover w-full opacity-60" />
                </div>
                {item.icon}
                <h3 className="text-gray-700 text-xl font-bold mt-2">{item.subtitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovations Section */}
      <section className="bg-white text-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">RENOVATIONS</h1>
          <p className="text-xl mb-2">שיפוץ והשבחת נכסים</p>
          <p className="mb-10 text-xl max-w-3xl mx-auto">
            לאחר איתור הנכס, אנו מבצעים תהליך השבחה מקיף בהתאמה לייעוד הנכס ולדרישות המשקיע. ניהול ואחזקה נכסים אנו מנהלים מעל 250 נכסים בבודפשט, כולל דירות להשכרה לטווח קצר ב-AIRBNB
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {renovations.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-xs">
                  <Image src={item.image} alt={item.subtitle} width={300} height={200} className="rounded-lg shadow-md object-cover w-full opacity-60" />
                </div>
                {item.icon}
                <h3 className="text-gray-700 text-md font-bold mt-2">{item.subtitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="bg-white text-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">PROPERTY MANAGEMENT</h1>
          <p className="text-xl mb-10">השקעה בראש שקט – אנחנו דואגים להכל, אתם נהנים מהתשואה.</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {management.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-xs">
                  <Image src={item.image} alt={item.subtitle} width={300} height={200} className="rounded-lg shadow-md object-cover w-full opacity-60" />
                </div>
                {item.icon}
                <h3 className="text-gray-700 text-md font-bold mt-2">{item.subtitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}