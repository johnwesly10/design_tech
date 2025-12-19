import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Sparkles, TrendingUp, Zap, Cloud, Shield, Cpu, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';
import  gif from '../assets/gif.gif';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    title: 'Transform Your Digital Future',
    subtitle: 'Transform your IT infrastructure into a secure, scalable, and agile environment.',
    cta: 'Explore Cloud',
    link: '/cloud',
    icon: Cloud,
    badge: 'Cloud Excellence'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    title: 'Secure Your Business',
    subtitle: 'Protect your business from modern cyber threats while maintaining trust and compliance.',
    cta: 'Learn More',
    link: '/secure',
    icon: Shield,
    badge: 'Enterprise Security'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
    title: 'AI-Powered Innovation',
    subtitle: 'Harness the power of Artificial Intelligence and Generative AI to transform your business.',
    cta: 'Discover AI',
    link: '/ai',
    icon: Cpu,
    badge: 'AI & Automation'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentIcon = heroSlides[currentSlide].icon;

  return (
    <div className="relative h-[80vh] md:h-[85vh] lg:h-[88vh] overflow-hidden">
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-purple-900/75" />
            </div>

            {/* Animated Floating Elements */}
            <div className="absolute top-20 right-10 md:right-20 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-3xl animate-pulse rounded-full"></div>
            <div className="absolute bottom-32 left-10 md:left-32 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 blur-3xl animate-pulse rounded-full" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-pink-400/30 rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-cyan-400/30 rounded-full mix-blend-overlay filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`max-w-2xl lg:max-w-3xl transition-all duration-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                  {/* Animated Badge */}
                  <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg px-5 py-2 rounded-full shadow-lg mb-5 sm:mb-6 border border-white/30 animate-fadeInUp hover:scale-105 transition-transform duration-300 hover:shadow-blue-500/30 hover:shadow-lg">
                    <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-glow" />
                    <span className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                      {slide.badge}
                    </span>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold  mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200 animate-gradient">
                    {slide.title}
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mt-3 rounded-full"></div>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium">
                    {slide.subtitle}
                    <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 mt-4 rounded-full"></div>
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 md:gap-4 animate-zoomIn" style={{ animationDelay: '0.5s' }}>
                    <Link
                    to={slide.link}
                    className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 border-2 border-white/20 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">  
                      <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-glow" />
                      <span className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                        {slide.badge}
                      </span>
                      <span className="relative z-10">{slide.cta}</span>
                      <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2.5 rounded-full hover:bg-white/30 transition-all z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2.5 rounded-full hover:bg-white/30 transition-all z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2.5 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${index === currentSlide
              ? 'w-8 sm:w-10 bg-blue-500'
              : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/70'
              } h-1.5 sm:h-2 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Vaultenx Cloud Floating Card - Enhanced */}
      <Link
        to="/vaultenx-cloud"
        className="hidden md:block absolute right-8 top-3/4 -translate-y-1/3 z-20 group"
        style={{
          transform: 'translateY(-50%)',
        }}
      >
        <div className="relative">
          {/* Animated gradient border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-2xl opacity-80 blur-xl group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500 animate-gradient-xy"></div>

          {/* Main card */}
          <div className="relative w-[28rem] bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 border border-white/30 backdrop-blur-sm">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 ">
              <img 
                src={gif}
                alt="Cloud technology background"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated background elements */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-300/10 rounded-full animate-pulse-slow mix-blend-overlay"></div>
            <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-purple-300/10 rounded-full animate-pulse-slow mix-blend-overlay" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-96 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-2xl mix-blend-overlay"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Company Title and Coming Soon Content */}
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white shadow-lg">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>

                <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-white mb-2 tracking-tight">Vaultenx Cloud</h2>
                <p className="text-base font-medium text-white mb-6">Next-Gen Cloud Storage Solutions</p>

                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-0.5 bg-white rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                  <span className="relative text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    COMING SOON
                  </span>
                </div>

                <p className="text-white mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  We're crafting an extraordinary cloud experience. Be the first to know when we launch!
                </p>

                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative px-10 py-3.5 bg-yellow-400  text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300 transform hover:-translate-y-0.5">
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                      Notify Me on Launch
                    </span>
                  </button>
                </div>
              </div>

              {/* Animated Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-white/50 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                🚀 Launching Soon
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
