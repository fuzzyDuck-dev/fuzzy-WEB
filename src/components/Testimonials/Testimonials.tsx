import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../Section/Section';
import { TestimonialCard } from '../TestimonialCard/TestimonialCard';
import { TESTIMONIALS } from '../../constants/content';
import './Testimonials.css';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <Section id="testimonials" background="dark">
      <div className="testimonials">
        <h2 className="testimonials__title">
          Client <span className="text-gradient">Success Stories</span>
        </h2>
        <p className="testimonials__subtitle">
          Hear what our clients have to say about working with us
        </p>
        
        <div className="testimonials__carousel">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          
          <div className="testimonials__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="testimonials__slide"
              >
                <TestimonialCard {...TESTIMONIALS[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="testimonials__indicators">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={`testimonials__indicator ${
                index === currentIndex ? 'testimonials__indicator--active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}; 