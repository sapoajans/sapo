import React from 'react';

const GoogleMap: React.FC = () => {
  const address = "Emniyetevler Mah, Levent, Cem Sultan Cd. No:9 A 4, 34415 Kağıthane/İstanbul";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ofisimizi Ziyaret Edin
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Istanbul Kagithane'deki ofisimizde yuz yuze gorusme imkani sunuyoruz.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-navy-dark/80 backdrop-blur-sm border border-navy-light/30 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-navy-light/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Sapo Ajans Ofisi</h3>
                <p className="text-gray-300">{address}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
          
          <div className="relative h-96">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-TK7VFC&q=${encodedAddress}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Sapo Ajans Ofis Konumu"
            />
            
            {/* Fallback for when Google Maps API is not available */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Harita yükleniyor...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-navy-dark/80 backdrop-blur-sm border border-navy-light/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Adres</h4>
            <p className="text-gray-300 text-sm">{address}</p>
          </div>

          <div className="bg-navy-dark/80 backdrop-blur-sm border border-navy-light/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Telefon</h4>
            <a href="tel:05538746419" className="text-red-400 hover:text-red-300 transition-colors duration-300">
              0553 874 64 19
            </a>
          </div>

          <div className="bg-navy-dark/80 backdrop-blur-sm border border-navy-light/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">E-posta</h4>
            <a href="mailto:info@sapoajans.com" className="text-red-400 hover:text-red-300 transition-colors duration-300">
              info@sapoajans.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;