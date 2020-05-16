const sanitizeUrl = require('@braintree/sanitize-url').sanitizeUrl

export const mapFlights = (info = {}) => {
  return {
    duration: info.fly_duration || '-',
    price: info.price
      ? new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
          maximumFractionDigits: 0,
          minimumFractionDigits: 0
        }).format(info.price)
      : '- €',
    link: sanitizeUrl(info.deep_link)
  }
}
