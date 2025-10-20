import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="ana-sayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Sapo Ajans - Istanbul'un En Iyi Dijital Reklam Ajansi</h1>
        <p>Kartvizit tasarimi, logo tasarimi, web tasarimi, sosyal medya yonetimi, Google Ads ve Meta reklamlari ile isletmenizi buyutun. Kagithane merkezli profesyonel hizmet.</p>
      </div>
      
      {/* Background with gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-800/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23722f37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-red-400 mr-3 animate-pulse" />
            <span className="text-red-400 font-semibold text-lg tracking-wide">SAPO AJANS</span>
            <Sparkles className="w-8 h-8 text-red-400 ml-3 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Profesyonel
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent block mt-2" role="heading" aria-level="1">
              Çözümler Üretiyoruz
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            Yaratıcı tasarım ve dijital pazarlama çözümleriyle markanızı bir sonraki seviyeye taşıyoruz.
            İşletmeniz için özel ve etkileyici dijital deneyimler yaratıyoruz.
          </p>

          {/* Heartbeat Animation */}
          <div className="flex justify-center my-12">
            <div className="relative">
              <svg 
                width="300" 
                height="80" 
                viewBox="0 0 300 80" 
                className="heartbeat-line"
              >
                <defs>
                  <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="50%" stopColor="#991b1b" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,40 L50,40 L60,20 L70,60 L80,10 L90,70 L100,40 L300,40"
                  stroke="url(#heartbeatGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="heartbeat-path"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center">
              Projemi Başlat
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300">
              Portföyümüzü İncele
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-red-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-gray-400">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">8</div>
              <div className="text-gray-400">Uzman Hizmet Alanı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">%100</div>
              <div className="text-gray-400">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;