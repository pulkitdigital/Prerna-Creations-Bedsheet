import { FiMapPin, FiPhone, FiInstagram, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { generalLink } from '../utils/whatsapp'

const whyUs = [
  'Premium quality cotton fabric',
  'Fitted sheets with perfect elastic fit',
  '500+ designs — updated regularly',
  'All sizes: Single, Double, Queen, King',
  'Affordable prices, no compromise on quality',
  'Trusted by hundreds of families in Allahabad',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-red-light via-white to-white py-14 border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1">
            <SectionHeader
              eyebrow="Our Story"
              title="About Prerna Creations"
              subtitle="A local bedsheet store in Allahabad — built on trust, quality, and care for every home."
            />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Prerna Creations started with a simple goal — bring premium quality bedsheets
              to every home in Allahabad at honest prices. Located in Civil Lines, we have been
              serving families across the city with a wide variety of fitted, printed, and plain
              bedsheets in all sizes.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              We believe your bedroom deserves the best. That's why we carefully source soft,
              durable fabrics and offer hundreds of designs — so there's something for everyone,
              every season.
            </p>
          </div>

          {/* Logo Card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center gap-4 border border-red-100 w-full max-w-xs">
              <img
                src="/favicon.webp"
                alt="Prerna Creations"
                className="h-28 w-28 object-contain"
              />
              <p className="font-display text-xl font-bold text-brand-red text-center">
                Prerna Creations
              </p>
              <p className="text-gray-400 text-xs text-center">
                Premium Bedsheets · Civil Lines, Allahabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="What Makes Us Different"
          subtitle="We don't just sell bedsheets — we help you find the right one."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {whyUs.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              <div className="bg-brand-red-light p-2 rounded-full shrink-0">
                <FiCheck size={16} className="text-brand-red" />
              </div>
              <p className="text-gray-700 text-sm font-medium leading-snug">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-brand-red-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="Find Us"
            title="Visit Our Store"
            subtitle="Come see our full collection in person — we're open all week."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-red-100 h-72">
              <iframe
                title="Prerna Creations Location"
                src="https://www.google.com/maps?q=50/A+Lalbahadur+Shastri+Marg,+Civil+Lines,+Prayagraj,+Uttar+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center gap-5">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="bg-brand-red-light p-3 rounded-xl shrink-0">
                  <FiMapPin size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    50/A Lalbahadur Shastri Marg,<br />
                    Opposite Girl's High School,<br />
                    Civil Lines, Allahabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="bg-brand-red-light p-3 rounded-xl shrink-0">
                  <FiPhone size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Phone / WhatsApp</p>
                  <a
                    href={generalLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-red text-sm font-medium hover:underline"
                  >
                    +91 99352 57300
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="bg-brand-red-light p-3 rounded-xl shrink-0">
                  <FiInstagram size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/prernacreationsbedsheet/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-red text-sm font-medium hover:underline"
                  >
                    @prernacreationsbedsheet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Have a Question?
          </h2>
          <p className="text-red-100 text-sm mb-8">
            Message us on WhatsApp — we reply fast.
          </p>
          <a
            href={generalLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors"
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}