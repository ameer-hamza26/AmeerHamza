import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [

    {
      title: 'Full Stack Engineer',
      company: 'Skyware IT Solutions',
      location: 'shaheen town, uhad tower ,2nd floor, 215 office ,peshawar, kpk, pakistan',
      period: 'oct 2025 - present',
      description: [
        'Worked as a Full-Stack Developer on a hotel reservation and property management automation system for a German hospitality company. Built scalable APIs, integrated with Apaleo, and developed responsive frontend modules to streamline reservations, room management, billing, and daily hotel operations',

      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Forge Solutions',
      location: 'university road ,sheikh yaseen trade center, 2nd floor,peshawar, kpk, pakistan',
      period: 'april 2024 - august 2024',
      description: [
        'Frontend Developer at Tech Forge Solutions',
        'Developed and maintained multiple client projects using React and Node.js',
        'Integrated third-party APIs and payment gateways',
        'Implemented responsive designs and cross-browser compatibility',
        'Collaborated with UX designers to improve user experience',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations',
      location: 'Peshawar',
      period: 'june 2025 - sep 2025',
      description: [
        'Developed a web application for a client using modern full-stack technologies',
        'Integrated third-party APIs and payment gateways',
        'Implemented responsive designs and cross-browser compatibility',
        'Collaborated with UX designers to improve user experience',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries improving application performance by 30%',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 scroll-mt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            My professional journey and the roles I've taken on throughout my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600 border-2 sm:border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 md:px-6 lg:px-8 pl-6 sm:pl-8 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                      index % 2 === 0 ? 'md:ml-6 lg:ml-8' : 'md:mr-6 lg:mr-8'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <FaBriefcase className="w-4 h-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{experience.period}</span>
                      </div>
                      <div className="flex items-start text-gray-600 dark:text-gray-400">
                        <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm break-words">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0">▸</span>
                          <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 