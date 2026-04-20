import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-300 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
          Portfolio<span className="text-zinc-400 font-mono text-sm leading-none pt-1">.v1</span>
        </NavLink>
        <div className="flex items-center gap-4 sm:gap-10">
          <nav className="flex gap-4 sm:gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            <NavLink 
              to="/" 
              className={({ isActive }) => `pb-1 transition-colors hover:text-zinc-900 ${isActive ? 'text-zinc-900 border-b-2 border-zinc-900' : ''}`}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `pb-1 transition-colors hover:text-zinc-900 ${isActive ? 'text-zinc-900 border-b-2 border-zinc-900' : ''}`}
            >
              Works
            </NavLink>
          </nav>
          <div className="hidden md:block px-4 py-2 border border-zinc-900 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer">
            Available for Hire
          </div>
        </div>
      </div>
    </nav>
  );
}
