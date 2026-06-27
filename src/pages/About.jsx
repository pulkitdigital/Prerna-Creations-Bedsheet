import { FiMapPin, FiPhone, FiInstagram, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { generalLink } from '../utils/whatsapp'

const whyUs = [
  'Heavy cotton fabric — durable and premium quality',
  'Fitted sheets with strong elastic — perfect fit guaranteed',
  '500+ designs updated regularly',
  'All sizes: Single, Double, Queen, King',
  'Bulk & wholesale orders welcome',
  'Pan India shipping — all states covered',
  'Resellers and wholesalers get special pricing',
  'Consistent quality across every batch',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-red-light via-white to-white py-14 border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1">
            <SectionHeader
              eyebrow="Who We Are"
              title="About Prerna Creations"
              subtitle="A trusted wholesale bedsheet supplier based in Allahabad — serving resellers and businesses across India."
            />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Prerna Creations is a manufacturer and bulk supplier of premium fitted, printed,
              and plain bedsheets. Based in Civil Lines, Allahabad, we have been supplying
              quality bedsheets to resellers, wholesalers, and retailers across India.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              We use heavy cotton fabric that is soft, durable, and easily washable —
              making it perfect for retail and resale. Our designs are updated regularly
              to match market trends, and we ship Pan India with bulk pricing available
              for all order sizes.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Pan India Shipping', 'Wholesale Pricing', 'Bulk Orders Welcome', 'Resellers Welcome'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs bg-brand-red-light text-brand-red px-3 py-1.5 rounded-full font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

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
                Wholesale Bedsheet Supplier · Allahabad, UP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Resellers Trust Us"
          subtitle="Consistent quality, bulk pricing and Pan India reach — everything a reseller needs."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
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

      {/* Shipping Info */}
      <section className="bg-brand-red py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Shipping
          </p>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            We Ship Across All of India
          </h2>
          <p className="text-red-100 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            From Allahabad to Delhi, Mumbai, Surat, Jaipur, Kolkata, Bangalore and beyond —
            we deliver bulk orders to every state in India.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Delhi', 'Mumbai', 'Surat', 'Jaipur', 'Kolkata', 'Lucknow', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', '& More'].map((city) => (
              <span
                key={city}
                className="bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-brand-red-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="Find Us"
            title="Our Office & Store"
            subtitle="Visit us in Allahabad or contact us on WhatsApp for bulk enquiries."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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

            <div className="flex flex-col justify-center gap-5">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="bg-brand-red-light p-3 rounded-xl shrink-0">
                  <FiMapPin size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Office Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    50/A Lalbahadur Shastri Marg,<br />
                    Opposite Girl's High School,<br />
                    Civil Lines, Allahabad, UP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="bg-brand-red-light p-3 rounded-xl shrink-0">
                  <FiPhone size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Call / WhatsApp</p>
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
            Interested in Bulk Orders?
          </h2>
          <p className="text-red-100 text-sm mb-8">
            WhatsApp us for wholesale pricing, MOQ details and shipping rates across India.
          </p>
          <a
            href={generalLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors"
          >
            <FaWhatsapp size={22} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}