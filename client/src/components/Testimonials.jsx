import { Star, Quote } from 'lucide-react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Marie K.',
    text: 'Grâce aux produits du Centre Colombe, mon fils drépanocytaire a vu ses crises diminuer considérablement. Un grand merci à toute l\'équipe !',
    rating: 5,
  },
  {
    name: 'Jean-Paul M.',
    text: 'Après des années de lutte contre l\'hépatite B, les traitements naturels du centre m\'ont redonné espoir. Je recommande vivement.',
    rating: 5,
  },
  {
    name: 'Aïcha D.',
    text: 'Un accompagnement humain et des produits de qualité. Le suivi est personnalisé et l\'équipe est toujours disponible.',
    rating: 5,
  },
]

export default function Testimonials() {
  const titleRef = useScrollAnimation()
  const gridRef = useStaggerAnimation({ staggerDelay: 150 })

  return (
    <section className="py-20 bg-bg-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 reveal-up">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Des témoignages authentiques de personnes accompagnées par notre centre.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm reveal-item">
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-text-gray leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <span className="font-medium text-text-dark">{t.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
