import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error()
      toast.success('Message envoyé avec succès !')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"

  return (
    <div className="pt-20 bg-bg-cream min-h-screen">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions sur nos produits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-bg-green-light rounded-xl flex items-center justify-center mb-4">
                <MapPin size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2">Adresse</h3>
              <p className="text-text-gray text-sm">Cotonou, Bénin</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-bg-green-light rounded-xl flex items-center justify-center mb-4">
                <Phone size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2">Téléphone</h3>
              <a href="tel:+2290197319647" className="text-text-gray text-sm hover:text-primary">+229 01 97 31 96 47</a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-bg-green-light rounded-xl flex items-center justify-center mb-4">
                <MessageCircle size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/2290197319647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray text-sm hover:text-primary"
              >
                +229 01 97 31 96 47
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-bg-green-light rounded-xl flex items-center justify-center mb-4">
                <Clock size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2">Consultations</h3>
              <p className="text-text-gray text-sm">Sur rendez-vous</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-text-dark mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-gray mb-1">Nom complet *</label>
                  <input name="name" required value={form.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-gray mb-1">Téléphone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-text-gray mb-1">Sujet *</label>
                  <input name="subject" required value={form.subject} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-gray mb-1">Message *</label>
                <textarea name="message" rows={5} required value={form.message} onChange={handleChange} className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                <Send size={18} />
                {sending ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
