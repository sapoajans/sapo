import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="/sapo-ajans-logo.png" 
              alt="Sapo Ajans Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#ana-sayfa" className="text-white hover:text-red-400 transition-colors duration-300">Ana Sayfa</a>
            <a href="#hizmetler" className="text-white hover:text-red-400 transition-colors duration-300">Hizmetler</a>
            <a href="#portfoy" className="text-white hover:text-red-400 transition-colors duration-300">Portföy</a>
            <a href="#hakkimizda" className="text-white hover:text-red-400 transition-colors duration-300">Hakkımızda</a>
            <a href="#iletisim" className="text-white hover:text-red-400 transition-colors duration-300">İletişim</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative overflow-hidden">
                <div className="flex items-center space-x-3">
                  {/* Text Phase */}
                  <div className="flex items-center space-x-4 animate-slide-text">
                    <span className="text-red-400 font-medium whitespace-nowrap">Hemen Ara</span>
                    <span className="text-green-400 font-medium whitespace-nowrap">WhatsApp</span>
                  </div>
                  
                  {/* Icons Phase */}
                  <div className="flex items-center space-x-3 animate-slide-icons">
                    <a 
                      href="tel:05538746419" 
                      className="p-2 bg-red-400/20 rounded-full hover:bg-red-400/30 transition-all duration-300 group"
                      title="Hemen Ara"
                    >
                      <Phone className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a 
                      href="https://wa.me/905538746419" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-400/20 rounded-full hover:bg-green-400/30 transition-all duration-300 group"
                      title="WhatsApp"
                    >
                      <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;