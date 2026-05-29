import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Review from './pages/Review';
import NotFound from './pages/NotFound';
import CaseStudySaloon from './pages/CaseStudySaloon';
import CaseStudyVoid from './pages/CaseStudyVoid';
import CaseStudyHouse from './pages/CaseStudyHouse';
import CaseStudyNoralina from './pages/CaseStudyNoralina';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/review" element={<Review />} />
            <Route path="/portfolio/saloon" element={<CaseStudySaloon />} />
            <Route path="/portfolio/void" element={<CaseStudyVoid />} />
            <Route path="/portfolio/entire-house" element={<CaseStudyHouse />} />
            <Route path="/portfolio/noralinas-closet" element={<CaseStudyNoralina />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
