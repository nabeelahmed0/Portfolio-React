import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span>About Me</span>
          <h2>Building Scalable & ReliableDigital Solutions</h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/src/assets/WhatsApp Image 2026-09-30 at 5.43.55 PM.jpeg"
              alt="Zulfiqar working"
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I am a MERN Stack development. I build scalable and
              high-performance web applications using MongoDB, Express.js,
              React.js, and Node.js, with a focus on clean architecture,
              maintainable code, and seamless user experiences.
            </p>

            <p>
              I also work with RESTful APIs, authentication systems, cloud
              services, databases, and modern development tools to build secure,
              reliable, and production-ready web solutions.
            </p>

            <div className="about-highlights">
              {[
                ["Web Development", "MERN Stack"],
                ["Clean Code", "Scalable Architecture"],
                ["Problem Solver", "Real-world Solutions"],
              ].map(([title, description], index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <strong>{title}</strong>
                  <span>{description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
