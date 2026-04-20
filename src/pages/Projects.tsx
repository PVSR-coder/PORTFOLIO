import { motion } from 'motion/react';
import { ExternalLink, Github, Zap, Database, Code, Layout } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Electric Load Dash",
      year: "2024",
      role: "Lead ML",
      description: "Day-ahead forecasting system using SARIMA & deep learning. Optimized for real-time industrial monitoring with sub-second dashboard updates.",
      tags: ["Python", "LSTM", "SARIMA"],
      github: "https://github.com/PVSR-coder",
      icon: <Zap size={20} className="text-zinc-900" />,
      code: "01"
    },
    {
      title: "DBMS Industrial Optimization",
      year: "2025",
      role: "SQL Architect",
      description: "Enterprise column-query optimization for RINL industrial workflows. Reduced data retrieval latency by 99% using complex Oracle indexing.",
      tags: ["SQL", "Oracle", "MySQL"],
      github: "https://github.com/PVSR-coder",
      icon: <Database size={20} className="text-zinc-900" />,
      code: "02"
    },
    {
      title: "Geometric Portfolio",
      year: "2024",
      role: "UI Engineer",
      description: "A high-contrast brutalist portfolio design with geometric balance. Focuses on structural integrity and typographic scale.",
      tags: ["React", "Tailwind", "Motion"],
      github: "https://github.com/PVSR-coder/portfolio",
      icon: <Layout size={20} className="text-zinc-900" />,
      code: "03"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 space-y-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b geo-border pb-10">
        <div>
          <h2 className="geo-label mb-2">Selected Works</h2>
          <h3 className="text-6xl sm:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Archive.v1
          </h3>
        </div>
        <div className="text-right flex flex-col items-end">
           <div className="flex gap-2 mb-2">
             <div className="w-12 h-1 px-1 bg-zinc-900"></div>
             <div className="w-12 h-1 px-1 bg-zinc-300"></div>
           </div>
           <p className="text-xs font-mono uppercase font-bold text-zinc-400">Project Count: 03</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col geo-card group relative"
          >
            {/* Numbering Label */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-300 font-bold">
               ID: {project.code}
            </div>

            <div className="p-6 sm:p-8 space-y-6 flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-zinc-100 border border-zinc-200">
                  {project.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono uppercase text-zinc-400">Year</p>
                  <p className="text-xs font-mono font-bold">{project.year}</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <h4 className="geo-label">Project {project.code}</h4>
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed italic">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 border-t geo-border">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-zinc-400 uppercase font-bold">
                       #{tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank"
                  className="flex items-center justify-between group/link border-b-2 border-zinc-900 pb-1 text-xs font-bold uppercase tracking-widest transition-all hover:bg-zinc-900 hover:text-white hover:px-2 py-2"
                >
                  Source Code <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
