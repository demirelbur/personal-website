export interface PublicationLinks {
  website?: string;
  pdf?: string;
  doi?: string;
  arxiv?: string;
  code?: string;
  project?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueShort?: string;
  year: number;
  link: string;
  summary: string;
  type: "journal" | "conference" | "preprint" | "book" | "techreport" | "patent";
  links?: PublicationLinks;
  abstract?: string;
  description?: string;
  bibtex?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  topics?: string[];
  location?: string;
}

export const publications: Publication[] = [
  // --- Journals ---
  {
    title: "Generalization in Reinforcement Learning for Radio Access Networks",
    authors: "B. Demirel, Y. A. Wang, C. Tatino, and P. Soldati",
    venue: "IEEE Transactions on Machine Learning in Communications and Networking",
    venueShort: "IEEE Trans. Mach. Learn. Commun. Netw.",
    year: 2026,
    link: "https://ieeexplore.ieee.org/document/11358408",
    summary:
      "Generalization methods for RL agents operating in radio access networks to enable zero-shot transfer across unseen network configurations.",
    type: "journal",
    volume: "4",
    pages: "351–372",
    doi: "10.1109/TMLCN.2026.3655335",
    topics: ["Reinforcement learning", "Model generalization", "Link adaptation", "Radio access networks"],
    links: { arxiv: "https://arxiv.org/abs/2507.06602" },
    abstract:
      "Modern radio access networks (RANs) operate in highly dynamic and heterogeneous environments, where hand-tuned, rule-based radio resource management (RRM) algorithms frequently underperform. While reinforcement learning (RL) can surpass these heuristics in constrained scenarios, the unpredictable nature of radio channels and the diversity of cell deployments introduce substantial generalization challenges. Data-driven policies often overfit to their training distributions, leading to degraded performance when applied to unseen conditions. To address this, we propose a generalization-focused RL framework for RAN control that: (i) robustly reconstructs dynamically varying states from partial and noisy observations, while encoding static and semi-static information—such as radio nodes, cell attributes, and their topology—through graph representations; (ii) applies extensive domain randomization to broaden the training distribution; and (iii) distributes data generation across multiple actors while centralizing training in a cloud-compatible architecture aligned with O-RAN principles. Although training generalizable policies increases computational and data-management complexity, our distributed design mitigates these costs by scaling data collection and training across heterogeneous network conditions. Applied to downlink link adaptation (LA) across five 5th Generation (5G) benchmarks, the resulting generalized RL policy achieves approximately 10% higher average cell throughput and spectral efficiency than the state-of-the-art LA baseline in full-buffer multiple input multiple output (MIMO) and massive MIMO (mMIMO) scenarios, and approximately 20% under high-mobility conditions. Furthermore, it matches the performance of specialized RL policies in full-buffer traffic while delivering up to 4× and 2× throughput gains in enhanced mobile broadband (eMBB) and mixed-traffic benchmarks, respectively. In larger deployments with nine cells, generalized policies maintain robust performance, whereas specialized policies—trained on smaller configurations—suffer significant degradation, underscoring the scalability and robustness of the proposed approach.",
    bibtex: `@ARTICLE{11358408,
  author={Demirel, Burak and Wang, Yu and Tatino, Cristian and Soldati, Pablo},
  journal={IEEE Transactions on Machine Learning in Communications and Networking},
  title={Generalization in Reinforcement Learning for Radio Access Networks},
  year={2026},
  volume={4},
  number={},
  pages={351-372},
  keywords={Training;Computer architecture;Data models;Adaptation models;Uncertainty;Microprocessors;Robustness;Distance learning;Computer aided instruction;Reinforcement learning;Reinforcement learning;model generalization;link adaptation;radio access networks},
  doi={10.1109/TMLCN.2026.3655335}}`,
  },
  {
    title:
      "Design Principles for Model Generalization and Scalable AI in Radio Access Networks",
    authors:
      "P. Soldati, E. Ghadimi, B. Demirel, Y. Wang, R. Gaigalas, M. Sintorn",
    venue: "IEEE Communications Magazine",
    venueShort: "IEEE Commun. Mag.",
    year: 2025,
    link: "https://ieeexplore.ieee.org/document/10598831",
    summary:
      "Design principles for building generalizable and scalable AI solutions for radio access network optimization.",
    type: "journal",
    volume: "63",
    pages: "82–88",
    doi: "10.1109/MCOM.001.2400068",
    topics: ["Model generalization", "Scalable AI", "Radio access networks", "Link adaptation"],
    links: { arxiv: "https://arxiv.org/abs/2306.06251" },
    abstract: "This article emphasizes the pivotal role of model generalization in enhancing performance and enabling scalable AI integration within radio communications. We outline design principles for model generalization in three key domains: environment for robustness, intents for adaptability to system objectives, and control tasks for reducing AI-driven control loops. Adopting these principles can decrease the number of models deployed and increase adaptability in diverse radio communication environments. To address the challenges of model generalization in communication systems, we propose a learning architecture that leverages centralization of training and data management functionalities, combined with distributed data generation. We illustrate these concepts by designing a generalized link adaptation algorithm, demonstrating the benefits of our proposed approach.",
    bibtex: `@ARTICLE{10598831,
  author={Soldati, Pablo and Ghadimi, Euhanna and Demirel, Burak and Wang, Yu and Gaigalas, Ričardas and Sintorn, Maxime},
  journal={IEEE Communications Magazine},
  title={Design Principles for Model Generalization and Scalable AI in Radio Access Networks},
  year={2025},
  volume={63},
  pages={82-88},
  doi={10.1109/MCOM.001.2400068}}`,
  },
  {
    title: "Trade-Offs in Stochastic Event-Triggered Control",
    authors: "B. Demirel, A. S. Leong, V. Gupta and D. E. Quevedo",
    venue: "IEEE Transactions on Automatic Control",
    venueShort: "IEEE Trans. Autom. Control",
    year: 2019,
    link: "https://ieeexplore.ieee.org/document/8472169",
    volume: "64",
    pages: "2567–2574",
    doi: "10.1109/TAC.2018.2872199",
    topics: ["Event-triggered control", "Stochastic control", "Optimal control", "Networked systems"],
    links: { arxiv: "https://arxiv.org/abs/1708.02756" },
    summary:
      "Fundamental trade-offs between communication cost and control performance in stochastic event-triggered systems.",
    type: "journal",
    abstract: "This paper studies the optimal output-feedback control of a linear time-invariant system where a stochastic event-based scheduler triggers the communication between the sensor and the controller. The primary goal of the use of this type of scheduling strategy is to provide significant reductions in the usage of the sensor-to-controller communication and, in turn, improve energy expenditure in the network. In this paper, we aim to design an admissible control policy, which is a function of the observed output, to minimize a quadratic cost function while employing a stochastic event-triggered scheduler that preserves the Gaussian property of the plant state and the estimation error. For the infinite horizon case, we present analytical expressions that quantify the tradeoff between the communication cost and control performance of such event-triggered control systems. This tradeoff is confirmed quantitatively via numerical examples. Besides, numerical simulations justify that the event-triggered control provides better quadratic control performance than the (traditional) periodic time-triggered control at the same average sampling rate.",
    bibtex: `@ARTICLE{8472169,
  author={Demirel, Burak and Leong, Alex S. and Gupta, Vijay and Quevedo, Daniel E.},
  journal={IEEE Transactions on Automatic Control},
  title={Tradeoffs in Stochastic Event-Triggered Control},
  year={2019},
  volume={64},
  number={6},
  pages={2567-2574},
  keywords={Stochastic processes;State estimation;Linear systems;Optimal control;Numerical simulation;Event-triggered control;linear systems, optimal control;stochastic control},
  doi={10.1109/TAC.2018.2872199}}
`,
  },
  {
    title:
      "DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling",
    authors: "B. Demirel, A. Ramaswamy, D. E. Quevedo and H. Karl",
    venue: "IEEE Control Systems Letters",
    venueShort: "IEEE Control Syst. Lett.",
    year: 2018,
    link: "https://ieeexplore.ieee.org/document/8386658",
    summary:
      "Deep RL algorithm jointly optimizing communication scheduling and control performance in networked systems.",
    type: "journal",
    volume: "2",
    pages: "737–742",
    doi: "10.1109/LCSYS.2018.2847882",
    topics: ["Deep reinforcement learning", "Scheduling", "Networked control systems", "Resource allocation"],
    links: { arxiv: "https://arxiv.org/abs/1803.02998" },
    abstract: "We consider networked control systems consisting of multiple independent controlled subsystems, operating over a shared communication network. Such systems are ubiquitous in cyber-physical systems, Internet of Things, and large-scale industrial systems. In many large-scale settings, the size of the communication network is smaller than the size of the system. In consequence, scheduling issues arise. The main contribution of this letter is to develop a deep reinforcement learning-based control-aware scheduling (DEEPCAS) algorithm to tackle these issues. We use the following (optimal) design strategy: first, we synthesize an optimal controller for each subsystem; next, we design a learning algorithm that adapts to the chosen subsystems (plants) and controllers. As a consequence of this adaptation, our algorithm finds a schedule that minimizes the control loss. We present empirical results to show that DEEPCAS finds schedules with better performance than periodic ones.",
    bibtex: `@ARTICLE{8386658,
  author={Demirel, Burak and Ramaswamy, Arunselvan and Quevedo, Daniel E. and Karl, Holger},
  journal={IEEE Control Systems Letters},
  title={DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling},
  year={2018},
  volume={2},
  number={4},
  pages={737-742},
  keywords={Intelligent sensors;Kalman filters;Communication networks;Optimal scheduling;Networked control systems;Schedules;Deep learning;reinforcement learning;optimal control;networked control systems;scheduling;communication},
  doi={10.1109/LCSYS.2018.2847721}}
`,
  },
  {
    title:
      "Optimal Control of Linear Systems with Limited Control Actions: Threshold-Based Event-Triggered Control",
    authors: "B. Demirel, E. Ghadimi, D. E. Quevedo and M. Johansson",
    venue: "IEEE Transactions on Control of Network Systems",
    venueShort: "IEEE Trans. Control Netw. Syst.",
    year: 2018,
    link: "https://ieeexplore.ieee.org/document/7919268",
    summary:
      "Optimal threshold policies for event-triggered control minimizing communication while maintaining performance guarantees.",
    type: "journal",
    volume: "5",
    pages: "1275–1286",
    doi: "10.1109/TCNS.2017.2701800",
    topics: ["Event-triggered control", "Optimal control", "Threshold policies", "Networked systems"],
    links: { arxiv: "https://arxiv.org/abs/1701.04871" },
    abstract: "We consider a finite-horizon linear-quadratic optimal control problem where only a limited number of control messages are allowed for sending from the controller to the actuator. To restrict the number of control actions computed and transmitted by the controller, we employ a threshold-based event-triggering mechanism that decides whether or not a control message needs to be calculated and delivered. Due to the nature of threshold-based event-triggering algorithms, finding the optimal control sequence requires minimizing a quadratic cost function over a nonconvex domain. In this paper, we first provide an exact solution to this nonconvex problem by solving an exponential number of quadratic programs. To reduce computational complexity, we then propose two efficient heuristic algorithms based on greedy search and the alternating direction method of multipliers technique. Later, we consider a receding horizon control strategy for linear systems controlled by event-triggered controllers, and we further provide a complete stability analysis of receding horizon control that uses finite-horizon optimization in the proposed class. Numerical examples testify to the viability of the presented design technique.",
    bibtex: `@ARTICLE{7919268,
  author={Demirel, Burak and Ghadimi, Euhanna and Quevedo, Daniel E. and Johansson, Mikael},
  journal={IEEE Transactions on Control of Network Systems},
  title={Optimal Control of Linear Systems With Limited Control Actions: Threshold-Based Event-Triggered Control},
  year={2018},
  volume={5},
  number={3},
  pages={1275-1286},
  keywords={Optimal control;Actuators;Cost function;Algorithm design and analysis;Linear systems;Event-triggered control;linear systems;optimal control;receding horizon control},
  doi={10.1109/TCNS.2017.2701003}}
`,
  },
  {
    title:
      "On the Trade-Off Between Control Performance and Communication Cost in Dead-Beat Event-Triggered Control",
    authors: "B. Demirel, V. Gupta, D. E. Quevedo and M. Johansson",
    venue: "IEEE Transactions on Automatic Control",
    venueShort: "IEEE Trans. Autom. Control",
    year: 2017,
    link: "https://ieeexplore.ieee.org/document/7562376",
    summary:
      "Trade-off analysis between control performance and communication cost for dead-beat event-triggered networked control.",
    type: "journal",
    volume: "62",
    pages: "2973–2980",
    doi: "10.1109/TAC.2016.2606899",
    topics: ["Event-triggered control", "Communication efficiency", "Dead-beat control", "Networked systems"],
    links: { arxiv: "https://arxiv.org/abs/1501.00892" },
    abstract: "We consider a stochastic system where the communication between the controller and the actuator is triggered by a threshold-based rule. The communication is performed across an unreliable link that stochastically erases transmitted packets. To decrease the communication burden, and as a partial protection against dropped packets, the controller sends a sequence of control commands to the actuator in each packet. These commands are stored in a buffer and applied sequentially until the next control packet arrives. In this context, we study dead-beat control laws and compute the expected linear-quadratic loss of the closed-loop system for any given event-threshold. Furthermore, we provide analytical expressions that quantify the trade-off between the communication cost and the control performance of event-triggered control systems. Numerical examples demonstrate the effectiveness of the proposed technique.",
    bibtex: `@ARTICLE{7562376,
  author={Demirel, Burak and Gupta, Vijay and Quevedo, Daniel E. and Johansson, Mikael},
  journal={IEEE Transactions on Automatic Control},
  title={On the Trade-Off Between Communication and Control Cost in Event-Triggered Dead-Beat Control},
  year={2017},
  volume={62},
  number={6},
  pages={2973-2980},
  keywords={Actuators;Process control;Packet loss;Electrical engineering;Stochastic systems;Communication networks;event-triggering algorithms;networked control systems;packet losses},
  doi={10.1109/TAC.2016.2606590}}
`,
  },
  {
    title:
      "Modular Design of Jointly Optimal Controllers and Forwarding Policies for Wireless Control",
    authors: "B. Demirel, Z. Zou, P. Soldati and M. Johansson",
    venue: "IEEE Transactions on Automatic Control",
    venueShort: "IEEE Trans. Autom. Control",
    year: 2014,
    link: "https://doi.org/10.1109/TAC.2014.2351872",
    summary:
      "Modular co-design framework for jointly optimizing control and communication in wireless networked systems.",
    type: "journal",
    volume: "59",
    pages: "3252–3265",
    doi: "10.1109/TAC.2014.2351872",
    topics: ["Wireless control", "Co-design", "Networked control systems", "Routing optimization"],
    links: { arxiv: "https://arxiv.org/abs/1204.3100" },
    abstract: "We consider the joint design of packet forwarding policies and controllers for wireless control loops where sensor measurements are sent to the controller over an unreliable and energy-constrained multi-hop wireless network. For fixed sampling rate of the sensor, the co-design problem separates into two well-defined and independent subproblems: transmission scheduling for maximizing the deadline-constrained reliability and optimal control under packet loss. We develop optimal and implementable solutions for these subproblems and show that the optimally co-designed system can be efficiently found. Numerical examples highlight the many trade-offs involved and demonstrate the power of our approach.",
    bibtex: `@ARTICLE{6882816,
  author={Demirel, Burak and Zou, Zhenhua and Soldati, Pablo and Johansson, Mikael},
  journal={IEEE Transactions on Automatic Control},
  title={Modular Design of Jointly Optimal Controllers and Forwarding Policies for Wireless Control},
  year={2014},
  volume={59},
  number={12},
  pages={3252-3265},
  keywords={Reliability;Spread spectrum communication;Packet loss;Actuators;Wireless sensor networks;Wireless networks;Markov decision process;optimal control;wireless sensor networks},
  doi={10.1109/TAC.2014.2351972}}
`,
  },
  {
    title:
      "Deterministic and Stochastic Approaches to Supervisory Control Design for Networked Systems with Time-varying Communication Delays",
    authors: "B. Demirel, C. Briat and M. Johansson",
    venue: "Nonlinear Analysis: Hybrid Systems",
    venueShort: "Nonlinear Anal. Hybrid Syst.",
    year: 2013,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1751570X13000149",
    summary:
      "Supervisory control methods for networked systems handling time-varying communication delays.",
    type: "journal",
    volume: "10",
    pages: "94–110",
    doi: "10.1016/j.nahs.2013.02.003",
    topics: ["Supervisory control", "Time-varying delays", "Hybrid systems", "Networked control"],
    links: { arxiv: "https://arxiv.org/abs/1204.3100" },
    abstract: "This paper proposes a supervisory control structure for networked systems with time-varying delays. The control structure, in which a supervisor triggers the most appropriate controller from a multi-controller unit, aims at improving the closed-loop performance relative to what can be obtained using a single robust controller. Our analysis considers average dwell-time switching and is based on a novel multiple Lyapunov–Krasovskii functional. We develop stability conditions that can be verified by semi-definite programming, and show that the associated state feedback synthesis problem also can be solved using convex optimization tools. Extensions of the analysis and synthesis procedures to the case when the evolution of the delay mode is described by a Markov chain are also developed. Simulations on small and large-scale networked control systems are used to illustrate the effectiveness of our approach.",
    // bibtex: ``,
  },
  {
    title:
      "Semi-compliant Force Generator Mechanism Design for a Required Impact and Contact Forces",
    authors: "B. Demirel, M. T. Emirler, U. Sonmez and A. Yorukoglu",
    venue: "ASME Journal of Mechanisms and Robotics",
    venueShort: "ASME J. Mech. Robot.",
    year: 2010,
    link: "https://doi.org/10.1115/1.4000527",
    summary:
      "Design methodology for semi-compliant mechanisms achieving specified impact and contact force profiles.",
    type: "journal",
    volume: "2",
    pages: "011007",
    doi: "10.1115/1.4000527",
    topics: ["Mechanism design", "Compliant mechanisms", "Contact forces", "Robotics"],
    abstract: "A novel design of compliant slider-crank mechanism is introduced and utilized as an impact and contact-force generator. This class of compliant slider mechanisms incorporates an elastic coupler, which is an initially straight flexible beam and buckles when it hits the stopper. The elastic pin-pin coupler, a buckling beam, behaves as a rigid body prior to the impact pushing the rigid slider. At a certain crank angle, the slider hits a stopper generating an impact force. This force can be changed by regulating the angular velocity of the crank and by achieving a desired velocity of the slider. Moreover, after the impact when the slider establishes a permanent contact with the stopper, the maximum contact force can also be adjusted by calculating the coupler dimensions (the length, the width, the thickness, and the amount of compression). The contact duration, the crank angular rotation range, can also be changed and attuned in this mechanism by moving the location of the impacted object. Several mechanism designs with the same working principle are introduced. A prototype compliant slider-crank mechanism is constructed and proved the conceptual contributions of the mechanism.",
    // bibtex: ``,
  },
  {
    title:
      "Parameter Space Design of Repetitive Controllers for Satisfying a Robust Performance Requirement",
    authors: "B. Demirel and L. Guvenç",
    venue: "IEEE Transactions on Automatic Control",
    venueShort: "IEEE Trans. Autom. Control",
    year: 2010,
    link: "https://ieeexplore.ieee.org/document/5456175",
    summary:
      "Parameter space approach for designing repetitive controllers meeting robust performance specifications.",
    type: "journal",
    volume: "55",
    pages: "1893–1899",
    doi: "10.1109/TAC.2010.2049037",
    topics: ["Repetitive control", "Robust control", "Parameter space methods", "Performance optimization"],
    links: { arxiv: "https://arxiv.org/abs/1412.0422" },
    abstract: "A parameter space procedure for designing chosen parameters of a repetitive controller to satisfy a robust performance criterion is presented. Using this method, low-order robust repetitive controllers can be designed and implemented for plants that possibly include time delay, poles on the imaginary axis and discontinuous weights. A design and simulation study based on a high speed atomic force microscope position control example is utilized to illustrate the method presented in this paper.",
    bibtex: `@ARTICLE{5456175,
  author={Demirel, Burak and Güvenç, Levent},
  journal={IEEE Transactions on Automatic Control},
  title={Parameter Space Design of Repetitive Controllers for Satisfying a Robust Performance Requirement},
  year={2010},
  volume={55},
  number={8},
  pages={1893-1899},
  keywords={Robust control;Control systems;Lagrangian functions;Shape control;Mechanical systems;Automatic control;Robust stability;Vectors;Linear systems;Damping;Atomic force microscope (AFM) control;parameter space method;repetitive control;robust performance},
  doi={10.1109/TAC.2010.2049280}}
`,
  },

  // --- Preprints & Tech Reports ---
  {
    title:
      "Agentic AI in Intent Management for Differentiated Connectivity in Autonomous Networks",
    authors: "P. Soldati, B. Demirel, Y. A. Wang and M. Sintorn",
    venue: "IEEE Communications Magazine",
    venueShort: "IEEE Commun. Mag.",
    year: 2026,
    link: "#",
    summary:
      "AI-driven intent management enabling differentiated connectivity in self-driving networks.",
    type: "preprint",
    topics: ["Agentic AI", "Intent management", "Autonomous networks", "Differentiated connectivity"],
    abstract: "",
  },
  {
    title:
      "When AI Has No Time to Think: Inference Under Extreme Latency and Compute Constraints in RANs",
    authors: "P. Soldati, C. Tatino, B. Demirel, J. Wszolek, and C. Padala",
    venue: "Ericsson Technology Review",
    year: 2026,
    link: "https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/when-ai-has-no-time-to-think",
    summary:
      "Techniques for deploying AI models on baseband hardware under sub-millisecond latency budgets.",
    type: "techreport",
    topics: ["Real-time inference", "Latency constraints", "Distillation", "Radio access networks"],
    abstract: "Real-time radio access network functions operate on microsecondlevel deadlines that leave artificial intelligence with no time to think. The feasibility of inference under these conditions hinges not on increased hardware capability alone, but on carefully aligning model complexity with worst-case end-to-end execution budgets and compute platform capacity.",
    bibtex: `@ARTICLE{10068317,
      author={Soldati, Pablo and Tatino, Cristian and Demirel, Burak and Wszolek, Jacek and Padala, Chakri},
      journal={Ericsson Technology Review},
      title={When AI Has No Time to Think: Inference Under Extreme Latency and Compute Constraints in RANs},
      year={2023},
      volume={2023},
      number={3},
      pages={2-12},
      keywords={},
      doi={}
    }`,
  },
  {
    title: "From Intents to Actions: Agentic AI in Autonomous Networks",
    authors: "B. Demirel, P. Soldati, and Y. A. Wang",
    venue: "arXiv",
    year: 2026,
    link: "#",
    summary:
      "Framework for agentic AI systems that translate network intents into autonomous control actions via LLM reasoning and RL.",
    type: "techreport",
    topics: ["Agentic AI", "Multi-objective reinforcement learning", "Intent-driven networks", "LLM reasoning"],
    links: { arxiv: "https://arxiv.org/abs/2602.01271" },
    abstract: "Telecommunication networks are increasingly expected to operate autonomously while supporting heterogeneous services with diverse and often conflicting intents -- that is, performance objectives, constraints, and requirements specific to each service. However, transforming high-level intents -- such as ultra-low latency, high throughput, or energy efficiency -- into concrete control actions (i.e., low-level actuator commands) remains beyond the capability of existing heuristic approaches. This work introduces an Agentic AI system for intent-driven autonomous networks, structured around three specialized agents. A supervisory interpreter agent, powered by language models, performs both lexical parsing of intents into executable optimization templates and cognitive refinement based on feedback, constraint feasibility, and evolving network conditions. An optimizer agent converts these templates into tractable optimization problems, analyzes trade-offs, and derives preferences across objectives. Lastly, a preference-driven controller agent, based on multi-objective reinforcement learning, leverages these preferences to operate near the Pareto frontier of network performance that best satisfies the original intent. Collectively, these agents enable networks to autonomously interpret, reason over, adapt to, and act upon diverse intents and network conditions in a scalable manner. ",
    bibtex: `@misc{demirel2026intentsactionsagenticai,
      title={From Intents to Actions: Agentic AI in Autonomous Networks},
      author={Burak Demirel and Pablo Soldati and Yu Wang},
      year={2026},
      eprint={2602.01271},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2602.01271}}
    `,
  },
  {
    title:
      "Approaching AI-Native Radio Access Networks through Generalization and Scalability of Learning",
    authors:
      "P. Soldati, E. Ghadimi, B. Demirel, Y. Wang, M. Sintorn, and R. Gaigalas",
    venue: "Ericsson Technology Review",
    year: 2023,
    link: "https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/approaching-ai-native-rans-through-generalization-and-scalability-of-learning",
    summary:
      "Vision and principles for AI-native RAN architectures emphasizing generalization and scalability.",
    type: "techreport",
    topics: ["AI-native RAN", "Model generalization", "Scalable learning", "Radio resource management"],
    volume: "2023",
    pages: "2–12",
    doi: "10.23919/ETR.2023.10068317",
    abstract: "A holistic vision of an AI-native radio-access network (RAN) would be a system designed for artificial intelligence (AI) algorithms, in which a single AI algorithm could learn and govern most networking operations, ranging from the physical layer to Radio Resource Management (RRM).",
    bibtex: `@ARTICLE{10068317,
      author={Soldati, Pablo and Ghadimi, Euhanna and Demirel, Burak and Wang, Yu and Sintorn, Mathias and Gaigalas, Raimundas},
      journal={Ericsson Technology Review},
      title={Approaching AI-native RANs through generalization and scalability of learning},
      year={2023},
      volume={2023},
      number={3},
      pages={2-12},
      keywords={Scalability;Learning (artificial intelligence);Physical layer;Distance measurement;Resource management;Artificial intelligence;Task analysis},
      doi={10.23919/ETR.2023.10068317}
    }`,
  },

  // --- Conference Publications ---
  {
    title:
      "Practical Policy Distillation for Reinforcement Learning in Radio Access Networks",
    authors: "S. Khosravi, B. Demirel, L. Zhou, J. Rasines and P. Soldati",
    venue: "IEEE PIMRC",
    year: 2025,
    link: "https://ieeexplore.ieee.org/document/11274591",
    summary:
      "Policy distillation methods for compressing RL agents into lightweight models deployable on constrained RAN hardware.",
    type: "conference",
    location: "Istanbul, Turkiye",
    doi: "10.1109/PIMRC62392.2025.11274591",
    links: { arxiv: "https://arxiv.org/abs/2511.06563" },
    topics: ["Reinforcement learning", "Policy distillation", "Radio access networks", "Model compression"],
    abstract: "Adopting artificial intelligence (AI) in radio access networks (RANs) presents several challenges, limited availability of link-level measurements (e.g., CQI reports), stringent real-time processing constraints (e.g., sub-1ms per TTI), and network heterogeneity (different spectrum bands, cell types, and vendor equipment). A critical yet often overlooked barrier lies in the computational and memory limitations of RAN baseband hardware—particularly in legacy 4th Generation (4G) systems—which typically lack on-chip neural accelerators. As a result, only lightweight AI models (under 1Mb and sub-100µs inference time) can be effectively deployed, limiting both their performance and applicability. However, achieving strong generalization across diverse network conditions often requires large-scale models with substantial resource demands. To address this trade-off, this paper investigates policy distillation in the context of a reinforcement learning–based link adaptation task. We explore two strategies: single-policy distillation, where a scenario-agnostic teacher model is compressed into one generalized student model; and multi-policy distillation, where multiple scenario-specific teachers are consolidated into a single generalist student. Experimental evaluations in a high-fidelity, 5th Generation (5G)-compliant simulator demonstrate that both strategies produce compact student models that preserve the teachers’ generalization capabilities while complying with the computational and memory limitations of existing RAN hardware.",
    bibtex: `@INPROCEEDINGS{11274591,
      author={Khosravi, Sara and Demirel, Burak and Zhou, Linghui and Rasines, Javier and Soldati, Pablo},
      booktitle={2025 IEEE 36th International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)},
      title={Practical Policy Distillation for Reinforcement Learning in Radio Access Networks},
      year={2025},
      volume={},
      number={},
      pages={1-6},
      keywords={Training;Adaptation models;Baseband;Computational modeling;Reinforcement learning;Throughput;Hardware;System-on-chip;Artificial intelligence;Radio access networks;Artificial intelligence;reinforcement learning;policy distillation;radio access networks},
      doi={10.1109/PIMRC62392.2025.11274591}
    }`,
  },
  {
    title:
      "Application of Monte Carlo Tree Search in Periodic Schedule Design for Networked Control Systems",
    authors: "B. Demirel and A. Aytekin",
    venue: "European Control Conference",
    venueShort: "ECC",
    year: 2021,
    link: "https://doi.org/10.23919/ECC54610.2021.9655084",
    summary:
      "MCTS-based approach for designing periodic communication schedules in networked control systems.",
    type: "conference",
    location: "Virtual (Delft, Netherlands)",
    doi: "10.23919/ECC54610.2021.9655084",
    links: { arxiv: "https://arxiv.org/abs/2006.08015" },
    topics: ["Monte Carlo tree search", "Networked control systems", "Scheduling", "Combinatorial optimization"],
    abstract: "We analyze the closed-loop control performance of a networked control system that consists of N independent linear feedback control loops, sharing a communication network with M channels (M<N). A centralized scheduler, employing a scheduling protocol that produces periodic communication sequences, dictates which feedback loops should utilize all these channels. Under the periodic scheduling protocol, we derive analytical expressions for quantifying the overall control performance of the networked control system in terms of a quadratic function. We also formulate the offline combinatorial optimization of communication sequences for a given collection of linear feedback control subsystems. Then, we apply Monte Carlo Tree Search to determine the period of these communication sequences that attain near-optimal control performance. Via numerical studies, we show the effectiveness of the proposed framework.",
    bibtex: `@INPROCEEDINGS{9655084,
      author={Demirel, Burak and Aytekin, Arda},
      booktitle={2021 European Control Conference (ECC)},
      title={Application of Monte Carlo Tree Search in Periodic Schedule Design for Networked Control Systems},
      year={2021},
      volume={},
      number={},
      pages={168-175},
      keywords={Feedback loop;Schedules;Monte Carlo methods;Protocols;Networked control systems;Europe;Feedback control;Networked Control Systems;Scheduling;Optimal Control;Monte Carlo Tree Search},
      doi={10.23919/ECC54610.2021.9655084}
    }`,
  },
  {
    title:
      "DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling",
    authors: "B. Demirel, A. Ramaswamy, D. E. Quevedo and H. Karl",
    venue: "IEEE Conference on Decision and Control",
    venueShort: "IEEE CDC",
    year: 2018,
    link: "https://doi.org/10.1109/LCSYS.2018.2847721",
    summary:
      "Conference presentation of DeepCAS — deep RL for joint scheduling and control optimization.",
    type: "conference",
    location: "Miami Beach, FL, USA",
    doi: "10.1109/LCSYS.2018.2847721",
    links: { arxiv: "https://arxiv.org/abs/1803.02998" },
    topics: ["Deep reinforcement learning", "Networked control systems", "Scheduling", "Cyber-physical systems"],
    abstract: "We consider networked control systems consisting of multiple independent controlled subsystems, operating over a shared communication network. Such systems are ubiquitous in cyber-physical systems, Internet of Things, and large-scale industrial systems. In many large-scale settings, the size of the communication network is smaller than the size of the system. In consequence, scheduling issues arise. The main contribution of this letter is to develop a deep reinforcement learning-based control-aware scheduling (DEEPCAS) algorithm to tackle these issues. We use the following (optimal) design strategy: first, we synthesize an optimal controller for each subsystem; next, we design a learning algorithm that adapts to the chosen subsystems (plants) and controllers. As a consequence of this adaptation, our algorithm finds a schedule that minimizes the control loss. We present empirical results to show that DEEPCAS finds schedules with better performance than periodic ones.",
    bibtex: `@ARTICLE{8386658,
      author={Demirel, Burak and Ramaswamy, Arunselvan and Quevedo, Daniel E. and Karl, Holger},
      journal={IEEE Control Systems Letters},
      title={DeepCAS: A Deep Reinforcement Learning Algorithm for Control-Aware Scheduling},
      year={2018},
      volume={2},
      number={4},
      pages={737-742},
      keywords={Intelligent sensors;Kalman filters;Communication networks;Optimal scheduling;Networked control systems;Schedules;Deep learning;reinforcement learning;optimal control;networked control systems;scheduling;communication},
      doi={10.1109/LCSYS.2018.2847721}}
    }`,
  },
  {
    title:
      "Sparsity-Promoting Iterative Learning Control for Resource-Constrained Control Systems",
    authors: "B. Demirel, E. Ghadimi and D. E. Quevedo",
    venue: "IEEE Conference on Decision and Control",
    venueShort: "IEEE CDC",
    year: 2017,
    link: "https://doi.org/10.1109/CDC.2017.8263741",
    summary:
      "Sparsity-promoting iterative learning control for systems operating under communication resource constraints.",
    type: "conference",
    location: "Melbourne, Australia",
    doi: "10.1109/CDC.2017.8263741",
    links: { arxiv: "https://arxiv.org/abs/1709.09856" },
    topics: ["Iterative learning control", "Sparse optimization", "Resource-constrained systems", "Trajectory tracking"],
    abstract: "We propose novel iterative learning control algorithms to track a reference trajectory in resource-constrained control systems. In many applications, there are constraints on the number of control actions, delivered to the actuator from the controller, due to the limited bandwidth of communication channels or battery-operated sensors and actuators. We devise iterative learning techniques that create sparse control sequences with reduced communication and actuation instances while providing sensible reference tracking precision. Numerical simulations are provided to demonstrate the effectiveness of the proposed control method.",
    bibtex: `@INPROCEEDINGS{8263741,
      author={Demirel, Burak and Ghadimi, Euhanna and Quevedo, Daniel E.},
      booktitle={2017 IEEE 56th Annual Conference on Decision and Control (CDC)},
      title={Sparsity-promoting iterative learning control for resource-constrained control systems},
      year={2017},
      volume={},
      number={},
      pages={688-693},
      keywords={Iterative learning control;Actuators;Trajectory;Trajectory tracking;Sensors;Algorithm design and analysis},
      doi={10.1109/CDC.2017.8263741}
    }`,
  },
  {
    title:
      "Performance Analysis of Event-Triggered Control Systems with A Probabilistic Triggering Mechanism",
    authors: "B. Demirel, A. S. Leong and D. E. Quevedo",
    venue: "IFAC World Congress",
    year: 2017,
    link: "https://doi.org/10.1016/j.ifacol.2017.08.1781",
    summary:
      "Performance analysis of probabilistic event-triggered control in the scalar case.",
    type: "conference",
    location: "Toulouse, France",
    doi: "10.1016/j.ifacol.2017.08.1781",
    topics: ["Event-triggered control", "Stochastic systems", "Communication efficiency", "Linear-quadratic control"],
    abstract: "This paper considers a linear stochastic control system whose feedback loop is closed over (possibly low-power wireless) communication channels. A probabilistic event-based scheduling rule is adopted to transmit measurements from the sensor to the controller. The controller only computes a new control command whenever a sensor packet arrives at the controller. The event-triggered strategy proposed in this paper aims at providing significant reductions in the usage of both the sensor-to-controller and controller-to-actuator channels. Within this setup, we investigate dead-beat control laws and compute the expected linear-quadratic loss of the closed-loop system. We also provide analytic expressions that quantify the trade-off between the communication cost and the control performance of such event-triggered control systems. This trade-off is demonstrated quantitatively via a numerical example.",
    bibtex: `@INPROCEEDINGS{demirel2017performance,
      author  = {Demirel, Burak and Leong, Alex S. and Quevedo, Daniel E.},
      title   = {Performance Analysis of Event-Triggered Control Systems with a Probabilistic Triggering Mechanism: The Scalar Case},
      journal = {IFAC-PapersOnLine},
      volume  = {50},
      number  = {1},
      pages   = {10084--10089},
      year    = {2017},
      doi     = {10.1016/j.ifacol.2017.08.1781},
      url     = {https://www.sciencedirect.com/science/article/pii/S2405896317324011},
      issn    = {2405-8963}
    }`,
  },
  {
    title:
      "Threshold Optimization of Event-Triggered Multi-Loop Control Systems",
    authors: "B. Demirel, V. Gupta, D. E. Quevedo and M. Johansson",
    venue: "WODES", // WODES
    year: 2016,
    link: "https://doi.org/10.1109/WODES.2016.7497849",
    summary:
      "Optimal threshold design for multi-loop event-triggered control systems.",
    type: "conference",
    location: "Xi'an, China",
    doi: "10.1109/WODES.2016.7497849",
    topics: ["Event-triggered control", "Threshold optimization", "Multi-loop systems", "Shared communication"],
    abstract: "This paper considers multiple linear stochastic control systems whose feedback loops are closed over a shared communication medium. A threshold-based event-triggering rule is used to transmit control commands from the controllers to the actuators, and network access is arbitrated using a static priority mechanism. Under these conditions, we study dead-beat control laws and compute the expected linear-quadratic loss of the closed-loop system as a function of the event-thresholds of the individual loops. Also, we present analytical expressions that quantify the trade-off between the communication cost and the control performance of such event-triggered control systems. Using a multi-dimensional exhaustive search method, we determine the set of event thresholds that attains the minimal expected linear-quadratic loss of the closed-loop systems. Simulation studies highlight the trade-off between the communication and control cost.",
    bibtex: `@INPROCEEDINGS{7497849,
      author={Demirel, Burak and Gupta, Vijay and Quevedo, Daniel E. and Johansson, Mikael},
      booktitle={2016 13th International Workshop on Discrete Event Systems (WODES)},
      title={Threshold optimization of event-triggered multi-loop control systems},
      year={2016},
      volume={},
      number={},
      pages={203-210},
      keywords={Process control;Actuators;Communication channels;Markov processes;Random variables;Gaussian distribution;Event-triggered control;Deadbeat control;Shared communication channel},
      doi={10.1109/WODES.2016.7497849}
    }`,
  },
  {
    title:
      "Stability Analysis of Discrete-Time Linear Systems with Unbounded Stochastic Delays",
    authors:
      "B. Demirel, H. R. Feyzmahdavian, E. Ghadimi and M. Johansson",
    venue: "IFAC NECSYS",
    year: 2015,
    link: "https://doi.org/10.1016/j.ifacol.2015.10.312",
    summary:
      "Stability conditions for discrete-time linear systems subject to unbounded stochastic communication delays.",
    type: "conference",
    location: "Philadelphia, PA, USA",
    doi: "10.1016/j.ifacol.2015.10.312",
    topics: ["Stability analysis", "Stochastic delays", "Linear systems", "Networked control"],
    abstract: "This paper investigates the stability of discrete-time linear systems with stochastic delays. We assume that delays are modeled as random variables, which take values in integers with a certain probability. For the scalar case, we provide an analytical bound on the probability to guarantee the stability of linear systems. In the vector case, we derive a linear matrix inequality condition to compute the probability for ensuring the stability of closed-loop systems. As a special case, we also determine the step size of gradient algorithms with stochastic delays in the unconstrained quadratic programming to guarantee convergence to the optimal solution. Numerical examples are provided to show the effectiveness of the proposed analysis techniques.",
    bibtex: `@article{demirel2015stability,
      author  = {Demirel, Burak and Ezzahdeh, Hamid Reza and Ghadimi, Euhanna and Johansson, Mikael},
      title   = {Stability Analysis of Discrete-Time Linear Systems with Unbounded Stochastic Delays},
      journal = {IFAC-PapersOnLine},
      volume  = {48},
      number  = {22},
      pages   = {88--93},
      year    = {2015},
      doi     = {10.1016/j.ifacol.2015.10.312},
      url     = {https://www.sciencedirect.com/science/article/pii/S240589631502203X},
      issn    = {2405-8963}
    }`,
  },
  {
    title:
      "To Wait or To Drop: On the Optimal Number of Re-transmissions in Wireless Control",
    authors: "B. Demirel, A. Aytekin, D. E. Quevedo and M. Johansson",
    venue: "European Control Conference",
    venueShort: "ECC",
    year: 2015,
    link: "https://doi.org/10.1109/ECC.2015.7330666",
    summary:
      "Optimal retransmission policies for wireless networked control systems balancing latency and reliability.",
    type: "conference",
    location: "Linz, Austria",
    doi: "10.1109/ECC.2015.7330666",
    topics: ["Wireless control", "Retransmission policies", "Reliability-delay tradeoff", "Networked control systems"],
    abstract: "The dimensioning of wireless communication protocols for networked control involves a non-trivial trade-off between reliability and delay. Due to the lossy nature of wireless communications, there is a risk that sensor messages will be dropped. The end-to-end reliability can be improved by retransmitting dropped messages, but this comes at the expense of additional delays. In this work, we determine the number of retransmissions that strikes the optimal balance between communication reliability and delay, in the sense that it achieves the minimal expected linear-quadratic loss of the closed-loop system. An important feature of our setup is that it accounts for the random delays and possible losses that occur when unreliable communication is combatted with retransmissions. The resulting controller dynamically switches among a set of infinite-horizon linear-quadratic regulators, and is simple to implement. Numerical simulations are carried out to highlight the trade-off between reliability and delay.",
    bibtex: `@INPROCEEDINGS{7330666,
      author={Demirel, Burak and Aytekin, Arda and Quevedo, Daniel E. and Johansson, Mikael},
      booktitle={2015 European Control Conference (ECC)},
      title={To wait or to drop: On the optimal number of retransmissions in wireless control},
      year={2015},
      volume={},
      number={},
      pages={962-968},
      keywords={Delays;Actuators;Computer architecture;Reliability;Wireless communication;Process control;Communication channels},
      doi={10.1109/ECC.2015.7330666}
    }`,
  },
  {
    title:
      "On the Trade-Off Between Control Performance and Communication Cost for Event-Triggered Control over Lossy Networks",
    authors: "B. Demirel, V. Gupta and M. Johansson",
    venue: "European Control Conference",
    venueShort: "ECC",
    year: 2013,
    link: "https://doi.org/10.23919/ECC.2013.6669798",
    summary:
      "Trade-off characterization for event-triggered control operating over lossy communication networks.",
    type: "conference",
    location: "Zürich, Switzerland",
    doi: "10.23919/ECC.2013.6669798",
    topics: ["Event-triggered control", "Lossy networks", "Communication-control tradeoff", "Markov chains"],
    abstract: "This paper develops a theoretical framework for quantifying the trade-off between communication cost and control performance in event-triggered control over lossy networks. We consider a system where the communication between the controller and actuator is dictated by a threshold-based event-triggering algorithm, and develop a Markov-chain model that describes the attempted and successful transmissions of control messages over the lossy communication channel. A feature of our model is that it considers retransmissions of unsuccessful messages and that it accounts for the delay associated with such retransmissions. A systematic framework for analyzing the trade-off between the communication rate and control performance and for optimal tuning of the event threshold emanates by combining this model with an analytical model of the closed-loop performance. Numerical examples demonstrate the effectiveness of the proposed framework.",
    bibtex: `@inproceedings{demirel2013tradeoff,
      author    = {Demirel, Burak and Gupta, Vijay and Johansson, Mikael},
      title     = {On the Trade-off Between Control Performance and Communication Cost for Event-triggered Control over Lossy Networks},
      booktitle = {2013 European Control Conference (ECC)},
      pages     = {d.718},
      address   = {Zurich, Switzerland},
      year      = {2013},
      month     = jul,
      doi       = {10.23919/ECC.2013.6669798},
      keywords  = {Actuators, Process control, Markov processes, Packet loss, Propagation losses}
    }`,
  },
  {
    title:
      "Minimum-Energy Packet Forwarding Policies for LQG Performance in Wireless Control Systems",
    authors: "Z. Zou, B. Demirel and M. Johansson",
    venue: "IEEE Conference on Decision and Control",
    venueShort: "IEEE CDC",
    year: 2012,
    link: "https://doi.org/10.1109/CDC.2012.6426253",
    summary:
      "Energy-optimal packet forwarding strategies maintaining LQG control performance in wireless systems.",
    type: "conference",
    location: "Maui, HI, USA",
    doi: "10.1109/CDC.2012.6426253",
    topics: ["Energy optimization", "Packet forwarding", "LQG control", "Multi-hop wireless networks"],
    abstract: "This paper studies minimum-energy packet forwarding policies for communicating sensor measurements from plant to controller over an unreliable multi-hop wireless network so as to guarantee that the optimal controller achieves a prespecified closed-loop performance. For fixed sampling interval, we demonstrate that the minimal linear-quadratic control loss is monotonically decreasing in the reliability of the sensor-to-controller communication. This allows us to decompose the overall design problem into two separate tasks: finding the minimum end-to-end reliability that allows to achieve a prespecified linear-quadratic loss, and developing minimum-energy packet forwarding policies under a deadline-constrained reliability requirement. We develop optimal solutions for both subproblems and show how the co-designed system with minimum forwarding energy cost and guaranteed LQG control performance can be found by a one-dimensional search over admissible sampling periods. The paper ends with a numerical example which demonstrates the effectiveness of the proposed framework.",
    bibtex: `@INPROCEEDINGS{6426253,
      author={Zou, Zhenhua and Demirel, Burak and Johansson, Mikael},
      booktitle={2012 IEEE 51st IEEE Conference on Decision and Control (CDC)},
      title={Minimum-energy packet forwarding policies for guaranteed LQG performance in wireless control systems},
      year={2012},
      volume={},
      number={},
      pages={3341-3346},
      keywords={Reliability;Delay;Wireless sensor networks;Optimal control;Packet loss;Process control},
      doi={10.1109/CDC.2012.6426253}
    }`,
  },
  {
    title:
      "Supervisory Control Design for Networked Systems with Time-Varying Communication Delays",
    authors: "B. Demirel, C. Briat and M. Johansson",
    venue: "IFAC ADHS",
    year: 2012,
    link: "https://doi.org/10.3182/20120606-3-NL-3011.00095",
    summary:
      "Supervisory control framework for networked systems handling time-varying delays.",
    type: "conference",
    location: "Eindhoven, Netherlands",
    doi: "10.3182/20120606-3-NL-3011.00095",
    topics: ["Supervisory control", "Time-varying delays", "Lyapunov-Krasovskii", "Networked systems"],
    abstract: "This paper proposes a supervisory control structure for networked systems with time-varying delays. The control structure, in which a supervisor triggers the most appropriate controller from a multi-controller unit, aims at improving the closed-loop performance relative to what can be obtained using a single robust controller. Our analysis considers average dwell-time switching and is based on a novel multiple Lyapunov-Krasovskii functional. We develop analysis conditions that can be verified by semi-definite programming, and show that associated state feedback synthesis problem also can be solved using convex optimization. Small and large scale networked control systems are used to illustrate the effectiveness of our approach.",
    bibtex: `@article{demirel2012supervisory,
      author  = {Demirel, Burak and Briat, Corentin and Johansson, Mikael},
      title   = {Supervisory Control Design for Networked Systems with Time-Varying Communication Delays},
      journal = {IFAC Proceedings Volumes},
      volume  = {45},
      number  = {9},
      pages   = {133--140},
      year    = {2012},
      doi     = {10.3182/20120606-3-NL-3011.00095},
      url     = {https://www.sciencedirect.com/science/article/pii/S147466701537186X},
      issn    = {1474-6670}
    }`,
  },
  {
    title:
      "Modular Co-design of Controllers and Transmission Schedules in WirelessHART",
    authors: "B. Demirel, Z. Zou, P. Soldati and M. Johansson",
    venue: "IEEE CDC",
    year: 2011,
    link: "https://doi.org/10.1109/CDC.2011.6160996",
    summary:
      "Joint controller and communication schedule co-design for WirelessHART industrial networks.",
    type: "conference",
    location: "Orlando, FL, USA",
    doi: "10.1109/CDC.2011.6160996",
    topics: ["Co-design", "WirelessHART", "Transmission scheduling", "Industrial networks"],
    abstract: "We consider the joint design of transmission schedules and controllers for networked control loops that use WirelessHART communication for sensor and actuator data. By parameterizing the design problem in terms of the sampling rate of the control loop, the co-design problem separates into two well-defined subproblems which admit optimal solutions: transmission scheduling should be done to maximize the delay-constrained reliability while the control design should optimize closed-loop performance under packet loss. We illustrate how these problems can be solved and demonstrate our co-design framework for the case of linear-quadratic control.",
    bibtex: `@INPROCEEDINGS{6160996,
      author={Demirel, Burak and Zou, Zhenhua and Soldati, Pablo and Johansson, Mikael},
      booktitle={2011 50th IEEE Conference on Decision and Control and European Control Conference},
      title={Modular co-design of controllers and transmission schedules in WirelessHART},
      year={2011},
      volume={},
      number={},
      pages={5951-5958},
      keywords={Reliability;Wireless communication;Routing;Delay;Optimal scheduling;Control design;Schedules},
      doi={10.1109/CDC.2011.6160996}
    }`,
  },
  {
    title: "Control of Mechatronics Systems: COMES Toolbox",
    authors: "B. Demirel and L. Guvenç",
    venue: "ASME ESDA",
    year: 2010,
    link: "https://doi.org/10.1115/ESDA2010-24631",
    summary:
      "Interactive computer-aided toolbox for mechatronic control system design.",
    type: "conference",
    location: "Istanbul, Turkey",
    doi: "10.1115/ESDA2010-24631",
    topics: ["Mechatronics", "MATLAB toolbox", "Controller design", "GUI-based design"],
    abstract: "An interactive software tool based on MATLAB to analyze and design controllers for mechatronic systems is presented in this paper. This toolbox called COMES is a graphical user interface (GUI) to routines for four different control approaches: classical control (lead, lag, PID etc.), preview control, model regulator control and repetitive control. These control approaches have all found widespread use in the practical implementation of controllers for mechatronic systems. The aim is to design a user-friendly toolbox with a well designed graphical user interface (GUI), which hides all calculations from the user as much as possible. Thus, the user can focus on the design and analysis phases through the graphical displays rather than being burdened by the complicated calculations that are involved. The effectiveness of the use of this MATLAB-based toolbox was demonstrated by carrying out some design and simulation studies for several position control applications available in the literature.",
    bibtex: `@inproceedings{demirel2010control,
      author    = {Demirel, B. and G{\"u}ven{\c{c}}, L.},
      title     = {Control of Mechatronics Systems: COMES Toolbox},
      booktitle = {Proceedings of the ASME 2010 10th Biennial Conference on Engineering Systems Design and Analysis},
      volume    = {5},
      pages     = {233--246},
      address   = {Istanbul, Turkey},
      publisher = {ASME},
      year      = {2010},
      month     = jul,
      doi       = {10.1115/ESDA2010-24631},
      url       = {https://doi.org/10.1115/ESDA2010-24631}
    }`,
  },
  {
    title:
      "Fast AFM Scanning with Parameter Space Based Robust Repetitive Control Designed Using COMES Toolbox",
    authors: "S. Necipoglu, B. Demirel and L. Guvenç",
    venue: "ASME ESDA",
    year: 2010,
    link: "https://doi.org/10.1115/ESDA2010-24499",
    summary:
      "Robust repetitive control design enabling fast atomic force microscope scanning.",
    type: "conference",
    location: "Istanbul, Turkey",
    doi: "10.1115/ESDA2010-24499",
    topics: ["Repetitive control", "AFM scanning", "Robust control", "Nanoscale imaging"],
    abstract: "Atomic Force Microscope (AFM) is a very strong and beneficial instrument for acquiring images at nanometer scale. Hence, obtaining better image quality and scan speed is a research area of great interest. Improving the dynamic responses of the scanning probe and the vertical motion of the scanner mechanisms are the two major areas of concentration in this sense. Improving the vertical dynamics is achieved either by designing more complex scanner mechanisms with higher bandwidth or designing more sophisticated controllers rather than the PI, PID or PIID types of controllers that are mostly used in practice. In this paper, the authors focus on designing a repetitive control scheme for fast and accurate scanning. It is possible to implement repetitive control to achieve this goal when it is considered that the successive lines of the scan are quite similar due to the very small steps taken to advance on the sample. Repetitive control can reject higher frequency disturbances due to the surface topography in AFM much better than a conventional controller can, as it can drive the error caused by any periodic input signal to zero. Besides increasing the scan speed, it is also important that the phase lag can be compensated perfectly using repetitive control, with the knowledge of the surface topography from the previous period by introducing appropriate phase advance.",
    bibtex: `@inproceedings{necipoglu2010fast,
      author    = {Necipo{\\u{g}}lu, S. and Demirel, B. and G{\"u}ven{\c{c}}, L.},
      title     = {Fast AFM Scanning With Parameter Space Based Robust Repetitive Control Designed Using the COMES Toolbox},
      booktitle = {Proceedings of the ASME 2010 10th Biennial Conference on Engineering Systems Design and Analysis},
      volume    = {5},
      pages     = {599--606},
      address   = {Istanbul, Turkey},
      publisher = {ASME},
      year      = {2010},
      month     = jul,
      doi       = {10.1115/ESDA2010-24499},
      url       = {https://doi.org/10.1115/ESDA2010-24499}
    }`,
  },
  {
    title:
      "Compliant Impact Generator for Required Impact and Contact Force",
    authors:
      "B. Demirel, M. T. Emirler, A. Yorukoglu, N. Koca and U. Sonmez",
    venue: "ASME IMECE",
    year: 2008,
    link: "https://doi.org/10.1115/IMECE2008-68796",
    summary:
      "Design of a compliant mechanism generating specified impact and contact forces.",
    type: "conference",
    location: "Boston, MA, USA",
    doi: "10.1115/IMECE2008-68796",
    topics: ["Compliant mechanisms", "Impact force generation", "Mechanism design", "Mechanical engineering"],
    abstract: "A novel design of compliant slider crank mechanism is introduced and utilized as an impact force generator and contact force generator. This class of compliant slider mechanisms incorporates an elastic coupler which is an initially straight flexible beam and buckles when it hits the stopper. The elastic pin-pin coupler (a buckling beam) behaves as a rigid body prior to the impact pushing the rigid slider. At a certain crank angle the slider hits a stopper generating an impact force. Impact force can be changed by changing the angular velocity of the crank, therefore; achieving a desired velocity of the slider. Moreover, after the impact when the vibrations die out the maximum contact force can also be predetermined by designing the coupler dimensions (length, width, thickness and the amount of compression). Contact duration (crank angle) can also be changed and adjusted in this mechanism by changing the adjustable location of the impacted object.",
    bibtex: `@inproceedings{demirel2008compliant,
      author    = {Demirel, B. and Emirler, M. T. and Y{\"o}r{\"u}ko{\\u{g}}lu, A. and Koca, N. and S{\"o}nmez, U.},
      title     = {Compliant Impact Generator for Required Impact and Contact Force},
      booktitle = {Proceedings of the ASME 2008 International Mechanical Engineering Congress and Exposition},
      volume    = {11: Mechanical Systems and Control},
      pages     = {373--379},
      address   = {Boston, Massachusetts, USA},
      publisher = {ASME},
      year      = {2008},
      month     = oct,
      doi       = {10.1115/IMECE2008-68796},
      url       = {https://doi.org/10.1115/IMECE2008-68796}
    }`,
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
  summary: "Comprehensive treatment of modeling, analysis, and control design for mechatronic systems.",
  description: "This book introduces researchers and advanced students with a basic control systems background to an array of control techniques which they can easily implement and use to meet the required performance specifications for their mechatronic applications. It is the result of close to two decades of work of the authors on modeling, simulating and controlling different mechatronic systems from the motion control, automotive control and micro and nano-mechanical systems control areas. The methods presented in the book have all been tested by the authors and a very large group of researchers, who have produced practically implementable controllers with highly successful results. The approach that is recommended in this book is to first start with a conventional control method which may then be cascaded with a feedforward controller if the input is known or can be measured with a preview; to add a disturbance observer if unknown disturbances are to be rejected and if regulation of the uncertain plant about a nominal model is desired; and to add a repetitive controller to take care of any periodic inputs of fixed and known period. Case studies ranging from road vehicle yaw stability control and automated path following, to decoupling control of piezotube actuators in an atomic force microscope are presented. Parameter space based methods are used in the book for achieving robust controllers. Control of Mechatronic Systems is essential reading for researchers and advanced students who want to be exposed to control methods that have been field tested in a wide variety of mechatronic applications, and for practicing engineers who design and implement feedback control systems. This book is intended for successfully designing robust controllers for mechatronic systems from various disciplines. This book is intended for early-stage doctoral students who wish to get exposed to control methods that have been field-tested in a wide variety of mechatronic applications. The authors also believe that the book will be useful for practicing engineers who design and implement feedback control systems. The material in this book can be taught in a fourteen-week one-semester long course, with several project type assignments so that the graduate students can also master the application of the methods learned to practical problems.",
  link: "https://digital-library.theiet.org/doi/book/10.1049/pbce104e",
  topics: ["Mechatronics", "Robust control", "Motion control", "Automotive systems"],
};
