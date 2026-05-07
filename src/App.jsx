import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Search, 
  Trophy, 
  Users, 
  Laptop, 
  ExternalLink, 
  Lock,
  Cpu,
  Anchor,
  Compass,
  Skull,
  Zap,
  Map,
  ChevronRight,
  Globe,
  Waves,
  Info,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label }) => (
    <button 
      onClick={() => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className={`px-4 py-2 transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold ${
        activeSection === id ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08)_0%,transparent_50%)]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-950/95 backdrop-blur-md border-cyan-500/20 shadow-xl' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <Skull className="text-slate-950" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-mono leading-none uppercase">
                CYBER VERSE
              </span>
              <span className="text-[10px] text-cyan-500/60 font-bold tracking-[0.2em] uppercase">GSSSIETW × DELL</span>
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <NavItem id="home" label="Inception" />
            <NavItem id="rounds" label="The Gauntlet" />
            <NavItem id="register" label="Join Crew" />
          </div>

          <div className="flex items-center">
            <div className="px-3 py-1 border border-cyan-500/30 rounded font-mono text-[10px] uppercase tracking-widest text-cyan-400 bg-cyan-500/5">
              In Collaboration With <span className="text-white font-bold">Dell Technologies</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Calendar size={14} />
                08 MAY 2026
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
                <AlertTriangle size={14} />
                REGISTRATION CLOSES BY END OF DAY
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase italic leading-none mb-8 whitespace-nowrap">
              CYBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">VERSE</span>
            </h1>

            <div className="flex items-center gap-4 text-xl md:text-3xl font-black text-slate-500 uppercase tracking-tighter mb-8">
              <span>DECODE</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500/30"></div>
              <span>DEFEND</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500/30"></div>
              <span className="text-white">DOMINATE</span>
            </div>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mb-10">
              The digital tide is rising. Embark on a treacherous journey through the high seas of cybersecurity. 
              Join <span className="text-white font-bold underline decoration-cyan-500">GSSSIETW</span> and 
              <span className="text-white font-bold ml-1">Dell Technologies</span> to conquer the islands of code.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-3"
              >
                ENLIST NOW <Anchor size={22} />
              </button>
              
              <div className="flex items-center gap-8 py-4 px-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">Team Size</span>
                  <span className="text-xl font-black text-white">2 Members</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">Requirement</span>
                  <span className="text-xl font-black text-white">Laptop</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { label: "Limited Seats", sub: "Register Fast", icon: Users, color: "border-orange-500/30 bg-orange-500/5 text-orange-400" },
                { label: "Exciting Prizes", sub: "The Grand Bounty", icon: Trophy, color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400" },
                { label: "Sync Battle", sub: "Live Leaderboards", icon: Cpu, color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400" }
            ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                    <div key={i} className={`p-6 rounded-2xl border ${item.color} flex items-center gap-5 transition-all hover:border-opacity-100`}>
                        <div className="p-4 rounded-xl bg-white/5">
                            <IconComponent size={28} />
                        </div>
                        <div>
                            <p className="text-lg font-black uppercase italic tracking-tight">{item.label}</p>
                            <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">{item.sub}</p>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      {/* Gauntlet Section */}
      <section id="rounds" className="py-24 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter italic text-white">The Gauntlet</h2>
                    <p className="text-cyan-500 font-mono text-sm tracking-[0.4em]">STAGES OF THE CHALLENGE</p>
                </div>
                <div className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-mono text-slate-500 uppercase italic">
                   8 May 2026 | 02:00 PM - 04:00 PM
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    stage: "Stage 01",
                    title: "Digital Seas: Connections",
                    desc: "Navigate the grid and find hidden links between cyber concepts. Group the artifacts correctly to earn your first doubloons.",
                    icon: Compass,
                    footer: "Time Pressure Active"
                  },
                  {
                    stage: "Stage 02",
                    title: "Cyber Treasure Hunt",
                    desc: "Navigate across 10 islands, capture the flags hidden in security challenges, and race to conquer the legendary Black Pearl.",
                    icon: Skull,
                    footer: "10 Islands · 10 Flags"
                  },
                  {
                    stage: "Stage 03",
                    title: "Tortuga Code Bingo",
                    desc: "The final showdown. Solve technical mini-puzzles to claim your grid. First crew to strike 'BINGO' wins the ultimate bounty.",
                    icon: Trophy,
                    footer: "Real-time Pattern Sync"
                  }
                ].map((round, idx) => (
                  <div key={idx} className="p-10 rounded-[2rem] bg-slate-950 border border-white/5 relative group overflow-hidden transition-all hover:border-cyan-500/50 flex flex-col h-full">
                    <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                        <round.icon size={180} />
                    </div>
                    <div className="mb-8 relative">
                        <round.icon className="text-cyan-500 mb-4" size={40} />
                        <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest font-mono">{round.stage}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase italic text-white relative">{round.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative">
                        {round.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest relative">
                        <Info size={14} /> {round.footer}
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">Join the Crew</h2>
                <p className="text-cyan-500 font-mono text-sm tracking-[0.2em] mt-2 uppercase">GSSSIETW Enlistment Portal</p>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden relative">
                <div className="bg-slate-800 p-5 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 uppercase">
                        <Lock size={12} /> Encrypted Gateway
                    </div>
                </div>
                
                <div className="p-2 md:p-6 bg-slate-950">
                    <div className="rounded-2xl overflow-hidden min-h-[800px] flex flex-col items-center">
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfCrsl1P_fM-gvaRaAU0lynS85yR6ZX67SR98Nzqonozc8Msg/viewform?embedded=true" 
                            width="100%" 
                            height="1100" 
                            frameBorder="0" 
                            marginHeight="0" 
                            marginWidth="0"
                            className="max-w-4xl invert opacity-90 brightness-110"
                            title="Registration Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                            <Skull className="text-slate-950" size={20} />
                        </div>
                        <span className="text-3xl font-black tracking-tighter text-white uppercase italic">CYBER VERSE</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                        GSSS Institute of Engineering and Technology for Women (GSSSIETW). 
                        Organized by Cyber Security Club, Dept. of CSE. 
                        Official Partner: Dell Technologies.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">Voyage Date</h4>
                        <p className="text-lg font-black text-white italic">08 May, 2026</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">Mission Clock</h4>
                        <p className="text-lg font-black text-white italic">02:00 PM - 04:00 PM</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">Location</h4>
                        <p className="text-lg font-black text-white italic">Dept. of CSE, Campus</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-mono uppercase tracking-[0.4em]">
                <span>© 2026 GSSSIETW CSE Cyber Security Club.</span>
                <div className="flex gap-8">
                    <span className="text-cyan-500/50 italic">In Association With Dell Technologies</span>
                </div>
            </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        iframe.invert { filter: invert(0.92) hue-rotate(180deg) brightness(1.2) contrast(1.1); }
      `}} />
    </div>
  );
};

export default App;
