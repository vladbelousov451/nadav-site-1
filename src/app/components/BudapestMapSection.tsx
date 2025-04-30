// components/BudapestMapSection.tsx
import Image from 'next/image'
import "./styles/animation.css"
const budapestDistricts = [
    { name: 'District V - Apt 1', top: '46%', left: '56%' },
    { name: 'District V - Apt 2', top: '47%', left: '57%' },
    { name: 'District V - Apt 3', top: '48%', left: '58%' },
    { name: 'District V - Apt 4', top: '49%', left: '59%' },
    { name: 'District V - Apt 5', top: '45%', left: '60%' },
    { name: 'District VI - Apt 1', top: '42%', left: '60%' },
    { name: 'District VI - Apt 2', top: '43%', left: '61%' },
    { name: 'District VI - Apt 3', top: '44%', left: '62%' },
    { name: 'District VI - Apt 4', top: '45%', left: '63%' },
    { name: 'District VI - Apt 5', top: '41%', left: '64%' },
    { name: 'District VII - Apt 1', top: '40%', left: '65%' },
    { name: 'District VII - Apt 2', top: '41%', left: '66%' },
    { name: 'District VII - Apt 3', top: '42%', left: '67%' },
    { name: 'District VII - Apt 4', top: '43%', left: '68%' },
    { name: 'District VII - Apt 5', top: '39%', left: '69%' },
    { name: 'District V - Apt 6', top: '50%', left: '60%' },
    { name: 'District V - Apt 7', top: '44%', left: '61%' },
    { name: 'District VI - Apt 6', top: '40%', left: '62%' },
    { name: 'District VII - Apt 6', top: '38%', left: '63%' },
    { name: 'District VII - Apt 7', top: '37%', left: '64%' },
    { name: 'District V - Apt 8', top: '46.5%', left: '56.5%' },
    { name: 'District V - Apt 9', top: '45.8%', left: '57.2%' },
    { name: 'District V - Apt 10', top: '47.3%', left: '58.1%' },
    { name: 'District V - Apt 11', top: '46.2%', left: '59.3%' },
    { name: 'District V - Apt 12', top: '48.5%', left: '57.5%' },
    { name: 'District V - Apt 13', top: '47.8%', left: '56.7%' },
    { name: 'District V - Apt 14', top: '46.9%', left: '55.9%' },
    { name: 'District V - Apt 15', top: '48.1%', left: '58.9%' },
    { name: 'District V - Apt 16', top: '45.7%', left: '57.8%' },
    { name: 'District V - Apt 17', top: '47.4%', left: '59.1%' },
  ]

export default function BudapestMapSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full max-w-2xl h-[600px]">
          <Image src="/images/budapest-map.png" alt="Budapest Map" layout="fill" objectFit="contain" />
          {budapestDistricts.map((district, index) => (
            <div
              key={index}
              className="absolute text-xs text-center animate-fade-in"
              style={{ top: district.top, left: district.left, transform: 'translate(-50%, -50%)', animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-full p-2 shadow-md border w-6 h-6 flex items-center justify-center text-blue-800 ">A</div>
            </div>
          ))}
        </div>
        <div className="max-w-xl text-right lg:text-right" dir="rtl">
          <h2 className="text-4xl text-sky-700  mb-6">אנחנו על המפה,<span className="text-sky-900 font-bold"> ונשאר על המפה!</span></h2>
          <p className="mb-6 font-bold text-2xl text-black leading-relaxed">
            קבוצת IRM כוללת צוות בעל ניסיון עצום עם תוצאות מוכחות בתחום הנדל"ן בבודפשט.
            פועלים בשכונות המובילות בעיר עם נוכחות חזקה בשוק ההשקעות.
          </p>
          <p className="mb-4 text-2xl text-black font-bold leading-relaxed">
            מצפון לדרום, ממזרח למערב — יש לנו את ההבנה, הניסיון, והנכסים הנכונים כדי לייצג אתכם בצורה מושלמת.
          </p>
          <button className="bg-sky-900 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-sky-700 transition">
            עוד עלינו
          </button>
        </div>
      </div>
    </section>
  )
}
