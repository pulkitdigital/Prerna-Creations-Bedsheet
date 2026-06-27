import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { generalLink } from '../utils/whatsapp'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/favicon.webp"
            alt="Prerna Creations Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <p className="font-display text-brand-red font-bold text-lg leading-none">
              Prerna Creations
            </p>
            <p className="text-xs text-gray-500 tracking-wide">Premium Bedsheets</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-red border-b-2 border-brand-red pb-0.5'
                    : 'text-gray-600 hover:text-brand-red'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <a
          href={generalLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          <FiPhone size={15} />
          Order Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 mt-3">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1.5 border-b border-gray-100 ${
                    isActive ? 'text-brand-red' : 'text-gray-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href={generalLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-red text-white text-sm font-medium px-4 py-2.5 rounded-full"
            >
              <FiPhone size={15} />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}