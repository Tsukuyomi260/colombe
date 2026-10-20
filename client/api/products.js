const products = [
  { id: 1, name: 'DRÉPASOLU', slug: 'drepasolu', category: 'drepanocytose', price: 15000, image: '/images/drepasolu.png', subtitle: 'Soutien naturel contre la drépanocytose', description: 'Complément alimentaire — L\'allié naturel des personnes vivant avec la drépanocytose. Formule naturelle qui aide à maintenir un sang sain et robuste.', details: '40 gélules végétales • 500 mg par gélule • Formule végétale premium', inStock: true, featured: true, badges: ['100% Naturel', 'Fabriqué au Bénin', 'Sans OGM'], benefits: ['Soutient la santé du sang', 'Accompagnement naturel', 'Bien-être au quotidien', 'Vitalité et énergie', 'Sûr et naturel'] },
  { id: 2, name: 'HÉPATOSOL', slug: 'hepatosol', category: 'hepatite', price: 25000, image: '/images/hepatosol.png', subtitle: 'Soutien du foie, naturellement', description: 'Complément alimentaire pour les hépatites A, B, C et D. Formule exclusive pour protéger et régénérer le foie.', details: '40 gélules végétales • Qualité Premium • Formule exclusive', inStock: true, featured: true, badges: ['100% Naturel', 'Qualité Premium', 'Sans colorant'], benefits: ['Soutient le foie', 'Protège les cellules', 'Favorise la digestion', 'Régule les fonctions hépatiques', 'Renforce l\'énergie'] },
  { id: 3, name: 'GLYCOSOL', slug: 'glycosol', category: 'diabete', price: 18000, image: '/images/glycosol.png', subtitle: 'Équilibre glycémique & bien-être métabolique', description: 'Complément alimentaire — Synergie d\'extraits végétaux premium pour aider à maintenir une glycémie saine.', details: '30 gélules végétales • 500 mg par gélule • Formule naturelle premium', inStock: true, featured: true, badges: ['100% Naturel', 'Sans OGM', 'Sans gluten'], benefits: ['Aide à maintenir une glycémie équilibrée', 'Favorise une meilleure sensibilité à l\'insuline', 'Soutient le bon fonctionnement du pancréas', 'Contribue à une énergie stable au quotidien', 'Participe au bien-être cardiovasculaire'] },
  { id: 4, name: 'SPERMOSOL', slug: 'spermosol', category: 'fertilite-homme', price: 30000, image: '/images/spermosol.png', subtitle: 'Soutien de la fertilité masculine et de la santé reproductive', description: 'Complément alimentaire 100% végétal pour soutenir la fertilité masculine et la vitalité des spermatozoïdes.', details: '40 gélules végétales • 500 mg • Sans OGM, sans colorant artificiel', inStock: true, badges: ['100% Végétal', 'Sans OGM', 'Fabriqué au Bénin'], benefits: ['Production normale des spermatozoïdes', 'Maintien d\'une fertilité masculine normale', 'Mobilité et vitalité des spermatozoïdes', 'Protection des cellules contre le stress oxydatif', 'Soutien de la fonction reproductive masculine'] },
  { id: 5, name: 'FERTISOLU', slug: 'fertisolu', category: 'fertilite-femme', price: 28000, image: '/images/fertisolu.png', subtitle: 'L\'allié naturel du projet bébé', description: 'Complément alimentaire liquide — 500 ml, obtenu par macération de plantes pour accompagner la femme dans son projet de conception.', details: '500 ml • Complément alimentaire liquide • Extraits végétaux de qualité premium', inStock: true, badges: ['Formule naturelle', 'Excellence végétale', 'Qualité Premium'], benefits: ['Contribue à l\'équilibre hormonal féminin', 'Soutient la régularité du cycle menstruel', 'Favorise le bien-être reproductif', 'Aide à protéger les cellules contre le stress oxydatif', 'Soutient le métabolisme énergétique'] },
]

export default function handler(req, res) {
  const { category, slug } = req.query

  if (slug) {
    const product = products.find(p => p.slug === slug)
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' })
    return res.json(product)
  }

  if (category) return res.json(products.filter(p => p.category === category))
  res.json(products)
}
