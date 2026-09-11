import { useState, useEffect, type FormEvent } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, CheckCircle2, 
  Home, Building2, Utensils, School, Trash2, 
  Truck, Award, Leaf, Send, ArrowRight,
  ShieldCheck, Clock, Sparkles, FileCheck, RefreshCw
} from 'lucide-react';

import heroBannerImg from './assets/images/hero_banner_trucks_1789012782820.jpg';
import fleetTruckImg from './assets/images/fleet_pink_truck_1789012800902.jpg';
import logoImg from './assets/images/company_logo_1789012838006.jpg';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Handle scroll to update header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於環保世界', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '車輛介紹', href: '#fleet' },
    { name: '許可證書', href: '#certificates' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSelectServiceFromCard = (serviceKey: string) => {
    setFormData(prev => ({ ...prev, service: serviceKey }));
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 4000);
  };

  const servicesData = [
    {
      id: 'residential',
      icon: Home,
      title: '住宅社區',
      subtitle: '定時包月清運服務',
      desc: '提供住宅大樓、大型社區及公寓日常垃圾與資源回收包月清運，打造乾淨衛生的居住環境。',
      highlights: [
        '依社區作息彈性安排清運時間',
        '垃圾集中處維持無異味環境',
        '含一般廢棄物與資源回收處理',
        '合法清運合約與專人負責窗口'
      ]
    },
    {
      id: 'office',
      icon: Building2,
      title: '辦公大樓',
      subtitle: '商務空間穩定清運',
      desc: '針對商辦大樓、企業總部與共享空間提供高效率廢棄物處理方案，維持清新優質的辦公形象。',
      highlights: [
        '避開上下班尖峰時段作業',
        '夜間或清晨配合進場清運',
        '機密文件報廢與特定回收諮詢',
        '提供每月清運申報與正式發票'
      ]
    },
    {
      id: 'restaurant',
      icon: Utensils,
      title: '餐廳小吃',
      subtitle: '食品餐飲廢棄物處理',
      desc: '協助各類餐廳、連鎖餐飲、烘焙坊與小吃店快速清運日常營業廢棄物，嚴格把關衛生標準。',
      highlights: [
        '每日固定班次迅速清運完畢',
        '減少廚餘與垃圾堆積滋生害蟲',
        '高密度耐重包裝專用車清運',
        '符合食品安全衛生環境查核規範'
      ]
    },
    {
      id: 'school',
      icon: School,
      title: '機關學校',
      subtitle: '校園與公家單位專案',
      desc: '為公私立各級學校、政府機構、研究園區等提供長期清運包月合約，營造整潔校園環境。',
      highlights: [
        '開學季與學期末大掃除配合',
        '大範圍校園集中點依序收集',
        '完整公家招標與請款文件流程',
        '專業合格人員安全進出維護'
      ]
    },
    {
      id: 'large-items',
      icon: Trash2,
      title: '大宗報廢物',
      subtitle: '大型家具與特定廢棄物',
      desc: '專人專車協助處理搬遷廢棄物、大型家具、辦公隔板、裝修後大宗雜物清運，迅速完工。',
      highlights: [
        '現場免費評估估價與排程',
        '重型器具與大型家具搬運清整',
        '合法廢棄物掩埋與分類再利用',
        '單次專案清運或定期大掃除'
      ]
    }
  ];

  return (
    <div className="font-sans text-slate-700 selection:bg-pink-100 selection:text-pink-700 min-h-screen relative overflow-hidden">
      
      {/* 統一的全域柔和背景 */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#fffafb]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-pink-50/40 to-white"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-pink-100/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-white rounded-full blur-3xl opacity-80"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-pink-100/60' 
            : 'bg-white/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm flex items-center justify-center p-0.5 group-hover:border-pink-200 transition-colors">
              <img 
                src={logoImg} 
                alt="環保世界企業有限公司 Logo" 
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-slate-800 group-hover:text-pink-600 transition-colors">
                環保世界
              </span>
              <span className="text-[11px] tracking-tight font-medium text-slate-500">
                企業有限公司
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-slate-700 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-pink-200 text-slate-800 hover:bg-pink-300 shadow-sm"
            >
              立即報價
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-pink-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="選單開關"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-pink-100 py-4 px-6 flex flex-col gap-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-slate-700 hover:text-pink-600 font-medium py-2.5 border-b border-pink-50 last:border-0 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 w-full text-center py-3 bg-pink-200 text-slate-800 font-semibold rounded-xl shadow-sm hover:bg-pink-300 transition-colors"
            >
              立即聯絡報價
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Full Width Banner */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Full-width Banner Image with Light/White Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImg}
            alt="環保世界粉紅色專屬垃圾車隊"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-pink-50/20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-pink-100/90 text-pink-700 border border-pink-200 text-xs sm:text-sm font-bold tracking-widest mb-6 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>ENVIRONMENTAL PROTECTION WORLD</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              環保世界企業有限公司
            </h1>
            
            <p className="text-lg sm:text-2xl text-slate-700 font-medium mb-10 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
              <span className="font-bold text-pink-600">24小時全年無休</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span>專業廢棄物清運服務</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-pink-300 hover:bg-pink-400 text-white rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center flex items-center justify-center gap-2.5"
              >
                立即聯絡報價
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-white text-slate-700 border border-pink-200 rounded-full font-bold text-lg transition-all text-center backdrop-blur-md flex items-center justify-center gap-2 shadow-sm"
              >
                <Truck className="w-5 h-5 text-pink-400" />
                瀏覽服務項目
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-700 font-medium">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">24H 隨時清運出勤</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">政府合法立案證照</span>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">專屬淡粉車隊包月</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white relative bg-pink-50">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="守護乾淨綠色環境" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-pink-600 text-sm font-bold mb-6 border border-pink-100 shadow-sm">
                <Leaf className="w-4 h-4" />
                <span>關於環保世界</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                專業清運，守護您的<span className="text-pink-500">乾淨環境</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-normal">
                環保世界企業有限公司以「專業、可靠、清爽、乾淨、親切、有效率」為核心理念。我們擁有專屬且具高識別度的淡粉色垃圾車隊與合法專業團隊，徹底擺脫傳統清運老派刻板印象，提供最貼心即時的清運服務。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: '24H 全年無休', desc: '全天候即時調度支援' },
                  { title: '專業清運服務', desc: '合格合法流程標準化' },
                  { title: '多元清運需求', desc: '包月清運與專案報廢' },
                  { title: '住宅／商辦／餐飲皆可', desc: '客製化場域清運規劃' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-pink-100/80 hover:border-pink-300 transition-colors shadow-sm">
                    <div className="flex items-center gap-2.5 mb-1 text-slate-800 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-7.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Single Page Cards with Hover Float & Color Accent */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-pink-600 text-sm font-bold mb-3 border border-pink-100 shadow-sm">
              <Truck className="w-4 h-4" />
              <span>SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">服務項目</h2>
            <div className="w-14 h-1 bg-pink-300 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600">
              提供全方位廢棄物清運包月與專案服務，為您量身打造最高效衛生的環保方案。
            </p>
          </div>

          {/* Services Grid (Single Face Cards with Hover Float & Accent) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              return (
                <div 
                  key={service.id}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-pink-100/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink-300 hover:bg-gradient-to-b hover:from-white hover:to-pink-50/50 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shadow-sm group-hover:bg-pink-300 group-hover:text-white transition-colors duration-300">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100 group-hover:bg-pink-200 group-hover:text-pink-900 transition-colors duration-300">
                        {service.subtitle}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>

                    <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100 group-hover:border-pink-200/60 transition-colors duration-300">
                      {service.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-pink-400 group-hover:text-pink-600 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectServiceFromCard(service.id)}
                    className="w-full py-3 bg-pink-50 hover:bg-pink-300 text-slate-800 hover:text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-xs flex items-center justify-center gap-2 border border-pink-200/80 group-hover:border-pink-300 cursor-pointer"
                  >
                    預約此服務報價
                    <ArrowRight className="w-4 h-4 text-pink-500 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section - 車輛介紹 */}
      <section id="fleet" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Text Info */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-pink-600 text-sm font-bold mb-3 border border-pink-100 shadow-sm">
                <Truck className="w-4 h-4" />
                <span>FLEET SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">車輛介紹</h2>
              <div className="w-14 h-1 bg-pink-300 rounded-full mb-6"></div>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                環保世界全車系皆採用獨特亮眼的<span className="text-pink-600 font-bold mx-1">淡粉色車身塗裝</span>。不僅展現清爽乾淨的企業形象，更兼具親切與現代感，讓清運車輛成為城市巷弄中最令人放心的整潔標誌。
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-100/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">乾淨淡粉塗裝</h4>
                    <p className="text-sm text-slate-600">每日出勤前進行車身清潔與消毒，杜絕髒污與異味殘留。</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-100/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">機動穿梭社區商辦</h4>
                    <p className="text-sm text-slate-600">靈活因應巷弄、地下室車道及各類型空間之清運需求。</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-100/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">密封清運防滴漏</h4>
                    <p className="text-sm text-slate-600">配備先進密閉壓縮與防污水滴漏槽，守護沿途街道整潔。</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Fleet Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border-8 border-white">
                <img 
                  src={fleetTruckImg} 
                  alt="環保世界專屬淡粉色垃圾車" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-pink-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse"></div>
                    <span className="font-bold text-sm text-slate-800">環保世界 專屬淡粉色車隊</span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-pink-100 text-pink-700">
                    24H 隨時待命
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-pink-600 text-sm font-bold mb-3 border border-pink-100 shadow-sm">
              <Award className="w-4 h-4" />
              <span>ACCREDITATION & COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">專業許可證書</h2>
            <div className="w-14 h-1 bg-pink-300 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600">
              政府合法立案，具備正式廢棄物清除許可證，確保清運流程符合國家環保法規。
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            
            <div className="bg-white/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-pink-600 tracking-wider uppercase bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                      LEGAL COMPLIANCE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">政府合法廢棄物清除許可</h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-pink-50/80 border border-pink-200/80 text-pink-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  <span>環保局審查核發 ‧ 依法合規</span>
                </div>
              </div>

              <div className="relative z-10 pt-6">
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                  環保世界企業有限公司具備政府環保局正式審查核發之廢棄物清除許可證。我們恪遵《廢棄物清理法》及相關環保法規，落實清運流向合法登記，提供完整合法的處置證明文件與定期申報，讓社區大樓與企業客戶皆能安心委託。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/80 backdrop-blur-sm p-7 rounded-3xl border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">合法立案登記</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  領有主管機關正式廢棄物清除許可證，依法執行各項一般廢棄物與大型報廢物清運作業。
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-7 rounded-3xl border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">完整清運流向合約</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  提供正式清運包月合約、清運遞送聯單及合規處置證明，滿足管委會與企業審計報帳需求。
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-7 rounded-3xl border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">定期更新與合格審查</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  依法定期更新許可證照，車輛與清運機具均符合國家環保排氣與防滴漏衛生安全標準。
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-7 rounded-3xl border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">專業受訓清運人員</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  清運團隊定期接受作業安全與環保法規講習，作業迅速、落實安全防護與親切服務。
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-lg border border-pink-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left: Contact Info */}
            <div className="w-full lg:w-5/12 bg-pink-100/70 p-10 md:p-14 text-slate-800 relative overflow-hidden flex flex-col justify-between border-r border-pink-100">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-pink-200/40 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-pink-700 text-xs font-bold mb-6 backdrop-blur-sm border border-pink-200/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24小時全年無休服務</span>
                </div>
                
                <h3 className="text-3xl font-extrabold mb-3 text-slate-900">立即聯絡免費估價</h3>
                <p className="text-slate-600 text-sm mb-10 leading-relaxed font-normal">
                  歡迎隨時透過電話或表單諮詢，專人將依您的清運需求提供最優惠的包月方案與專業報價。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Phone className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5 font-medium">市內電話</p>
                      <a href="tel:0228265757" className="font-bold text-lg text-slate-900 hover:text-pink-600 transition-colors">
                        02-2826-5757
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Phone className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5 font-medium">行動電話</p>
                      <a href="tel:0903934913" className="font-bold text-lg text-slate-900 hover:text-pink-600 transition-colors">
                        0903-934-913
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Mail className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5 font-medium">電子信箱</p>
                      <a href="mailto:a70511032@gmail.com" className="font-bold text-base text-slate-900 hover:text-pink-600 break-all transition-colors">
                        a70511032@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-pink-200/60 text-xs text-slate-500 font-medium">
                環保世界企業有限公司 ‧ 竭誠為您服務
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="w-full lg:w-7/12 p-8 md:p-14 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">聯絡報價表單</h3>
                <p className="text-slate-500 text-sm">填寫您的清運需求，我們將於 24 小時內與您聯繫。</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-pink-50/60 border border-pink-100 rounded-3xl text-center flex flex-col items-center justify-center min-h-[340px]">
                  <div className="w-16 h-16 bg-pink-300 text-white rounded-full flex items-center justify-center mb-4 shadow-md shadow-pink-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">已收到您的報價需求！</h4>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                    感謝您的填寫，環保世界專業專員將於最短時間內透過電話或信箱與您聯繫提供客製估價。
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        姓名 / 聯絡人 <span className="text-pink-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all text-sm bg-slate-50/50 text-slate-800 placeholder:text-slate-400" 
                        placeholder="請輸入姓名或單位寶號" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        聯絡電話 <span className="text-pink-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all text-sm bg-slate-50/50 text-slate-800 placeholder:text-slate-400" 
                        placeholder="請輸入聯絡電話 / 手機" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email 信箱
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all text-sm bg-slate-50/50 text-slate-800 placeholder:text-slate-400" 
                      placeholder="請輸入常用 Email" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      服務需求項目 <span className="text-pink-500">*</span>
                    </label>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all bg-slate-50/50 text-slate-800 text-sm" 
                      required
                    >
                      <option value="" disabled>請選擇服務項目</option>
                      <option value="residential">住宅社區包月清運</option>
                      <option value="office">辦公大樓廢棄物清運</option>
                      <option value="restaurant">餐廳小吃營業廢棄物</option>
                      <option value="school">機關學校定期清運</option>
                      <option value="large-items">大宗報廢物/大型家具清整</option>
                      <option value="other">其他客製清運需求</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      留言內容
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all resize-none text-sm bg-slate-50/50 text-slate-800 placeholder:text-slate-400" 
                      placeholder="請簡述您的需求（如清運地址、大約樓層、垃圾集中點或預計清運頻率等）..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-pink-300 hover:bg-pink-400 text-white rounded-xl font-bold text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    立即聯絡報價
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-14 border-t border-pink-100 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-200 bg-white p-0.5">
              <img 
                src={logoImg} 
                alt="環保世界 Logo" 
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide">環保世界企業有限公司</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8 text-sm font-semibold text-slate-700">
            <a href="tel:0228265757" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <Phone className="w-4 h-4 text-pink-400" />
              電話｜02-2826-5757
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="tel:0903934913" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <Phone className="w-4 h-4 text-pink-400" />
              手機｜0903-934-913
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="mailto:a70511032@gmail.com" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <Mail className="w-4 h-4 text-pink-400" />
              Email｜a70511032@gmail.com
            </a>
          </div>

          <div className="w-full max-w-2xl h-px bg-pink-100 mb-8"></div>
          
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} 環保世界企業有限公司 (Environmental Protection World Co., Ltd.) 版權所有
          </p>
        </div>
      </footer>
    </div>
  );
}
