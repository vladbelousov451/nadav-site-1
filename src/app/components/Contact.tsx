
export default function Contact() {
    return (
      <section id="contact" className="bg-zinc-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-black font-bold mb-6">Let's Get In Touch</h2>
          <p className="text-gray-600 mb-10">
            Whether you're ready to invest or just curious, we'd love to hear from you. Fill out the form and we'll get back to you soon.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 text-black md:col-span-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="col-span-1 text-black p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="col-span-1 p-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="col-span-1 md:col-span-2 text-black p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-zinc-800 hover:bg-zinc-700 text-black text-white font-medium py-3 px-8 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }