import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'],
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              MERN Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a passionate Full Stack Developer with extensive experience in
              building modern web applications using the MERN stack. My journey in
              web development started with a curiosity about how things work on the
              internet, which led me to dive deep into both frontend and backend
              technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With a strong foundation in JavaScript and its ecosystem, I specialize
              in creating scalable, maintainable, and user-friendly applications.
              I believe in writing clean code and following best practices to ensure
              the highest quality of work.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical blog posts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
            <svg
              className="ml-2 -mr-1 w-5 h-5"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 