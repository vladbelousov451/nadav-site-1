// app/services/page.tsx
import Hero from "../components/Hero";
import {
  BuildingOffice2Icon,
  ArrowTrendingUpIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  UsersIcon,
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  WrenchIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Helper to map number of columns to Tailwind classes
const getGridColsClass = (columns: number) => {
  const map: { [key: number]: string } = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
  return map[columns] || "md:grid-cols-3";
};

// Reusable Section component with RTL support
const Section = ({ title, subtitle, description, items, columns = 3 }: any) => {
  const columnsClass = getGridColsClass(columns);

  return (
    <section className="bg-white text-gray-900 py-20 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-sky-900 mb-4 tracking-tight drop-shadow-sm">{title}</h2>
        {subtitle && <p className="text-xl text-gray-700 mb-2">{subtitle}</p>}
        {description && (
          <p className="mb-10 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${columnsClass} gap-10`}>
          {items.map((item: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center flex flex-col items-center"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.subtitle || item.title}
                  fill
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-70 rounded-lg"
                />
              </div>
              {item.icon && <div className="mb-2">{item.icon}</div>}
              <h3 className="text-lg font-semibold text-gray-800">{item.subtitle || item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const investments = [
    {
      title: "השקעות בפרויקטים חדשים",
      icon: <BuildingOffice2Icon className="w-12 h-12 text-sky-900" />,
      image: "/images/invest-1.jpeg",
      subtitle: "השקעות Presale בפרויקטים חדשים",
    },
    {
      title: "עסקאות Flip להגדלת ההון",
      icon: <ArrowTrendingUpIcon className="w-12 h-12 text-sky-900" />,
      image: "/images/invest-2.jpeg",
      subtitle: "עסקאות Flip להגדלת ההון",
    },
    {
      title: "דירות לפיצול והשבחה",
      icon: <HomeModernIcon className="w-12 h-12 text-sky-900" />,
      image: "/images/invest-3.jpeg",
      subtitle: "דירות לפיצול והשבחה",
    },
  ];

  const renovations = [
    {
      image: "/images/renovation-2.jpeg",
      icon: <WrenchScrewdriverIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "יצירת בידול ויתרון בשוק באמצעות עיצובים בחומרים איכותיים",
    },
    {
      image: "/images/renovation-2.jpeg",
      icon: <BuildingStorefrontIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "התמחות בנכסים יוקרתיים, דירות לחיילים ודירות לפיצול",
    },
    {
      image: "/images/renovation-3.jpeg",
      icon: <CurrencyDollarIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "תכנון ממוקד להשבחת ערך הנכס ומיצוי הפוטנציאל שבו",
    },
    {
      image: "/images/renovation-4.jpeg",
      icon: <UsersIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "צוות מומחים הכולל אדריכלים, מעצבי פנים, חשמלאים ואנשי מקצוע",
    },
  ];

  const management = [
    {
      image: "/images/managment-3.jpeg",
      icon: <DocumentTextIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "טיפול מלא בבירוקרטיה – הופכת רישויות, תשלומי חשבונות ודיווחים לשירותים",
    },
    {
      image: "/images/managment-2.jpeg",
      icon: <ArrowsRightLeftIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "ניהול תמחור דינמי לפי ביקוש, אירועים וחיוניות עונתית",
    },
    {
      image: "/images/managment-3.jpeg",
      icon: <WrenchIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "שירותי ניקיון, כניסה, אחזקה שוטפת ותחזוקה טכנית",
    },
    {
      image: "/images/managment-2.jpeg",
      icon: <UserGroupIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "שירות לקוחות 24/7 וטיפול בדיירים",
    },
    {
      image: "/images/managment-5.jpeg",
      icon: <BuildingLibraryIcon className="w-12 h-12 text-sky-900" />,
      subtitle: "השקעות Presale בפרויקטים חדשים",
    },
  ];

  return (
    <>
      <Hero />
      <Section
        title="INVESTMENTS"
        subtitle='השקעות נדל"ן בהתאמה אישית'
        description='אנו מתמחים באיתור ובביצוע עסקאות נדל"ן במגוון אסטרטגיות. כל השקעה מותאמת אישית לסטטוס ולמטרות המשקיע תוך תכנון מקצועי ובניית אסטרטגיה מסודרת.'
        items={investments}
        columns={3}
      />
      <Section
        title="RENOVATIONS"
        subtitle="שיפוץ והשבחת נכסים"
        description="לאחר איתור הנכס, אנו מבצעים תהליך השבחה מקיף בהתאם לייעוד הנכס ולדרישות המשקיע. אנו מנהלים מעל 250 נכסים בבודפשט, כולל דירות להשכרה לטווח קצר ב-AIRBNB."
        items={renovations}
        columns={4}
      />
      <Section
        title="PROPERTY MANAGEMENT"
        subtitle="השקעה בראש שקט – אנחנו דואגים להכול, אתם נהנים מהתשואה."
        items={management}
        columns={5}
      />
    </>
  );
}
