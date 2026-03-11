function App() {
  const projects = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "A responsive landing page with modern animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Project 3",
      description: "A mobile-first e-commerce platform.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      link: "#",
    },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "Node.js", "Git", "Figma",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-400">Hafiz</span>
          <ul className="flex gap-6 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-2xl">
          <div className="w-28 h-28 rounded-full bg-indigo-600 mx-auto mb-6 flex items-center justify-center text-5xl">
            👨‍💻
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-indigo-400">Hafiz</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            A passionate Front-End Developer who loves building beautiful and
            performant web experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-indigo-400">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm hover:border-indigo-400 hover:text-indigo-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition-colors group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-indigo-900/40 text-indigo-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you have a question, a project idea, or just want to say hi —
            my inbox is always open!
          </p>
          <a
            href="mailto:hafiz@example.com"
            className="inline-block px-8 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500 transition-colors"
          >
            Say Hello 👋
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Hafiz. Built with React + Vite + Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
