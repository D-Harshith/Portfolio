import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import * as d3 from 'd3';

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const roles = ['Data Analyst', 'Machine Learning Engineer', 'Data Scientist'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 300;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);

  // Create animated data visualization background
  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);
    const width = chartRef.current.clientWidth;
    const height = chartRef.current.clientHeight;

    // Generate random data
    const generateData = () => {
      return Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        value: Math.random() * 100
      }));
    };

    const updateVisualization = () => {
      const data = generateData();
      
      // Create circles with data-like appearance
      const circles = svg.selectAll('circle').data(data);
      
      circles.enter()
        .append('circle')
        .merge(circles as any)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.value / 10)
        .attr('fill', 'rgba(13, 148, 136, 0.2)')
        .attr('stroke', 'rgba(13, 148, 136, 0.3)')
        .transition()
        .duration(2000)
        .attr('cx', d => (d.x + 50) % width)
        .attr('cy', d => (d.y + 50) % height);

      circles.exit().remove();
    };

    const interval = setInterval(updateVisualization, 2000);
    updateVisualization();

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      <svg
        ref={chartRef}
        className="absolute inset-0 w-full h-full opacity-50"
        style={{ filter: 'blur(2px)' }}
      ></svg>
      
      <div className="container mx-auto max-w-6xl backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 rounded-2xl shadow-xl p-8 md:p-12 transform transition-transform duration-700 hover:scale-[1.02] relative z-10">
        <div className="text-center md:text-left md:flex items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 mb-6 md:mb-0 border-4 border-teal-500 shadow-xl animate-float">
            <img 
              src="Harshith photo.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Harshith Doppalapudi</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-slate-600 dark:text-slate-300">
              I'm a <span ref={typingRef} className="text-teal-600 dark:text-teal-400"></span>
              <span className="animate-blink">|</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
              From data to impact—building AI-powered tools, intelligent dashboards, and ML pipelines that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="Harshith Doppalapudi Resume.pdf" className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2">
                <FileText size={18} />
                Download CV
              </a>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/D-Harshith" className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/doppalapudi-harshith-27abd/" className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              {/* <a href="harshithdoppalapudi@gmail.com" className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 p-3 rounded-full shadow-md"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}