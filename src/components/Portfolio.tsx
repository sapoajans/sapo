import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 'kartvizit-tasarimi',
    category: "Kartvizit Tasarımı",
    title: "Lüks İş Kartları Koleksiyonu",
    description: "Premium kuşe kağıt üzerinde altın yaldız detaylarla hazırlanmış kartvizitler",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 'logo-tasarimi',
    category: "Logo Tasarımı",
    title: "Modern Marka Kimlikleri",
    description: "Minimalist ve etkileyici logo tasarımları ve kurumsal kimlik çözümleri",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 'web-tasarimi',
    category: "Web Tasarımı",
    title: "Responsive Web Siteleri",
    description: "Modern teknolojilerle geliştirilmiş kullanıcı deneyimi odaklı web siteleri",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 'dijital-reklam',
    category: "Dijital Reklam",
    title: "Social Media Campaigns",
    description: "Instagram ve Facebook için optimize edilmiş görsel reklam kampanyaları",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 'grafik-tasarimi',
    category: "Grafik Tasarımı",
    title: "Kurumsal Broşürler",
    description: "Şirket tanıtım broşürleri ve basılı malzeme tasarımları",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 'yazilim-gelistirme',
    category: "Yazılım Geliştirme",
    title: "E-Ticaret Platformu",
    description: "Mobil uyumlu ve kullanıcı dostu online satış platformu geliştirme",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfoy" className="py-20 bg-navy-dark" role="region" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portföyümüz
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Musterilerimiz icin gerceklestirdigimiz basarili dijital projelerden bir secki. 
            Her proje, markanin benzersizligini yansitacak sekilde ozenle tasarlanmistir.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-navy/80 rounded-xl overflow-hidden hover-scale"
              role="article"
              aria-labelledby={`portfolio-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <Link
                        to={`/portfolio/${item.id}`}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block bg-red-400/20 text-red-400 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 id={`portfolio-${index}`} className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#iletisim"
            className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
          >
            Tüm Projelerimizi Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;