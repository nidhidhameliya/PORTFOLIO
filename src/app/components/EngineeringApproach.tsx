import { motion } from "motion/react";
import { 
  Lightbulb, 
  Layers, 
  Boxes, 
  CheckCircle2, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Problem Understanding",
    description: "Deep analysis of requirements, constraints, and success metrics",
    number: "01",
  },
  {
    icon: Layers,
    title: "Retrieval & Reasoning Design",
    description: "Architecting optimal data flow, embeddings, and context strategies",
    number: "02",
  },
  {
    icon: Boxes,
    title: "Agent & Pipeline Building",
    description: "Implementing robust multi-agent systems with tool integration",
    number: "03",
  },
  {
    icon: CheckCircle2,
    title: "Evaluation & Guardrails",
    description: "Rigorous testing, hallucination control, and safety measures",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Deployment & Monitoring",
    description: "Production-ready systems with observability and auto-scaling",
    number: "05",
  },
];

export function EngineeringApproach() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
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
          <h2 className="text-4xl md:text-5xl mb-4">Engineering Approach</h2>
          <p className="text-gray-400 text-lg">
            Systematic methodology for building production AI systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
            style={{
              background: 'linear-gradient(to right, var(--neon-cyan), var(--neon-blue), var(--neon-purple))',
              opacity: 0.3,
            }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Card */}
                  <div 
                    className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 group"
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Number badge */}
                    <div 
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-mono text-xl backdrop-blur-sm"
                      style={{
                        background: 'var(--glass-bg)',
                        border: '2px solid var(--neon-cyan)',
                        color: 'var(--neon-cyan)',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 102, 255, 0.1))',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                      }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: 'var(--neon-cyan)' }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg mb-2 text-center group-hover:text-[var(--neon-cyan)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15), transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Arrow connector for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div 
                        className="w-0.5 h-8"
                        style={{
                          background: 'linear-gradient(to bottom, var(--neon-cyan), var(--neon-blue))',
                          opacity: 0.5,
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
