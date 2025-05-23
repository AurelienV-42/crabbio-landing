import { useEffect } from 'react';
import Footer from './sections/Footer';
import Founders from './sections/Founders';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ProductDemo from './sections/ProductDemo';
import WhyChoose from './sections/WhyChoose';
import './styles/globals.css';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'Crabbio - Making AI use safe';

    // Update favicon to use static file
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico';
    }

    // Add canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://www.crabbio.com';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductDemo />
      <WhyChoose />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;
