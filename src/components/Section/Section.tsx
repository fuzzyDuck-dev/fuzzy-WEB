import { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'gradient';
}

export const Section = ({
  children,
  className = '',
  id,
  background = 'dark'
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`section section--${background} ${className}`}
    >
      <div className="section__container">
        {children}
      </div>
    </section>
  );
}; 