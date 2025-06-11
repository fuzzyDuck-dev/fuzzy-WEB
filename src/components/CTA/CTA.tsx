import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import './CTA.css';

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" background="gradient">
      <div className="cta">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta__title">
            Let's Build Something <span className="text-gradient">Brilliant</span>
          </h2>
          <p className="cta__subtitle">
            Ready to transform your ideas into reality? Let's talk.
          </p>

          <form className="cta__form" onSubmit={handleSubmit}>
            <div className="cta__form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="cta__input"
              />
            </div>
            <div className="cta__form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="cta__input"
              />
            </div>
            <div className="cta__form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                required
                className="cta__textarea"
                rows={4}
              />
            </div>
            <Button type="submit" size="large" fullWidth>
              Schedule a Call
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}; 