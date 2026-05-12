export const siteConfig = {
  name: "Nakshatra Rajput",
  title: "AI Systems Engineer",
  description: "Portfolio website of Nakshatra Rajput",
  accentColor: "#6D4C3D",
  social: {
    email: "nakshatra.rajput@outlook.com",
    linkedin: "https://linkedin.com/in/Nakshatra-Rajput",
    github: "https://github.com/naksh-atra",
  },
  aboutMe:
    "Results-driven AI Systems Engineer with production experience architecting Agentic AI systems, high-scale RAG pipelines, and real-time Voice AI. Proven track record of reducing cloud costs by 25%, accelerating research workflows by 30%, and building systems handling 200+ concurrent calls daily. Expert in Python, FastAPI, and orchestrating LLMs with vector databases (Qdrant, FAISS, Pinecone) for complex automated reasoning.",
  skills: [
    "Python",
    "FastAPI",
    "LangChain",
    "LlamaIndex",
    "PyTorch",
    "Azure",
    "AWS",
    "Docker",
    "Kubernetes",
    "Qdrant",
    "Pinecone",
    "FAISS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "REST",
    "CI/CD",
  ],
  projects: [
    {
      name: "DRIPE: Drug Repurposing Intelligence Engine",
      description:
        "Built an agentic drug repurposing platform using biomedical knowledge graphs, GNN-based link prediction, and RAG-driven reasoning, achieving 90% precision in drug-disease hypotheses.",
      link: "https://github.com/naksh-atra",
      skills: ["LangChain", "RAG", "GNN", "Knowledge Graphs"],
    },
    {
      name: "ResFit: Science-Validated Workout Engine",
      description:
        "Developed a B2B-ready REST API generating workout prescriptions validated against 2023-2025 research studies, achieving 95% relevance. Engineered smart caching with MongoDB TTL achieving 99.9% cache hit rate and <50ms latency.",
      link: "https://github.com/naksh-atra",
      skills: ["FastAPI", "MongoDB", "REST", "Redis"],
    },
    {
      name: "TranSys - Multimodal WebRTC Translator",
      description:
        "Built a low-latency translation system with streaming STT/TTS pipeline, intelligent routing, and session management, achieving 40% reduction in perceived latency.",
      link: "https://github.com/naksh-atra/TranSys",
      skills: ["WebRTC", "STT/TTS", "Python", "Real-time Systems"],
    },
  ],
  experience: [
    {
      company: "Freelance",
      title: "AI Systems Engineer (Contract)",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Achieved 95% retrieval accuracy by designing RAG pipelines using LangChain and Tavily for automated search and summarization of complex patent documents.",
        "Reduced latency by 40% through optimization of AI infrastructure using Qdrant for high-dimensional vector search and semantic knowledge indexing.",
        "Engineered modular Python services integrating LLM reasoning with external search APIs, achieving 30% reduction in research workflow time.",
      ],
    },
    {
      company: "Propeller Global Ventures",
      title: "Software Engineer (AI)",
      dateRange: "Jan 2025 - Sep 2025",
      bullets: [
        "Built real-time Voice AI agent on Azure, handling 200+ concurrent calls/day with Twilio, streaming STT/TTS, and LangChain RAG, achieving 99.9% uptime.",
        "Developed Docker/Kubernetes CI/CD pipelines, reducing deployment time by 40% and achieving zero-downtime releases.",
        "Optimized Azure infrastructure, reducing costs by 25% through performance dashboards, right-sizing, and prompt caching.",
      ],
    },
    {
      company: "Manipal University Jaipur",
      title: "Research Intern (ML & Deep Learning)",
      dateRange: "Jan 2024 - Jul 2024",
      bullets: [
        "Achieved 86% accuracy on X-ray severity classification using CNN models (VGG16, ResNet50) and transfer learning.",
        "Improved baseline performance by 18% through hyperparameter optimization.",
      ],
    },
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      degree: "BTech in Computer Science Engineering",
      dateRange: "2020 - 2024",
      achievements: [
        "Graduated with CGPA: 8.55/10",
      ],
    },
  ],
};
