import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer id="iletisim" className="bg-black text-white" role="contentinfo" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <img 
                src="/sapo-ajans-logo.png" 
                alt="Sapo Ajans Logo" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-gray-300 text-lg leading-relaxed">
                Yaratici tasarim ve dijital pazarlama cozumleriyle isletmenizi 
                dijital dunyada one cikariyoruz. SEO uyumlu, hizli ve etkili cozumlerle her projede mukemmelligi hedefliyoruz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">İletişim</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:05538746419" 
                      className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Hemen Ara: 0553 874 64 19
                    </a>
                    <a 
                      href="https://wa.me/905538746419" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp'tan Yaz
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">E-posta</h4>
                  <a 
                    href="mailto:info@sapoajans.com" 
                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    info@sapoajans.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Adres</h4>
                  <p className="text-gray-300">
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 id="contact-heading" className="text-3xl font-bold mb-6">
              Hızlı İletişim
            </h3>
            <p className="text-gray-300 mb-8">
              Projeniz hakkında konuşmak için formu doldurun, 
              en kısa sürede size döneceğiz.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              © 2025 Sapo Ajans - Profesyonel Dijital Reklam Ajansı. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;