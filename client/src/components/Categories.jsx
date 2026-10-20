import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

export default function Categories() {
  const titleRef = useScrollAnimation()
  const gridRef = useStaggerAnimation({ staggerDelay: 100 })

  return (
    <section className="py-20 bg-bg-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 reveal-up">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Nos domaines de soins
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Nous proposons des traitements naturels pour de nombreuses pathologies.
            Chaque produit est soigneusement préparé selon les recettes ancestrales.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/boutique?categorie=${cat.id}`}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group reveal-item"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-text-dark group-hover:text-primary transition-colors mb-2">
                {cat.name}
              </h3>
              <p className="text-text-gray text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
