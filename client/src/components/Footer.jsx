import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle, Globe, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.svg" alt="Colombe Santé Bio Africa" className="h-12 w-auto brightness-0 invert" />
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg block">COLOMBE</span>
                <span className="text-white/70 text-[10px] tracking-wider">SANTÉ BIO AFRICA</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Expert en santé intégrative et phyto-médecine moderne.
              L'excellence végétale au service de la santé.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/2290197319647" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-white text-sm transition-colors">Accueil</Link></li>
              <li><Link to="/boutique" className="text-white/70 hover:text-white text-sm transition-colors">Boutique</Link></li>
              <li><Link to="/a-propos" className="text-white/70 hover:text-white text-sm transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nos produits</h4>
            <ul className="space-y-3">
              <li><Link to="/boutique?categorie=drepanocytose" className="text-white/70 hover:text-white text-sm transition-colors">Drépasolu — Drépanocytose</Link></li>
              <li><Link to="/boutique?categorie=hepatite" className="text-white/70 hover:text-white text-sm transition-colors">Hépatosol — Hépatite</Link></li>
              <li><Link to="/boutique?categorie=diabete" className="text-white/70 hover:text-white text-sm transition-colors">Glycosol — Diabète</Link></li>
              <li><Link to="/boutique?categorie=fertilite-homme" className="text-white/70 hover:text-white text-sm transition-colors">Spermosol — Fertilité Homme</Link></li>
              <li><Link to="/boutique?categorie=fertilite-femme" className="text-white/70 hover:text-white text-sm transition-colors">Fertisolu — Fertilité Femme</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nous joindre</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+2290197319647" className="text-white/70 hover:text-white text-sm transition-colors">+229 01 97 31 96 47</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-white/70 text-sm">contact@colombesante.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-accent shrink-0" />
                <a href="https://wa.me/2290197319647" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 Colombe Santé Bio Africa. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
