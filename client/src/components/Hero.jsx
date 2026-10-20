import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Leaf } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const leftRef = useScrollAnimation({ threshold: 0.2 })
  const rightRef = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="relative bg-bg-cream pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className="reveal-left">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              Colombe Santé Bio Africa
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
              L'excellence végétale{' '}
              <span className="text-primary">au service</span>{' '}
              de la santé
            </h1>
            <p className="text-text-gray text-lg leading-relaxed mb-8 max-w-lg">
              Expert en santé intégrative et phyto-médecine moderne.
              Découvrez nos compléments alimentaires 100% naturels, conçus et
              fabriqués au Bénin à partir de plantes médicinales africaines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Découvrir nos produits
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/2290197319647"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Commander sur WhatsApp
              </a>
            </div>
          </div>

          <div ref={rightRef} className="relative reveal-right">
            <div className="relative rounded-3xl overflow-hidden bg-bg-green-light aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src="/images/drepasolu.png"
                alt="Produit Colombe Santé Bio Africa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary text-lg">100%</p>
                <p className="text-text-gray text-xs">Naturel & Végétal</p>
              </div>
            </div>

            <div className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary-light/30 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary text-lg">Bénin</p>
                <p className="text-text-gray text-xs">Fabriqué au Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
