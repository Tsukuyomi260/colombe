export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  console.log('Nouveau message:', name)
  res.status(201).json({ message: 'Message envoyé avec succès' })
}
