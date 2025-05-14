import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact className="w-6 h-6" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="w-6 h-6" /> },
        { name: 'JavaScript', level: 90, icon: <SiJavascript className="w-6 h-6" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="w-6 h-6" /> },
      ],
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="w-8 h-8 text-green-500" />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="w-6 h-6" /> },
        { name: 'Express.js', level: 80, icon: <SiExpress className="w-6 h-6" /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="w-6 h-6" /> },
        { name: 'REST APIs', level: 90, icon: <FaCode className="w-6 h-6" /> },
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
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-gray-600 dark:text-gray-400 mr-2">
                          {skill.icon}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
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