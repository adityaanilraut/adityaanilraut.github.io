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
      "In the project’s 50-pull-request Martian benchmark report, the evaluated configuration placed fifth by F1, with 58.2% precision, 50.8% F1, and 6.63 seconds per review on average.",
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
      "The résumé reports a 15% inference cost reduction in testing. The repository documents the routing configuration, REST API, Docker deployment, and dashboard.",
    source:
      "https://github.com/adityaanilraut/AI-Model-Context-Routing/blob/main/README.md",
    sourceLabel: "Inspect the architecture",
  },
  {
    name: "GPUShare",
    category: "ML infrastructure",
    type: "GPU scheduling",
    visual: "gpu",
    description:
      "A Python scheduler that lets students run containerized workloads concurrently on a shared NVIDIA A100 80 GB GPU.",
    stack: ["Python", "Docker", "NVIDIA MIG"],
    challenge:
      "Concurrent student jobs need isolation and fair access to limited GPU capacity.",
    approach:
      "Partitioned the A100 into up to seven isolated MIG instances and scheduled jobs with fair-share allocation and per-user GPU quotas.",
    evidence:
      "The résumé describes a scheduler built for 30 students, with quotas to prevent individual workloads from monopolizing the GPU.",
    source: profile.resume,
    sourceLabel: "Read the résumé project summary",
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
    role: "Software Engineer",
    context: "Client: GE · Remote / Hybrid",
    dates: "Apr 2021 — Oct 2023",
    summary:
      "Built and operated backend services for real-time financial monitoring at GE.",
    bullets: [
      "Built REST APIs and microservices with Node.js, Express, and TypeScript. Led the migration of a real-time monitoring backend to Go, reducing memory usage by 40% and tripling concurrent connection capacity.",
      "Used goroutines, channels, and worker pools to deliver real-time financial data to dashboards during peak load.",
      "Reduced p95 API latency by 35% with Redis caching, SQL query and index tuning, and removal of N+1 queries.",
      "Processed millions of records with retries, idempotent handlers, and dead-letter queues. Supported production with automated tests, CI/CD, monitoring, and on-call response.",
    ],
    stack: ["Go", "Node.js", "TypeScript", "Redis", "SQL", "Docker"],
  },
  {
    company: "Launchpad Technology",
    short: "LT",
    role: "Backend Software Engineer",
    context: "Mumbai, India",
    dates: "May 2020 — Apr 2021",
    summary:
      "Built and operated backend APIs for data management, authentication, and business operations.",
    bullets: [
      "Built and maintained 10+ API endpoints with request validation, error handling, and reusable service components.",
      "Deployed and maintained backend applications on AWS using EC2, S3, and Linux.",
      "Designed relational schemas, improved query performance with indexing and pagination, and added unit and integration tests for API endpoints.",
    ],
    stack: ["REST APIs", "SQL", "AWS EC2", "Amazon S3", "Linux"],
  },
];

export const skills = [
  {
    title: "Backend & distributed systems",
    text: "Services that stay responsive as workloads grow.",
    items: [
      "Go / Gin",
      "Node.js / TypeScript",
      "Python / FastAPI",
      "Java / Spring Boot",
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
      "Prometheus / Grafana",
      "SQL / Bash",
    ],
  },
];
