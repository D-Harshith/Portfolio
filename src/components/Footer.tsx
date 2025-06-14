import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold text-teal-400 mb-4 md:mb-0">
            Harshith Doppalapudi
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/D-Harshith" className="text-slate-300 hover:text-teal-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/doppalapudi-harshith-27abd/" className="text-slate-300 hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:harshithdoppalapudi@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Harshith Doppalapudi. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}