import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-2xl text-teal-600 dark:text-teal-400 hover:scale-110 transition-transform">
          HD
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        <div 
          className={`fixed inset-0 bg-white/95 dark:bg-slate-900/95 flex flex-col items-center justify-center z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8 text-xl">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors mt-4"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}