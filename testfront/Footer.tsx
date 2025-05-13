import React from 'react';
import { Phone, MapPin, Info, ShieldQuestion, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Контактна інформація</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-400" />
              <span>+380 (XX) XXX-XX-XX</span>
            </li>
            <li className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-blue-400" />
              <span>м. Київ, вул. Хрещатик, 1</span>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Інформація</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white flex items-center">
                <Info className="h-5 w-5 mr-3 text-blue-400" />
                <span>Про нас</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center">
                <ShieldQuestion className="h-5 w-5 mr-3 text-blue-400" />
                <span>Політика повернення</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Ми в соцмережах</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <Instagram className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <Twitter className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Квартал. Всі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
