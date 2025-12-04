import { Phone, MapPin, Clock, Truck, Award, Shield, Headphones } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'حلويات', 'معجنات', 'شوكولاتة', 'هدايا'];

  const products = [
    { id: 1, name: 'حلوى اللوز', price: '120 درهم', category: 'حلويات', image: 'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, name: 'بقلاوة بالفستق', price: '150 درهم', category: 'حلويات', image: 'https://images.pexels.com/photos/5848933/pexels-photo-5848933.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, name: 'كعب الغزال', price: '90 درهم', category: 'معجنات', image: 'https://images.pexels.com/photos/6069061/pexels-photo-6069061.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, name: 'شباكية مغربية', price: '80 درهم', category: 'معجنات', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, name: 'ترافل بالشوكولاتة', price: '180 درهم', category: 'شوكولاتة', image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, name: 'علبة هدايا فاخرة', price: '250 درهم', category: 'هدايا', image: 'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 7, name: 'غريبة بالسمسم', price: '70 درهم', category: 'معجنات', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, name: 'حلوى الجوز', price: '130 درهم', category: 'حلويات', image: 'https://images.pexels.com/photos/5848933/pexels-photo-5848933.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const filteredProducts = activeFilter === 'الكل'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F5F1E8]" dir="rtl">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D5A837' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button className="bg-[#D5A837] hover:bg-[#c49730] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
              اطلب الآن
            </button>

            <div className="hidden md:flex items-center gap-8">
              {['الرئيسية', 'المنتجات', 'من نحن', 'تواصل معنا'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#1F2430] hover:text-[#D5A837] font-medium relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D5A837] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="text-2xl font-bold text-[#1F2430]">
              حلويات المغرب
            </div>
          </div>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#1F2430] opacity-40"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block text-white mb-2">حلويات مغربية أصيلة</span>
            <span className="block text-[#D5A837]">من قلب التراث</span>
          </h1>
          <p className="text-white text-xl mb-8 leading-relaxed">
            نقدم لكم أجود أنواع الحلويات المغربية التقليدية المصنوعة بحب وعناية
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#D5A837] hover:bg-[#c49730] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              تصفح المنتجات
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1F2430] px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              اتصل بنا
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-20 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'توصيل سريع', desc: 'خدمة توصيل لجميع المدن' },
              { icon: Award, title: 'جودة عالية', desc: 'منتجات طازجة يومياً' },
              { icon: Shield, title: 'ضمان الجودة', desc: 'مكونات طبيعية 100%' },
              { icon: Headphones, title: 'دعم العملاء', desc: 'متاحون على مدار الساعة' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-[#D5A837] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#D5A837]" />
                </div>
                <h3 className="text-[#1F2430] font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-[#1F2430] mb-12">منتجاتنا المميزة</h2>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#D5A837] text-white shadow-lg transform scale-105'
                  : 'bg-white text-[#1F2430] hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#1F2430] font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-[#D5A837] font-bold text-xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#1F2430] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D5A837' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-8">تواصل معنا</h2>

              {[
                { icon: Phone, title: 'الهاتف', value: '+212 6 12 34 56 78' },
                { icon: MapPin, title: 'العنوان', value: 'الدار البيضاء، المغرب' },
                { icon: Clock, title: 'أوقات العمل', value: 'السبت - الخميس: 9:00 - 20:00' }
              ].map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#D5A837] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#D5A837] font-bold text-lg mb-1">{title}</h3>
                    <p className="text-white text-lg">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1D28] py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-[#D5A837] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#D5A837]" />
                  <span>+212 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D5A837]" />
                  <span>الدار البيضاء</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D5A837]" />
                  <span>9:00 - 20:00</span>
                </div>
              </div>

              <div className="flex gap-6">
                {['الرئيسية', 'المنتجات', 'من نحن', 'تواصل معنا'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-[#D5A837] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              جميع الحقوق محفوظة © 2024 حلويات المغرب
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
