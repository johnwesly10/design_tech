import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Clock, Mail, Check, X, Send, ArrowRight, Star, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date to December 25, 2025 at 00:00:00
    const targetDate = new Date('December 25, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // If the countdown is over, set all values to 0
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    // Run immediately to avoid delay
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-2">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto sm:grid-cols-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20 shadow-lg hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 hover:scale-[1.02] active:scale-95">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-[10px] xs:text-xs text-white/60 mt-0.5 uppercase tracking-wider">
                {unit}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setShowNotification(true);
      setEmail('');
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Space elements data
  const spaceElements = [
    // Planets
    {
      id: 'planet1',
      size: 'w-16 h-16',
      top: 'top-1/5',
      left: 'left-1/6',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
      duration: 15,
      type: 'planet',
      rings: true
    },
    {
      id: 'planet2',
      size: 'w-24 h-24',
      top: 'bottom-1/4',
      right: 'right-1/5',
      color: 'from-blue-400 to-cyan-300',
      delay: 0.5,
      duration: 20,
      type: 'planet',
      rings: false
    },

    // Asteroids
    {
      id: 'asteroid1',
      size: 'w-10 h-10',
      top: 'top-1/3',
      left: 'left-1/4',
      color: 'from-gray-500 to-gray-700',
      delay: 0.3,
      duration: 12,
      type: 'asteroid',
      rotation: 360
    },
    {
      id: 'asteroid2',
      size: 'w-6 h-6',
      bottom: 'bottom-1/3',
      left: 'left-1/3',
      color: 'from-yellow-600 to-yellow-800',
      delay: 0.7,
      duration: 8,
      type: 'asteroid',
      rotation: -180
    },

    // Stars
    {
      id: 'star1',
      size: 'w-3 h-3',
      top: 'top-1/2',
      right: 'right-1/3',
      color: 'from-yellow-300 to-yellow-100',
      delay: 0.4,
      duration: 4,
      type: 'star'
    },
    {
      id: 'star2',
      size: 'w-1.5 h-1.5',
      top: 'top-1/4',
      right: 'right-1/4',
      color: 'from-blue-300 to-white',
      delay: 0.6,
      duration: 5,
      type: 'star'
    },
    {
      id: 'star3',
      size: 'w-3 h-3',
      bottom: 'bottom-1/5',
      left: 'left-1/5',
      color: 'from-red-300 to-red-100',
      delay: 0.8,
      duration: 6,
      type: 'star'
    },
  ];

  // Comet
  const comet = {
    id: 'comet',
    size: 'w-16 h-2',
    top: 'top-5/6',
    right: 'right-1/4',
    delay: 2,
    duration: 15
  };

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Rocket GIF Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/33/de/d4/33ded4b1e7b3861e530494cecb456c25.gif')`,
          opacity: 2,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(3)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-gray-900/80"></div>
      </div>

      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Animated Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Space Elements */}
        {spaceElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} ${element.type === 'planet'
                ? 'rounded-full'
                : element.type === 'asteroid'
                  ? 'rounded-lg'
                  : 'rounded-full'
              } overflow-hidden ${element.top || element.bottom
              } ${element.left || element.right} ${element.left ? 'ml-4' : element.right ? 'mr-4' : ''
              }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              rotate: element.rotation ? [0, element.rotation] : 0,
            }}
            transition={{
              duration: element.duration || 4,
              delay: element.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              rotate: {
                duration: element.duration * 2 || 8,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {element.type === 'planet' ? (
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${element.color}`}>
                {element.rings && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-32 h-2 bg-white/20 rounded-full transform rotate-45"></div>
                    <div className="absolute w-32 h-2 bg-white/20 rounded-full transform -rotate-45"></div>
                  </div>
                )}
              </div>
            ) : element.type === 'asteroid' ? (
              <motion.div
                className={`w-full h-full rounded-lg bg-gradient-to-br ${element.color} flex items-center justify-center`}
                animate={{
                  x: [0, 15, 0, -15, 0],
                  y: [0, 10, 0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  x: {
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 7 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <div className="w-1/2 h-1/2 bg-black/20 rounded-full"></div>
              </motion.div>
            ) : (
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${element.color} animate-pulse`}></div>
            )}
          </motion.div>
        ))}

        {/* Comet */}
        <motion.div
          className={`absolute ${comet.size} ${comet.top} ${comet.right} bg-gradient-to-r from-blue-300 to-transparent`}
          initial={{ x: '100%', opacity: 0 }}
          animate={{
            x: ['100%', '-100vw'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: comet.duration,
            delay: comet.delay,
            repeat: Infinity,
            repeatDelay: 10,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute w-3 h-3 rounded-full bg-white -left-1 top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent top-1/2 transform -translate-y-1/2"></div>
          </div>
        </motion.div>

        {/* Rocket Animation */}
        <motion.div
          className="absolute right-64 bottom-1/4 z-20 w-24 h-24"
          initial={{ y: 0, opacity: 0, rotate: -15 }}
          animate={{
            y: [0, -20, 0],
            opacity: [1, 1],
            // rotate: [15, 0, -15],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <img
            src="https://cdn.pixabay.com/animation/2022/07/31/06/27/06-27-17-124_512.gif"
            alt="Rocket"
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(96,165,250,0.7)]"
          />
        </motion.div>

        <motion.div
          className="absolute right-32 bottom-2/3 z-20 w-24 h-24"
          initial={{ y: 0, opacity: 0, rotate: -15 }}
          animate={{
            y: [0, -20, 0],
            opacity: [1, 1],
            // rotate: [15, 0, -15],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <img
            src="https://64.media.tumblr.com/0eca67d2ccdec34968031f01d4674bff/tumblr_ofvj9om6Ou1vx777ao1_500.gif"
            alt="Rocket"
            className="w-full h-full object-contain "
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)]">
        <div className="text-center w-full max-w-4xl pt-8 mx-auto px-2 sm:px-4">
          {/* Company Logo/Name */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-3 mb-1 sm:mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white">VaultenX</h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-blue-400">Storage</h1>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 mb-4 sm:mb-6 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
            Secure Object Cloud Storage
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            Coming <span className="text-blue-300">Soon</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)] px-2">
            We're working hard to bring you something amazing. Stay tuned for an incredible experience!
          </p>

          {/* Countdown */}
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                type: 'spring',
                stiffness: 100
              }
            } : {}}
          >
            <Countdown />
          </motion.div>

          {/* Email Subscription */}
          <motion.div
            className="relative w-full max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6,
                type: 'spring',
                stiffness: 100
              }
            } : {}}
          >
            <AnimatePresence mode="wait">
              {showNotification ? (
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl mb-4 flex items-center justify-between shadow-lg"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/30 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">Thank you for subscribing!</span>
                  </div>
                  <button
                    onClick={() => setShowNotification(false)}
                    className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Close notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <motion.form
              onSubmit={handleSubmit}
              className="relative group w-full"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur-sm transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3 bg-gray-900/80 backdrop-blur-sm rounded-xl p-1 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 sm:px-5 py-3 text-sm sm:text-base bg-gray-900/70 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]"
                  placeholder="Your email address"
                />
                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold sm:font-bold rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Notified</span>
                </motion.button>
              </div>
            </motion.form>

            <motion.p
              className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  duration: 0.5
                }
              } : {}}
            >
              <Star className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span>Join our waitlist to get early access and updates</span>
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                staggerChildren: 0.1,
                when: "beforeChildren"
              }
            } : {}}
          >
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, i) => (
              <motion.a
                key={social}
                href={`#${social}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label={social}
                whileHover={{
                  y: -3,
                  scale: 1.1,
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1 + (i * 0.1),
                    type: 'spring',
                    stiffness: 300
                  }
                } : {}}
              >
                <span className="sr-only">{social}</span>
                {social === 'twitter' && <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />}
                {social === 'facebook' && <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />}
                {social === 'instagram' && <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />}
                {social === 'linkedin' && <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-rotate-slow {
          animation: rotate 30s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;