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
      "Architected scalable distributed multi-agent multi-objective RL platform for 5G coverage and capacity optimization",
      "Led design and industrialization of Agentic AI systems integrating RL, Bayesian optimization, and LLM reasoning",
      "Built PyTorch-native RL library adopted by ~100 engineers and researchers",
      "Enabled real-time AI deployment on baseband hardware via policy distillation",
    ],
  },
  {
    company: "Ericsson AB",
    role: "Senior Researcher in Machine Learning",
    period: "Jan 2020 – Dec 2023",
    location: "Kista, Sweden",
    highlights: [
      "Reduced distributed RL training time by 20x with scalable HPC architectures",
      "Architected high-throughput distributed RL systems: GPU learners, 100+ CPU actors, multi-node coordination",
      "Established commercial viability of AI-native link adaptation with spectral efficiency gains",
      "Delivered measurable performance improvements in production-grade 5G RAN systems",
    ],
  },
  {
    company: "Scania CV AB",
    role: "Development Engineer, Planning & Decision-Making",
    period: "May 2018 – Jan 2020",
    location: "Sodertalje, Sweden",
    highlights: [
      "Designed automation algorithms for path tracking and motion planning in autonomous heavy-duty vehicles",
      "Filed multiple patent applications in connected transport systems",
    ],
  },
  {
    company: "Paderborn University",
    role: "Postdoctoral Researcher",
    period: "Oct 2015 – Mar 2018",
    location: "Paderborn, Germany",
    highlights: [
      "Researched control, signal processing, and ML for large-scale networked Cyber-Physical Systems",
      "Taught graduate course on Control of Mechatronic Systems",
      "Contributed to DFG grant applications on Cyber-Physical Networking",
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
    degree: "PhD in Automatic Control",
    institution: "KTH Royal Institute of Technology",
    period: "2009 – 2015",
    location: "Stockholm, Sweden",
    detail: "Architectures and Performance Analysis of Wireless Control Systems",
  },
  {
    degree: "MSc in Mechatronics Engineering",
    institution: "Istanbul Technical University",
    period: "2007 – 2009",
    location: "Istanbul, Turkey",
  },
  {
    degree: "BSc in Control Engineering",
    institution: "Istanbul Technical University",
    period: "2004 – 2009",
    location: "Istanbul, Turkey",
  },
  {
    degree: "BSc in Mechanical Engineering",
    institution: "Istanbul Technical University",
    period: "2003 – 2007",
    location: "Istanbul, Turkey",
    detail: "1st among 155+ students",
  },
];
