import { motion } from 'framer-motion';
import './USPCard.css';

interface USPCardProps {
  title: string;
  description: string;
  icon: string;
}

export const USPCard = ({ title, description, icon }: USPCardProps) => {
  return (
    <motion.div
      className="usp-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="usp-card__icon">{icon}</div>
      <div className="usp-card__content">
        <h3 className="usp-card__title">{title}</h3>
        <p className="usp-card__description">{description}</p>
      </div>
    </motion.div>
  );
}; 