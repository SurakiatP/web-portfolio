"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  ChevronDown,
  Terminal,
  Zap,
  Sparkles,
  Eye,
  Workflow,
  Rocket,
  BarChart3,
  Cloud,
  X,
  Download,
  ArrowUpRight
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
  SiOpenai,
  SiHuggingface
} from 'react-icons/si';

// Portfolio Data
const portfolioData = {
  profile: {
    name: "Surakiat Kansa-ard",
    firstName: "Surakiat",
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
  roles: ["AI Engineer!", "ML Developer!", "RAG Specialist!", "Problem Solver!"],
  skills: [
    // Row 1: Full width
    {
      category: "Generative AI & LLMs",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      highlight: true,
      items: [
        { name: "LangChain", image_url: "https://api.nuget.org/v3-flatcontainer/langchain/0.2.6/icon" },
        { name: "Hugging Face", image_url: "https://raw.githubusercontent.com/pheralb/svgl/4ecf12b3f0302adb3737c0d2762044f525ecfc62/static/library/hugging_face.svg" },
        { name: "Ollama", image_url: "https://n8n.io/nodes/ollama.svg" },
        { name: "OpenAI", image_url: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" },
        { name: "Llama", image_url: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png" },
        { name: "Qwen", image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/qwen-color.png" },
        { name: "Gemma", image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemma-color.png" },
        { name: "Gemini", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/250px-Google_Gemini_icon_2025.svg.png" },
        { name: "Claude", image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
        { name: "DeepEval", image_url: "https://www.maniac.ai/images/integrations/deepeval.png" },
      ]
    },
    // Row 2: Column 1
    {
      category: "Programming",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      items: [
        { name: "Python", image_url: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
        { name: "SQL", image_url: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
        { name: "C/C++", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png" }
      ]
    },
    // Row 2: Column 2
    {
      category: "ML/DL Frameworks",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "PyTorch", image_url: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
        { name: "TensorFlow", image_url: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "scikit-learn", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/500px-Scikit_learn_logo_small.svg.png" },
        { name: "pandas", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png" },
        { name: "numpy", image_url: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg" }
      ]
    },
    // Row 2: Column 3
    {
      category: "Vector Databases & Embeddings",
      icon: <Database className="w-6 h-6 text-pink-400" />,
      items: [
        { name: "FAISS", image_url: "https://d2r9phh2n9g4lt.cloudfront.net/website/product-images/FAISS.png" },
        { name: "Qdrant", image_url: "https://files.svgcdn.io/logos/qdrant-icon.png" },
        { name: "Chroma", image_url: "https://raw.githubusercontent.com/cncf/landscape/888d92a5e4b523f626f8c8b1e0172065cbe6b168/hosted_logos/chroma.svg" },
      ]
    },
    // Row 3: Column 1
    {
      category: "MLOps",
      icon: <Settings className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "MLflow", image_url: "https://github.com/mlflow-automation.png" },
        { name: "DVC", image_url: "https://dvc.org/wp-content/uploads/2025/10/dvc-logo.svg" },
        { name: "Model Versioning", image_url: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png" },
        { name: "Experiment Tracking", image_url: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png" }
      ]
    },
    // Row 3: Column 2
    {
      category: "Computer Vision",
      icon: <Eye className="w-6 h-6 text-indigo-400" />,
      items: [
        { name: "OpenCV", image_url: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
        { name: "CLIP", image_url: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" },
        { name: "EasyOCR", image_url: "https://cdn-icons-png.flaticon.com/512/2698/2698011.png" },
        { name: "Image Classification", image_url: "https://cdn-icons-png.flaticon.com/512/1829/1829572.png" }
      ]
    },
    // Row 3: Column 3
    {
      category: "Data Engineering",
      icon: <Workflow className="w-6 h-6 text-emerald-400" />,
      items: [
        { name: "ETL Pipelines", image_url: "https://cdn-icons-png.flaticon.com/512/9850/9850908.png" },
        { name: "Airflow", image_url: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/apache-airflow.webp" },
        { name: "Kafka", image_url: "https://cdn.prod.website-files.com/62038ffc9cd2db4558e3c7b7/623b44a1913c46041e39c836_kafka.svg" },
        { name: "Data Cleaning", image_url: "https://cdn-icons-png.flaticon.com/512/10179/10179118.png" },
        { name: "PyThaiNLP", image_url: "https://avatars.githubusercontent.com/u/32934255?v=4" }
      ]
    },
    // Row 4: Column 1
    {
      category: "Backend & Deployment",
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      items: [
        { name: "FastAPI", image_url: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
        { name: "Docker", image_url: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
        { name: "REST API", image_url: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png" },
        { name: "GitHub Actions", image_url: "https://images.seeklogo.com/logo-png/42/2/github-actions-logo-png_seeklogo-428028.png" }
      ]
    },
    // Row 4: Column 2
    {
      category: "Visualization",
      icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
      items: [
        { name: "Streamlit", image_url: "https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png" },
        { name: "Gradio", image_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gradio-color.png" },
        { name: "Matplotlib", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/250px-Matplotlib_icon.svg.png" },
        { name: "Plotly", image_url: "https://images.icon-icons.com/2699/PNG/512/plot_ly_logo_icon_168902.png" },
        { name: "Grafana", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/250px-Grafana_icon.svg.png" }
      ]
    },
    // Row 4: Column 3
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      items: [
        { name: "Git", image_url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: "GitHub", image_url: "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" },
        { name: "Docker", image_url: "https://cdn-icons-png.flaticon.com/512/919/919853.png" }
      ]
    }
  ],
  projects: [
    {
      title: "Multi-modal RAG Shop Assistant",
      description: "End-to-end Multi-modal RAG system enabling product search through text, voice, and image queries with CLIP embeddings.",
      image: "/images/project1.png",
      metrics: ["86.7% Precision", "93.3% Recall", "<1s Latency"],
      tech: ["CLIP", "Qdrant", "GPT-4", "Whisper", "LangChain", "FastAPI"],
      link: "https://github.com/SurakiatP/Multi-modal-RAG"
    },
    {
      title: "Multi-Stage Retrieval RAG System",
      description: "Bilingual (Thai/English) RAG system for corporate policies featuring hybrid search and cross-encoder reranking.",
      image: "/images/project2.png",
      metrics: ["96.7% Accuracy", "97.5% Faithfulness"],
      tech: ["LangChain", "FAISS", "Ollama", "Groq", "DeepEval"],
      link: "https://github.com/SurakiatP/Multi-Stage-Retrieval-RAG"
    },
    {
      title: "Uber Delivery Time Prediction MLOps",
      description: "End-to-End MLOps pipeline for real-time delivery prediction with automated retraining and streaming inference.",
      image: "/images/project3.png",
      metrics: ["60% Faster Training", "<100ms Latency"],
      tech: ["XGBoost", "MLflow", "Airflow", "DVC", "Kafka"],
      link: "https://github.com/SurakiatP/uber-delivery-time-prediction-mlops"
    },
    {
      title: "Cyber-RAG: Cybersecurity Assistant",
      description: "Specialized RAG system for cybersecurity documentation with zero hallucination from OWASP and MITRE ATT&CK.",
      image: "/images/project4.png",
      metrics: ["91.2% Faithfulness", "0% Hallucination"],
      tech: ["Ollama", "LangChain", "FAISS", "BM25", "FastAPI"],
      link: "https://github.com/SurakiatP/cyber-rag-assignment"
    },
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

// Typewriter Component
const TypewriterText = ({ words }: { words: string[] }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words]);

  return (
    <span className="text-gradient">
      {currentText}
      <span className="typewriter-cursor text-[#40E0D0]">|</span>
    </span>
  );
};

// Scroll Reveal Component
const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Marquee Component
const Marquee = ({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) => (
  <div className="marquee-container py-4">
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
      {children}
      {children}
    </div>
  </div>
);

export default function Home() {
  const { profile, roles, skills, projects, experience, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const resumeConfig = {
    embedUrl: "https://drive.google.com/file/d/1geyOISxVwcmw_6qosjhRGXA-mE_yAsaI/preview",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1geyOISxVwcmw_6qosjhRGXA-mE_yAsaI",
    lastUpdate: "January 2026"
  };

  const navItems = [
    { id: "about", label: "Home" },
    { id: "aboutme", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
  ];

  // Scroll-based active section detection
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white noise-overlay">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient" />

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Avatar + Name Pill */}
          <div className="navbar-float flex items-center gap-3 pr-4">
            <div className="relative">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/10"
              />
            </div>
            <span className="text-sm font-medium text-white/90">{profile.name}</span>
            <div className="status-online" />
          </div>

          {/* Right: Nav Links Pill */}
          <div className="navbar-float hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeSection === item.id
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </a>
            ))}
            {/* CTA Button */}
            <a href="#contact" className="btn-accent ml-2">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs font-bold tracking-wide uppercase font-space">Available for work</span>
          </div>

          <p className="text-white/60 text-xl md:text-2xl mb-4 font-light">Hey, I&apos;m</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <TypewriterText words={roles} />
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            AI Engineer with expertise in LLMs, RAG Systems, and MLOps.
            I build intelligent systems that bridge research to real-world application.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Eye size={18} className="text-[#40E0D0]" /> View Resume
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="scroll-indicator" />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="aboutme" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Marquee Background */}
          <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
            <Marquee>
              <span className="text-[200px] font-black text-white whitespace-nowrap">
                ABOUT ME • ABOUT ME • ABOUT ME •
              </span>
            </Marquee>
          </div>

          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-white/60 text-lg italic">
                Hello! My name is <span className="text-white font-semibold not-italic">{profile.name}</span> — a passionate AI Engineer from Thailand.
              </p>

              {/* View Resume Button */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Eye size={18} className="text-[#40E0D0]" /> View Resume
              </button>
            </div>
          </RevealOnScroll>

          {/* About Cards with Gradient Border */}
          <div className="space-y-6 mt-16">
            <RevealOnScroll delay={0.1}>
              <div className="relative pl-4">
                {/* Gradient Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#40E0D0] to-[#06b6d4]" />
                <div className="glass-card p-6">
                  <p className="text-white/80 leading-relaxed">
                    I specialize in <span className="text-[#40E0D0] font-medium">Large Language Models (LLMs)</span> and <span className="text-[#40E0D0] font-medium">RAG Systems</span>, ensuring <span className="underline decoration-white/30 underline-offset-4">robust AI solutions</span> and <span className="underline decoration-white/30 underline-offset-4">scalable ML pipelines</span>. I combine deep technical expertise with a <span className="text-[#40E0D0] font-medium">problem-solving mindset</span>, focusing on bridging the gap between research and real-world deployment.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="relative pl-4">
                {/* Gradient Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6]" />
                <div className="glass-card p-6">
                  <p className="text-white/80 leading-relaxed">
                    My passion lies at the intersection of <span className="text-[#40E0D0] font-medium">Artificial Intelligence</span> and <span className="text-[#40E0D0] font-medium">Engineering Excellence</span>. I thrive on building intelligent systems that solve complex problems, from <span className="underline decoration-white/30 underline-offset-4">multi-modal RAG applications</span> to <span className="underline decoration-white/30 underline-offset-4">end-to-end MLOps pipelines</span>.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="relative pl-4">
                {/* Gradient Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#8b5cf6] to-[#ec4899]" />
                <div className="glass-card p-6">
                  <p className="text-white/80 leading-relaxed">
                    I value <span className="text-[#40E0D0] font-medium">Continuous Learning, Collaboration, Innovation, and Growth Mindset</span> above all else. These principles guide both my personal development and how I approach building AI systems that deliver meaningful impact.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Marquee Background */}
          <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
            <Marquee>
              <span className="text-[200px] font-black text-white whitespace-nowrap">
                SKILLS • EXPERTISE • TECH •
              </span>
            </Marquee>
          </div>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Technical <span className="text-gradient">Skills</span>
              </h2>
              <p className="text-white/50">
                Technologies I use to build AI solutions
              </p>
            </div>
          </RevealOnScroll>

          {/* Skills Grid */}
          <div className="space-y-6">
            {/* Generative AI & LLMs - Full Width */}
            <RevealOnScroll>
              <div className="glass-card p-6 relative overflow-hidden">
                {/* Decorative Chevron */}
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 text-white/5" strokeWidth={3} />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#8b5cf6]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-semibold uppercase tracking-wider">
                    Core Intelligence
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-6">{skills[0].category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills[0].items.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="group relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      <img src={item.image_url} alt={item.name} className="w-7 h-7 object-contain" />
                      {/* Tooltip */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Row 2: Programming, ML/DL Frameworks, Vector Databases */}
            <div className="grid md:grid-cols-3 gap-6">
              {skills.slice(1, 4).map((skill, idx) => (
                <RevealOnScroll key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 relative overflow-hidden h-full">
                    {/* Decorative Chevron */}
                    <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 text-white/5" strokeWidth={3} />

                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                          {item.image_url ? (
                            <img src={item.image_url} alt={item.name} className="w-6 h-6 object-contain" />
                          ) : (
                            <span className="text-xs text-white/50">{item.name.charAt(0)}</span>
                          )}
                          {/* Tooltip */}
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Row 3: MLOps, Computer Vision, Data Engineering */}
            <div className="grid md:grid-cols-3 gap-6">
              {skills.slice(4, 7).map((skill, idx) => (
                <RevealOnScroll key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 relative overflow-hidden h-full">
                    {/* Decorative Chevron */}
                    <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 text-white/5" strokeWidth={3} />

                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                          {item.image_url ? (
                            <img src={item.image_url} alt={item.name} className="w-6 h-6 object-contain" />
                          ) : (
                            <span className="text-xs text-white/50">{item.name.charAt(0)}</span>
                          )}
                          {/* Tooltip */}
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Row 4: Backend & Deployment, Visualization, Cloud & DevOps */}
            <div className="grid md:grid-cols-3 gap-6">
              {skills.slice(7, 10).map((skill, idx) => (
                <RevealOnScroll key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 relative overflow-hidden h-full">
                    {/* Decorative Chevron */}
                    <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 text-white/5" strokeWidth={3} />

                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item: any, i: number) => (
                        <div
                          key={i}
                          className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                          {item.image_url ? (
                            <img src={item.image_url} alt={item.name} className="w-6 h-6 object-contain" />
                          ) : (
                            <span className="text-xs text-white/50">{item.name.charAt(0)}</span>
                          )}
                          {/* Tooltip */}
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Marquee Background */}
          <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
            <Marquee reverse>
              <span className="text-[200px] font-black text-white whitespace-nowrap">
                PROJECTS • WORK • INNOVATION •
              </span>
            </Marquee>
          </div>
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="text-white/50">
                  High-quality AI systems with verified metrics
                </p>
              </div>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#40E0D0] font-medium hover:underline"
              >
                View all projects
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.1}>
                <div className="project-card group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                    {/* Metrics */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {project.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md text-[#40E0D0] text-xs font-medium border border-[#40E0D0]/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#40E0D0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#40E0D0] text-sm font-medium hover:underline"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Marquee Background */}
          <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
            <Marquee>
              <span className="text-[200px] font-black text-white whitespace-nowrap">
                EXPERIENCE • CAREER • JOURNEY •
              </span>
            </Marquee>
          </div>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Work <span className="text-gradient">Experience</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <RevealOnScroll key={idx} delay={0.1}>
                <div className="relative pl-10 md:pl-16">
                  {/* Timeline */}
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <div className="timeline-dot" />
                    <div className="w-0.5 h-full bg-white/10 mt-4" />
                  </div>

                  <div className="glass-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-[#40E0D0] font-medium">{exp.company}</p>
                      </div>
                      <span className="text-white/40 text-sm font-mono">{exp.period}</span>
                    </div>
                    <p className="text-white/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Marquee Background */}
          <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
            <Marquee reverse>
              <span className="text-[200px] font-black text-white whitespace-nowrap">
                CERTIFICATIONS • AWARDS • LEARNING •
              </span>
            </Marquee>
          </div>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Certifications</span>
              </h2>
              <p className="text-white/50">Professional credentials and achievements</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="glass-card p-5 cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors line-clamp-2 pr-8">
                      {cert.name}
                    </span>

                    {/* Hover Eye Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <Eye className="w-5 h-5 text-[#40E0D0]" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s build something <span className="text-gradient">intelligent</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Currently open to Junior AI Engineer & MLOps roles
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-12">
              <div className="status-online" />
              <span className="text-white/70 text-sm">Available for work</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm mb-12">
              <div className="flex items-center gap-2">
                <Mail size={16} /> {profile.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> {profile.phone}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#40E0D0] hover:bg-[#40E0D0]/10 hover:border-[#40E0D0]/30 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </RevealOnScroll>

          <div className="text-white/30 text-xs font-mono mt-16">
            © {new Date().getFullYear()} {profile.name} • Built with Next.js
          </div>
        </div>
      </footer>

      {/* Certification Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-[#111] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="sticky top-4 float-right mr-4 mt-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
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
            <div className="sticky bottom-0 p-4 bg-gradient-to-t from-[#111] via-[#111]/95 to-transparent">
              <p className="text-white font-bold text-center">{selectedCert.name}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Resume Modal */}
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-[#111] border border-white/10 rounded-3xl w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold">Resume</h3>
                <p className="text-sm text-white/50">Last Update: {resumeConfig.lastUpdate}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={resumeConfig.downloadUrl}
                  download
                  className="btn-accent inline-flex items-center gap-2 text-sm"
                >
                  <Download size={16} /> Download
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-white">
              <iframe
                src={resumeConfig.embedUrl}
                className="w-full h-full"
                allow="autoplay"
                title="Resume"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
