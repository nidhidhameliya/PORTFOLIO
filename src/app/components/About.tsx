import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "@/imports/nidhi(2).jpeg";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden group"
              style={{
                border: '2px solid var(--glass-border)',
              }}
            >
              <ImageWithFallback
                src={profilePhoto}
                alt="Nidhi Dhameliya"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))',
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm <span className="text-[var(--neon-cyan)]">Nidhi Dhameliya</span>, an AI/ML enthusiast currently pursuing my <span className="text-[var(--neon-cyan)]">M.Tech in Data Science and Machine Learning</span> at Rashtriya Raksha University. I hold a B.E. in Computer Engineering from GEC Bhavnagar with a CGPA of 8.89.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I specialize in <span className="text-[var(--neon-blue)]">Machine Learning</span>, <span className="text-[var(--neon-blue)]">Deep Learning</span>, <span className="text-[var(--neon-blue)]">LLMs</span>, and <span className="text-[var(--neon-blue)]">RAG systems</span>, with hands-on experience building end-to-end AI pipelines. I've interned at INFOLABZ IT Services and Datawind Digital Services, working on ML model integration, time series forecasting, and data analytics.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate about turning cutting-edge AI research into <span className="text-[var(--neon-purple)]">real-world solutions</span> — from RAG platforms and climate forecasting systems to RF signal classifiers.
              </p>
              <div className="flex flex-wrap gap-3">
                {["M.Tech @ RRU (CGPA 8.59)", "B.E. @ GEC Bhavnagar (CGPA 8.89)", "Python • PyTorch • TensorFlow", "LangChain • FastAPI • React"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full"
                    style={{
                      background: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      color: 'var(--neon-cyan)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
