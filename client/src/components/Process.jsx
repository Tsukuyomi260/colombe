import { Phone, Search, Pill, CalendarCheck } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Contactez-nous', description: 'Appelez ou écrivez-nous pour décrire vos symptômes.' },
  { icon: Search, title: 'Consultation', description: 'Nos experts analysent votre cas et vous orientent.' },
  { icon: Pill, title: 'Traitement', description: 'Recevez vos produits adaptés à votre pathologie.' },
  { icon: CalendarCheck, title: 'Suivi', description: 'Un accompagnement continu jusqu\'à votre rétablissement.' },
]

export default function Process() {
  return (
    <section className="py-20 bg-bg-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
          Comment ça marche
        </h2>
        <p className="text-text-gray max-w-2xl mx-auto mb-16">
          Une approche simple et humaine pour vous accompagner vers la guérison.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <step.icon size={32} className="text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">{step.title}</h3>
              <p className="text-text-gray text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
