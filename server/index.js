const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const orders = []
const contacts = []

const products = [
  { id: 1, name: 'DRÉPASOLU', slug: 'drepasolu', category: 'drepanocytose', price: 15000, subtitle: 'Soutien naturel contre la drépanocytose', description: 'Complément alimentaire — 40 gélules végétales, 500 mg par gélule.', inStock: true },
  { id: 2, name: 'HÉPATOSOL', slug: 'hepatosol', category: 'hepatite', price: 25000, subtitle: 'Soutien du foie, naturellement', description: 'Complément alimentaire pour les hépatites A, B, C et D. 40 gélules végétales.', inStock: true },
  { id: 3, name: 'GLYCOSOL', slug: 'glycosol', category: 'diabete', price: 18000, subtitle: 'Équilibre glycémique & bien-être métabolique', description: 'Complément alimentaire — 30 gélules végétales, 500 mg par gélule.', inStock: true },
  { id: 4, name: 'SPERMOSOL', slug: 'spermosol', category: 'fertilite-homme', price: 30000, subtitle: 'Soutien de la fertilité masculine', description: 'Complément alimentaire 100% végétal — 40 gélules végétales, 500 mg.', inStock: true },
  { id: 5, name: 'FERTISOLU', slug: 'fertisolu', category: 'fertilite-femme', price: 28000, subtitle: 'L\'allié naturel du projet bébé', description: 'Complément alimentaire liquide — 500 ml, obtenu par macération de plantes.', inStock: true },
]

app.get('/api/products', (req, res) => {
  const { category } = req.query
  if (category) return res.json(products.filter(p => p.category === category))
  res.json(products)
})

app.get('/api/products/:slug', (req, res) => {
  const product = products.find(p => p.slug === req.params.slug)
  if (!product) return res.status(404).json({ error: 'Produit non trouvé' })
  res.json(product)
})

app.post('/api/orders', (req, res) => {
  const { customer, items, total } = req.body
  if (!customer || !items || !items.length) {
    return res.status(400).json({ error: 'Données de commande invalides' })
  }
  const order = {
    id: orders.length + 1,
    customer, items, total,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  orders.push(order)
  console.log('Nouvelle commande:', order.id, '-', customer.firstName, customer.lastName)
  res.status(201).json({ message: 'Commande créée avec succès', orderId: order.id })
})

app.get('/api/orders', (req, res) => res.json(orders))

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }
  const contact = { id: contacts.length + 1, ...req.body, createdAt: new Date().toISOString() }
  contacts.push(contact)
  console.log('Nouveau message:', contact.name)
  res.status(201).json({ message: 'Message envoyé avec succès' })
})

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`))
