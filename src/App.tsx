import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F4F4F5] flex flex-col overflow-x-hidden text-[#18181B] font-sans selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main className="flex-1 mt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Projects />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Sticky Geometric Footer */}
        <footer className="h-10 bg-zinc-900 text-white flex items-center justify-between px-6 sm:px-10 text-[9px] uppercase tracking-[0.2em] font-mono border-t border-zinc-800">
          <span className="opacity-80">©{new Date().getFullYear()} PVSR SYSTEMS.v1</span>
          <div className="hidden sm:flex gap-10">
            <span className="opacity-60">LAT: 17.6868° N</span>
            <span className="opacity-60">LNG: 83.2185° E</span>
            <span className="hidden md:inline opacity-40 uppercase">Visakhapatnam // IN</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}
