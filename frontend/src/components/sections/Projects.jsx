import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'mern', 'react', 'node'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with MERN stack, featuring real-time inventory management, secure payments, and admin dashboard.',
      image: '/images/ecommerce.png',
      tags: ['mern', 'react', 'node'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ameer-hamza26/js-ecommerce-cart-localstorage.git',
      live: 'https://js-ecommerce-cart-localstorage.vercel.app/',
    },
    {
      title: 'Gym Web App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: '/images/gym.png',
      tags: ['mern', 'react'],
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/ameer-hamza26/Gym.git',
      live: 'https://gym-nine-silk.vercel.app/',
    },
    {
      title: 'Tour Booking System',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content scheduling.',
      image: '/images/tour.png',
      tags: ['mern', 'react', 'node'],
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/ameer-hamza26/react-tour-booking-app.git',
      live: 'https://react-tour-booking-app.vercel.app/',
    },
    // Add more projects as needed
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-16"
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in
            building modern web applications using the MERN stack.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ameer-hamza26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View More Projects
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 