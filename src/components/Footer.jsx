import { Link } from "react-router-dom";
import { FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { generalLink } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-brand-red text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/logo.webp"
              alt="Prerna Creations"
              className="h-9 w-9 object-contain brightness-0 invert"
            />
            <p className="font-display text-xl font-bold">Prerna Creations</p>
          </div>
          <p className="text-sm text-red-100 leading-relaxed mb-4 max-w-sm">
            Wholesale & bulk supplier of premium fitted, printed and plain
            bedsheets. Serving resellers and businesses across India with
            consistent quality and competitive pricing.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Pan India Shipping", "Wholesale Welcome", "Bulk Orders"].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-widest mb-4 text-red-200">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/catalog", label: "Catalog" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-red-100 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-widest mb-4 text-red-200">
            Contact Us
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={generalLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-red-100 hover:text-white transition-colors"
              >
                <FiPhone size={15} className="shrink-0" />
                +91 99352 57300
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-red-100">
              <FiMapPin size={15} className="mt-0.5 shrink-0" />
              50/A Lalbahadur Shastri Marg, Opp. Girl's High School, Civil
              Lines, Allahabad
            </li>
            <li>
              <a
                href="https://www.instagram.com/prernacreationsbedsheet/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-red-100 hover:text-white transition-colors"
              >
                <FiInstagram size={15} />
                @prernacreationsbedsheet
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-700 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-red-200">
          <p>
            © {new Date().getFullYear()} Prerna Creations. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-1">
            <p>Created by</p>
            <a
              href="https://bebeyond.digital"
              target="_blank"
              rel="noreferrer"
              className="text-red-300 hover:text-white transition-colors"
            >
              Bebeyond
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
