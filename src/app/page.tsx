"use client";

import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Cpu,
  Brain,
  Database,
  Code2,
  Layers,
  Settings,
  Award,
  ChevronRight,
  Terminal,
  Zap,
  Sparkles,
  Eye,
  Workflow,
  Rocket,
  BarChart3,
  Cloud,
  X,
  FileText,
  Download
} from 'lucide-react';

// Technology Icons from react-icons
import {
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiApachekafka,
  SiApacheairflow,
  SiFastapi,
  SiDocker,
  SiGithubactions,
  SiMlflow,
  SiGrafana,
  SiPlotly,
  SiStreamlit,
  SiGit,
  SiGithub,
  SiAmazon,
  SiOpenai,
  SiHuggingface
} from 'react-icons/si';

// 1. Data Structure (Based on your CV and Prompt)
const portfolioData = {
  profile: {
    name: "Surakiat Kansa-ard",
    role: "Junior AI Engineer",
    location: "Bangkok, Thailand",
    email: "surakiat.0723@gmail.com",
    phone: "+66 93 5015696",
    profileImage: "/images/profile.jpg",
    social: {
      github: "https://github.com/SurakiatP",
      linkedin: "https://www.linkedin.com/in/surakiat-kansa-ard-171942351/"
    }
  },
  skills: [
    // Row 1: Full width
    {
      category: "Generative AI & LLMs",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      highlight: true,
      items: [
        { name: "LangChain", logo: <Brain className="w-8 h-8" />, image_url: "https://api.nuget.org/v3-flatcontainer/langchain/0.2.6/icon" },
        { name: "Hugging Face", logo: <SiHuggingface className="w-8 h-8" />, image_url: "https://raw.githubusercontent.com/pheralb/svgl/4ecf12b3f0302adb3737c0d2762044f525ecfc62/static/library/hugging_face.svg" },
        { name: "Ollama", logo: <Cpu className="w-8 h-8" />, image_url: "https://vmc.digicert.com/bd7bc96c-7afc-470b-b2f8-1e83a59d65d3.svg" },
        { name: "OpenAI", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" },
        { name: "Llama", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png" },
        { name: "Qwen", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/qwen-color.png" },
        { name: "Gemma", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemma-color.png" },
        { name: "Gemini", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/250px-Google_Gemini_icon_2025.svg.png" },
        { name: "Claude", logo: <SiOpenai className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
        { name: "DeepEval", logo: <Database className="w-8 h-8" />, image_url: "https://www.maniac.ai/images/integrations/deepeval.png" },
      ]
    },
    // Row 2: Column 1
    {
      category: "Programming",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      items: [
        { name: "Python", logo: <SiPython className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
        { name: "SQL", logo: <SiPostgresql className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
        { name: "C/C++", logo: <SiCplusplus className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png" }
      ]
    },
    // Row 2: Column 2
    {
      category: "ML/DL Frameworks",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "PyTorch", logo: <SiPytorch className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
        { name: "TensorFlow", logo: <SiTensorflow className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "scikit-learn", logo: <SiScikitlearn className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/500px-Scikit_learn_logo_small.svg.png?20180808062052" },
        { name: "pandas", logo: <SiPandas className="w-8 h-8" /> },
        { name: "numpy", logo: <SiNumpy className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" }
      ]
    },
    // Row 2: Column 3
    {
      category: "Vector Databases & Embeddings",
      icon: <Database className="w-6 h-6 text-pink-400" />,
      items: [
        { name: "FAISS", logo: <Database className="w-8 h-8" />, image_url: "https://d2r9phh2n9g4lt.cloudfront.net/website/product-images/FAISS.png" },
        { name: "Qdrant", logo: <Database className="w-8 h-8" />, image_url: "https://files.svgcdn.io/logos/qdrant-icon.png" },
        { name: "Chroma", logo: <Database className="w-8 h-8" />, image_url: "https://raw.githubusercontent.com/cncf/landscape/888d92a5e4b523f626f8c8b1e0172065cbe6b168/hosted_logos/chroma.svg" },
      ]
    },
    // Row 3: Column 1
    {
      category: "MLOps",
      icon: <Settings className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "MLflow", logo: <SiMlflow className="w-8 h-8" />, image_url: "https://github.com/mlflow-automation.png" },
        { name: "DVC", logo: <Settings className="w-8 h-8" />, image_url: "https://dvc.org/wp-content/uploads/2025/10/dvc-logo.svg" },
        { name: "Model Versioning", logo: <Layers className="w-8 h-8" /> },
        { name: "Experiment Tracking", logo: <BarChart3 className="w-8 h-8" /> }
      ]
    },
    // Row 3: Column 2
    {
      category: "Computer Vision",
      icon: <Eye className="w-6 h-6 text-indigo-400" />,
      items: [
        { name: "OpenCV", logo: <SiOpencv className="w-8 h-8" />, image_url: "https://images.icon-icons.com/2699/PNG/512/opencv_logo_icon_170887.png" },
        { name: "CLIP", logo: <Brain className="w-8 h-8" />, image_url: "https://cdn.iconscout.com/icon/free/png-256/free-openai-icon-svg-download-png-1290809.png?f=webp" },
        { name: "EasyOCR", logo: <Eye className="w-8 h-8" />, image_url: "https://cdn.prod.website-files.com/66f521f8db6e36971161a88d/6825e9e169c39c1d6b129b58_67e40fc42dbcff9ea15584c6_Capture_d_e%CC%81cran_2025-03-26_a%CC%80_13.05.25-removebg-preview.webp" },
        { name: "Image Classification", logo: <Layers className="w-8 h-8" /> }
      ]
    },
    // Row 3: Column 3
    {
      category: "Data Engineering",
      icon: <Workflow className="w-6 h-6 text-emerald-400" />,
      items: [
        { name: "ETL Pipelines", logo: <Workflow className="w-8 h-8" />, image_url: "https://cdn-icons-png.flaticon.com/512/9850/9850908.png" },
        { name: "Airflow", logo: <SiApacheairflow className="w-8 h-8" />, image_url: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/apache-airflow.webp" },
        { name: "Kafka", logo: <SiApachekafka className="w-8 h-8" /> },
        { name: "Data Cleaning", logo: <Settings className="w-8 h-8" />, image_url: "https://cdn-icons-png.flaticon.com/512/10179/10179118.png" },
        { name: "PyThaiNLP", logo: <Code2 className="w-8 h-8" />, image_url: "https://avatars.githubusercontent.com/u/32934255?v=4" }
      ]
    },
    // Row 4: Column 1
    {
      category: "Backend & Deployment",
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      items: [
        { name: "FastAPI", logo: <SiFastapi className="w-8 h-8" />, image_url: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
        { name: "Docker", logo: <SiDocker className="w-8 h-8" />, image_url: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
        { name: "REST API", logo: <Code2 className="w-8 h-8" /> },
        { name: "Github Actions", logo: <SiGithubactions className="w-8 h-8" />, image_url: "https://images.seeklogo.com/logo-png/42/2/github-actions-logo-png_seeklogo-428028.png" }
      ]
    },
    // Row 4: Column 2
    {
      category: "Visualization",
      icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
      items: [
        { name: "Streamlit", logo: <SiStreamlit className="w-8 h-8" />, image_url: "https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png" },
        { name: "Gradio", logo: <Sparkles className="w-8 h-8" />, image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gradio-color.png" },
        { name: "Matplotlib", logo: <BarChart3 className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/250px-Matplotlib_icon.svg.png" },
        { name: "Plotly", logo: <SiPlotly className="w-8 h-8" />, image_url: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F512%2Fplot_ly_logo_icon_168902.png&id=168902&pack_or_individual=pack" },
        { name: "Grafana", logo: <SiGrafana className="w-8 h-8" />, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/250px-Grafana_icon.svg.png" }
      ]
    },
    // Row 4: Column 3
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      items: [
        { name: "Git", logo: <SiGit className="w-8 h-8" />, image_url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: "GitHub", logo: <SiGithub className="w-8 h-8" />, image_url: "https://github.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Docker", logo: <SiDocker className="w-8 h-8" />, image_url: "https://cdn-icons-png.flaticon.com/512/919/919853.png" }
      ]
    }
  ],
  projects: [
    {
      title: "Multi-modal RAG Shop Assistant",
      description: "End-to-end Multi-modal RAG system enabling product search through text, voice, and image queries with CLIP embeddings and optimized retrieval pipelines.",
      image: "/images/project1.png",
      metrics: "86.7% Precision, 93.3% Recall, <1s Latency",
      tech: ["CLIP", "Qdrant", "GPT-4", "Whisper", "LangChain", "FastAPI", "Streamlit"],
      link: "https://github.com/SurakiatP/Multi-modal-RAG"
    },
    {
      title: "Multi-Stage Retrieval RAG System",
      description: "Bilingual (Thai/English) RAG system for corporate policies featuring hybrid search, cross-encoder reranking, and temporal conflict resolution.",
      image: "/images/project2.png",
      metrics: "96.7% Accuracy, 97.5% Faithfulness, <2s Response",
      tech: ["LangChain", "FAISS", "Ollama", "Groq", "DeepEval", "Typhoon2.1", "FastAPI"],
      link: "https://github.com/SurakiatP/Multi-Stage-Retrieval-RAG"
    },
    {
      title: "Uber Delivery Time Prediction MLOps",
      description: "Production MLOps pipeline for real-time delivery prediction with automated retraining, streaming inference, and monitoring using Kafka and MLflow.",
      image: "/images/project3.png",
      metrics: "60% Faster Training, <100ms Inference Latency",
      tech: ["XGBoost", "MLflow", "Airflow", "DVC", "Kafka", "Prometheus", "Grafana"],
      link: "https://github.com/SurakiatP/uber-delivery-time-prediction-mlops"
    },
    {
      title: "Cyber-RAG: Cybersecurity Knowledge Assistant",
      description: "A specialized Retrieval-Augmented Generation (RAG) system for cybersecurity documentation, providing source-grounded answers from OWASP, MITRE ATT&CK, and Thailand Web Security Standards with zero hallucination.",
      image: "/images/project4.png",
      metrics: "91.2% Faithfulness, 85% Citation Accuracy, 0% Hallucination Rate",
      tech: ["Ollama (Typhoon 2.1, Qwen 2.5)", "LangChain", "FAISS", "BM25", "FastAPI", "Docker"],
      link: "https://github.com/SurakiatP/cyber-rag-assignment"
    },
    {
      title: "Animals Detection Deep Learning",
      description: "A real-time animal detection system using YOLOv8n to identify 7 animal classes, featuring automated counting, time-series data storage in InfluxDB, and live dashboard visualization.",
      image: "/images/project5.png",
      metrics: "25-120 FPS, ~90%+ Detection Accuracy",
      tech: ["YOLOv8", "OpenCV", "InfluxDB", "Streamlit", "PyTorch", "Pandas", "Plotly"],
      link: "https://github.com/SurakiatP/animals-detection-DeepLearning"
    }
  ],
  experience: [
    {
      company: "Swift Dynamics",
      role: "IoT Solution Engineer Intern",
      period: "May 2023 - July 2023",
      description: "Developed Smart Camera Security solutions for industrial applications. Implemented real-time anomaly detection using OpenCV, reducing human errors by 75%."
    },
  ],
  certifications: [
    { name: "DataCamp Machine Learning Engineer", image: "/images/cert_ML_engineer.png" },
    { name: "DataCamp Associate Data Scientist in Python", image: "/images/cert_data_scientist.png" },
    { name: "Codecademy ML/AI Engineer Career Path", image: "/images/cert_ml_ai_engineer.png" },
    { name: "Codecademy Prompt Engineering", image: "/images/cert_prompt_engineer.png" },
    { name: "Hugging Face Fundamentals of Agents", image: "/images/cert_fundamentals of Agents.webp" },
    { name: "Hugging Face Agent Course", image: "/images/cert_hugging-face-agent-course.webp" },
    { name: "Hugging Face Fundamentals of MCP", image: "/images/cert_hugging-face-fundamentals-of-mcp.webp" },
    { name: "Hugging Face MCP for Production Automation", image: "/images/cert-hugging-face-mcp-for-production-automation.webp" },
  ]
};

// --- Sub-components ---

const TypingEffect = ({ phrases }: { phrases: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-mono">
      {phrases[index].substring(0, subIndex)}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
};

export default function Home() {
  const { profile, skills, projects, experience, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // ⚠️ EDIT HERE: Update these URLs when you change your CV file
  const resumeConfig = {
    embedUrl: "https://drive.google.com/file/d/1geyOISxVwcmw_6qosjhRGXA-mE_yAsaI/preview",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1geyOISxVwcmw_6qosjhRGXA-mE_yAsaI",
    lastUpdate: "January 2026"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#about" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
            <span>Surakiat<span className="text-cyan-400">.ai</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32 relative">

        {/* HERO SECTION */}
        <section id="about" className="scroll-mt-20 flex flex-col md:flex-row items-center gap-12 pt-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} /> Ready for Production
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m <span className="text-white">{profile.name}</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-slate-400 h-10">
              <TypingEffect phrases={["Junior AI Engineer", "Growth Mindset", "Building Generative AI", "Architecting RAG Systems", "Optimizing MLOps Pipelines"]} />
            </div>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              AI Engineer dedicated to building scalable solutions and bridging the gap between research and production. Specialized in LLMs, Computer Vision, and MLOps automation.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-slate-300">
                <Github />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-slate-300">
                <Linkedin />
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all">
                <Mail size={20} /> Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-bounce">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-slate-300">Available for Work</span>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About <span className="text-cyan-400">Me</span></h2>
            <p className="text-slate-400 italic">
              Hello! My name is <span className="font-bold text-white">{profile.name}</span> — a passionate AI Engineer from Thailand.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/50 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <Eye size={18} className="text-cyan-400" /> View Resume
              </button>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="group relative p-6 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-l-2xl"></div>
              <p className="text-slate-300 leading-relaxed pl-4">
                I specialize in <span className="font-bold text-cyan-400">Large Language Models (LLMs)</span> and <span className="font-bold text-cyan-400">RAG Systems</span>, ensuring <span className="font-bold text-purple-400">robust AI solutions</span> and <span className="font-bold text-purple-400">scalable ML pipelines</span>. I combine deep technical expertise with a <span className="font-bold text-cyan-400">problem-solving mindset</span>, focusing on bridging the gap between research and real-world deployment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500 rounded-l-2xl"></div>
              <p className="text-slate-300 leading-relaxed pl-4">
                My passion lies at the intersection of <span className="font-bold text-purple-400">Artificial Intelligence</span> and <span className="font-bold text-purple-400">Engineering Excellence</span>. I thrive on building intelligent systems that solve complex problems, from <span className="font-bold text-cyan-400">multi-modal RAG applications</span> to <span className="font-bold text-cyan-400">end-to-end MLOps pipelines</span>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl"></div>
              <p className="text-slate-300 leading-relaxed pl-4">
                I value <span className="font-bold text-emerald-400">Continuous Learning, Collaboration, Innovation, and Growth Mindset</span> above all else. These principles guide both my personal development and how I approach building AI systems that deliver meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION (Bento Box) */}
        <section id="skills" className="scroll-mt-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills & <span className="text-cyan-400">Tech Stack</span></h2>
            <p className="text-slate-400">Categorized expertise for end-to-end AI solution development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden p-6 pb-10 rounded-3xl min-h-[240px] border-4 border-white/5 bg-slate-900/50 backdrop-blur-sm flex flex-col justify-between transition-all hover:border-white/20 hover:bg-slate-900/80 ${skill.highlight ? "md:col-span-3 bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/20" : ""
                  }`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  {skill.highlight && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest border border-cyan-500/20">
                      Core Intelligence
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className={`font-bold ${skill.highlight ? "text-2xl text-white" : "text-slate-300"}`}>{skill.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item: any, i: number) => (
                      <div
                        key={i}
                        className={`group/icon relative p-2 rounded-lg transition-all duration-300 ease-out hover:scale-110 ${skill.highlight ? "bg-cyan-500/10 hover:bg-cyan-500/20" : "bg-slate-800/50 hover:bg-slate-800"}`}
                        title={item.name}
                      >
                        <div className={`transition-colors duration-300 ${skill.highlight ? "text-cyan-400" : "text-slate-400 group-hover/icon:text-slate-200"}`}>
                          {item.image_url ? (
                            <img src={item.image_url} alt={item.name} className="w-8 h-8 object-contain" />
                          ) : (
                            item.logo
                          )}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          <span className="text-[10px] px-2 py-1 bg-slate-900 border border-white/10 rounded text-slate-300">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Terminal size={120} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-20 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-purple-500">Intelligences</span></h2>
              <p className="text-slate-400">Production-grade AI systems with verified performance metrics</p>
            </div>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
              See all repositories <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-slate-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-slate-900/60 transition-all">
                <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>

                  {/* Performance Metric Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1 items-end z-10">
                    {project.metrics.split(',').map((m, i) => (
                      <div key={i} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/30 whitespace-nowrap">
                        {m.trim()}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 italic line-clamp-3">
                    &quot;{project.description}&quot;
                  </p>
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-bold transition-all">
                      View Architecture <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-20 space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Layers className="text-indigo-400" /> Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-white/5">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                    <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-cyan-400 text-sm font-semibold">{exp.company}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="scroll-mt-20 space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="text-amber-400" /> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="group p-4 bg-slate-900/50 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-amber-400/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="p-3 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-colors">
                  <Award className="text-amber-400 w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{cert.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="scroll-mt-20 pt-32 pb-8 border-t border-white/5 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Let&apos;s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">something intelligent</span></h2>
            <p className="text-slate-400">Currently open to Junior AI Engineer & MLOps roles.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2"><Mail size={16} /> {profile.email}</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> {profile.location}</div>
            <div className="flex items-center gap-2"><Phone size={16} /> {profile.phone}</div>
          </div>
          <div className="text-slate-600 text-xs font-mono pt-8">
            © {new Date().getFullYear()} Designed & Engineered by Surakiat Kansa-ard | Built with Next.js.
          </div>
        </footer>


        {/* Certification Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedCert(null)}>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedCert(null)}
                className="sticky top-4 float-right mr-4 mt-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="p-4 pt-0">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="sticky bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent">
                <p className="text-white font-bold text-center">{selectedCert.name}</p>
              </div>
            </div>
          </div>
        )}

        {/* Resume Preview Modal */}
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsResumeOpen(false)}>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-5xl h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/95">
                <div>
                  <h3 className="text-lg font-bold text-white">Resume Preview</h3>
                  <p className="text-sm text-slate-400">Last Update: {resumeConfig.lastUpdate}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={resumeConfig.downloadUrl}
                    download="Surakiat_Kansa-ard_CV.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-sm font-bold text-white transition-all"
                  >
                    <Download size={16} /> Download
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              {/* PDF Viewer */}
              <div className="flex-1 bg-white">
                <iframe
                  src={resumeConfig.embedUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
