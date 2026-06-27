import { FaWhatsapp } from 'react-icons/fa'
import { generalLink } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={generalLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}