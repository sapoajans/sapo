import React from 'react';
import { Lightbulb, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Üretkenlik",
    description: "Her projede özgün ve innovatif çözümler üretiyoruz. Sıradanlıktan uzak, markanıza özel tasarımlar yaratıyoruz.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Zamanında teslimat, şeffaf iletişim ve kaliteli hizmet anlayışıyla güvenilir iş ortağınızız.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Zap,
    title: "İnovasyon",
    description: "Son teknoloji araçları ve güncel tasarım trendlerini kullanarak geleceğe yönelik çözümler sunuyoruz.",
    color: "from-purple-400 to-pink-500"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-gray-900" role="region" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Neden Sapo Ajans?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Isinizi buyutmek icin ihtiyac duydugunuz tum dijital cozumleri tek cati altinda sunuyoruz. 
            Deneyim, kalite ve musteri memnuniyeti odakli yaklasimimizla fark yaratiyoruz.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8 rounded-full"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-400/50 hover:bg-black/70 transition-all duration-500 text-center"
                role="article"
                aria-labelledby={`feature-${index}`}
              >
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>

                <h3 id={`feature-${index}`} className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-400/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Projenizi Konuşalım
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fikirlerinizi gerçekleştirmek için sabırsızlanıyoruz. Ücretsiz danışmanlık görüşmesi için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:05538746419"
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
            >
              Hemen Ara: 0553 874 64 19
            </a>
            <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300">
              Mesaj Gönder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;