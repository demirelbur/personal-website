export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
  summary: string;
  type: "journal" | "conference" | "preprint" | "book" | "techreport" | "patent";
}

export const publications: Publication[] = [
  // --- Journals ---
  {
    title: "Generalization in Reinforcement Learning for Radio Access Networks",
    authors: "B. Demirel, Y. A. Wang, C. Tatino, and P. Soldati",
    venue: "IEEE Trans. ML in Comms & Networking",
    year: 2026,
    link: "https://arxiv.org/abs/2507.06602",
    summary:
      "Generalization methods for RL agents operating in radio access networks to enable zero-shot transfer across unseen network configurations.",
    type: "journal",
  },
  {
    title:
      "Design Principles for Model Generalization and Scalable AI in Radio Access Networks",
    authors:
      "P. Soldati, E. Ghadimi, B. Demirel, Y. Wang, R. Gaigalas, M. Sintorn",
    venue: "IEEE Communications Magazine",
    year: 2025,
    link: "https://arxiv.org/abs/2306.06251",
    summary:
      "Design principles for building generalizable and scalable AI solutions for radio access network optimization.",
    type: "journal",
  },
  {
    title: "Trade-Offs in Stochastic Event-Triggered Control",
    authors: "B. Demirel, A. S. Leong, V. Gupta and D. E. Quevedo",
    venue: "IEEE Trans. Automatic Control",
    year: 2019,
    link: "#",
    summary:
      "Fundamental trade-offs between communication cost and control performance in stochastic event-triggered systems.",
    type: "journal",
  },
  {
    title:
      "DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling",
    authors: "B. Demirel, A. Ramaswamy, D. E. Quevedo and H. Karl",
    venue: "IEEE Control Systems Letters",
    year: 2018,
    link: "#",
    summary:
      "Deep RL algorithm jointly optimizing communication scheduling and control performance in networked systems.",
    type: "journal",
  },
  {
    title:
      "Optimal Control of Linear Systems with Limited Control Actions: Threshold-Based Event-Triggered Control",
    authors: "B. Demirel, E. Ghadimi, D. E. Quevedo and M. Johansson",
    venue: "IEEE Trans. Control of Network Systems",
    year: 2018,
    link: "#",
    summary:
      "Optimal threshold policies for event-triggered control minimizing communication while maintaining performance guarantees.",
    type: "journal",
  },
  {
    title:
      "On the Trade-Off Between Control Performance and Communication Cost in Dead-Beat Event-Triggered Control",
    authors: "B. Demirel, V. Gupta, D. E. Quevedo and M. Johansson",
    venue: "IEEE Trans. Automatic Control",
    year: 2017,
    link: "#",
    summary:
      "Trade-off analysis between control performance and communication cost for dead-beat event-triggered networked control.",
    type: "journal",
  },
  {
    title:
      "Modular Design of Jointly Optimal Controllers and Forwarding Policies for Wireless Control",
    authors: "B. Demirel, Z. Zou, P. Soldati and M. Johansson",
    venue: "IEEE Trans. Automatic Control",
    year: 2014,
    link: "#",
    summary:
      "Modular co-design framework for jointly optimizing control and communication in wireless networked systems.",
    type: "journal",
  },
  {
    title:
      "Deterministic and Stochastic Approaches to Supervisory Control Design for Networked Systems with Time-varying Communication Delays",
    authors: "B. Demirel, C. Briat and M. Johansson",
    venue: "Nonlinear Analysis: Hybrid Systems",
    year: 2013,
    link: "#",
    summary:
      "Supervisory control methods for networked systems handling time-varying communication delays.",
    type: "journal",
  },
  {
    title:
      "Semi-compliant Force Generator Mechanism Design for a Required Impact and Contact Forces",
    authors: "B. Demirel, M. T. Emirler, U. Sonmez and A. Yorukoglu",
    venue: "ASME Journal of Mechanisms and Robotics",
    year: 2010,
    link: "#",
    summary:
      "Design methodology for semi-compliant mechanisms achieving specified impact and contact force profiles.",
    type: "journal",
  },
  {
    title:
      "Parameter Space Design of Repetitive Controllers for Satisfying a Robust Performance Requirement",
    authors: "B. Demirel and L. Guvenç",
    venue: "IEEE Trans. Automatic Control",
    year: 2010,
    link: "#",
    summary:
      "Parameter space approach for designing repetitive controllers meeting robust performance specifications.",
    type: "journal",
  },

  // --- Preprints & Tech Reports ---
  {
    title:
      "AI in Intent Management for Differentiated Connectivity in Autonomous Networks",
    authors: "P. Soldati, B. Demirel, Y. A. Wang and M. Sintorn",
    venue: "IEEE Communications Magazine",
    year: 2026,
    link: "#",
    summary:
      "AI-driven intent management enabling differentiated connectivity in self-driving networks.",
    type: "preprint",
  },
  {
    title:
      "When AI Has No Time to Think: Inference Under Extreme Latency and Compute Constraints in RANs",
    authors: "P. Soldati, C. Tatino, B. Demirel, and J. Wszolek",
    venue: "Ericsson Technology Review",
    year: 2026,
    link: "#",
    summary:
      "Techniques for deploying AI models on baseband hardware under sub-millisecond latency budgets.",
    type: "techreport",
  },
  {
    title: "From Intents to Actions: Agentic AI in Autonomous Networks",
    authors: "B. Demirel, P. Soldati, and Y. A. Wang",
    venue: "arXiv",
    year: 2025,
    link: "https://arxiv.org/abs/2602.01271",
    summary:
      "Framework for agentic AI systems that translate network intents into autonomous control actions via LLM reasoning and RL.",
    type: "preprint",
  },
  {
    title:
      "Approaching AI-Native Radio Access Networks through Generalization and Scalability of Learning",
    authors:
      "P. Soldati, E. Ghadimi, B. Demirel, Y. Wang, M. Sintorn, and R. Gaigalas",
    venue: "Ericsson Technology Review",
    year: 2023,
    link: "#",
    summary:
      "Vision and principles for AI-native RAN architectures emphasizing generalization and scalability.",
    type: "techreport",
  },

  // --- Conference Publications ---
  {
    title:
      "Practical Policy Distillation for Reinforcement Learning in Radio Access Networks",
    authors: "S. Khosravi, B. Demirel, L. Zhou, J. Rasines and P. Soldati",
    venue: "IEEE PIMRC",
    year: 2025,
    link: "#",
    summary:
      "Policy distillation methods for compressing RL agents into lightweight models deployable on constrained RAN hardware.",
    type: "conference",
  },
  {
    title:
      "Application of Monte Carlo Tree Search in Periodic Schedule Design for Networked Control Systems",
    authors: "B. Demirel and A. Aytekin",
    venue: "European Control Conference (ECC)",
    year: 2021,
    link: "#",
    summary:
      "MCTS-based approach for designing periodic communication schedules in networked control systems.",
    type: "conference",
  },
  {
    title:
      "DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling",
    authors: "B. Demirel, A. Ramaswamy, D. E. Quevedo and H. Karl",
    venue: "IEEE CDC",
    year: 2018,
    link: "#",
    summary:
      "Conference presentation of DeepCAS — deep RL for joint scheduling and control optimization.",
    type: "conference",
  },
  {
    title:
      "Sparsity-Promoting Norm-Optimal Iterative Learning Control for Resource-Constrained Control Systems",
    authors: "B. Demirel, E. Ghadimi and D. E. Quevedo",
    venue: "IEEE CDC",
    year: 2017,
    link: "#",
    summary:
      "Sparsity-promoting iterative learning control for systems operating under communication resource constraints.",
    type: "conference",
  },
  {
    title:
      "Performance Analysis of Event-Triggered Control Systems with A Probabilistic Triggering Mechanism",
    authors: "B. Demirel, A. S. Leong and D. E. Quevedo",
    venue: "IFAC World Congress",
    year: 2017,
    link: "#",
    summary:
      "Performance analysis of probabilistic event-triggered control in the scalar case.",
    type: "conference",
  },
  {
    title:
      "Threshold Optimization of Event-Triggered Multi-Loop Control Systems",
    authors: "B. Demirel, V. Gupta, D. E. Quevedo and M. Johansson",
    venue: "WODES",
    year: 2016,
    link: "#",
    summary:
      "Optimal threshold design for multi-loop event-triggered control systems.",
    type: "conference",
  },
  {
    title:
      "Stability Analysis of Discrete-Time Linear Systems with Unbounded Stochastic Delays",
    authors:
      "B. Demirel, H. R. Feyzmahdavian, E. Ghadimi and M. Johansson",
    venue: "IFAC NECSYS",
    year: 2015,
    link: "#",
    summary:
      "Stability conditions for discrete-time linear systems subject to unbounded stochastic communication delays.",
    type: "conference",
  },
  {
    title:
      "To Wait or To Drop: On the Optimal Number of Re-transmissions in Wireless Control",
    authors: "B. Demirel, A. Aytekin, D. E. Quevedo and M. Johansson",
    venue: "European Control Conference (ECC)",
    year: 2015,
    link: "#",
    summary:
      "Optimal retransmission policies for wireless networked control systems balancing latency and reliability.",
    type: "conference",
  },
  {
    title:
      "On the Trade-Off Between Control Performance and Communication Cost for Event-Triggered Control over Lossy Networks",
    authors: "B. Demirel, V. Gupta and M. Johansson",
    venue: "European Control Conference (ECC)",
    year: 2013,
    link: "#",
    summary:
      "Trade-off characterization for event-triggered control operating over lossy communication networks.",
    type: "conference",
  },
  {
    title:
      "Minimum-Energy Packet Forwarding Policies for LQG Performance in Wireless Control Systems",
    authors: "Z. Zou, B. Demirel and M. Johansson",
    venue: "IEEE CDC",
    year: 2012,
    link: "#",
    summary:
      "Energy-optimal packet forwarding strategies maintaining LQG control performance in wireless systems.",
    type: "conference",
  },
  {
    title:
      "Supervisory Control Design for Networked Systems with Time-Varying Communication Delays",
    authors: "B. Demirel, C. Briat and M. Johansson",
    venue: "IFAC ADHS",
    year: 2012,
    link: "#",
    summary:
      "Supervisory control framework for networked systems handling time-varying delays.",
    type: "conference",
  },
  {
    title:
      "Modular Co-design of Controllers and Transmission Schedules in WirelessHART",
    authors: "B. Demirel, Z. Zou, P. Soldati and M. Johansson",
    venue: "IEEE CDC",
    year: 2011,
    link: "#",
    summary:
      "Joint controller and communication schedule co-design for WirelessHART industrial networks.",
    type: "conference",
  },
  {
    title: "Control of Mechatronics Systems - COMES Toolbox",
    authors: "B. Demirel and L. Guvenç",
    venue: "ASME ESDA",
    year: 2010,
    link: "#",
    summary:
      "Interactive computer-aided toolbox for mechatronic control system design.",
    type: "conference",
  },
  {
    title:
      "Fast AFM Scanning with Parameter Space Based Robust Repetitive Control Designed Using COMES Toolbox",
    authors: "S. Necipoglu, B. Demirel and L. Guvenç",
    venue: "ASME ESDA",
    year: 2010,
    link: "#",
    summary:
      "Robust repetitive control design enabling fast atomic force microscope scanning.",
    type: "conference",
  },
  {
    title:
      "Compliant Impact Generator for Required Impact and Contact Force",
    authors:
      "B. Demirel, M. T. Emirler, A. Yorukoglu, N. Koca and U. Sonmez",
    venue: "ASME IMECE",
    year: 2008,
    link: "#",
    summary:
      "Design of a compliant mechanism generating specified impact and contact forces.",
    type: "conference",
  },

  // --- Patents ---
  {
    title: "Joint training of first and second AI models",
    authors: "P. Soldati and B. Demirel",
    venue: "US Patent Application",
    year: 2025,
    link: "#",
    summary:
      "Method for jointly training complementary AI models for radio access network optimization.",
    type: "patent",
  },
  {
    title:
      "Method for distributed exploration for multi-objective RL in radio access networks",
    authors: "P. Soldati and B. Demirel",
    venue: "US Patent Application",
    year: 2025,
    link: "#",
    summary:
      "Distributed exploration strategy for multi-objective reinforcement learning in RAN environments.",
    type: "patent",
  },
  {
    title:
      "Methods for AI-driven optimization of intents and resource utilization",
    authors: "P. Soldati, E. Ghadimi, and B. Demirel",
    venue: "US Patent Application",
    year: 2023,
    link: "#",
    summary:
      "AI-driven methods for optimizing network intents and resource utilization in communication systems.",
    type: "patent",
  },
  {
    title: "Methods for generalizing AI design in communication systems",
    authors: "P. Soldati, E. Ghadimi, and B. Demirel",
    venue: "US Patent Application",
    year: 2023,
    link: "#",
    summary:
      "Generalization techniques for AI model design applicable across diverse communication system configurations.",
    type: "patent",
  },
  {
    title: "Management of delivery of power to a radio head",
    authors:
      "H. S. Ghadikolaei, L. Eleftheriadis, R. Inam, B. Demirel, Z. Ghebretensae, E. Sanders",
    venue: "WO2023085983",
    year: 2023,
    link: "#",
    summary:
      "Power delivery management system for radio head units in cellular networks.",
    type: "patent",
  },
  {
    title: "Allocating computing tasks to radio network nodes",
    authors:
      "H. S. Ghadikolaei, L. Eleftheriadis, B. Demirel, A. Azari, Z. Ghebretensae",
    venue: "WO2023078547",
    year: 2023,
    link: "#",
    summary:
      "Method for distributing computing workloads across radio network nodes based on capacity and constraints.",
    type: "patent",
  },
  {
    title: "Inter-node exchange of link adaptation assistance information",
    authors: "P. Soldati, E. Ghadimi, Yu Wang, and B. Demirel",
    venue: "WO2022229181",
    year: 2022,
    link: "#",
    summary:
      "Protocol for exchanging link adaptation assistance data between network nodes to improve throughput.",
    type: "patent",
  },
  {
    title:
      "Method for transmitting link adaptation state information in telecommunication networks",
    authors: "P. Soldati, E. Ghadimi, Yu Wang, and B. Demirel",
    venue: "WO2022162152",
    year: 2022,
    link: "#",
    summary:
      "Transmission method for link adaptation state enabling faster adaptation in telecom networks.",
    type: "patent",
  },
  {
    title:
      "Method for user device assisted link adaptation in communication networks",
    authors:
      "P. Soldati, E. Ghadimi, Y. Wang, B. Demirel, and H. Ryden",
    venue: "WO2022162148",
    year: 2022,
    link: "#",
    summary:
      "User-device feedback mechanism for improving link adaptation accuracy in wireless networks.",
    type: "patent",
  },
  {
    title: "Verifying an action proposed by a reinforcement learning model",
    authors: "J. Jeong, B. Demirel, H. Tated, and W. Hu",
    venue: "WO2022248040",
    year: 2021,
    link: "#",
    summary:
      "Safety verification framework for actions proposed by RL agents before execution in production systems.",
    type: "patent",
  },
  {
    title: "Determining whether a device can perform an action",
    authors:
      "K. Cyras, M. Daoutis, A. Pradeep Mujumdar, A. Kattepur, and B. Demirel",
    venue: "WO2022242826",
    year: 2021,
    link: "#",
    summary:
      "Capability assessment method for determining device action feasibility in networked environments.",
    type: "patent",
  },
  {
    title:
      "Reinforced federated learning utilizing multiple specialized machine learning agents",
    authors:
      "K. Vandikas, A. Vulgarakis Feljan, B. Demirel, M. Orlic, A. Previti, and A. Nikou",
    venue: "WO2022045937",
    year: 2020,
    link: "#",
    summary:
      "Federated learning architecture combining multiple specialized RL agents for distributed optimization.",
    type: "patent",
  },
  {
    title: "Controlling communications from content server to end device",
    authors: "S. Içkin, T. Kvernvik, R. Inam, and B. Demirel",
    venue: "WO2021239250",
    year: 2020,
    link: "#",
    summary:
      "Communication control method between content servers and end devices for optimized delivery.",
    type: "patent",
  },
  {
    title:
      "Method and control arrangement for controlling the movement of an autonomous vehicle",
    authors: "B. Demirel, P. Valenzua, P. Lima, and T. Nyberg",
    venue: "DE102020001887",
    year: 2020,
    link: "#",
    summary:
      "Control architecture for autonomous vehicle motion planning and path tracking.",
    type: "patent",
  },
  {
    title:
      "Method and control unit for determining an oscillatory behavior of a vehicle",
    authors:
      "B. Demirel, P. G. Collares, H. Pettersson, M. Granstrom, and P. Lima",
    venue: "SE1950874",
    year: 2019,
    link: "#",
    summary:
      "Detection and characterization method for oscillatory vehicle dynamics to enable stability control.",
    type: "patent",
  },
];

export const book = {
  title: "Control of Mechatronic Systems",
  authors: "L. Guvenç, B. A. Guvenç, B. Demirel and M. T. Emirler",
  publisher: "IET Books",
  year: 2017,
  pages: 216,
  isbn: "978-1-78561-144-5",
};
