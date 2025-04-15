// components/MapOfBudapest.tsx

export default function MapOfBudapest() {
    return (
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-emerald-800 mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)]">
            Map of Budapest
          </h2>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10716.342308894263!2d19.037986818373227!3d47.497912799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc62f7e3abfb%3A0xa50d70a36edc0821!2sBudapest%2C%20Hungary!5e0!3m2!1sen!2sil!4v1713168432795!5m2!1sen!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }