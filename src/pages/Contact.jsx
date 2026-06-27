import { FiPhone, FiMapPin, FiInstagram, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { generalLink, orderLink } from "../utils/whatsapp";

const quickMessages = [
  {
    label: "🛏️ Check availability",
    message: "Hi! I want to check availability of bedsheets.",
  },
  {
    label: "💰 Ask about price",
    message: "Hi! Can you share the price list for bedsheets?",
  },
  {
    label: "🚚 Delivery enquiry",
    message: "Hi! Do you deliver to my area? I want to know delivery details.",
  },
  {
    label: "📦 Bulk order",
    message:
      "Hi! I want to place a bulk order for bedsheets. Please share details.",
  },
];

const contactDetails = [
  {
    icon: <FiPhone size={22} />,
    label: "Phone / WhatsApp",
    value: "+91 99352 57300",
    href: generalLink(),
    external: true,
  },
  {
    icon: <FiMapPin size={22} />,
    label: "Store Address",
    value:
      "50/A Lalbahadur Shastri Marg, Opp. Girl's High School, Civil Lines, Allahabad",
    href: "https://www.google.com/maps?q=50/A+Lalbahadur+Shastri+Marg,+Civil+Lines,+Prayagraj",
    external: true,
  },
  {
    icon: <FiInstagram size={22} />,
    label: "Instagram",
    value: "@prernacreationsbedsheet",
    href: "https://www.instagram.com/prernacreationsbedsheet/",
    external: true,
  },
  {
    icon: <FiClock size={22} />,
    label: "Store Hours",
    value: "Mon – Sat: 10:00 AM – 8:00 PM\nSunday: 11:00 AM – 6:00 PM",
    href: null,
    external: false,
  },
];

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-red-light via-white to-white py-14 border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Us"
            subtitle="We're just a WhatsApp message away. Reach out anytime — we reply fast."
            center
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — WhatsApp CTA + Quick Messages */}
          <div>
            {/* Big WhatsApp Button */}
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 p-5 rounded-full">
                  <FaWhatsapp size={40} className="text-white" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                Order on WhatsApp
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Tap the button below — tell us what you need and we'll help you
                right away.
              </p>
              <a
                href={generalLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base"
              >
                <FaWhatsapp size={20} />
                Chat Now on WhatsApp
              </a>
              <p className="text-xs text-gray-400 mt-4">+91 99352 57300</p>
            </div>

            {/* Quick Message Buttons */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Quick Messages
              </p>
              <div className="flex flex-col gap-3">
                {quickMessages.map((qm) => (
                  <a
                    key={qm.label}
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(qm.message)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-white border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium transition-colors group"
                  >
                    <FaWhatsapp
                      size={18}
                      className="text-green-500 shrink-0 group-hover:scale-110 transition-transform"
                    />
                    {qm.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Details + Map */}
          <div>
            {/* Contact Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
                >
                  <div className="bg-brand-red-light p-3 rounded-xl shrink-0 text-brand-red">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="text-gray-800 text-sm font-medium hover:text-brand-red transition-colors leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-sm font-medium leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64">
              <iframe
                title="Prerna Creations Store Location"
                src="https://www.google.com/maps?q=50/A+Lalbahadur+Shastri+Marg,+Civil+Lines,+Prayagraj,+Uttar+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-red py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Visit Us in Allahabad
          </h2>
          <p className="text-red-100 text-sm mb-8 leading-relaxed">
            Come to our store at Civil Lines and explore 500+ designs in person.
            Or just WhatsApp us — we deliver too.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={generalLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-bold px-7 py-3 rounded-full hover:bg-red-50 transition-colors"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
            <a
              href="https://www.google.com/maps?q=50/A+Lalbahadur+Shastri+Marg,+Civil+Lines,+Prayagraj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white hover:text-brand-red transition-colors"
            >
              <FiMapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
