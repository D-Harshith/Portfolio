import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: 'AI' | 'Machine Learning' | 'Data Analytics' | 'SQL' | 'NLP' | 'Power BI or Tableau';
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  
  interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    // demo: string;
    category: string[]; // Allow multiple categories
  }

  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Coffee Supply Chain Procurement Agent",
      description: "Built a CrewAI-based multi-agent system to automate coffee bean procurement, including sourcing, negotiation, and order tracking. Simulated workflows with 50+ global suppliers using dynamic market data updated every 10 seconds. Created a live dashboard with agent logs, supplier maps, and demand forecasts, improving efficiency by 25%.",
      image: "Images/Multiagent.jpeg",
      technologies: ["CrewAI", "Python", "OpenAI API", "Streamlit"],
      github: "https://github.com/D-Harshith/Procurement-Multi-Agent-System",
      category: ['AI']
    },
    {
      id: 2,
      title: "E-Learning Course Recommendation System",
      description: "Analyzed 3,500+ Coursera courses using NLP to uncover patterns in descriptions, skills, and difficulty. Built a recommendation engine with CountVectorizer and cosine similarity, achieving ~94% top-6 relevance. Designed a scalable Python pipeline with robust preprocessing, boosting suggestion precision by 85%.",
      image: "Images/E-learning.jpeg",
      technologies: ["Python", "scikit-learn", "NLTK", "Pandas"],
      github: "https://github.com/D-Harshith/Recommender-System-for-E-learning-Courses",
      // demo: "#",
      category: ['Machine Learning', 'NLP']
    },
    {
      id: 3,
      title: "SQL Chatbot: AI-Powered Database Querying",
      description: "Developed an AI chatbot using LangChain and Azure OpenAI to convert 100+ natural language queries into SQL with 90% accuracy, reducing manual effort by 80%. Designed a Streamlit interface to execute 50+ MySQL queries on the Chinook database, delivering results 95% faster. Integrated Plotly to generate 10+ dynamic charts, enhancing data insights by 40% for improved decision-making.",
      image: "Images/SQL chatbot.jpeg",
      technologies: ["Python", "LangChain", "MySQL", "Streamlit", "Plotly"],
      github: "https://github.com/D-Harshith/AI-Powered-SQL-Chatbot-with-Automated-Visualization",
      // demo: "#",
      category: ['SQL', 'AI']
    },
    {
      id: 4,
      title: "Analysing Political Messaging Trends with Power BI",
      description: "Scraped and cleaned over 15K political tweets using Beautiful Soup and Tweepy for sentiment analysis and topic modeling. Engineered TF-IDF and cosine similarity features to extract political keywords, enhancing thematic differentiation by 30% and revealing voter sentiment trends. Visualized linguistic and sentiment changes in Tableau dashboards, aiding policy analyst research.",
      image: "Images/Politician tweet analysis.jpeg",
      technologies: ["Python", "Tweepy", "NLP", "Power BI"],
      github: "https://github.com/D-Harshith/US-Politician-Tweet-Analysis",
      // demo: "#",
      category: ['NLP', 'Power BI or Tableau', 'Data Analytics']
    },
    {
      id: 5,
      title: "911 Emergency Calls Analysis",
      description: "Cleaned and processed over 1M 911 call records using ETL pipelines to create a structured dataset for analysis. Leveraged SQL for data extraction and R for EDA and statistical modeling to identify trends in response times and incident frequency. Developed interactive Tableau dashboards to visualize spatial-temporal patterns, enhancing operational efficiency and stakeholder engagement.",
      image: "Images/911.png",
      technologies: ["SQL", "R", "Tableau", "ETL Pipelines"],
      github: "https://github.com/D-Harshith/Analysis-of-911-emergency-calls-in-Baltimore-city",
      // demo: "#",
      category: ['Data Analytics', 'Power BI or Tableau']
    },
    {
      id: 6,
      title: "SuperStore Analysis",
      description: "This project features Tableau visualizations analyzing sales data by time, region, product, shipping mode, customer segment, and discounts. It uses charts like line, map, tree map, bar, scatter, and heat map to reveal trends and profitability insights. These visualizations aid strategic decisions in marketing, inventory, and pricing.",
      image: "Images/Super store.png",
      technologies: ["Tableau", "Excel/CSV", "Data Visualization"],
      github: "https://github.com/D-Harshith/Superstore-sales-analysis",
      // demo: "#",
      category: ['Power BI or Tableau', 'Data Analytics']
    },
    {
      id: 7,
      title: "Churn Analysis in Telecom Industry",
      description: "This project analyzes telecom customer churn using EDA, preprocessing, and multiple machine learning models including Logistic Regression, Random Forest, Gradient Boosting, SVM, and KNN. It handles imbalanced data with feature scaling and encoding, tuning models via GridSearchCV, and identifies Gradient Boosting as the best performer with an F1 score of 0.5775. Visualizations and performance metrics support data-driven churn prediction.",
      image: "Images/churn analysis.jpeg",
      technologies: ["Python", "pandas", "scikit-learn", "Matplotlib", "Seaborn"],
      github: "https://github.com/D-Harshith/Churn-prediction",
      // demo: "#",
      category: ['Machine Learning', 'Data Analytics']
    },
    {
      id: 8,
      title: "Emotion Classification with NLP & Machine Learning",
      description: "This project develops an advanced NLP-based emotion classification model to accurately predict emotions like sorrow, rage, and happiness from diverse textual data. It involves preprocessing, feature extraction using TF-IDF or embeddings, and training models such as SVM, Random Forest, and neural networks. The model’s performance is evaluated with accuracy, precision, recall, and F1-score metrics to ensure robust emotion detection.",
      image: "Images/emotion.png",
      technologies: ["Python", "NLP", "scikit-learn", "TF-IDF", "Neural Networks"],
      github: "https://github.com/D-Harshith/-Advanced-Emotion-Classification-using-NLP",
      // demo: "#",
      category: ['NLP', 'Machine Learning']
    },
    {
      id: 9,
      title: "Sales Insight Prediction",
      description: "This project developed a dynamic Power BI dashboard to analyze Atliq Hardware sales data from 2017 to 2020 across major Indian cities, improving decision-making efficiency by 20% and reducing report generation time by 15%. It involved cleaning and processing 10,000+ records from multiple SQL tables and delivering interactive visualizations that boosted sales performance by 10%. The dashboard enables real-time exploration and detailed city-wise sales insights.",
      image: "Images/Sales insight.png",
      technologies: ["Python", "NLP", "scikit-learn", "TF-IDF", "Power BI"],
      github: "https://github.com/D-Harshith/Sales-insight-prediction",
      // demo: "#",
      category: ['SQL', 'Power BI or Tableau', 'Data Analytics']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Featured <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my work that showcases my skills, creativity, and problem-solving abilities.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Data Analytics', 'Machine Learning', 'AI', 'SQL', 'NLP', 'Power BI or Tableau'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-1 text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {/* <a 
                    href={project.demo}
                    className="flex items-center gap-1 text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/D-Harshith"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
          >
            <Github size={24} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}