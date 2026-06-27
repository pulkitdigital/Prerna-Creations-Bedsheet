const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

export function getWhatsAppLink(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${NUMBER}?text=${encoded}`
}

export function orderLink(productName) {
  return getWhatsAppLink(`Hi Prerna Creations! I want to place a bulk order for: ${productName}. Please share wholesale price and minimum order quantity.`)
}

export function generalLink() {
  return getWhatsAppLink(`Hi Prerna Creations! I am interested in bulk/wholesale bedsheet orders. Please share your catalog and pricing.`)
}