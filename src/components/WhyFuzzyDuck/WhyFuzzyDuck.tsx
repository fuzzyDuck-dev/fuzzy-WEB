import { Section } from '../Section/Section';
import { USPCard } from '../USPCard/USPCard';
import { USPS } from '../../constants/content';
import './WhyFuzzyDuck.css';

export const WhyFuzzyDuck = () => {
  return (
    <Section id="why-us" background="dark">
      <div className="why-us">
        <h2 className="why-us__title">
          Why <span className="text-gradient">FuzzyDuck</span>?
        </h2>
        <p className="why-us__subtitle">
          We combine technical excellence with human-centered design
        </p>
        <div className="why-us__grid">
          {USPS.map((usp) => (
            <USPCard
              key={usp.id}
              title={usp.title}
              description={usp.description}
              icon={usp.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}; 