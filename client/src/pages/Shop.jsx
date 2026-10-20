import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingCart, Search } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products, categories } from '../data/products'
import toast from 'react-hot-toast'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categorie') || 'all'
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const { dispatch } = useCart()

  const filtered = useMemo(() => {
    let result = products

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
      )
    }

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name))

    return result
  }, [activeCategory, search, sortBy])

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
    toast.success(`${product.name} ajouté au panier`)
  }

  const formatPrice = (price) => new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'

  const setCategory = (catId) => {
    if (catId === 'all') {
      searchParams.delete('categorie')
    } else {
      searchParams.set('categorie', catId)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="pt-20 bg-bg-cream min-h-screen">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">Notre Boutique</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Compléments alimentaires naturels, fabriqués au Bénin. L'excellence végétale au service de votre santé.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-gray" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="name">Trier par nom</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-text-dark hover:bg-bg-green-light border border-border'
            }`}
          >
            Tous
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-dark hover:bg-bg-green-light border border-border'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-gray text-lg">Aucun produit trouvé pour cette recherche.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <Link to={`/produit/${product.slug}`} className="block">
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
                </Link>
                <div className="p-5">
                  <Link to={`/produit/${product.slug}`}>
                    <h3 className="font-heading font-bold text-text-dark text-lg mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
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
        )}
      </div>
    </div>
  )
}
