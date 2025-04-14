export default function Contact() {
    return (
      <section className="bg-gray-50 py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700">Send Message</button>
        </form>
      </section>
    );
  }