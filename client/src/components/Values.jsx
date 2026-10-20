import { Heart, Shield, Leaf } from 'lucide-react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

const values = [
  {
    icon: Leaf,
    title: 'Phytothérapie',
    description: 'Soins à base de plantes médicinales et conception de phyto-médicaments améliorés.',
  },
  {
    icon: Heart,
    title: 'Naturopathie',
    description: 'Approche holistique corps–esprit–environnement pour votre bien-être global.',
  },
  {
    icon: Shield,
    title: 'Nutrition Thérapeutique',
    description: 'Accompagnement en nutrition thérapeutique et conseils en hygiène de vie.',
  },
]

export default function Values() {
  const titleRef = useScrollAnimation()
  const gridRef = useStaggerAnimation()
  const taglineRef = useScrollAnimation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={titleRef} className="reveal-up">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Spécialiste en santé intégrative
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto mb-16">
            Notre expertise en phyto-médecine moderne au service de votre santé.
            Des compléments alimentaires naturels, sûrs et efficaces.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center reveal-item">
              <div className="w-20 h-20 bg-bg-green-light rounded-2xl flex items-center justify-center mb-6">
                <v.icon size={36} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">{v.title}</h3>
              <p className="text-text-gray leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div ref={taglineRef} className="mt-16 space-y-2 text-text-gray animate-fade-up">
          <p>Votre santé, notre mission.</p>
          <p className="font-semibold text-text-dark">
            Nature • Confiance • Excellence
          </p>
        </div>
      </div>
    </section>
  )
}
