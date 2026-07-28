import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { SiMedium } from "react-icons/si";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nidhidhameliya2004@gmail.com",
    href: "mailto:nidhidhameliya2004@gmail.com",
    color: "var(--neon-cyan)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nidhi-dhameliya",
    href: "https://linkedin.com/in/nidhi-dhameliya-866bb7270",
    color: "var(--neon-blue)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nidhidhameliya",
    href: "https://github.com/nidhidhameliya",
    color: "var(--neon-purple)",
  },
  {
    icon: SiMedium,
    label: "Medium",
    value: "nidhidhameliya2004.medium.com",
    href: "https://nidhidhameliya2004.medium.com/",
    color: "#00AB6C",
  },
];

export function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-400 mb-8">
            Interested in building intelligent systems that make an impact?
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: `0 0 30px ${method.color}30`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${method.color}15`,
                    border: `1px solid ${method.color}30`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: method.color }}
                  />
                </div>

                <h3 className="text-center mb-2">{method.label}</h3>

                <p
                  className="text-sm text-center font-mono break-all transition-colors duration-300"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() =>
              (window.location.href =
                "mailto:nidhidhameliya2004@gmail.com")
            }
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] hover:scale-105"
          >
            <span className="text-black font-medium">Get In Touch</span>
            <Send className="w-5 h-5 text-black transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="max-w-7xl mx-auto mt-24 pt-12 border-t"
        style={{ borderColor: "var(--glass-border)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2025 Nidhi Dhameliya. Built with React & Motion.</p>

          <p className="font-mono text-center">
            Specialized in{" "}
            <span className="text-[var(--neon-cyan)]">Agentic AI</span>
            {" • "}
            <span className="text-[var(--neon-blue)]">RAG</span>
            {" • "}
            <span className="text-[var(--neon-purple)]">Production ML</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}