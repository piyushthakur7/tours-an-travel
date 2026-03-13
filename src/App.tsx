import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Hotels } from './pages/Hotels';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FloatingContact = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
    <a
      href="tel:+919797125922"
      className="bg-gold text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(201,166,107,0.39)] hover:shadow-[0_6px_20px_rgba(201,166,107,0.23)] hover:-translate-y-1 transition-all duration-300"
      aria-label="Call Us"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
    <a
      href="https://wa.me/919797125922"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FloatingContact />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

