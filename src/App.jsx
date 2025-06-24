import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaPalette,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function App() {
  const projects = [
    {
      title: "Pocket Buddy",
      description:
        "MERN-based restaurant offer browsing & redemption app with owner-approval logic.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "BCAwala",
      description:
        "Online portal for content sharing between students & teachers with authentication.",
      stack: ["PHP", "MySQL"],
      link: "#",
    },
    {
      title: "Real Estate Site",
      description:
        "Laravel-based listing platform with admin dashboard and contact form.",
      stack: ["Laravel", "PHP", "MySQL"],
      link: "#",
    },
    {
      title: "Big Basket Clone",
      description:
        "Grocery e-commerce site with cart, filtering, and checkout functionality.",
      stack: ["Django", "HTML", "CSS"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PHP", "Django", "Laravel"],
    },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "UI/UX Design", "Responsive Design"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-xl">Tushar Chauhan</span>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Tushar Chauhan
          </h1>
          <p className="text-xl md:text-2xl mb-6 animate-fade-in delay-100">
            Front-End Developer with Full-Stack Expertise
          </p>
          <p className="text-lg italic mb-8 animate-fade-in delay-200">
            "Crafting intuitive interfaces and robust web solutions"
          </p>
          <div className="flex justify-center gap-6 animate-fade-in delay-300">
            <a
              href="https://www.linkedin.com/in/tushar-chauhan-b33b94333"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:imcatushar1994@gmail.com"
              className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg overflow-hidden border-4 border-white">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                  TC
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Hi! I'm Tushar Chauhan, a passionate front-end developer with
                full-stack capabilities based in Gujarat, India.
              </p>
              <p className="text-lg mb-4">
                I specialize in creating smooth, responsive user interfaces
                while also building scalable backend solutions. My experience
                spans across the MERN stack, Laravel, and Django, allowing me to
                bridge design and functionality seamlessly.
              </p>
              <p className="text-lg">
                Currently pursuing my MCA while working on personal projects to
                expand my skills and create meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && (
                    <FaCode className="text-blue-500 text-xl mr-2" />
                  )}
                  {index === 1 && (
                    <FaServer className="text-blue-500 text-xl mr-2" />
                  )}
                  {index === 2 && (
                    <FaDatabase className="text-blue-500 text-xl mr-2" />
                  )}
                  {index === 3 && (
                    <FaPalette className="text-blue-500 text-xl mr-2" />
                  )}
                  <h3 className="text-xl font-semibold">
                    {skillCategory.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <FaMobileAlt className="text-white text-6xl opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  View Project <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-gray-600">Pursuing (2025-2027)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-gray-600">
                  L.J University, Gujarat (8.0/10 GPA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                  <a
                    href="mailto:imcatushar1994@gmail.com"
                    className="hover:text-blue-600"
                  >
                    imcatushar1994@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-blue-500 mr-3 text-xl" />
                  <a
                    href="https://www.linkedin.com/in/tushar-chauhan-b33b94333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    linkedin.com/in/tushar-chauhan
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-blue-500 mr-3 text-xl" />
                  <a
                    href="https://github.com/tusharchauhan1994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    github.com/tusharchauhan1994
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>
            © {new Date().getFullYear()} Tushar Chauhan. All rights reserved.
          </p>
          <p className="mt-2 text-gray-400">
            Built with React and Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/tushar-chauhan-b33b94333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:imcatushar1994@gmail.com"
              className="text-gray-300 hover:text-white transition"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
