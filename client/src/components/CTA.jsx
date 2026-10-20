import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTA() {
  const ref = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="bg-primary rounded-3xl overflow-hidden reveal-scale">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-10 lg:p-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Notre équipe de spécialistes en phyto-médecine est disponible pour
                vous orienter vers le produit adapté à votre situation. Consultations sur rendez-vous.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/2290197319647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-bg-cream px-7 py-3.5 rounded-full font-medium transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <Link
                  to="/boutique"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-full font-medium transition-colors"
                >
                  Voir la boutique
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block p-8">
              <img src="/images/glycosol.png" alt="Produits Colombe" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
