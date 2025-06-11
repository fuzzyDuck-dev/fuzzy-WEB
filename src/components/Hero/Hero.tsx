import { motion } from 'framer-motion';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import './Hero.css';

export const Hero = () => {
  return (
    <Section id="hero" background="gradient">
      <div className="hero">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero__title">
            Crafting Digital <span className="text-gradient">Excellence</span>
          </h1>
          <p className="hero__subtitle">
            We build innovative software solutions that drive business growth and create exceptional user experiences.
          </p>
          <div className="hero__cta">
            <Button href="#contact" size="large">
              Start Project
            </Button>
            <Button href="#services" variant="secondary" size="large">
              Explore More
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 