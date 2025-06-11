import { motion } from 'framer-motion';
import { Section } from '../Section/Section';
import './About.css';

export const About = () => {
  return (
    <Section id="about" background="dark">
      <div className="about">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="about__title">
            About <span className="text-gradient">FuzzyDuck</span>
          </h2>
          <p className="about__subtitle">
            We're a team of passionate developers and designers crafting exceptional digital experiences
          </p>

          <div className="about__grid">
            <div className="about__card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth and create meaningful impact.
              </p>
            </div>
            <div className="about__card">
              <h3>Our Vision</h3>
              <p>
                To be the leading force in digital transformation, setting new standards in technology and design.
              </p>
            </div>
            <div className="about__card">
              <h3>Our Values</h3>
              <p>
                Innovation, excellence, and client success are at the core of everything we do.
              </p>
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="about__stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="about__stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 