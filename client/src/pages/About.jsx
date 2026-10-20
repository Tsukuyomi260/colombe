import { Leaf, Users, Award, Clock, Check } from 'lucide-react'

const stats = [
  { icon: Users, value: '+500', label: 'Patients accompagnés' },
  { icon: Leaf, value: '5', label: 'Produits phares' },
  { icon: Award, value: '100%', label: 'Naturel & Végétal' },
  { icon: Clock, value: '24/7', label: 'Support WhatsApp' },
]

const services = [
  'Soins à base de plantes médicinales',
  'Conception et fabrication de phyto-médicaments améliorés',
  'Conseils en santé naturelle et hygiène de vie',
  'Accompagnement en nutrition thérapeutique',
  'Approche holistique (corps – esprit – environnement)',
  'Formation en médecine naturelle',
  'Consultations sur rendez-vous',
]

export default function About() {
  return (
    <div className="pt-20 bg-bg-cream min-h-screen">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">À propos de Colombe Santé Bio Africa</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Expert en santé intégrative et phyto-médecine moderne. Cotonou, Bénin.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">Notre expertise</p>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
                Spécialiste en Phytothérapie, Naturopathie & Nutrition Thérapeutique
              </h2>
              <div className="space-y-4 text-text-gray leading-relaxed">
                <p>
                  Colombe Santé Bio Africa est un centre d'expertise en santé intégrative
                  et phyto-médecine moderne, basé à Cotonou au Bénin. Nous concevons
                  et fabriquons des compléments alimentaires à base d'extraits végétaux
                  premium, inspirés de la nature africaine.
                </p>
                <p>
                  Nos produits — Drépasolu, Hépatosol, Glycosol, Spermosol et Fertisolu —
                  sont formulés avec rigueur pour apporter un soutien naturel face à des
                  pathologies comme la drépanocytose, les hépatites, le diabète et les
                  troubles de la fertilité.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-text-dark mb-4">Nos services</h3>
                <ul className="space-y-3">
                  {services.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-gray text-sm">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-bg-green-light rounded-3xl overflow-hidden">
              <img src="/images/hepatosol.png" alt="Produits Colombe Santé Bio Africa" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <s.icon size={28} className="text-white" />
                </div>
                <p className="font-heading text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-white/70 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">Notre mission</h2>
          <p className="text-text-gray text-lg leading-relaxed mb-8">
            L'excellence végétale au service de la santé. Nous croyons que la nature
            africaine recèle des solutions puissantes pour accompagner la guérison
            et le bien-être. Chaque produit est conçu avec expertise, fabriqué au
            Bénin et livré avec soin.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-primary mb-2">Naturel</h3>
              <p className="text-text-gray text-sm">100% naturel, sans OGM, sans colorant, sans conservateur.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-primary mb-2">Efficace</h3>
              <p className="text-text-gray text-sm">Formules concentrées à base de plantes médicinales sélectionnées.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-primary mb-2">Sûr</h3>
              <p className="text-text-gray text-sm">Contrôles rigoureux à chaque étape de fabrication.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
