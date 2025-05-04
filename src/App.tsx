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
    document.title = 'Crabbio - Make AI Safe for your Business';
    
    // Update favicon to use static file
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico';
    }
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