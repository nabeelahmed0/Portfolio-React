import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function SkillGroup({ title, items }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        borderColor: "rgba(108,99,255,.5)",
      }}
    >
      <h3>{title}</h3>

      <div className="skill-list">
        {items.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span>What I Work With</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <SkillGroup title="User Interface (UI)" items={skills.FrontEnd} />

          <SkillGroup title="Backend & Database" items={skills.backend} />

          <SkillGroup title="Cloud & DevOps" items={skills.cloud} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
