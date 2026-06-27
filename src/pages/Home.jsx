import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiStar, FiTruck, FiShield } from 'react-icons/fi'
import { generalLink } from '../utils/whatsapp'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    icon: <FiTruck size={24} />,
    title: 'Local Delivery',
    desc: 'Fast delivery across Allahabad & nearby areas.',
  },
  {
    icon: <FiShield size={24} />,
    title: 'Quality Fabric',
    desc: 'Soft, durable cotton fabric — washes well, lasts long.',
  },
  {
    icon: <FiStar size={24} />,
    title: '500+ Designs',
    desc: 'Fitted, printed, plain — all sizes available.',
  },
]

const testimonials = [
  {
    name: 'Sunita Sharma',
    location: 'Civil Lines, Allahabad',
    text: 'Bahut achhi quality hai. Fitted sheet bilkul perfect fit hui. Price bhi reasonable hai.',
    stars: 5,
  },
  {
    name: 'Rekha Gupta',
    location: 'George Town, Allahabad',
    text: 'Maine 3 sets liye hain. Har baar quality ekdum sahi milti hai. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Priya Verma',
    location: 'Naini, Allahabad',
    text: 'WhatsApp pe order karna bahut easy tha. Delivery bhi jaldi ho gayi. Bahut pasand aaya.',
    stars: 5,
  },
]

export default function Home() {
  const featured = products.slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-red-light via-white to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">
              Allahabad's Trusted Bedsheet Store
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Premium Bedsheets
              <span className="text-brand-red block">For Every Home</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Fitted, printed & plain bedsheets in all sizes. Soft fabric, beautiful designs —
              order directly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={generalLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <FaWhatsapp size={20} />
                Order on WhatsApp
              </a>
              <Link
                to="/catalog"
                className="flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View Catalog
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Image / Logo Card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center gap-4 border border-red-100">
              <img
                src="/favicon.webp"
                alt="Prerna Creations"
                className="h-36 w-36 object-contain"
              />
              <p className="font-display text-2xl font-bold text-brand-red text-center">
                Prerna Creations
              </p>
              <p className="text-gray-400 text-sm text-center">Premium Bedsheets, Allahabad</p>
              <a
                href="https://www.instagram.com/prernacreationsbedsheet/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-brand-red underline underline-offset-2"
              >
                @prernacreationsbedsheet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-brand-red py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-xl shrink-0">{f.icon}</div>
              <div>
                <p className="font-semibold text-base">{f.title}</p>
                <p className="text-red-100 text-sm mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader
            eyebrow="Our Collection"
            title="Featured Bedsheets"
            subtitle="Handpicked designs — quality you can feel."
          />
          <Link
            to="/catalog"
            className="hidden md:flex items-center gap-1 text-brand-red text-sm font-semibold hover:underline"
          >
            View All <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red font-semibold px-6 py-2.5 rounded-full hover:bg-brand-red hover:text-white transition-colors"
          >
            View All Products <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-red-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="What Customers Say"
            title="Trusted by Families in Allahabad"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-red-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                      style={{ fill: '#FACC15' }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-red-100 text-base mb-8">
            Message us on WhatsApp — we'll help you pick the right bedsheet.
          </p>
          <a
            href={generalLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors text-base"
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}