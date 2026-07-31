import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Research Assistant",
    problem:
      "End-to-end RAG platform supporting PDF ingestion, GitHub repository indexing, hybrid retrieval, and source-grounded AI responses.",
    stack: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "Groq", "BM25"],
    impact:
      "Implemented hybrid retrieval (ChromaDB + BM25 + RRF + MMR) with streaming responses.",
    gradient: "from-cyan-400 to-blue-500",
    github: "https://github.com/nidhidhameliya",
    demo: "https://frontend-ten-azure-cfwsepkwdl.vercel.app/auth/login",
  },

  {
    title: "DataDesk – SQL Practice Platform",
    problem:
      "Interactive SQL learning platform featuring WebAssembly SQLite, Monaco Editor, AI-powered feedback, and execution-plan visualization.",
    stack: ["React", "SQLite", "Supabase", "Groq", "PostgreSQL"],
    impact:
      "Integrated Groq LLM APIs for SQL explanations and interview question generation.",
    gradient: "from-blue-500 to-purple-500",
    github: "https://github.com/nidhidhameliya/DataDesk",
    demo: "https://data-desk-pt7h9odve-nidhidhameliyas-projects.vercel.app/",
  },
  {
  title: "Deepfake Detective – AI Image Detection System",
  problem:
    "AI-powered deepfake and AI-generated image detection platform featuring binary classification, generator attribution, Grad-CAM explainability, and real-time analytics.",
  stack: [
    "PyTorch",
    "Streamlit",
    "ResNet50",
    "Grad-CAM",
    "Hugging Face Hub"
  ],
  impact:
    "Built a dual-stage AI pipeline that detects AI-generated images, identifies the likely source model from 25+ generators, and provides visual explanations using Grad-CAM with automatic model loading from Hugging Face.",
  gradient: "from-red-500 to-orange-500",
  github: "https://github.com/nidhidhameliya/Deep-Fake-Detection",
  demo: "https://deep-fake-detection-system.streamlit.app/",
},

  {
    title: "Climate Forecasting System",
    problem:
      "Deep learning pipeline for next-day temperature prediction using ERA5 climate reanalysis data.",
    stack: [
      "PyTorch",
      "ConvLSTM",
      "CNN-LSTM",
      "Transformer",
      "Streamlit",
    ],
    impact:
      "Compared three forecasting architectures with interactive deployment.",
    gradient: "from-purple-500 to-cyan-400",
    github: "https://github.com/nidhidhameliya",
    demo:
      "https://climate-forecasting-9mfng65j47sierrx5jm6pe.streamlit.app/",
  },

  {
    title: "RFInsight",
    problem:
      "Vision-based RF signal classification using spectrogram images and explainable AI techniques.",
    stack: [
      "Python",
      "PyTorch",
      "ResNet50",
      "EfficientNet",
      "Grad-CAM",
    ],
    impact:
      "Built an interpretable deep learning pipeline for RF signal recognition.",
    gradient: "from-cyan-400 to-purple-500",
    github: "https://github.com/nidhidhameliya/RFInsight",
  },

  {
    title: "MLOps Learning Journey",
    problem:
      "Production-focused repository covering the complete MLOps lifecycle from MLFlow and DVC to Docker, Airflow, CI/CD, AWS, and monitoring.",
    stack: [
      "Python",
      "MLFlow",
      "DVC",
      "Docker",
      "Airflow",
      "GitHub Actions",
      "AWS",
    ],
    impact:
      "Hands-on implementation of production ML workflows and deployment practices.",
    gradient: "from-green-400 to-cyan-500",
    github: "https://github.com/nidhidhameliya/MLOPS-learning",
  },

  {
    title: "Hospitality Analytics Dashboard",
    problem:
      "Power BI dashboard analyzing hotel bookings, occupancy, customer behavior, and revenue trends.",
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    impact:
      "Delivered business insights through interactive visual analytics.",
    gradient: "from-orange-400 to-pink-500",
    github:
      "https://github.com/nidhidhameliya/Hospitality_Domain_PowrBi-Dashboard",
  },
  {
  title: "Real-Time Aqua Detection",
  problem:
    "YOLOv8-based underwater object detection system capable of detecting aquatic objects from images, videos, and live webcam streams through an interactive Streamlit application.",
  stack: ["YOLOv8", "PyTorch", "OpenCV", "Streamlit"],
  impact:
    "Real-time detection across 24 underwater object classes with GPU acceleration and configurable confidence thresholds.",
  gradient: "from-emerald-400 to-cyan-500",
  github: "https://github.com/nidhidhameliya/aqua-detection",
},

{
  title: "LLM Engineering Roadmap",
  problem:
    "Production-focused roadmap covering Large Language Models, RAG, AI Agents, LLMOps, fine-tuning, FastAPI, Docker, Kubernetes, and modern AI system design.",
  stack: [
    "Python",
    "LangGraph",
    "FastAPI",
    "Docker",
    "RAG",
    "LLMOps",
  ],
  impact:
    "Comprehensive learning repository featuring production-grade AI engineering concepts, interview preparation, and hands-on capstone projects.",
  gradient: "from-indigo-500 to-violet-500",
  github: "https://github.com/nidhidhameliya/LLM-Roadmap",
},

{
  title: "Mental Health Trends Analysis",
  problem:
    "Data analytics platform that analyzes social media posts using NLP techniques to identify sentiment trends, recurring topics, and mental health patterns.",
  stack: [
    "Python",
    "NLP",
    "LDA",
    "Power BI",
    "Pandas",
    "Scikit-learn",
  ],
  impact:
    "Integrated sentiment analysis, topic modeling, forecasting, and interactive Power BI dashboards for actionable insights.",
  gradient: "from-pink-500 to-rose-500",
  github: "https://github.com/nidhidhameliya/X-analysis",
},
{
  title: "TCS Stock Market Dashboard",
  problem:
    "Interactive Power BI dashboard analyzing TCS stock performance through daily, monthly, quarterly, and yearly market trends.",
  stack: ["Power BI", "DAX", "Power Query", "Excel"],
  impact:
    "Built interactive visualizations to analyze stock price movements, volatility, and long-term market trends for data-driven decision making.",
  gradient: "from-blue-500 to-cyan-500",
  github: "https://github.com/nidhidhameliya/TCS_Powerbi_Dashboard",
},

{
  title: "House Price Prediction",
  problem:
    "Machine learning application that predicts house prices using property characteristics such as location, area, bedrooms, bathrooms, and other housing features.",
  stack: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "Matplotlib",
    "Streamlit",
  ],
  impact:
    "Developed and evaluated multiple regression models including Random Forest, Linear Regression, and Gradient Boosting for accurate price prediction.",
  gradient: "from-amber-500 to-orange-500",
  github: "https://github.com/nidhidhameliya/House-price-prediction",
}
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400">
            AI, Machine Learning, MLOps, and Data Engineering projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-2xl p-8 relative hover:scale-[1.02] transition-all duration-300"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-20 h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-5`}
              />

              <h3 className="text-2xl mb-4">{project.title}</h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.problem}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: "rgba(0,240,255,.08)",
                      border: "1px solid rgba(0,240,255,.25)",
                      color: "var(--neon-cyan)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="rounded-lg p-4 mb-6"
                style={{
                  background: "rgba(168,85,247,.06)",
                  border: "1px solid rgba(168,85,247,.25)",
                }}
              >
                <span className="text-[var(--neon-purple)] font-semibold">
                  Impact:
                </span>
                <p className="text-sm text-gray-300 mt-2">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <Github size={18} />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-105 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(0,240,255,.08), transparent 55%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}