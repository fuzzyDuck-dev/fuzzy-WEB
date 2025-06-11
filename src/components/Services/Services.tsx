import { Section } from '../Section/Section';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { SERVICES } from '../../constants/content';
import './Services.css';

export const Services = () => {
  return (
    <Section id="services" background="gradient">
      <div className="services">
        <h2 className="services__title">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="services__subtitle">
          Comprehensive solutions for modern businesses
        </p>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}; 