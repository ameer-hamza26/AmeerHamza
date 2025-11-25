import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode className="w-5 h-5" />,
      color: 'blue',
      items: ['React.js', 'Next.js', 'Redux', 'Tanstack Query', 'Zustand'],
    },
    {
      category: 'Backend',
      icon: <FaServer className="w-5 h-5" />,
      color: 'green',
      items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'grpc'],
    },
    {
      category: 'Tools & Others',
      icon: <FaTools className="w-5 h-5" />,
      color: 'purple',
      items: ['Git', 'Docker', 'Jest', 'CI/CD'],
    },
    {
      category: 'Database',
      icon: <FaDatabase className="w-5 h-5" />,
      color: 'orange',
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'chromadb'],
    },
    {
      category: 'Cloud',
      icon: <FaCloud className="w-5 h-5" />,
      color: 'indigo',
      items: ['AWS', 'Netlify', 'Vercel','koyeb','railway'],
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  };

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 scroll-mt-16 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Get to know more about my journey, skills, and passion for web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12 md:mb-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Software Engineer
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with extensive experience in
                building modern web applications using cutting-edge technologies. My journey in
                web development started with a curiosity about how things work on the
                internet, which led me to dive deep into both frontend and backend
                technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With a strong foundation in <span className="font-semibold text-gray-900 dark:text-white">JavaScript</span> and its ecosystem, I specialize
                in creating scalable, maintainable, and user-friendly applications.
                I believe in writing clean code and following best practices to ensure
                the highest quality of work.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I design software with <span className="font-semibold text-purple-600 dark:text-purple-400">robust architecture</span> in mind. For example, 
                when building a full-stack application, I structure it using a <span className="font-semibold text-blue-600 dark:text-blue-400">layered architecture</span>:
                separating the presentation layer (React/Next.js), business logic layer (Node.js/Express), 
                and data access layer (MongoDB/PostgreSQL). This approach ensures scalability, testability, 
                and makes it easier to maintain and extend the application as it grows. I also implement 
                design patterns like <span className="font-semibold text-green-600 dark:text-green-400">MVC</span>, <span className="font-semibold text-green-600 dark:text-green-400">RESTful APIs</span>, and 
                <span className="font-semibold text-green-600 dark:text-green-400"> microservices</span> when appropriate, ensuring each component has a single responsibility 
                and can evolve independently.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through
                technical blog posts.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${colorClasses[skillGroup.color].split(' ')[0]} mr-3`}>
                    <div className={skillGroup.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                   skillGroup.color === 'green' ? 'text-green-600 dark:text-green-400' :
                                   skillGroup.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                   skillGroup.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                                   'text-indigo-600 dark:text-indigo-400'}>
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border ${colorClasses[skillGroup.color]} transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 