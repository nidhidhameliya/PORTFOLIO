import { motion } from "motion/react";
import { Award, Briefcase, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "8.89",
    label: "B.E. CGPA",
    description: "Computer Engineering, GEC Bhavnagar",
    color: "var(--neon-cyan)",
  },
  {
    icon: TrendingUp,
    value: "8.59",
    label: "M.Tech CGPA",
    description: "Data Science & ML, Rashtriya Raksha University",
    color: "var(--neon-blue)",
  },
  {
    icon: Briefcase,
    value: "6+",
    label: "Projects Built",
    description: "From RAG systems to computer vision",
    color: "var(--neon-purple)",
  },
  {
    icon: Award,
    value: "6+",
    label: "Certifications",
    description: "IBM, Kaggle, Simplilearn, Udemy",
    color: "var(--neon-cyan)",
  },
];

export function Credibility() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Track Record</h2>
          <p className="text-gray-400 text-lg">
            Proven expertise in delivering AI solutions at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="group relative p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(10px)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: `0 0 40px ${metric.color}30`,
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: `${metric.color}15`,
                    border: `1px solid ${metric.color}30`,
                  }}
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: metric.color }}
                  />
                </div>

                {/* Value */}
                <motion.div
                  className="text-5xl mb-2 bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${metric.color}, var(--neon-blue))`,
                  }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg mb-2">{metric.label}</h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>

                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${metric.color}10, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
