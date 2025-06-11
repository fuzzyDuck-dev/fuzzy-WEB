import { motion } from 'framer-motion';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { NAV_LINKS, SOCIAL_LINKS } from '../../constants/content';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="footer" background="dark">
      <div className="footer">
        <div className="footer__content">
          <div className="footer__brand">
            <h2 className="footer__logo">FuzzyDuck</h2>
            <p className="footer__tagline">
              Crafting digital experiences that make a difference
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Navigation</h3>
              <ul className="footer__nav-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__nav-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Services</h3>
              <ul className="footer__nav-links">
                <li>
                  <a href="#services" className="footer__nav-link">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__nav-link">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__nav-link">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__nav-link">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Contact</h3>
              <ul className="footer__nav-links">
                <li>
                  <a href="mailto:hello@fuzzyduck.dev" className="footer__nav-link">
                    hello@fuzzyduck.dev
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="footer__nav-link">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} FuzzyDuck. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="/privacy" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer__legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}; 