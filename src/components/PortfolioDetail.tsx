import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  results: string[];
}

const portfolioData: { [key: string]: PortfolioItem } = {
  'kartvizit-tasarimi': {
    id: 'kartvizit-tasarimi',
    category: 'Kartvizit Tasarımı',
    title: 'Lüks İş Kartları Koleksiyonu - Premium Kartvizit Tasarımı',
    description: 'Premium kuşe kağıt üzerinde altın yaldız detaylarla hazırlanmış profesyonel kartvizitler',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-10',
    detailedDescription: 'Bu projede, müşterimiz için premium kalitede kartvizit tasarımı gerçekleştirdik. 350 gr kuşe kağıt üzerinde, altın yaldız detaylar ve mat laminasyon ile özel finishing uyguladık. Modern tipografi ve minimalist tasarım anlayışıyla, markanın profesyonel imajını yansıtan etkileyici kartvizitler oluşturduk.',
    features: [
      '350 gr Premium Kuşe Kağıt',
      'Altın Yaldız Detaylar',
      'Mat Laminasyon Kaplama',
      'Özel Kesim ve Finishing',
      'Çift Taraflı Baskı',
      'UV Spot Vernik Uygulaması'
    ],
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Pantone Renk Sistemi',
      'Offset Baskı Teknolojisi'
    ],
    results: [
      'Marka imajında %40 artış',
      'Müşteri memnuniyeti %95',
      'Profesyonel görünümde belirgin iyileşme',
      'İş geliştirme süreçlerinde pozitif etki'
    ]
  },
  'logo-tasarimi': {
    id: 'logo-tasarimi',
    category: 'Logo Tasarımı',
    title: 'Modern Marka Kimlikleri - Kurumsal Logo Tasarımı',
    description: 'Minimalist ve etkileyici logo tasarımları ve kurumsal kimlik çözümleri',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-09',
    detailedDescription: 'Müşterimizin marka değerlerini yansıtan, zamansız ve akılda kalıcı logo tasarımı projesi. Detaylı marka analizi sonrasında, hedef kitleye uygun renk paleti ve tipografi seçimleri ile benzersiz bir marka kimliği oluşturduk. Tüm dijital ve basılı mecralarda kullanıma uygun vektör formatında teslim edildi.',
    features: [
      'Detaylı Marka Analizi',
      'Çoklu Konsept Geliştirme',
      'Renk Paleti Optimizasyonu',
      'Tipografi Seçimi',
      'Vektör Format Teslimi',
      'Kullanım Kılavuzu'
    ],
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Figma',
      'Brand Guidelines'
    ],
    results: [
      'Marka tanınırlığında %60 artış',
      'Sosyal medya etkileşiminde %45 artış',
      'Müşteri güveninde belirgin iyileşme',
      'Rekabet avantajı sağlama'
    ]
  },
  'web-tasarimi': {
    id: 'web-tasarimi',
    category: 'Web Tasarımı',
    title: 'Responsive Web Siteleri - Modern Web Tasarımı',
    description: 'Modern teknolojilerle geliştirilmiş kullanıcı deneyimi odaklı web siteleri',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-08',
    detailedDescription: 'Kullanıcı deneyimi odaklı, responsive tasarım prensipleriyle geliştirilen modern web sitesi projesi. SEO optimizasyonu, hızlı yükleme süreleri ve mobil uyumluluk ile dijital varlığı güçlendiren bir platform oluşturduk. Modern teknolojiler kullanarak güncellenebilir ve yönetilebilir bir sistem geliştirdik.',
    features: [
      'Responsive Tasarım',
      'SEO Optimizasyonu',
      'Hızlı Yükleme Süreleri',
      'Mobil Uyumluluk',
      'İçerik Yönetim Sistemi',
      'SSL Sertifikası'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB'
    ],
    results: [
      'Sayfa yükleme hızında %70 iyileşme',
      'Mobil kullanıcı deneyiminde %80 artış',
      'Google PageSpeed skorunda 95/100',
      'Organik trafik artışı %120'
    ]
  },
  'dijital-reklam': {
    id: 'dijital-reklam',
    category: 'Dijital Reklam',
    title: 'Social Media Campaigns - Sosyal Medya Reklam Kampanyaları',
    description: 'Instagram ve Facebook için optimize edilmiş görsel reklam kampanyaları',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-07',
    detailedDescription: 'Hedef kitle analizi ve kreatif tasarım odaklı sosyal medya reklam kampanyası projesi. Instagram ve Facebook platformlarında optimize edilmiş görsel içerikler ve video reklamlar ile marka bilinirliğini artıran başarılı bir kampanya yürüttük. A/B testleri ve sürekli optimizasyon ile maksimum ROI elde ettik.',
    features: [
      'Hedef Kitle Analizi',
      'Kreatif Tasarım',
      'Video İçerik Üretimi',
      'A/B Test Optimizasyonu',
      'Performans Takibi',
      'ROI Analizi'
    ],
    technologies: [
      'Facebook Ads Manager',
      'Instagram Business',
      'Adobe Creative Suite',
      'Google Analytics',
      'Canva Pro'
    ],
    results: [
      'Erişim artışı %200',
      'Etkileşim oranında %150 artış',
      'Dönüşüm oranında %85 iyileşme',
      'Maliyet per tıklamada %30 azalma'
    ]
  },
  'grafik-tasarimi': {
    id: 'grafik-tasarimi',
    category: 'Grafik Tasarımı',
    title: 'Kurumsal Broşürler - Profesyonel Grafik Tasarımı',
    description: 'Şirket tanıtım broşürleri ve basılı malzeme tasarımları',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-06',
    detailedDescription: 'Kurumsal kimliği yansıtan, profesyonel broşür ve katalog tasarımı projesi. Şirketin hizmetlerini ve değerlerini etkili şekilde aktaran, görsel hiyerarşi ve tipografi kurallarına uygun tasarımlar oluşturduk. Yüksek çözünürlüklü, baskıya hazır dosyalar ile kaliteli basım süreci sağladık.',
    features: [
      'Kurumsal Kimlik Uyumu',
      'Görsel Hiyerarşi',
      'Profesyonel Tipografi',
      'Yüksek Çözünürlük',
      'Baskıya Hazır Dosyalar',
      'Çoklu Format Desteği'
    ],
    technologies: [
      'Adobe InDesign',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Pantone Renk Sistemi'
    ],
    results: [
      'Marka algısında %50 iyileşme',
      'Satış materyali etkinliğinde %75 artış',
      'Müşteri ilgisinde belirgin artış',
      'Profesyonel imaj güçlendirme'
    ]
  },
  'yazilim-gelistirme': {
    id: 'yazilim-gelistirme',
    category: 'Yazılım Geliştirme',
    title: 'E-Ticaret Platformu - Özel Yazılım Geliştirme',
    description: 'Mobil uyumlu ve kullanıcı dostu online satış platformu geliştirme',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-05',
    detailedDescription: 'Müşteri ihtiyaçlarına özel geliştirilmiş e-ticaret platformu projesi. Kullanıcı dostu arayüz, güvenli ödeme sistemi ve stok yönetimi entegrasyonu ile kapsamlı bir online satış çözümü oluşturduk. Mobil uyumlu tasarım ve hızlı performans ile müşteri deneyimini optimize ettik.',
    features: [
      'Özel E-Ticaret Sistemi',
      'Güvenli Ödeme Entegrasyonu',
      'Stok Yönetimi',
      'Mobil Uyumluluk',
      'Admin Paneli',
      'Analitik Raporlama'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Stripe API',
      'AWS Cloud'
    ],
    results: [
      'Online satışlarda %300 artış',
      'Müşteri memnuniyeti %92',
      'Sipariş işlem süresinde %60 azalma',
      'Mobil dönüşüm oranında %180 artış'
    ]
  }
};

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = id ? portfolioData[id] : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proje Bulunamadı</h1>
          <Link to="/" className="text-yellow-400 hover:text-yellow-300">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Portföye Geri Dön
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
              {item.category}
            </span>
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              {item.date}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {item.title}
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Proje Hakkında</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Detaylı Açıklama</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Proje Özellikleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-900/50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Sonuçlar ve Başarılar</h3>
              <div className="space-y-3">
                {item.results.map((result, index) => (
                  <div key={index} className="flex items-center bg-green-900/20 border border-green-500/20 p-4 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kullanılan Teknolojiler</h3>
              <div className="space-y-3">
                {item.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <Tag className="w-4 h-4 text-red-400 mr-3" />
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-400/10 to-red-600/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Benzer Bir Proje İstiyorum</h3>
              <p className="text-gray-300 mb-6">
                Bu projeye benzer bir çalışma için bizimle iletişime geçin.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:05538746419"
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-lg font-semibold text-center block hover:from-red-600 hover:to-red-800 transition-all duration-300"
                >
                  Hemen Ara
                </a>
                <a 
                  href="https://wa.me/905538746419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-red-400 text-red-400 py-3 rounded-lg font-semibold text-center block hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  WhatsApp'tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Diğer Projelerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(portfolioData)
              .filter(project => project.id !== item.id)
              .slice(0, 3)
              .map((project) => (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.id}`}
                  className="group bg-black/50 border border-red-500/20 rounded-xl overflow-hidden hover:border-red-400/50 transition-all duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="bg-red-400/20 text-red-400 text-sm font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;