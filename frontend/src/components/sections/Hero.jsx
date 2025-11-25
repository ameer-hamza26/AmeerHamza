import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/ameer-hamza26',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/ameer-hamza-a9169b261',
      label: 'LinkedIn',
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://facebook.com/ameer.hamza.810542',
      label: 'Facebook',
    },
  ];  

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-0"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Ameer Hamza</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            I build modern, responsive, and user-friendly web applications using cutting-edge technologies.
            Passionate about creating efficient solutions and delivering exceptional user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-semibold"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center lg:justify-start space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-2xl transform -rotate-6"></div>
            <div className="absolute inset-0 bg-purple-600 dark:bg-purple-400 rounded-full opacity-20 blur-2xl transform rotate-6"></div>
            
            {/* Image container with border and shadow */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Ameer Hamza"
                className="w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Ameer+Hamza';
                }}
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow-lg"
            >
              <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                Software Engineer
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow-lg"
            >
              <span className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                Full Stack
              </span>
            </motion.div>
          </div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-2 right-0 sm:-bottom-4 sm:right-0 bg-white dark:bg-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg"
          >
            <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
              🚀 2+ Years Experience
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 