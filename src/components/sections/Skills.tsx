import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'data' | 'ml' | 'cyber' | 'cloud' | 'devops';
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  type: Skill['category'];
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
  title: 'Data Analytics & Engineering',
  type: 'data',
  skills: [
    { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 95, category: 'data' },
    { name: 'SQL (MySQL, SMSS)', level: 90, category: 'data' },
    { name: 'ETL Pipelines & Data Cleaning', level: 88, category: 'data' },
    { name: 'Exploratory Data Analysis', level: 90, category: 'data' },
    { name: 'Statistics (Hypothesis Testing, Distributions, Correlation)', level: 92, category: 'data' },
    { name: 'Data Visualization (Tableau, Power BI, Plotly)', level: 90, category: 'data' },
    { name: 'Excel (Advanced Analytics)', level: 85, category: 'data' }
  ]
}
,
    {
      title: 'Machine Learning & AI',
      type: 'ml',
      skills: [
        { name: 'Supervised/Unsupervised ML', level: 90, category: 'ml' },
        { name: 'Deep Learning (CNN, DNN, MobileNet)', level: 88, category: 'ml' },
        { name: 'NLP (BERT, TF-IDF, Sentiment Analysis)', level: 85, category: 'ml' },
        { name: 'Model Optimization (GridSearchCV, Feature Engineering)', level: 87, category: 'ml' },
        { name: 'Autoencoders, Anomaly Detection', level: 84, category: 'ml' },
        { name: 'LangChain, Llama 3.3, Azure OpenAI', level: 80, category: 'ml' }
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      type: 'cyber',
      skills: [
        { name: 'Network Intrusion Detection Systems (NIDS)', level: 88, category: 'cyber' },
        { name: 'Perturbation Detection & Security Analytics', level: 85, category: 'cyber' },
        { name: 'Privacy Workflows & Compliance Design', level: 82, category: 'cyber' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      type: 'cloud',
      skills: [
        { name: 'Azure, Google Cloud, AWS', level: 85, category: 'cloud' },
        { name: 'Git & GitHub Actions', level: 90, category: 'devops' },
        { name: 'CI/CD & Agile Workflow', level: 88, category: 'devops' },
        { name: 'MongoDB, RESTful APIs (Express.js)', level: 80, category: 'devops' }
      ]
    }
  ];

  const getColorForCategory = (category: string) => {
    const colors = {
      data: 'from-blue-500 to-cyan-400',
      ml: 'from-purple-500 to-pink-400',
      cyber: 'from-red-500 to-rose-400',
      frontend: 'from-amber-500 to-orange-400',
      cloud: 'from-green-500 to-emerald-400',
      devops: 'from-teal-500 to-cyan-400',
    };
    return colors[category as keyof typeof colors] || 'from-slate-500 to-slate-400';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here’s a snapshot of my technical strengths in data science, AI, cybersecurity, cloud infrastructure, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-600 pb-3">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getColorForCategory(skill.category)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">
            Certifications & Achievements
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Oracle AI Vector Search Certified Professional", year: "2025" },
              { title: " IBM Data Science", year: "2023" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md border-l-4 border-teal-500 flex items-center gap-4 w-full max-w-md"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
                  {cert.year}
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white">{cert.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Professional Certification</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
