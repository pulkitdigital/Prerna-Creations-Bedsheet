import { useState } from 'react'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { FiSearch } from 'react-icons/fi'

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-red-light via-white to-white py-12 border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Collection"
            title="Bedsheet Catalog"
            subtitle="Browse all designs — fitted, printed & plain in all sizes."
          />

          {/* Search Bar */}
          <div className="relative max-w-md mt-6">
            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search bedsheets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition"
            />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat
                  ? 'bg-brand-red text-white border-brand-red'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
          {activeCategory !== 'All' && (
            <span className="ml-1">
              in <span className="text-brand-red font-medium">{activeCategory}</span>
            </span>
          )}
        </p>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🛏️</p>
            <p className="font-display text-xl font-semibold text-gray-700 mb-2">
              No bedsheets found
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Try a different category or search term.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearch('')
              }}
              className="px-6 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-brand-red-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}