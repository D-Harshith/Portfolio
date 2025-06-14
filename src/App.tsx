import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import { Menu } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setMobileMenuOpen(false);
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {/* Mobile menu button */}
        <button 
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-teal-500 text-white md:hidden shadow-md"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>

        <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;