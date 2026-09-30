import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span>Selected Work</span>
          <h2>Featured Projects</h2>
        </div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              className="project-card"
              variants={item}
              key={project.title}
              whileHover={{
                y: -12,
                transition: { duration: 0.25 },
              }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(108, 99, 255, 0.25)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
