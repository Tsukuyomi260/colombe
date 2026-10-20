import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Checkout() {
  const { items, totalPrice, dispatch } = useCart()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', notes: ''
  })

  const formatPrice = (price) => new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer: form, items, total: totalPrice })
      })
      if (!res.ok) throw new Error('Erreur serveur')
      dispatch({ type: 'CLEAR_CART' })
      setSubmitted(true)
    } catch {
      toast.error('Erreur lors de la commande. Veuillez réessayer.')
    }
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-bg-cream flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <CheckCircle size={72} className="text-accent mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold text-text-dark mb-4">
            Commande envoyée !
          </h1>
          <p className="text-text-gray mb-8">
            Merci pour votre commande. Notre équipe vous contactera très bientôt
            pour confirmer les détails et la livraison.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-medium transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    navigate('/boutique')
    return null
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"

  return (
    <div className="pt-20 min-h-screen bg-bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-text-dark mb-8">Finaliser la commande</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-4">Vos informations</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-gray mb-1">Prénom *</label>
                  <input name="firstName" required value={form.firstName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Nom *</label>
                  <input name="lastName" required value={form.lastName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Téléphone *</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-4">Adresse de livraison</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-text-gray mb-1">Adresse *</label>
                  <input name="address" required value={form.address} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Ville *</label>
                  <input name="city" required value={form.city} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Notes (optionnel)</label>
                  <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 h-fit sticky top-28">
            <h3 className="font-heading text-lg font-semibold text-text-dark mb-4">Votre commande</h3>
            <div className="space-y-3 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-text-gray">{item.name} x{item.quantity}</span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary text-xl">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-medium transition-colors"
            >
              Confirmer la commande
            </button>
            <p className="text-text-light text-xs text-center mt-3">
              Paiement à la livraison ou par mobile money
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
