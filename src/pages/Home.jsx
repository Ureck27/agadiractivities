import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Calendar, Check, Star, Menu, X } from 'lucide-react';
import "./Home.css";
const AgadirActivitiesHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const activities = [
    {
      id: 1,
      title: "Half-Day Paradise Valley Trip",
      image: "https://images.unsplash.com/photo-1589533610925-c72dc3b8e4fe?w=800",
      price: "€25",
      duration: "Half Day",
      rating: 4.9,
      reviews: 245,
      description: "Escape to Atlas Mountains, swim in natural pools"
    },
    {
      id: 2,
      title: "Full-Day Desert Safari",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
      price: "€45",
      duration: "Full Day",
      rating: 4.8,
      reviews: 189,
      description: "Experience Sahara with lunch and camel ride"
    },
    {
      id: 3,
      title: "Quad Biking Sand Dunes",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      price: "€35",
      duration: "3 Hours",
      rating: 4.9,
      reviews: 312,
      description: "Thrilling adventure on Agadir's sand dunes"
    },
    {
      id: 4,
      title: "Coastal Boat Trip",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      price: "€30",
      duration: "Half Day",
      rating: 4.7,
      reviews: 156,
      description: "Relax on the Atlantic with lunch included"
    },
    {
      id: 5,
      title: "Marrakech Day Trip",
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800",
      price: "€40",
      duration: "Full Day",
      rating: 4.8,
      reviews: 278,
      description: "Explore the red city with expert guide"
    },
    {
      id: 6,
      title: "Essaouira Day Trip",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800",
      price: "€38",
      duration: "Full Day",
      rating: 4.7,
      reviews: 203,
      description: "Discover the charming coastal city"
    }
  ];

  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Expert Guides", desc: "Professional multilingual guides" },
    { icon: <Check className="w-6 h-6" />, title: "Best Prices", desc: "Competitive rates guaranteed" },
    { icon: <Calendar className="w-6 h-6" />, title: "Easy Booking", desc: "Simple online reservation" },
    { icon: <Phone className="w-6 h-6" />, title: "24/7 Support", desc: "Always here to help you" }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'activities', label: 'Activities' },
    { id: 'tours', label: 'Tours' },
    { id: 'desert', label: 'Desert Tours' },
    { id: 'transfers', label: 'Transfers' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Agadir Activities</h1>
                <p className="text-xs text-orange-600">Discover Morocco's Beauty</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-20 relative">
        <div className="relative h-[600px] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591825373552-de6ccde70379?w=1600')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover the Magic of Agadir
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Experience unforgettable adventures in Morocco's premier destination
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
                  Explore Activities
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Activities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Activities</h2>
          <p className="text-xl text-gray-600">Choose from our most loved experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="font-bold text-orange-600">{activity.price}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.duration}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{activity.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({activity.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your experience today and create unforgettable memories
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
            View All Activities
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agadir Activities</h3>
              <p className="text-gray-400">Your trusted partner for unforgettable Moroccan experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400">Activities</a></li>
                <li><a href="#" className="hover:text-orange-400">Tours</a></li>
                <li><a href="#" className="hover:text-orange-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popular Tours</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400">Paradise Valley</a></li>
                <li><a href="#" className="hover:text-orange-400">Desert Safari</a></li>
                <li><a href="#" className="hover:text-orange-400">Marrakech Tour</a></li>
                <li><a href="#" className="hover:text-orange-400">Essaouira Tour</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Agadir, Morocco</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +212 xxx xxx xxx</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@agadiractivities.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Agadir Activities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgadirActivitiesHome;