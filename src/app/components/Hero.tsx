import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import resumePdf from "../../imports/NIDHI_RESUME.pdf";
import { useEffect, useMemo, useState } from "react";
import { stats } from "@/data/stats";

interface HeroProps {
  onViewProjects: () => void;
}

export function Hero({ onViewProjects }: HeroProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [countAnimation, setCountAnimation] = useState<number>(0);

useEffect(() => {
  const FALLBACK_VISITORS = 394;

  let active = true;

  fetch("/api/visitors")
    .then((response) => response.json())
    .then((data) => {
      if (!active) return;

      const count =
        typeof data.visitors === "number"
          ? data.visitors
          : FALLBACK_VISITORS;

      setVisitorCount(count);
    })
    .catch(() => {
      if (!active) return;

      setVisitorCount(FALLBACK_VISITORS);
    });

  return () => {
    active = false;
  };
}, []);



  useEffect(() => {
    if (visitorCount === null) return;

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = Math.min(currentTime - startTime, duration);
      const progress = elapsed / duration;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(visitorCount * easedProgress);
      setCountAnimation(currentValue);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setCountAnimation(visitorCount);
      }
    };

    requestAnimationFrame(animate);
  }, [visitorCount]);

  const statsList = useMemo(
    () => [
      { value: `${stats.projects}+`, label: "Projects" },
      { value: visitorCount === null ? "..." : countAnimation.toLocaleString(), label: "Visitors" },
      { value: `${stats.yearsExp}+`, label: "Years Exp." },
    ],
    [visitorCount, countAnimation],
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1NTM3NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono tracking-[0.3em] text-[var(--neon-cyan)] uppercase mb-4 opacity-80">
            M.Tech DSML Student | AI & ML Enthusiast
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm Nidhi
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              Dhameliya
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Machine Learning • Deep Learning • LLMs • RAG • NLP
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {statsList.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.08)]"
            >
              <div className="text-2xl md:text-3xl font-bold text-[var(--neon-cyan)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-400 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={onViewProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105"
          >
            <span className="relative z-10 text-black">View Projects</span>
          </button>
          
          <button
            className="group relative px-8 py-4 rounded-lg overflow-hidden transition-all duration-300"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => window.open(resumePdf, '_blank', 'noopener,noreferrer')}
          >
            <span className="relative z-10 text-white group-hover:text-[var(--neon-cyan)] transition-colors">
              View Resume
            </span>
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="w-8 h-8 text-[var(--neon-cyan)]" />
        </motion.div>
      </div>
    </section>
  );
}
