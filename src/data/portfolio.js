export const profile = {
  name: "Aditya Raut",
  email: "adityaanilraut@gmail.com",
  location: "San Jose, California",
  github: "https://github.com/adityaanilraut",
  linkedin: "https://www.linkedin.com/in/adityaanilraut",
  resume: "/Aditya_Anil_Raut_resume.pdf",
};

export const projects = [
  {
    name: "CoderAI",
    repo: "CoderAI",
    category: "AI agents",
    type: "Flagship project",
    title: "An engineering teammate in your terminal.",
    description:
      "An open-source coding agent that inspects repositories, coordinates agents, edits code, and verifies changes. Built around bounded execution, explicit permissions, and recoverable sessions.",
    stack: ["Python", "MCP", "Multi-agent orchestration", "Native sandboxing"],
    challenge:
      "An autonomous agent needs more than a model call: it needs precise edits, controlled execution, and a way to recover when something goes wrong.",
    approach:
      "Built a session runtime with snippet-anchored editing, context compaction, scoped tool permissions, turn checkpoints, and background agent teams. Integrated MCP, ACP, and a Python SDK.",
    evidence:
      "Published runtime architecture, verification contracts, and a code-review evaluation report covering 50 pull requests. The report records 58.2% precision and 6.63s average review latency for the evaluated configuration.",
    source:
      "https://github.com/adityaanilraut/CoderAI/blob/main/docs/benchmarks.md",
    sourceLabel: "Read the evaluation report",
  },
  {
    name: "Embedding & retrieval pipeline",
    repo: "llm-embedding-pipeline",
    category: "ML infrastructure",
    type: "Data infrastructure",
    visual: "pipeline",
    description:
      "Distributed document ingestion and embedding with incremental updates and hybrid search. The infrastructure underneath a useful RAG system.",
    stack: ["Ray", "Airflow", "FAISS / Qdrant", "FastAPI"],
    challenge:
      "Re-embedding an entire corpus wastes compute, while dense-only search can miss exact terms.",
    approach:
      "Used file and chunk hashes to reuse unchanged embeddings, tombstoned deleted documents, and fused BM25 with dense retrieval using Reciprocal Rank Fusion. Added pluggable vector stores and Parquet staging.",
    evidence:
      "Includes a Docker Compose stack, incremental-update checks, retrieval tests, and an index benchmark script.",
    source:
      "https://github.com/adityaanilraut/llm-embedding-pipeline#incremental-updates",
    sourceLabel: "Inspect the pipeline",
  },
  {
    name: "TurboQuant",
    repo: "TurboQuant-KV-Cache-Quantization",
    category: "ML infrastructure",
    type: "Inference research",
    visual: "quant",
    description:
      "A benchmark suite studying the trade-offs of low-bit KV quantization: reconstruction, attention fidelity, logit drift, and encode/decode overhead.",
    stack: ["PyTorch", "Transformers", "CUDA", "Quantization"],
    challenge:
      "Smaller representations are useful only when quality and compute overhead are measured alongside memory.",
    approach:
      "Compared low-bit vector reconstruction and attention fidelity, patched real-model attention to measure simulation-path logit drift, and derived analytical cache storage estimates.",
    evidence:
      "Six benchmark sections with figures and explicit measurement boundaries. Memory savings are analytical estimates; decode results measure simulated quantize/dequantize overhead, not a deployed compressed cache.",
    source:
      "https://github.com/adityaanilraut/TurboQuant-KV-Cache-Quantization#limitations",
    sourceLabel: "Explore the benchmarks",
  },
  {
    name: "CodeAgentBench",
    repo: "code-agent-bench",
    category: "AI agents",
    type: "Agent evaluation",
    visual: "bench",
    description:
      "A comparative evaluation harness for coding agents, with task verification, cache accounting, token costs, and decomposed latency.",
    stack: ["Python", "Telemetry", "Isolated worktrees", "Evaluation"],
    challenge:
      "A task success rate alone hides regressions, cost, and time spent waiting on models versus tools.",
    approach:
      "Built runners for CoderAI, Claude Code, OpenCode, and Kimi, with isolated environments, fail-to-pass and pass-to-pass verification, and structured JSON/CSV/HTML reports.",
    evidence:
      "The documented 10-task run combines five SWE-bench Verified tasks and five local tasks. Results are scoped to that sample and model configuration, rather than a full benchmark leaderboard.",
    source:
      "https://github.com/adityaanilraut/code-agent-bench#aggregate-benchmark-results",
    sourceLabel: "Read the methodology",
  },
  {
    name: "AI Context Router",
    repo: "AI-Model-Context-Routing",
    category: "AI agents",
    type: "Model orchestration",
    visual: "router",
    description:
      "A multi-provider routing platform that analyzes a query, selects a model, handles fallbacks, and exposes routing decisions in a React dashboard.",
    stack: ["FastAPI", "React", "TypeScript", "Docker"],
    challenge:
      "Different queries call for different model capabilities, latency budgets, and costs.",
    approach:
      "Separated query analysis, model selection, and provider connectors. Added asynchronous API endpoints, fallback handling, health checks, and an analysis mode that runs without API keys.",
    evidence:
      "Documented REST endpoints, Docker deployment, routing configuration, and a web interface for inspecting model-selection decisions.",
    source:
      "https://github.com/adityaanilraut/AI-Model-Context-Routing/blob/main/README.md",
    sourceLabel: "Inspect the architecture",
  },
  {
    name: "VoxLibri",
    repo: "voxlibri",
    category: "Products",
    type: "Applied AI product",
    visual: "audio",
    description:
      "Turn digital or scanned PDFs into chaptered audiobooks using OCR, neural text-to-speech, and a streaming audio pipeline.",
    stack: ["FastAPI", "ONNX", "Piper / Kokoro", "FFmpeg"],
    challenge:
      "Long documents require OCR, chapter detection, and speech synthesis without holding the entire book in memory.",
    approach:
      "Combined native PDF extraction with OCR fallback, sentence chunking, pluggable local and cloud TTS engines, and file-based audio synthesis with FFmpeg stream-copy assembly.",
    evidence:
      "Ships a web studio and CLI, chapter manifests, voice selection, resource guards, and reproducible setup instructions.",
    source: "https://github.com/adityaanilraut/voxlibri/blob/main/README.md",
    sourceLabel: "Explore the studio",
  },
  {
    name: "Satellite farm classification",
    repo: "satellite-farm-classification",
    category: "ML infrastructure",
    type: "Applied machine learning",
    visual: "satellite",
    description:
      "Classify agricultural parcels from monthly satellite imagery while testing for spatial and geometry leakage.",
    stack: ["Python", "scikit-learn", "PyTorch", "Spatial validation"],
    challenge:
      "A model can learn parcel shape or location instead of crop phenology, inflating evaluation scores.",
    approach:
      "Engineered temporal vegetation features, grouped cross-validation by location, and compared boosting with GRU and Conv1D models. Added mask-only, size-only, and eroded-mask diagnostics.",
    evidence:
      "The repository reports 0.888 ± 0.009 macro F1 for HistGradientBoosting under five-fold, location-grouped cross-validation.",
    source:
      "https://github.com/adityaanilraut/satellite-farm-classification#model-results",
    sourceLabel: "Read the results",
  },
];

