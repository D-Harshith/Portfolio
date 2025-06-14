// import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
        title: "Data Analyst",
        company: "Kelley School of Business, Indiana University",
        location: "Bloomington, IN",
        period: "Jan 2025 – Present",
        description: [
          "Analyzed phishing simulation logs from over 1,200 participants using Python and Excel to detect behavioral risk factors, driving IT policy enhancements for more effective user protection.",
          "Developed interactive Tableau dashboards comparing phishing success rates across chatbot and website vectors, helping reduce simulated breach incidents by 15%.",
          "Created detailed user risk profiles based on click-through behaviors, login attempts, and response times, which refined segmentation models and improved training personalization.",
          "Collaborated with cybersecurity teams to integrate behavioral insights into awareness programs, increasing segmentation accuracy by 20% and reducing high-risk user engagement."
  ],
      logo: "Images/Kelley 1.jpeg"
    },
    {
      title: "Geospatial Data Analyst",
      company: "Kelley School of Business, Indiana University",
      location: "Bloomington, IN",
      period: "Jan 2025 – Present",
      description: [
        "Segmented terrain features in multispectral satellite imagery using Python, Rasterio, and GeoPandas to support compliance monitoring of environmental zoning regulations.",
        "Applied dimensionality reduction techniques such as PCA and UMAP on 10,000+ geospatial records, reducing processing time by 35% while preserving spatial accuracy for classification tasks.",
        "Designed interactive dashboards in Tableau to visualize zoning boundaries and highlight land-use anomalies, enabling early detection of over five potential regulatory violations across project zones."
        ],
      logo: "Images/Kelley 2.png"
    },
    {
      title: "Data Analyst – Cybersecurity Projects",
      company: "Kelley School of Business, Indiana University",
      location: "Bloomington, IN",
      period: "Sep 2024 – May 2025",
      description: [
        "Engineered and cleaned features from 100K+ high-dimensional network traffic logs to detect anomalies using Decision Trees, XGBoost, and SVM, achieving 99% classification accuracy on intrusion datasets.",
        "Developed threat prioritization tools using Power BI and Excel, integrating model outputs to generate real-time risk scores that reduced analyst response time by 30%.",
        "Collaborated with cybersecurity and IT teams to standardize logging schemas and data pipelines, improving ML model explainability and adoption across operational teams.",
        "Implemented advanced feature analysis techniques, including UMAP and statistical profiling, to enhance anomaly interpretability and support proactive mitigation of security threats."
  ],
      logo: "Images/Kelley 3.jpeg"
    },
    {
      title: "Research Assistant",
      company: "Amrita Vishwa Vidyapeetham",
      location: "Chennai, India",
      period: "Jan 2023 - May 2023",
      description: [
        "Automated preprocessing of large student behaviour image datasets using Python, reducing data preparation time by 20% and accelerating model development cycles.",
        "Trained and optimized CNN and MobileNet models in TensorFlow to classify student behavioural patterns from classroom imagery, achieving 96% and 98% accuracy.",
        "Created interactive dashboards in Power BI to visualize student behaviour trends, improving stakeholder decision-making efficiency by 15%."
      ],
      logo: "Images/amrita-vishwa-vidyapeetham-logo-png_seeklogo-519922.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Professional <span className="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A chronicle of my professional journey, highlighting key roles and achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 md:mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex relative`}>
              <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg w-20 h-20 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110 shadow-md">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover rounded" />
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-teal-500 border-4 border-white dark:border-slate-800"></div>

              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl shadow-lg p-6 md:w-1/2 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex md:hidden items-center mb-4 gap-4">
                  <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.title}</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="md:block hidden">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">{exp.company}</p>
                </div>

                <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}