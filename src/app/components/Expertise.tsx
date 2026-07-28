import { motion } from "motion/react";
import {
  Brain,
  Database,
  BarChart2,
  Search,
  Eye,
  Code2
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "LLMs & RAG Systems",
    description: "End-to-end RAG pipelines with hybrid retrieval (BM25 + vector search), streaming LLM responses, and source-cited answers using LangChain & Groq",
    color: "var(--neon-cyan)",
  },
  {
    icon: Database,
    title: "Machine Learning & Deep Learning",
    description: "Building and benchmarking ML/DL models with TensorFlow, PyTorch, and Scikit-learn for classification, forecasting, and pattern recognition",
    color: "var(--neon-blue)",
  },
  {
    icon: Search,
    title: "NLP & Text Analytics",
    description: "Sentiment analysis, topic modeling (LDA), text embeddings, VADER, and ARIMA-based trend forecasting on social and domain-specific data",
    color: "var(--neon-purple)",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Signal and image classification using ResNet50, EfficientNet, and Vision Transformers with Grad-CAM explainability and transfer learning",
    color: "var(--neon-cyan)",
  },
  {
    icon: BarChart2,
    title: "Data Analytics & Visualization",
    description: "Interactive dashboards in Power BI & Tableau, feature engineering, time series forecasting, and ETL with Pandas, NumPy, and Power Query",
    color: "var(--neon-blue)",
  },
  {
    icon: Code2,
    title: "Full-Stack AI Applications",
    description: "Building AI-powered web apps with React, Next.js, FastAPI, and Supabase — from authentication to streaming backends and interactive UIs",
    color: "var(--neon-purple)",
  },
];

export function Expertise() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">What I Do</h2>
          <p className="text-gray-400 text-lg">
           Exploring AI, LLMs, Data Analytics & Machine Learning through projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105"
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
                  boxShadow: `0 0 30px ${area.color}33`,
                }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${area.color}15`,
                    border: `1px solid ${area.color}30`,
                  }}
                >
                  <Icon 
                    className="w-6 h-6 transition-all duration-300" 
                    style={{ color: area.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-2 group-hover:text-[var(--neon-cyan)] transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${area.color}10, transparent 70%)`,
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
