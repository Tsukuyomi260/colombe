import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, ArrowLeft, Check, Leaf } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import toast from 'react-hot-toast'

export default function ProductDetail() {
  const { slug } = useParams()
  const { dispatch } = useCart()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="pt-20 min-h-screen bg-bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-text-dark mb-4">Produit non trouvé</h1>
          <Link to="/boutique" className="text-primary font-medium">Retour à la boutique</Link>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product })
    toast.success(`${product.name} ajouté au panier`)
  }

  const formatPrice = (price) => new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <div className="pt-20 min-h-screen bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/boutique" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8">
          <ArrowLeft size={18} />
          Retour à la boutique
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <div className="mb-2">
              {product.inStock && (
                <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                  En stock
                </span>
              )}
            </div>
            <h1 className="font-heading text-4xl font-bold text-text-dark mb-2">{product.name}</h1>
            <p className="text-primary text-lg font-medium mb-4">{product.subtitle}</p>
            <p className="text-text-gray leading-relaxed mb-6">{product.description}</p>
            <p className="text-text-dark font-medium mb-6">{product.details}</p>

            <div className="text-3xl font-bold text-primary mb-8">
              {formatPrice(product.price)}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={addToCart}
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-4 rounded-full font-medium transition-colors text-lg"
              >
                <ShoppingCart size={20} />
                Ajouter au panier
              </button>
              <a
                href="https://wa.me/2290197319647"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-7 py-4 rounded-full font-medium transition-colors"
              >
                Commander via WhatsApp
              </a>
            </div>

            {/* Benefits */}
            {product.benefits && (
              <div className="bg-bg-green-light rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-semibold text-text-dark mb-4 flex items-center gap-2">
                  <Leaf size={20} className="text-primary" />
                  Bienfaits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-gray text-sm">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Badges */}
            {product.badges && (
              <div className="flex flex-wrap gap-2">
                {product.badges.map((b, i) => (
                  <span key={i} className="bg-white border border-border text-text-dark text-xs px-3 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Other products */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-text-dark mb-8">Découvrez aussi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map(p => (
              <Link
                key={p.id}
                to={`/produit/${p.slug}`}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square bg-bg-green-light overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-text-dark group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-primary text-sm font-medium">{p.subtitle}</p>
                  <p className="text-primary font-bold mt-2">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
