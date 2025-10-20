import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  status: 'Tamamlandı' | 'Devam Ediyor' | 'Beklemede';
  date: string;
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'Yeni' | 'Okundu' | 'Yanıtlandı';
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects] = useState<Project[]>([
    { id: 1, title: 'Logo Tasarımı', client: 'ABC Şirketi', category: 'Logo', status: 'Tamamlandı', date: '2025-01-10' },
    { id: 2, title: 'Web Sitesi', client: 'XYZ Ltd.', category: 'Web', status: 'Devam Ediyor', date: '2025-01-08' },
    { id: 3, title: 'Kartvizit Tasarımı', client: 'DEF A.Ş.', category: 'Grafik', status: 'Beklemede', date: '2025-01-05' }
  ]);

  const [messages] = useState<Message[]>([
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@email.com', message: 'Web sitesi için teklif almak istiyorum.', date: '2025-01-10', status: 'Yeni' },
    { id: 2, name: 'Fatma Kaya', email: 'fatma@email.com', message: 'Logo tasarımı hakkında bilgi almak istiyorum.', date: '2025-01-09', status: 'Okundu' },
    { id: 3, name: 'Mehmet Demir', email: 'mehmet@email.com', message: 'Sosyal medya yönetimi için görüşmek istiyorum.', date: '2025-01-08', status: 'Yanıtlandı' }
  ]);

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
    { id: 1, title: 'Lüks İş Kartları Koleksiyonu', category: 'Kartvizit Tasarımı', description: 'Premium kuşe kağıt üzerinde altın yaldız detaylarla hazırlanmış kartvizitler', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-10' },
    { id: 2, title: 'Modern Marka Kimlikleri', category: 'Logo Tasarımı', description: 'Minimalist ve etkileyici logo tasarımları ve kurumsal kimlik çözümleri', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-09' },
    { id: 3, title: 'Responsive Web Siteleri', category: 'Web Tasarımı', description: 'Modern teknolojilerle geliştirilmiş kullanıcı deneyimi odaklı web siteleri', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-08' },
    { id: 4, title: 'Social Media Campaigns', category: 'Dijital Reklam', description: 'Instagram ve Facebook için optimize edilmiş görsel reklam kampanyaları', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-07' },
    { id: 5, title: 'Kurumsal Broşürler', category: 'Grafik Tasarımı', description: 'Şirket tanıtım broşürleri ve basılı malzeme tasarımları', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-06' },
    { id: 6, title: 'E-Ticaret Platformu', category: 'Yazılım Geliştirme', description: 'Mobil uyumlu ve kullanıcı dostu online satış platformu geliştirme', image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2025-01-05' }
  ]);

  const [isAddingPortfolio, setIsAddingPortfolio] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioItem | null>(null);
  const [portfolioForm, setPortfolioForm] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    imageFile: null as File | null
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'projects', label: 'Projeler', icon: FileText },
    { id: 'portfolio', label: 'Portföy', icon: FileText },
    { id: 'messages', label: 'Mesajlar', icon: MessageSquare },
    { id: 'clients', label: 'Müşteriler', icon: Users },
    { id: 'settings', label: 'Ayarlar', icon: Settings }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tamamlandı': return 'bg-green-100 text-green-800';
      case 'Devam Ediyor': return 'bg-blue-100 text-blue-800';
      case 'Beklemede': return 'bg-yellow-100 text-yellow-800';
      case 'Yeni': return 'bg-red-100 text-red-800';
      case 'Okundu': return 'bg-blue-100 text-blue-800';
      case 'Yanıtlandı': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-3 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Toplam Proje</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Aktif Müşteri</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white p-3 rounded-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Yeni Mesaj</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 text-white p-3 rounded-lg">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Bu Ay Gelir</p>
              <p className="text-2xl font-bold text-gray-900">₺45,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Projeler</h3>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{project.title}</p>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Mesajlar</h3>
          <div className="space-y-3">
            {messages.slice(0, 3).map((message) => (
              <div key={message.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{message.name}</p>
                  <p className="text-sm text-gray-600 truncate">{message.message}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                  {message.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projeler</h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Yeni Proje
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Proje ara..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proje</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Müşteri</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{project.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Mesajlar</h2>
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {messages.filter(m => m.status === 'Yeni').length} Yeni
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {messages.map((message) => (
            <div key={message.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">{message.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{message.email}</p>
                  <p className="text-gray-800">{message.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{message.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded border border-blue-600 hover:bg-blue-50">
                    Yanıtla
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let imageUrl = portfolioForm.image;
    
    // Eğer dosya yüklendiyse, URL oluştur
    if (portfolioForm.imageFile) {
      imageUrl = URL.createObjectURL(portfolioForm.imageFile);
    }
    
    if (editingPortfolio) {
      setPortfolioItems(items => items.map(item => 
        item.id === editingPortfolio.id 
          ? { ...item, title: portfolioForm.title, category: portfolioForm.category, description: portfolioForm.description, image: imageUrl, date: new Date().toISOString().split('T')[0] }
          : item
      ));
      setEditingPortfolio(null);
    } else {
      const newItem: PortfolioItem = {
        id: Date.now(),
        title: portfolioForm.title,
        category: portfolioForm.category,
        description: portfolioForm.description,
        image: imageUrl,
        date: new Date().toISOString().split('T')[0]
      };
      setPortfolioItems(items => [...items, newItem]);
    }
    setPortfolioForm({ title: '', category: '', description: '', image: '', imageFile: null });
    setIsAddingPortfolio(false);
  };

  const handleEditPortfolio = (item: PortfolioItem) => {
    setEditingPortfolio(item);
    setPortfolioForm({
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image,
      imageFile: null
    });
    setIsAddingPortfolio(true);
  };

  const handleDeletePortfolio = (id: number) => {
    setPortfolioItems(items => items.filter(item => item.id !== id));
  };

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Portfoy Yonetimi</h2>
        <button 
          onClick={() => setIsAddingPortfolio(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Yeni Proje Ekle
        </button>
      </div>

      {isAddingPortfolio && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {editingPortfolio ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}
          </h3>
          <form onSubmit={handlePortfolioSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Proje Başlığı</label>
              <input
                type="text"
                value={portfolioForm.title}
                onChange={(e) => setPortfolioForm({...portfolioForm, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select
                value={portfolioForm.category}
                onChange={(e) => setPortfolioForm({...portfolioForm, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Kategori Seçin</option>
                <option value="Kartvizit Tasarımı">Kartvizit Tasarımı</option>
                <option value="Logo Tasarımı">Logo Tasarımı</option>
                <option value="Web Tasarımı">Web Tasarımı</option>
                <option value="Grafik Tasarımı">Grafik Tasarımı</option>
                <option value="Dijital Reklam">Dijital Reklam</option>
                <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
                <option value="Sosyal Medya Yönetimi">Sosyal Medya Yönetimi</option>
                <option value="Otomasyon Sistemleri">Otomasyon Sistemleri</option>
                <option value="Google ve Meta Reklamlari">Google ve Meta Reklamlari</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
              <textarea
                value={portfolioForm.description}
                onChange={(e) => setPortfolioForm({...portfolioForm, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Görsel</label>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setPortfolioForm({...portfolioForm, imageFile: file, image: ''});
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <div className="text-center text-gray-500">veya</div>
                <input
                  type="url"
                  value={portfolioForm.image}
                  onChange={(e) => setPortfolioForm({...portfolioForm, image: e.target.value, imageFile: null})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                {editingPortfolio ? 'Güncelle' : 'Ekle'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingPortfolio(false);
                  setEditingPortfolio(null);
                  setPortfolioForm({ title: '', category: '', description: '', image: '', imageFile: null });
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditPortfolio(item)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeletePortfolio(item.id)}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'projects': return renderProjects();
      case 'portfolio': return renderPortfolio();
      case 'messages': return renderMessages();
      case 'clients': return <div className="text-center py-12 text-gray-500">Müşteriler bölümü geliştiriliyor...</div>;
      case 'settings': return <div className="text-center py-12 text-gray-500">Ayarlar bölümü geliştiriliyor...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <img 
            src="/sapo-ajans-logo.png" 
            alt="Sapo Ajans" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  activeTab === item.id ? 'bg-yellow-50 border-r-2 border-yellow-500 text-yellow-700' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <LogOut className="w-5 h-5 mr-3" />
            Çıkış Yap
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  Hoş geldiniz, <span className="font-medium">Admin</span>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-medium">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;