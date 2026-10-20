export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { customer, items, total } = req.body
  if (!customer || !items || !items.length) {
    return res.status(400).json({ error: 'Données de commande invalides' })
  }

  const orderId = Date.now()
  console.log('Nouvelle commande:', orderId, '-', customer.firstName, customer.lastName)
  res.status(201).json({ message: 'Commande créée avec succès', orderId })
}
