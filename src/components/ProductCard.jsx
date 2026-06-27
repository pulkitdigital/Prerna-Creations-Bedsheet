import { FaWhatsapp } from 'react-icons/fa'
import { orderLink } from '../utils/whatsapp'

export default function ProductCard({ product }) {
  const { name, category, size, image, tag } = product

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {category} · {size}
        </p>
        <h3 className="font-display text-gray-900 font-semibold text-base leading-snug mb-3">
          {name}
        </h3>

        <a
          href={orderLink(name)}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-2.5 rounded-full transition-colors"
        >
          <FaWhatsapp size={16} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}