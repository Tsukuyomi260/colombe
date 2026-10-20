import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, totalItems, totalPrice, dispatch } = useCart()

  const formatPrice = (price) => new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-bg-cream">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <ShoppingBag size={64} className="text-text-light mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold text-text-dark mb-4">Votre panier est vide</h1>
          <p className="text-text-gray mb-8">Découvrez nos produits et ajoutez-les à votre panier.</p>
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Voir la boutique
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-text-dark mb-8">
          Votre panier ({totalItems} article{totalItems > 1 ? 's' : ''})
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-5 flex gap-5 items-center">
                <div className="w-20 h-20 bg-bg-green-light rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-text-dark truncate">{item.name}</h3>
                  <p className="text-primary font-bold">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-bg-green-light transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-bg-green-light transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <p className="font-bold text-text-dark w-28 text-right hidden sm:block">
                  {formatPrice(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className="text-red-400 hover:text-red-600 transition-colors p-1"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 h-fit sticky top-28">
            <h3 className="font-heading text-lg font-semibold text-text-dark mb-6">Récapitulatif</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-text-gray">Sous-total</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-gray">Livraison</span>
                <span className="text-accent font-medium">Gratuite</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary text-xl">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
            >
              Passer la commande
            </Link>
            <Link
              to="/boutique"
              className="w-full mt-3 text-primary hover:text-primary-dark py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
