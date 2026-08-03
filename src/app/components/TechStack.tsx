import { motion } from "motion/react";

const techStack = {
  "ML / DL Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "Transformers",
  ],
  "NLP & LLMs": [
    "LangChain",
    "OpenAI API",
    "Groq",
    "RAG",
    "Text Embeddings",
    "Whisper",
  ],
  "Computer Vision": [
    "YOLOv8",
    "OpenCV",
    "ResNet50",
    "EfficientNet",
    "ViT",
    "Grad-CAM",
  ],
  "Frontend & Backend": [
    "React.js",
    "Next.js",
    "FastAPI",
    "Node.js",
    "REST APIs",
    "WebAssembly",
  ],
  "Databases & Vector Stores": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "ChromaDB",
    "SQLite",
    "Supabase",
  ],
  "Data & Deployment": [
    "Pandas",
    "NumPy",
    "Power BI",
    "Tableau",
    "Docker",
    "Streamlit",
  ],
};

const categoryColors: Record<string, string> = {
  "ML / DL Frameworks": "var(--neon-cyan)",
  "NLP & LLMs": "var(--neon-blue)",
  "Computer Vision": "var(--neon-purple)",
  "Frontend & Backend": "var(--neon-cyan)",
  "Databases & Vector Stores": "var(--neon-blue)",
  "Data & Deployment": "var(--neon-purple)",
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies for building scalable AI systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="mb-4">
                <h3 
                  className="text-xl mb-2"
                  style={{ color: categoryColors[category] }}
                >
                  {category}
                </h3>
                <div 
                  className="h-0.5 w-16 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                />
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg font-mono transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: `${categoryColors[category]}15`,
                      border: `1px solid ${categoryColors[category]}30`,
                      color: 'var(--foreground)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    whileHover={{
                      backgroundColor: `${categoryColors[category]}25`,
                      borderColor: `${categoryColors[category]}50`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