export const additionalWork = [
  {
    name: "LLM post-training",
    repo: "llm-post-training",
    text: "Hands-on SFT, DPO, PPO, GRPO, reward modeling, distillation, and evaluation notebooks.",
    tags: "Python · Post-training",
  },
  {
    name: "Rust vs. C++",
    repo: "Rust-vs-Cpp-for-CPU-and-GPU-Performance",
    text: "Controlled CPU and CUDA benchmark study with source implementations, raw results, and an accompanying paper.",
    tags: "Rust · C++ · CUDA",
  },
  {
    name: "Quoridor AlphaZero",
    repo: "quoridor-alpha-zero-rl",
    text: "An AlphaZero-style board-game agent combining self-play, Monte Carlo tree search, and a neural network.",
    tags: "Python · Reinforcement learning",
  },
  {
    name: "Native apps & RoomieQueue",
    repo: "Xcode-Apps",
    text: "Swift / SwiftUI applications alongside a separate Next.js app for shared household coordination.",
    tags: "SwiftUI · TypeScript",
    secondaryRepo: "roomieQueue",
  },
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    short: "TCS",
    role: "Full Stack Systems Engineer",
    context: "Client: GE · Remote / Hybrid",
    dates: "Apr 2021 — Oct 2023",
    summary:
      "Built backend services and modernized enterprise systems supporting financial operations.",
    bullets: [
      "Developed Java Spring Boot microservices and REST APIs supporting onboarding, account management, and 2M+ financial transactions per month.",
      "Moved transaction processing, audit logging, and notifications to Kafka-based services, reducing inter-service processing time by 40%.",
      "Reduced API latency by 30% through query tuning, indexing, Redis caching, and JVM optimization; increased throughput by 25%.",
      "Built migration pipelines for 50M+ records with verified integrity and zero production downtime; automated releases with Docker, Kubernetes, Terraform, and CI/CD.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "AWS", "Redis", "Kubernetes"],
  },
  {
    company: "Launchpad Technology",
    short: "LT",
    role: "Software Engineer",
    context: "Mumbai, India",
    dates: "May 2020 — Apr 2021",
    summary:
      "Built full-stack features and backend APIs serving 270 educational institutions.",
    bullets: [
      "Shipped React, Node.js, and MongoDB features with RESTful APIs in collaboration with cross-functional teams.",
      "Implemented JWT authentication, asynchronous tasks, reusable service components, centralized exceptions, and structured logging.",
      "Optimized PostgreSQL / MySQL indexing and connection pooling to reduce average API response latency by 25%.",
    ],
    stack: ["React", "Node.js", "MongoDB", "PostgreSQL", "Bash"],
  },
];

export const skills = [
  {
    title: "Backend & distributed systems",
    text: "Services that stay responsive as workloads grow.",
    items: [
      "Java / Spring Boot",
      "Python / FastAPI",
      "Go",
      "Kafka",
      "REST APIs",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "AI systems & evaluation",
    text: "Agents, retrieval, and inference with measurable trade-offs.",
    items: [
      "Agent orchestration",
      "MCP",
      "RAG / FAISS / Qdrant",
      "PyTorch",
      "CUDA",
      "Quantization",
      "LLM evaluation",
    ],
  },
  {
    title: "Cloud & product engineering",
    text: "From a working prototype to repeatable delivery.",
    items: [
      "AWS",
      "Docker / Kubernetes",
      "Terraform / Helm",
      "GitHub Actions",
      "React / TypeScript",
      "Node.js",
      "SQL / Bash",
    ],
  },
];
