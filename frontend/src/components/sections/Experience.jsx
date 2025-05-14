import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Led the development of a cloud-based SaaS platform using MERN stack',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries improving application performance by 30%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      location: 'New York, NY',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Integrated third-party APIs and payment gateways',
        'Implemented responsive designs and cross-browser compatibility',
        'Collaborated with UX designers to improve user experience',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'WebTech Solutions',
      location: 'Boston, MA',
      period: 'Jun 2018 - Feb 2020',
      description: [
        'Built and maintained client websites using modern web technologies',
        'Assisted in database design and implementation',
        'Participated in agile development processes',
        'Fixed bugs and implemented new features',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <FaBriefcase className="w-4 h-4 mr-2" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
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