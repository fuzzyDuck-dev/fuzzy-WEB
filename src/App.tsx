import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { WhyFuzzyDuck } from './components/WhyFuzzyDuck/WhyFuzzyDuck';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Testimonials } from './components/Testimonials/Testimonials';
import { CTA } from './components/CTA/CTA';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import './styles/global.css';
// TODO: Add a new component for the contact section
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyFuzzyDuck />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App; 