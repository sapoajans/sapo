import React from 'react';
import { useState } from 'react';
import { 
  CreditCard, 
  Palette, 
  Zap, 
  Globe, 
  Database, 
  Share2, 
  Megaphone, 
  Target 
} from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: CreditCard,
    title: "Kartvizit Tasarımı",
    description: "Profesyonel kartvizit tasarımı ve baskı hizmetleri. Premium malzemeler ve özel finishing seçenekleri.",
    detailedDescription: "En kaliteli kartvizit tasarımı hizmeti sunuyoruz. İşletmenizin profesyonel imajını yansıtan, premium kuşe kağıt üzerinde basılan kartvizitler tasarlıyoruz. Modern tasarım anlayışı ile klasik zarafeti birleştirerek, ilk görüşte unutulmaz bir etki bırakacak kartvizitler oluşturuyoruz. Mat/parlak laminasyon, altın yaldız, spot UV gibi özel finishing seçenekleriyle markanızı rakiplerinizden ayırıyoruz. Hızlı teslimat ve uygun fiyat garantisi ile profesyonel kartvizit çözümleri."
  },
  {
    icon: Palette,
    title: "Grafik Tasarımı",
    description: "Profesyonel grafik tasarım hizmetleri. Broşür, katalog, poster, banner ve kurumsal kimlik tasarımı.",
    detailedDescription: "En kapsamlı grafik tasarım hizmeti sunuyoruz. Broşür, katalog, poster, banner, afiş, el ilanı ve tüm basılı materyalleriniz için profesyonel grafik tasarım hizmetleri veriyoruz. Markanızın değerlerini ve mesajını görsel olarak en etkili şekilde aktaracak yaratıcı tasarımlar oluşturuyoruz. Adobe Creative Suite programları kullanarak yüksek çözünürlüklü, baskıya hazır dosyalar teslim ediyoruz. Kurumsal kimlik tasarımı, ambalaj tasarımı ve outdoor reklam tasarımı da uzman hizmetlerimiz arasında."
  },
  {
    icon: Zap,
    title: "Logo Tasarımı",
    description: "Profesyonel logo tasarımı ve kurumsal kimlik hizmetleri. Özgün marka tasarımı çözümleri.",
    detailedDescription: "En yaratıcı logo tasarımı hizmeti sunuyoruz. Markanızın kimliğini yansıtan, akılda kalıcı ve zamansız logo tasarımları oluşturuyoruz. Detaylı marka analizi yaparak, hedef kitlenize uygun renk paleti ve tipografi seçimleri ile benzersiz logolar tasarlıyoruz. Vektör formatında (AI, EPS, SVG) teslim edilen logolarınız tüm mecralarda kullanıma hazır. Kurumsal kimlik paketi, kartvizit, antetli kağıt ve tüm kurumsal materyaller dahil. Sınırsız revizyon hakkı ile mükemmel sonuç garantisi."
  },
  {
    icon: Globe,
    title: "Web Tasarımı",
    description: "SEO uyumlu web tasarımı ve geliştirme hizmetleri. Responsive, hızlı ve kullanıcı dostu web siteleri.",
    detailedDescription: "En kaliteli web tasarımı ve geliştirme hizmeti sunuyoruz. Responsive tasarım prensipleriyle tüm cihazlarda mükemmel görünen web siteleri geliştiriyoruz. SEO optimizasyonu, hızlı yükleme süreleri ve kullanıcı deneyimi odaklı tasarımlarla dijital varlığınızı güçlendiriyoruz. WordPress, React gibi modern teknolojiler kullanarak güncellenebilir ve yönetilebilir siteler oluşturuyoruz. E-ticaret siteleri, kurumsal web siteleri, blog tasarımı ve web uygulamaları geliştirme hizmetlerimizle Google'da üst sıralarda yer almanızı sağlıyoruz."
  },
  {
    icon: Database,
    title: "Stok Yönetim Yazılımı",
    description: "Özel yazılım geliştirme hizmetleri. Stok yönetimi, ERP ve CRM sistemleri geliştirme.",
    detailedDescription: "En gelişmiş yazılım geliştirme hizmeti sunuyoruz. İşletmenizin ihtiyaçlarına özel stok takip, satış yönetimi, muhasebe entegrasyonu ve raporlama sistemleri geliştiriyoruz. Gerçek zamanlı stok takibi, otomatik uyarılar, detaylı raporlama ve kullanıcı dostu arayüzlerle işletme süreçlerinizi optimize ediyoruz. Mobil uyumlu ve bulut tabanlı çözümlerle her yerden erişim imkanı. ERP, CRM, e-ticaret entegrasyonu ve özel yazılım çözümleri ile dijital dönüşümünüzü destekliyoruz."
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description: "Profesyonel sosyal medya yönetimi hizmetleri. Instagram, Facebook, LinkedIn hesap yönetimi.",
    detailedDescription: "En etkili sosyal medya yönetimi hizmeti sunuyoruz. Instagram, Facebook, LinkedIn, Twitter ve TikTok platformlarında markanızın sesini duyuruyoruz. İçerik takvimi oluşturma, profesyonel görsel tasarım, metin yazımı ve topluluk yönetimi hizmetleriyle sosyal medya varlığınızı güçlendiriyoruz. Influencer işbirlikleri, hashtag stratejileri ve viral içerik üretimi ile organik erişiminizi artırıyoruz. Aylık analitik raporlarla performansı takip ediyor ve stratejilerimizi sürekli optimize ediyoruz."
  },
  {
    icon: Megaphone,
    title: "Otomasyon Sistemleri",
    description: "Müşterilerinize otomatik mesajlar gönderin, aramalar yapın. Markalara özel otomasyon çözümleri.",
    detailedDescription: "En gelişmiş otomasyon sistemleri hizmeti sunuyoruz. Müşterilerinize otomatik mesajlar gönderme, otomatik arama yapma ve markanıza özel otomasyon çözümleri geliştiriyoruz. WhatsApp Business API, SMS otomasyonu, e-posta pazarlama otomasyonu ve CRM entegrasyonu ile müşteri iletişiminizi otomatikleştiriyoruz. Satış hunisi otomasyonu, müşteri takip sistemleri ve kişiselleştirilmiş mesajlaşma çözümleri ile iş süreçlerinizi optimize ediyoruz. Chatbot geliştirme, otomatik yanıtlama sistemleri ve müşteri hizmetleri otomasyonu ile 7/24 müşteri desteği sağlıyoruz."
  },
  {
    icon: Target,
    title: "Google ve Meta Reklamlari",
    description: "Google Ads ve Meta reklamları uzman yönetimi. Facebook, Instagram reklam kampanyaları.",
    detailedDescription: "En deneyimli Google Ads ve Meta reklamlari uzman hizmeti sunuyoruz. Google Ads, Facebook reklamlari ve Instagram reklamlarinda uzman ekibimizle yuksek donusum oranlari elde ediyoruz. Anahtar kelime arastirmasi, hedef kitle segmentasyonu, A/B testleri ve surekli optimizasyon ile reklam performansinizi maksimize ediyoruz. Google Shopping reklamlari, YouTube reklamlari, Facebook Pixel kurulumu ve WhatsApp Business API entegrasyonu hizmetlerimiz arasinda. Detayli raporlama ile ROI'nizi seffaf sekilde takip edebilirsiniz."
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="hizmetler" className="py-20 bg-gray-900" role="region" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hizmetlerimiz
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            İşletmenizin her ihtiyacına yönelik profesyonel dijital çözümler sunuyoruz. 
            Yaratıcılık ve teknoloji bir araya geliyor. SEO uyumlu, hızlı ve etkili dijital hizmetler.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8 rounded-full"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/50 hover:bg-black/70 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                role="article"
                aria-labelledby={`service-${index}`}
              >
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-black" aria-hidden="true" />
                </div>
                
                <h3 id={`service-${index}`} className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="text-red-400 font-semibold hover:text-red-300 transition-colors duration-300"
                  >
                    Detayları Gör →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
};

export default Services;