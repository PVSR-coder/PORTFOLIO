import { motion } from 'motion/react';
import { Mail, Phone, MapPin, GraduationCap, Code, BookOpen, User, ArrowRight } from 'lucide-react';

export default function Home() {
  const resumeData = {
    name: "PV Soma Raju",
    bio: "Computer Science student at Mahindra University with a passion for AI optimization and machine learning.",
    email: "somarajupv05@gmail.com",
    collegeEmail: "SE23UCSE140@Mahindrauniversity.edu.in",
    phone: "+91 9951145555",
    location: "Visakhapatnam, IN",
    researchInterests: [
      "AI & Optimization",
      "Machine Learning",
      "DBMS",
      "Distributed Systems"
    ],
    education: [
      {
        school: "Mahindra University",
        degree: "B.Tech in Computer Science",
        period: "2023 – 2027",
        details: "CGPA: 7.8"
      },
      {
        school: "Deeksha Junior College",
        degree: "MPC Stream",
        period: "2021 – 2023",
        details: "Percentage: 93%"
      }
    ],
    expertise: [
       { title: "Architecture", code: "01" },
       { title: "AI Optimization", code: "02" },
       { title: "Backend Systems", code: "03" }
    ],
    skills: {
      core: ["Data Structures & Algorithms", "Optimization of AI", "OOP", "Machine Learning"],
      languages: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"],
      tools: ["Git", "VS Code", "Node.js", "Express", "React"]
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-[calc(100vh-80px-40px)]">
      {/* Sidebar: Personal Info & Education */}
      <section className="col-span-12 lg:col-span-4 border-r geo-border bg-white p-6 sm:p-10 flex flex-col justify-between">
        <div className="space-y-12">
          <div>
            <div className="w-32 h-32 bg-zinc-900 rounded-sm mb-8"></div>
            <h1 className="text-5xl font-black leading-none mb-4 uppercase tracking-tighter">
               PV SOMA<br/>RAJU
            </h1>
            <p className="text-zinc-500 font-medium uppercase tracking-tighter text-sm">
               CS @ Mahindra University
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="geo-label mb-4">Expertise</h3>
              <ul className="space-y-1 text-sm font-medium">
                {resumeData.expertise.map((exp, i) => (
                  <li key={i} className="flex justify-between border-b border-zinc-100 py-2">
                    <span>{exp.title}</span> 
                    <span className="text-zinc-400 font-mono text-[10px]">{exp.code}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="geo-label mb-4">Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.languages.map(s => (
                  <span key={s} className="px-2 py-1 bg-zinc-100 text-[10px] font-bold uppercase whitespace-nowrap">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a 
            href={`mailto:${resumeData.email}`}
            className="block w-full py-4 bg-zinc-900 text-white font-bold uppercase tracking-[0.2em] text-xs text-center transition-all hover:bg-zinc-800"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Main Content Areas */}
      <section className="col-span-12 lg:col-span-8 flex flex-col">
        <div className="p-6 sm:p-10 flex-1 space-y-16">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <h2 className="geo-label mb-1">Current Focus</h2>
              <h3 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none uppercase italic">
                Optimizing Intelligence
              </h3>
            </div>
            <div className="text-right sm:border-l geo-border sm:pl-6">
              <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">Location</p>
              <p className="text-xs font-mono uppercase font-bold">{resumeData.location}</p>
              <p className="text-[10px] font-mono uppercase text-zinc-400 mt-2 mb-1">Batch</p>
              <p className="text-xs font-mono uppercase font-bold">2023 – 2027</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Background */}
            <div className="space-y-6">
              <h3 className="geo-label">Background</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Dedicated Computer Science student with a strong foundation in core algorithms and optimization techniques. 
                Focusing on building high-performance AI systems and optimized database architectures.
              </p>
              <div className="space-y-4 pt-4">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] font-mono text-zinc-400 mb-1">{edu.period}</p>
                    <p className="font-bold text-sm uppercase">{edu.school}</p>
                    <p className="text-xs text-zinc-500 italic uppercase">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research */}
            <div className="space-y-6">
               <h3 className="geo-label">Interests</h3>
               <div className="space-y-3">
                 {resumeData.researchInterests.map((interest, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-zinc-100 border border-zinc-200">
                     <span className="text-xs font-bold uppercase tracking-tight">{interest}</span>
                     <ArrowRight size={14} className="text-zinc-400" />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Outcomes / Details Bar */}
        <div className="h-auto md:h-40 border-t geo-border grid grid-cols-1 md:grid-cols-3 bg-zinc-100">
          <div className="border-b md:border-b-0 md:border-r geo-border p-6 flex flex-col justify-center">
            <span className="geo-label block mb-2 font-mono">Personal Contact</span>
            <p className="text-lg font-bold tracking-tighter truncate">{resumeData.email}</p>
            <p className="text-[10px] text-zinc-500 uppercase">{resumeData.phone}</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r geo-border p-6 flex flex-col justify-center">
            <span className="geo-label block mb-2 font-mono">College Auth</span>
            <p className="text-lg font-bold tracking-tighter truncate">{resumeData.collegeEmail}</p>
            <p className="text-[10px] text-zinc-500 uppercase">Mahindra University</p>
          </div>
          <div className="p-6 flex flex-col justify-center gap-2">
            <span className="geo-label block mb-1 font-mono">System Status</span>
            <div className="flex gap-1">
              <div className="h-1 w-8 bg-zinc-900"></div>
              <div className="h-1 w-8 bg-zinc-900"></div>
              <div className="h-1 w-8 bg-zinc-900"></div>
              <div className="h-1 w-8 bg-zinc-300"></div>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase mt-1 italic font-bold">Reliability Index: HIGH</p>
          </div>
        </div>
      </section>
    </div>
  );
}
