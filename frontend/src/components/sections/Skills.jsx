import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact className="w-6 h-6" /> },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs className="w-6 h-6" /> },
        { name: 'Tanstack Query ', level: 85, icon: <FaCode className="w-6 h-6" /> },
        { name: 'Zustand', level: 90, icon: <FaCode className="w-6 h-6" /> },
        { name: 'Maintene UI', level: 85, icon: <FaCode className="w-6 h-6" /> },
        { name: 'JavaScript', level: 90, icon: <SiJavascript className="w-6 h-6" /> },
          ],
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="w-8 h-8 text-green-500" />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="w-6 h-6" /> },
        { name: 'Express.js', level: 80, icon: <SiExpress className="w-6 h-6" /> },
        { name: 'REST APIs', level: 90, icon: <FaCode className="w-6 h-6" /> },
        { name: 'grpc', level: 40, icon: <FaCode className="w-6 h-6" /> },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <FaDatabase className="w-8 h-8 text-purple-500" />,
      skills: [
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="w-6 h-6" /> },
        { name: 'Git', level: 90, icon: <FaTools className="w-6 h-6" /> },
        { name: 'Docker', level: 75, icon: <FaTools className="w-6 h-6" /> },
        { name: 'AWS', level: 70, icon: <FaTools className="w-6 h-6" /> },
        { name: 'MySQL', level: 70, icon: <FaTools className="w-6 h-6" /> },
        { name: 'PostgreSQL', level: 70, icon: <FaTools className="w-6 h-6" /> },
        { name: 'chromadb', level: 70, icon: <FaTools className="w-6 h-6" /> }
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 scroll-mt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-6 h-6 sm:w-8 sm:h-8">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-2 sm:ml-3">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center min-w-0 flex-1">
                        <span className="text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0">
                          <div className="w-5 h-5 sm:w-6 sm:h-6">{skill.icon}</div>
                        </span>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 h-2.5 rounded-full shadow-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 