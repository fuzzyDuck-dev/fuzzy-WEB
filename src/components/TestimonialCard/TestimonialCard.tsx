import { motion } from 'framer-motion';
import './TestimonialCard.css';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonial-card__quote">"{quote}"</div>
      <div className="testimonial-card__author">
        <div className="testimonial-card__name">{author}</div>
        <div className="testimonial-card__role">{role}</div>
      </div>
    </motion.div>
  );
}; 