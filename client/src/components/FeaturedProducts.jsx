import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import toast from 'react-hot-toast'

export default function FeaturedProducts() {
  const { dispatch } = useCart()
  const featured = products.filter(p => p.featured)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
    toast.success(`${product.name} ajouté au panier`)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Nos compléments alimentaires
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Découvrez notre gamme de phyto-médicaments, formulés avec des extraits
            végétaux premium et fabriqués au Bénin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square bg-bg-green-light relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.inStock && (
                  <span className="absolute top-3 left-3 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                    En stock
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-text-dark text-lg mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{product.subtitle}</p>
                <p className="text-text-gray text-sm mb-1">{product.details}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-primary font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Voir tous nos produits
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
