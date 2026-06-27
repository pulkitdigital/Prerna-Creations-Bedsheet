const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

export function getWhatsAppLink(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${NUMBER}?text=${encoded}`
}

export function orderLink(productName) {
  return getWhatsAppLink(`Hi, I want to order: ${productName}. Please share details and availability.`)
}

export function generalLink() {
  return getWhatsAppLink(`Hi Prerna Creations! I'd like to know more about your bedsheets.`)
}