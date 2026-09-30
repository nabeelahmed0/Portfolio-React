import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="grid-lines" />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Nabeel<span>Ahmed</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            I build reliable, scalable, and production-ready applications with a
            strong focus on performance, clean architecture, and delivering
            seamless user experiences.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <motion.a
              href="#contact"
              className="primary-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 35px rgba(108,99,255,.35)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="image-glow"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src="/src/assets/header.gif"
            alt="Zulfiqar Alam"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
