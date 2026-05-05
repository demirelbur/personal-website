export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Ericsson AB",
    role: "Master Researcher in Machine Learning",
    period: "Dec 2023 – Present",
    location: "Kista, Sweden",
    highlights: [
      "Architected a distributed multi-agent, multi-objective reinforcement learning platform for 5G coverage and capacity optimization.",
      "Led production-oriented development of AI-native link adaptation, including policy distillation and latency-aware model refinement.",
      "Built and standardized a PyTorch-native reinforcement learning library adopted by 100+ engineers and researchers.",
      "Contributed to agentic AI systems for autonomous 5G operations, combining reinforcement learning, Bayesian optimization, and LLM-based reasoning.",
      "Mentored engineers and advised teams on deployment constraints, long-term architecture, and production ML practices.",
    ],
  },
  {
    company: "Ericsson AB",
    role: "Senior Researcher in Machine Learning",
    period: "Jan 2020 – Dec 2023",
    location: "Kista, Sweden",
    highlights: [
      "Established the commercial viability of AI-native link adaptation through early research, proof-of-concept development, and collaboration with product units.",
      "Designed scalable training architectures for high-throughput reinforcement learning, reducing distributed training time by a factor of 20.",
      "Built GPU-accelerated distributed RL systems with 100+ CPU actors using Redis, ZeroMQ, and PyTorch RPC.",
      "Delivered measurable performance gains in production-grade 5G RAN systems under real-world latency, reliability, and hardware constraints.",
      "Co-authored technical papers and presented system-level insights to senior stakeholders.",
    ],
  },
  {
    company: "Scania CV AB",
    role: "Development Engineer, Planning & Decision-Making",
    period: "May 2018 – Jan 2020",
    location: "Södertälje, Sweden",
    highlights: [
      "Developed and evaluated robust path-tracking and motion-planning algorithms for autonomous heavy-duty vehicles.",
      "Improved reliability of planning and control in complex, unpredictable environments.",
      "Contributed to patent applications in autonomous transport systems through technical documentation and cross-functional collaboration.",
      "Supervised a master's thesis on real-time motion-planning automation.",
    ],
  },
  {
    company: "Paderborn University",
    role: "Postdoctoral Researcher",
    period: "Oct 2015 – Mar 2018",
    location: "Paderborn, Germany",
    highlights: [
      "Conducted research on advanced control and machine learning methods for large-scale networked cyber-physical systems.",
      "Developed optimization-based decision-making methods to improve the performance of physical systems.",
      "Contributed to German Research Foundation grant applications on cyber-physical networking.",
      "Designed and taught a graduate-level course on Control of Mechatronic Systems.",
      "Supervised multiple student theses.",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  detail?: string;
}

export const education: Education[] = [
  {
    degree: "PhD, Automatic Control",
    institution: "KTH Royal Institute of Technology",
    period: "2009 – 2015",
    location: "Stockholm, Sweden",
    detail: "Thesis: Architectures and Performance Analysis of Wireless Control Systems",
  },
  {
    degree: "MSc, Mechatronics Engineering",
    institution: "Istanbul Technical University",
    period: "2007 – 2009",
    location: "Istanbul, Turkey",
  },
  {
    degree: "BSc, Control Engineering",
    institution: "Istanbul Technical University",
    period: "2004 – 2009",
    location: "Istanbul, Turkey",
  },
  {
    degree: "BSc, Mechanical Engineering",
    institution: "Istanbul Technical University",
    period: "2003 – 2007",
    location: "Istanbul, Turkey",
    detail: "Ranked 1st among 155+ students",
  },
];
