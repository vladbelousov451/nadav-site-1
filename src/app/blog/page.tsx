// app/blog/page.tsx
import Link from "next/link";
import Hero from "../components/Hero";



const posts = [
  {
    title: "Why Budapest is the Next Real Estate Hotspot",
    excerpt: "Discover why investors are turning their attention to Hungary's capital city.",
    date: "April 2025",
    slug: "budapest-hotspot",
    image: "https://picsum.photos/seed/budapest/1600/500"
  },
  {
    title: "Tips for First-Time Real Estate Investors",
    excerpt: "What every new investor should know before getting started.",
    date: "March 2025",
    slug: "investor-tips",
    image: "https://picsum.photos/seed/invest/1600/500"
  },
  {
    title: "How Renovation Increases Property Value",
    excerpt: "A look at how strategic renovations can dramatically boost ROI.",
    date: "February 2025",
    slug: "renovation-value",
    image: "https://picsum.photos/seed/renovation/1600/500"
  }
];

export default function BlogPage() {
  return (
    <div>
        <Hero/>
    <section className="bg-white py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-black font-bold text-center mb-12">Our Blog</h1>
        <div className="space-y-10">
          {posts.map((post, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md border border-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover rounded-t-xl shadow-sm"
              />
              <div className="p-10">
                <h2 className="text-3xl text-black font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-3 text-lg">{post.excerpt}</p>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <Link href={`/blog/${post.slug}`} className="text-emerald-800 hover:underline text-base font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
