import { motion } from 'framer-motion';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { PORTFOLIO } from '../../constants/content';
import aiImage from '../../assets/images/portfolio/AI.jpeg';
import ecomImage from '../../assets/images/portfolio/ECOM.jpeg';
import healthImage from '../../assets/images/portfolio/Health.jpeg';
import './Portfolio.css';

export const Portfolio = () => {
  const projects = [
    {
      ...PORTFOLIO[0],
      image: aiImage
    },
    {
      ...PORTFOLIO[1],
      image: ecomImage
    },
    {
      ...PORTFOLIO[2],
      image: healthImage
    }
  ];

  return (
    <Section id="portfolio" background="gradient">
      <div className="portfolio">
        <h2 className="portfolio__title">
          Our <span className="text-gradient">Work</span>
        </h2>
        <p className="portfolio__subtitle">
          Explore our recent projects and success stories
        </p>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="portfolio__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Button href={`/portfolio/${project.id}`} variant="secondary">
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}; 