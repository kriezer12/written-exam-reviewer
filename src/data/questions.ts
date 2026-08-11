import { Question } from '../types/exam';

export const QUESTIONS: Question[] = [
  // Section 1: IT Fundamentals & Computing Concepts (1–4)
  {
    id: 1,
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best defines 'Information Technology'?",
    options: {
      A: "The use of computers to store, retrieve, transmit, and manipulate data",
      B: "The study of biological systems",
      C: "A branch of mathematics dealing with probability",
      D: "The design of mechanical engines"
    },
    correctAnswer: "A",
    explanation: "Information Technology (IT) encompasses the infrastructure, software, hardware, and processes used to store, retrieve, transmit, and process data for business and personal computing."
  },
  {
    id: 2,
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which generation of computers introduced the microprocessor?",
    options: {
      A: "First",
      B: "Second",
      C: "Third",
      D: "Fourth"
    },
    correctAnswer: "D",
    explanation: "The 4th generation of computers (starting around 1971 with Intel 4004) introduced microprocessors (VLSI/ULSI circuits), placing thousands to millions of transistors onto a single silicon chip."
  },
  {
    id: 3,
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is an example of system software?",
    options: {
      A: "Microsoft Word",
      B: "Operating System",
      C: "Adobe Photoshop",
      D: "Google Chrome"
    },
    correctAnswer: "B",
    explanation: "System software controls and manages basic hardware computer operations (e.g., Operating Systems like Windows, Linux, macOS, device drivers). Applications like MS Word or Chrome run on top of system software."
  },
  {
    id: 4,
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Data becomes information when it is:",
    options: {
      A: "Stored on a hard drive",
      B: "Processed and given context/meaning",
      C: "Encrypted",
      D: "Deleted"
    },
    correctAnswer: "B",
    explanation: "Raw data consists of unorganized facts. When data is processed, organized, structured, or presented in a given context to make it useful, it becomes information."
  },

  // Section 2: History of Computers (5–8)
  {
    id: 5,
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "Who is widely regarded as the 'Father of the Computer' for designing the Analytical Engine?",
    options: {
      A: "Alan Turing",
      B: "Charles Babbage",
      C: "John von Neumann",
      D: "Blaise Pascal"
    },
    correctAnswer: "B",
    explanation: "Charles Babbage designed the Difference Engine and the Analytical Engine, laying down the fundamental mechanical concepts of modern programmable computers."
  },
  {
    id: 6,
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "The first generation of computers primarily used which technology?",
    options: {
      A: "Transistors",
      B: "Integrated Circuits",
      C: "Vacuum Tubes",
      D: "Microprocessors"
    },
    correctAnswer: "C",
    explanation: "1st Generation (1940s-1950s) used vacuum tubes for circuitry and magnetic drums for memory (e.g., ENIAC, UNIVAC)."
  },
  {
    id: 7,
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "Which computer is considered the first general-purpose electronic digital computer?",
    options: {
      A: "ENIAC",
      B: "UNIVAC",
      C: "IBM 701",
      D: "Apple I"
    },
    correctAnswer: "A",
    explanation: "ENIAC (Electronic Numerical Integrator and Computer), completed in 1945 by John Mauchly and J. Presper Eckert, was the first general-purpose programmable electronic digital computer."
  },
  {
    id: 8,
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "Ada Lovelace is best known for:",
    options: {
      A: "Inventing the transistor",
      B: "Writing the first algorithm intended for a machine",
      C: "Designing the first GUI",
      D: "Building the first personal computer"
    },
    correctAnswer: "B",
    explanation: "Ada Lovelace worked with Charles Babbage's Analytical Engine and wrote what is acknowledged as the world's first computer algorithm (computing Bernoulli numbers)."
  },

  // Section 3: Number Systems (9–15)
  {
    id: 9,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "Convert binary 101101₂ to decimal.",
    options: {
      A: "45",
      B: "46",
      C: "44",
      D: "43"
    },
    correctAnswer: "A",
    explanation: "Calculation: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45.",
    calculationSteps: [
      "2⁵ (32) × 1 = 32",
      "2⁴ (16) × 0 = 0",
      "2³ (8)  × 1 = 8",
      "2² (4)  × 1 = 4",
      "2¹ (2)  × 0 = 0",
      "2⁰ (1)  × 1 = 1",
      "Sum = 32 + 8 + 4 + 1 = 45"
    ],
    hasMath: true
  },
  {
    id: 10,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "Convert decimal 156 to binary.",
    options: {
      A: "10011100",
      B: "10011101",
      C: "10011010",
      D: "11001100"
    },
    correctAnswer: "A",
    explanation: "156 divided by powers of 2: 128 (1), 64 (0), 32 (0), 16 (1), 8 (1), 4 (1), 2 (0), 1 (0). Result: 10011100₂.",
    calculationSteps: [
      "156 - 128 = 28 -> bit 7 = 1",
      "28 < 64 -> bit 6 = 0",
      "28 < 32 -> bit 5 = 0",
      "28 - 16 = 12 -> bit 4 = 1",
      "12 - 8 = 4 -> bit 3 = 1",
      "4 - 4 = 0 -> bit 2 = 1",
      "Remainder 0 -> bit 1 = 0, bit 0 = 0",
      "Binary: 10011100₂"
    ],
    hasMath: true
  },
  {
    id: 11,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "Convert hexadecimal 2F to decimal.",
    options: {
      A: "47",
      B: "46",
      C: "45",
      D: "48"
    },
    correctAnswer: "A",
    explanation: "2F₁₆ = 2×16 + F(15)×1 = 32 + 15 = 47.",
    calculationSteps: [
      "Digit 2 at 16¹ position = 2 × 16 = 32",
      "Digit F at 16⁰ position = 15 × 1 = 15",
      "Total decimal = 32 + 15 = 47"
    ],
    hasMath: true
  },
  {
    id: 12,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "Convert decimal 200 to hexadecimal.",
    options: {
      A: "C8",
      B: "D2",
      C: "C4",
      D: "B8"
    },
    correctAnswer: "A",
    explanation: "200 ÷ 16 = 12 with remainder 8. In hex, 12 is 'C'. Therefore, 200₁₀ = C8₁₆.",
    calculationSteps: [
      "200 / 16 = 12 remainder 8",
      "12 in hexadecimal = C",
      "8 in hexadecimal = 8",
      "Result = C8₁₆"
    ],
    hasMath: true
  },
  {
    id: 13,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "Convert octal 37₈ to decimal.",
    options: {
      A: "31",
      B: "29",
      C: "30",
      D: "33"
    },
    correctAnswer: "A",
    explanation: "37₈ = 3×8¹ + 7×8⁰ = 24 + 7 = 31.",
    calculationSteps: [
      "3 × 8¹ = 24",
      "7 × 8⁰ = 7",
      "Sum = 24 + 7 = 31"
    ],
    hasMath: true
  },
  {
    id: 14,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "What is the result of binary addition 1011 + 1101?",
    options: {
      A: "11000",
      B: "11001",
      C: "10111",
      D: "11010"
    },
    correctAnswer: "A",
    explanation: "1011₂ (11 in decimal) + 1101₂ (13 in decimal) = 24 in decimal. 24 in binary is 11000₂.",
    calculationSteps: [
      "  1011₂ (11)",
      "+ 1101₂ (13)",
      "--------",
      " 11000₂ (24)"
    ],
    hasMath: true
  },
  {
    id: 15,
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "Discrete Mathematics",
    question: "How many distinct values can be represented by 6 bits?",
    options: {
      A: "32",
      B: "64",
      C: "128",
      D: "16"
    },
    correctAnswer: "B",
    explanation: "Formula: 2ⁿ where n = number of bits. 2⁶ = 64 distinct values (from 0 to 63).",
    hasMath: true
  },

  // Section 4: Elements of Computer & Communication Systems (16–18)
  {
    id: 16,
    section: "Section 4: Elements of Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "Which is NOT one of the basic elements of a computer system?",
    options: {
      A: "Hardware",
      B: "Software",
      C: "Data",
      D: "Weather"
    },
    correctAnswer: "D",
    explanation: "The core elements of a computer system are Hardware, Software, Peopleware (users), Data, and Procedures. Weather is an environmental condition, not a system component."
  },
  {
    id: 17,
    section: "Section 4: Elements of Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "In a communication system, the device that converts digital signals to analog and vice versa is called:",
    options: {
      A: "Router",
      B: "Modem",
      C: "Switch",
      D: "Hub"
    },
    correctAnswer: "B",
    explanation: "Modem stands for MOdulator-DEmodulator. It modulates digital computer signals to analog for transmission line signals and demodulates incoming analog signals back to digital."
  },
  {
    id: 18,
    section: "Section 4: Elements of Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is an input device?",
    options: {
      A: "Monitor",
      B: "Printer",
      C: "Scanner",
      D: "Speaker"
    },
    correctAnswer: "C",
    explanation: "Scanners capture physical documents/images and convert them into digital data for the computer (input). Monitors, printers, and speakers are output devices."
  },

  // Section 5: IT Social & Professional Issues (19–23)
  {
    id: 19,
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "Which law in the Philippines protects personal data privacy?",
    options: {
      A: "RA 8792",
      B: "RA 10173",
      C: "RA 9160",
      D: "RA 7394"
    },
    correctAnswer: "B",
    explanation: "Republic Act No. 10173 is the Data Privacy Act of 2012 in the Philippines, governing the protection of personal information in information and communications systems."
  },
  {
    id: 20,
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "Using someone else's software without a valid license is a violation of:",
    options: {
      A: "Data Privacy Act",
      B: "Intellectual Property Rights / Copyright Law",
      C: "Cybercrime Prevention Act only",
      D: "None, it's legal"
    },
    correctAnswer: "B",
    explanation: "Software piracy violates Intellectual Property Rights and Copyright Laws, which grant creators exclusive rights to reproduce and distribute their proprietary software."
  },
  {
    id: 21,
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "The Philippine law that addresses offenses like hacking, identity theft, and online libel is:",
    options: {
      A: "RA 10175 (Cybercrime Prevention Act)",
      B: "RA 10173",
      C: "RA 8792",
      D: "RA 9995"
    },
    correctAnswer: "A",
    explanation: "Republic Act No. 10175 is the Cybercrime Prevention Act of 2012, penalizing cyber offenses including illegal access, data interference, system interference, and online libel."
  },
  {
    id: 22,
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is considered an ethical responsibility of an IT professional?",
    options: {
      A: "Sharing client data publicly",
      B: "Maintaining confidentiality of sensitive information",
      C: "Ignoring security vulnerabilities",
      D: "Copying proprietary code for personal use"
    },
    correctAnswer: "B",
    explanation: "Maintaining data confidentiality, integrity, user privacy, and system security are paramount ethical responsibilities defined by professional IT codes of ethics."
  },
  {
    id: 23,
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "\"Digital Divide\" refers to:",
    options: {
      A: "The gap between those with access to technology and those without",
      B: "A type of network topology",
      C: "A programming error",
      D: "A hardware component"
    },
    correctAnswer: "A",
    explanation: "The Digital Divide describes socio-economic inequality regarding access to, use of, or impact of information and communication technologies (ICT)."
  },

  // Section 6: Data Structures & Algorithms — Array (24–27)
  {
    id: 24,
    section: "Section 6: Data Structures & Algorithms — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "What is the time complexity of accessing an element in an array by index?",
    options: {
      A: "O(n)",
      B: "O(log n)",
      C: "O(1)",
      D: "O(n²)"
    },
    correctAnswer: "C",
    explanation: "Arrays store elements in contiguous memory locations. Calculating target memory address = Base_Address + (Index × Element_Size) is constant time O(1)."
  },
  {
    id: 25,
    section: "Section 6: Data Structures & Algorithms — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "In a zero-indexed array of size 10, what is the index of the last element?",
    options: {
      A: "10",
      B: "9",
      C: "8",
      D: "11"
    },
    correctAnswer: "B",
    explanation: "Zero-based indexing ranges from 0 to N - 1. For size 10, valid indices are 0 through 9."
  },
  {
    id: 26,
    section: "Section 6: Data Structures & Algorithms — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "Which operation is generally the most expensive in a standard array?",
    options: {
      A: "Access by index",
      B: "Insertion/deletion in the middle",
      C: "Reading the length",
      D: "Iterating once"
    },
    correctAnswer: "B",
    explanation: "Inserting or deleting an element in the middle requires shifting up to N subsequent elements, incurring linear O(n) worst-case time complexity."
  },
  {
    id: 27,
    section: "Section 6: Data Structures & Algorithms — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "Given array [5, 12, 8, 3, 19], what is the index of the value 8 using linear search?",
    options: {
      A: "Index 1",
      B: "Index 2",
      C: "Index 3",
      D: "Not found"
    },
    correctAnswer: "B",
    explanation: "Index 0: 5; Index 1: 12; Index 2: 8; Index 3: 3; Index 4: 19. Value 8 is at index 2."
  },

  // Section 7: Data Structures & Algorithms — Stacks (28–31)
  {
    id: 28,
    section: "Section 7: Data Structures & Algorithms — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "A stack follows which principle?",
    options: {
      A: "FIFO",
      B: "LIFO",
      C: "Random Access",
      D: "Priority-based"
    },
    correctAnswer: "B",
    explanation: "A Stack follows Last-In, First-Out (LIFO): the last item added to the stack is the first item removed."
  },
  {
    id: 29,
    section: "Section 7: Data Structures & Algorithms — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "Which operation adds an element to the top of a stack?",
    options: {
      A: "Pop",
      B: "Push",
      C: "Peek",
      D: "Enqueue"
    },
    correctAnswer: "B",
    explanation: "Push adds an element to the top; Pop removes the top element; Peek inspects the top without removing it."
  },
  {
    id: 30,
    section: "Section 7: Data Structures & Algorithms — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "What happens when you try to Pop from an empty stack?",
    options: {
      A: "It returns 0",
      B: "Stack Overflow",
      C: "Stack Underflow",
      D: "Nothing happens"
    },
    correctAnswer: "C",
    explanation: "Stack Underflow occurs when an operation attempts to remove or access an element from an empty stack."
  },
  {
    id: 31,
    section: "Section 7: Data Structures & Algorithms — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "Given the operations Push(1), Push(2), Push(3), Pop(), Push(4) — what is the top of the stack?",
    options: {
      A: "3",
      B: "2",
      C: "4",
      D: "1"
    },
    correctAnswer: "C",
    explanation: "Step-by-step state: [1] -> [1, 2] -> [1, 2, 3] -> Pop() removes 3, leaving [1, 2] -> Push(4) results in [1, 2, 4]. Top is 4.",
    calculationSteps: [
      "Push(1) -> Stack: [1]",
      "Push(2) -> Stack: [1, 2]",
      "Push(3) -> Stack: [1, 2, 3]",
      "Pop()    -> Removes 3, Stack: [1, 2]",
      "Push(4) -> Stack: [1, 2, 4]",
      "Top element is 4"
    ]
  },

  // Section 8: Operating Systems — CPU Architecture (32–35)
  {
    id: 32,
    section: "Section 8: Operating Systems — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "Which component of the CPU performs arithmetic and logical operations?",
    options: {
      A: "Control Unit",
      B: "ALU",
      C: "Cache",
      D: "Register"
    },
    correctAnswer: "B",
    explanation: "The ALU (Arithmetic Logic Unit) performs fundamental mathematical operations (add, subtract) and logical evaluations (AND, OR, NOT)."
  },
  {
    id: 33,
    section: "Section 8: Operating Systems — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "The Control Unit of a CPU is responsible for:",
    options: {
      A: "Storing data permanently",
      B: "Directing operations and coordinating instruction execution",
      C: "Performing arithmetic only",
      D: "Managing network traffic"
    },
    correctAnswer: "B",
    explanation: "The Control Unit (CU) fetches, decodes, and directs signals between CPU components, memory, and I/O devices."
  },
  {
    id: 34,
    section: "Section 8: Operating Systems — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "Which type of memory is fastest and located closest to the CPU core?",
    options: {
      A: "RAM",
      B: "Cache",
      C: "Hard Disk",
      D: "SSD"
    },
    correctAnswer: "B",
    explanation: "CPU Cache (L1, L2, L3 SRAM) is extremely fast memory integrated on/near CPU cores to store frequently used instructions."
  },
  {
    id: 35,
    section: "Section 8: Operating Systems — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "The fetch-decode-execute cycle describes:",
    options: {
      A: "How data is stored on disk",
      B: "How the CPU processes instructions",
      C: "How networks route packets",
      D: "How memory is allocated"
    },
    correctAnswer: "B",
    explanation: "The instruction cycle (Fetch -> Decode -> Execute -> Store) is the basic operational process of a central processing unit."
  },

  // Section 9: Operating Systems — Booting Process (36–37)
  {
    id: 36,
    section: "Section 9: Operating Systems — Booting Process",
    category: "OS — Booting Process",
    domain: "Operating Systems",
    question: "What is the first program that runs when a computer is powered on?",
    options: {
      A: "Operating System kernel",
      B: "BIOS/UEFI firmware",
      C: "Device drivers",
      D: "User applications"
    },
    correctAnswer: "B",
    explanation: "BIOS (Basic Input/Output System) or modern UEFI stored in non-volatile ROM is the first code executed upon power initialization."
  },
  {
    id: 37,
    section: "Section 9: Operating Systems — Booting Process",
    category: "OS — Booting Process",
    domain: "Operating Systems",
    question: "The process where the BIOS checks hardware components at startup is called:",
    options: {
      A: "POST (Power-On Self-Test)",
      B: "Cold boot",
      C: "Warm boot",
      D: "Kernel initialization"
    },
    correctAnswer: "A",
    explanation: "POST checks system RAM, CPU registers, storage drives, and keyboard controllers before loading the bootloader."
  },

  // Section 10: Operating Systems — Computer Protection (38–41)
  {
    id: 38,
    section: "Section 10: Operating Systems — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Which of the following best describes a firewall?",
    options: {
      A: "A software that removes viruses",
      B: "A system that monitors and controls incoming/outgoing network traffic",
      C: "A type of malware",
      D: "A backup utility"
    },
    correctAnswer: "B",
    explanation: "A firewall acts as a security barrier filtering network traffic based on predefined rule sets to prevent unauthorized access."
  },
  {
    id: 39,
    section: "Section 10: Operating Systems — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Malware that disguises itself as legitimate software is called:",
    options: {
      A: "Worm",
      B: "Trojan Horse",
      C: "Adware",
      D: "Spyware"
    },
    correctAnswer: "B",
    explanation: "A Trojan Horse misleads users of its true intent by appearing as useful software, allowing unauthorized access or payload execution once installed."
  },
  {
    id: 40,
    section: "Section 10: Operating Systems — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Which practice helps protect against ransomware attacks?",
    options: {
      A: "Disabling antivirus",
      B: "Regular data backups",
      C: "Opening all email attachments",
      D: "Using outdated software"
    },
    correctAnswer: "B",
    explanation: "Maintaining regular offline or isolated backups ensures data can be recovered without paying a ransom if ransomware encrypts files."
  },
  {
    id: 41,
    section: "Section 10: Operating Systems — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "A self-replicating malware that spreads without user action, often exploiting network vulnerabilities, is called a:",
    options: {
      A: "Worm",
      B: "Trojan",
      C: "Rootkit",
      D: "Adware"
    },
    correctAnswer: "A",
    explanation: "Unlike Trojans or Viruses, a Computer Worm self-replicates across computer networks autonomously without requiring user interaction."
  },

  // Section 11: Operating Systems — Process Management (42–47)
  {
    id: 42,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Which of the following is NOT a typical process state?",
    options: {
      A: "Ready",
      B: "Running",
      C: "Waiting",
      D: "Compiling"
    },
    correctAnswer: "D",
    explanation: "Standard 5-state process model includes: New, Ready, Running, Waiting (Blocked), and Terminated. Compiling is an external software build step, not an OS process state."
  },
  {
    id: 43,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "The scheduling algorithm that executes processes in the order they arrive is:",
    options: {
      A: "SJF",
      B: "FCFS",
      C: "Round Robin",
      D: "Priority Scheduling"
    },
    correctAnswer: "B",
    explanation: "FCFS (First-Come, First-Served) allocates CPU execution strictly according to arrival queue sequence."
  },
  {
    id: 44,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Given processes P1 (burst=5), P2 (burst=3), P3 (burst=8), all arriving at time 0, executed in order P1→P2→P3 (FCFS). What is P2's waiting time?",
    options: {
      A: "3",
      B: "5",
      C: "8",
      D: "0"
    },
    correctAnswer: "B",
    explanation: "In FCFS, P1 starts at t=0 and runs for 5 units (finishes at t=5). P2 must wait until P1 completes, so P2's waiting time = 5.",
    calculationSteps: [
      "P1 arrives t=0, starts t=0, runs until t=5 -> Waiting time = 0",
      "P2 arrives t=0, starts t=5, runs until t=8 -> Waiting time = 5",
      "P3 arrives t=0, starts t=8, runs until t=16 -> Waiting time = 8"
    ],
    hasMath: true
  },
  {
    id: 45,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Using Shortest Job First (non-preemptive) on P1=6, P2=2, P3=4 (all arrive at time 0), what is the execution order?",
    options: {
      A: "P1, P2, P3",
      B: "P2, P3, P1",
      C: "P3, P2, P1",
      D: "P1, P3, P2"
    },
    correctAnswer: "B",
    explanation: "SJF selects the process with shortest CPU burst time: P2 (burst=2) first, P3 (burst=4) second, P1 (burst=6) last.",
    calculationSteps: [
      "Compare burst times: P2 (2) < P3 (4) < P1 (6)",
      "Execution Order: P2 -> P3 -> P1"
    ],
    hasMath: true
  },
  {
    id: 46,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Round Robin scheduling is best characterized by:",
    options: {
      A: "Processes run to completion once started",
      B: "Each process gets a fixed time quantum before moving to the next",
      C: "Shortest process always runs first",
      D: "Only used in single-user systems"
    },
    correctAnswer: "B",
    explanation: "Round Robin is preemptive scheduling where CPU time is divided into equal time slices (quantums) rotated across active processes."
  },
  {
    id: 47,
    section: "Section 11: Operating Systems — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "A process moves from \"Running\" to \"Waiting\" state typically when:",
    options: {
      A: "Its time quantum expires",
      B: "It requests I/O and must wait for completion",
      C: "It is terminated",
      D: "It is newly created"
    },
    correctAnswer: "B",
    explanation: "When a process initiates an I/O request or event wait, it yields the CPU and transitions to Waiting until the I/O completes."
  },

  // Section 12: Operating Systems — Storage Management / Disk Scheduling (48–52)
  {
    id: 48,
    section: "Section 12: Operating Systems — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Which disk scheduling algorithm services requests strictly in the order they arrive?",
    options: {
      A: "SSTF",
      B: "FCFS",
      C: "SCAN",
      D: "C-LOOK"
    },
    correctAnswer: "B",
    explanation: "FCFS (First-Come, First-Served) disk scheduling services disk I/O requests sequentially as they land in the queue."
  },
  {
    id: 49,
    section: "Section 12: Operating Systems — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "The disk scheduling algorithm that always services the closest request to the current head position is:",
    options: {
      A: "FCFS",
      B: "SSTF (Shortest Seek Time First)",
      C: "SCAN",
      D: "LOOK"
    },
    correctAnswer: "B",
    explanation: "SSTF selects the track request requiring the minimal head movement (seek time) from current position."
  },
  {
    id: 50,
    section: "Section 12: Operating Systems — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Disk head starts at track 50. Requests arrive in this order: 95, then 180. Using FCFS, what is the total head movement (in tracks)?",
    options: {
      A: "130",
      B: "145",
      C: "120",
      D: "135"
    },
    correctAnswer: "A",
    explanation: "Head starts at 50 -> moves to 95 (|95 - 50| = 45) -> moves to 180 (|180 - 95| = 85). Total = 45 + 85 = 130 tracks.",
    calculationSteps: [
      "Movement 1: |95 - 50| = 45 tracks",
      "Movement 2: |180 - 95| = 85 tracks",
      "Total head movement = 45 + 85 = 130 tracks"
    ],
    hasMath: true
  },
  {
    id: 51,
    section: "Section 12: Operating Systems — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "The SCAN algorithm is often called the \"elevator algorithm\" because:",
    options: {
      A: "It moves in one direction, servicing requests, then reverses",
      B: "It always goes to the nearest request",
      C: "It processes requests randomly",
      D: "It only moves upward"
    },
    correctAnswer: "A",
    explanation: "Like an elevator moving between floors, SCAN moves back and forth across the disk surface servicing requests along its current sweep direction."
  },
  {
    id: 52,
    section: "Section 12: Operating Systems — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Which disk scheduling algorithm can lead to \"starvation\" of far-away requests?",
    options: {
      A: "FCFS",
      B: "SSTF",
      C: "SCAN",
      D: "C-SCAN"
    },
    correctAnswer: "B",
    explanation: "SSTF prioritizes nearby requests; if continuous requests arrive close to the head, distant track requests may wait indefinitely (starvation)."
  },

  // Section 13: Discrete Structures — Basic Counting (53–57)
  {
    id: 53,
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "How many different 3-letter arrangements can be made from the letters A, B, C, D (no repetition)?",
    options: {
      A: "12",
      B: "24",
      C: "6",
      D: "64"
    },
    correctAnswer: "B",
    explanation: "Permutation P(4, 3) = 4 × 3 × 2 = 24 arrangements.",
    calculationSteps: [
      "1st position choices: 4",
      "2nd position choices: 3",
      "3rd position choices: 2",
      "Total = 4 × 3 × 2 = 24"
    ],
    hasMath: true
  },
  {
    id: 54,
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "In how many ways can you choose 3 books from a shelf of 7 different books (order doesn't matter)?",
    options: {
      A: "35",
      B: "21",
      C: "210",
      D: "42"
    },
    correctAnswer: "A",
    explanation: "Combination C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35.",
    calculationSteps: [
      "Formula: C(n, k) = n! / (k! * (n - k)!)",
      "C(7, 3) = (7 × 6 × 5) / (3 × 2 × 1)",
      "C(7, 3) = 210 / 6 = 35"
    ],
    hasMath: true
  },
  {
    id: 55,
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "A password consists of 4 digits (0–9), and repetition is allowed. How many possible passwords are there?",
    options: {
      A: "10,000",
      B: "5,040",
      C: "1,000",
      D: "40"
    },
    correctAnswer: "A",
    explanation: "Each digit has 10 options (0 to 9). Total passwords = 10 × 10 × 10 × 10 = 10⁴ = 10,000.",
    hasMath: true
  },
  {
    id: 56,
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "A restaurant offers 3 appetizers, 4 main courses, and 2 desserts. How many different 3-course meals are possible?",
    options: {
      A: "9",
      B: "24",
      C: "20",
      D: "12"
    },
    correctAnswer: "B",
    explanation: "By the Multiplication Rule of counting: 3 × 4 × 2 = 24 different meal combinations.",
    hasMath: true
  },
  {
    id: 57,
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "How many ways can 5 people be arranged in a line?",
    options: {
      A: "25",
      B: "60",
      C: "120",
      D: "100"
    },
    correctAnswer: "C",
    explanation: "Factorial 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.",
    hasMath: true
  },

  // Section 14: Discrete Structures — Set Operations (58–63)
  {
    id: 58,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is A ∪ B?",
    options: {
      A: "{1,2,3,4,5,6,7}",
      B: "{3,4,5}",
      C: "{1,2,6,7}",
      D: "{1,2,3,4,5}"
    },
    correctAnswer: "A",
    explanation: "Union (A ∪ B) combines all unique elements present in either A or B: {1,2,3,4,5,6,7}.",
    calculationSteps: [
      "A = {1, 2, 3, 4, 5}",
      "B = {3, 4, 5, 6, 7}",
      "A ∪ B = {1, 2, 3, 4, 5, 6, 7}"
    ],
    hasMath: true
  },
  {
    id: 59,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is A ∩ B?",
    options: {
      A: "{1,2}",
      B: "{3,4,5}",
      C: "{6,7}",
      D: "{1,2,3,4,5,6,7}"
    },
    correctAnswer: "B",
    explanation: "Intersection (A ∩ B) contains only elements shared in both set A and set B: {3,4,5}.",
    calculationSteps: [
      "Shared elements in both A and B are 3, 4, and 5.",
      "A ∩ B = {3, 4, 5}"
    ],
    hasMath: true
  },
  {
    id: 60,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is A − B?",
    options: {
      A: "{1,2}",
      B: "{6,7}",
      C: "{3,4,5}",
      D: "{1,2,3}"
    },
    correctAnswer: "A",
    explanation: "Difference (A − B) consists of elements belonging to A that are NOT in B. Removing {3,4,5} from A gives {1,2}.",
    calculationSteps: [
      "A = {1, 2, 3, 4, 5}",
      "Remove elements found in B ({3, 4, 5})",
      "Result = {1, 2}"
    ],
    hasMath: true
  },
  {
    id: 61,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is B − A?",
    options: {
      A: "{1,2}",
      B: "{6,7}",
      C: "{3,4,5}",
      D: "{ } (empty set)"
    },
    correctAnswer: "B",
    explanation: "Difference (B − A) consists of elements belonging to B that are NOT in A. Removing {3,4,5} from B leaves {6,7}.",
    calculationSteps: [
      "B = {3, 4, 5, 6, 7}",
      "Remove elements in A ({3, 4, 5})",
      "Result = {6, 7}"
    ],
    hasMath: true
  },
  {
    id: 62,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is A′ (the complement of A)?",
    options: {
      A: "{6,7,8,9,10}",
      B: "{1,2,3,4,5}",
      C: "{ }",
      D: "{1,2,...,10}"
    },
    correctAnswer: "A",
    explanation: "Complement (A′) contains all elements in universal set U that are NOT in A: U − A = {6,7,8,9,10}.",
    calculationSteps: [
      "U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      "A = {1, 2, 3, 4, 5}",
      "A′ = U - A = {6, 7, 8, 9, 10}"
    ],
    hasMath: true
  },
  {
    id: 63,
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U = {1..10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}. What is (A ∪ B)′?",
    options: {
      A: "{8,9,10}",
      B: "{1,2,6,7}",
      C: "{6,7,8,9,10}",
      D: "{ }"
    },
    correctAnswer: "A",
    explanation: "First, A ∪ B = {1,2,3,4,5,6,7}. Then complement (A ∪ B)′ = U − {1..7} = {8,9,10}.",
    calculationSteps: [
      "A ∪ B = {1, 2, 3, 4, 5, 6, 7}",
      "U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      "(A ∪ B)′ = U - {1,2,3,4,5,6,7} = {8, 9, 10}"
    ],
    hasMath: true
  },

  // Section 15: Networking — Protocol, Internet, Addressing (64–69)
  {
    id: 64,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which protocol is used to send email?",
    options: {
      A: "FTP",
      B: "SMTP",
      C: "HTTP",
      D: "SNMP"
    },
    correctAnswer: "B",
    explanation: "SMTP (Simple Mail Transfer Protocol) is the standard internet communication protocol for sending electronic mail."
  },
  {
    id: 65,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "What is the default subnet mask for a Class C IP address?",
    options: {
      A: "255.0.0.0",
      B: "255.255.0.0",
      C: "255.255.255.0",
      D: "255.255.255.255"
    },
    correctAnswer: "C",
    explanation: "Class A default mask = 255.0.0.0 (/8); Class B = 255.255.0.0 (/16); Class C = 255.255.255.0 (/24)."
  },
  {
    id: 66,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which of the following is a valid private IP address?",
    options: {
      A: "8.8.8.8",
      B: "192.168.1.1",
      C: "172.32.0.1",
      D: "200.100.50.1"
    },
    correctAnswer: "B",
    explanation: "RFC 1918 Private Ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, and 192.168.0.0 - 192.168.255.255. 192.168.1.1 is in Class C private range."
  },
  {
    id: 67,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "How many usable host addresses are there in a /24 network?",
    options: {
      A: "256",
      B: "254",
      C: "255",
      D: "253"
    },
    correctAnswer: "B",
    explanation: "A /24 subnet has 2⁸ = 256 total IP addresses. Subtracting 2 reserved addresses (Network ID and Broadcast ID) leaves 254 usable hosts.",
    calculationSteps: [
      "Total IPs = 2⁸ = 256",
      "Network Address (first) = Reserved",
      "Broadcast Address (last) = Reserved",
      "Usable Hosts = 256 - 2 = 254"
    ],
    hasMath: true
  },
  {
    id: 68,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which protocol translates domain names into IP addresses?",
    options: {
      A: "DHCP",
      B: "DNS",
      C: "ARP",
      D: "FTP"
    },
    correctAnswer: "B",
    explanation: "DNS (Domain Name System) translates human-friendly domain names (e.g., example.com) to machine-readable IP addresses."
  },
  {
    id: 69,
    section: "Section 15: Networking — Protocol, Internet, Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which protocol automatically assigns IP addresses to devices on a network?",
    options: {
      A: "DNS",
      B: "DHCP",
      C: "ARP",
      D: "ICMP"
    },
    correctAnswer: "B",
    explanation: "DHCP (Dynamic Host Configuration Protocol) dynamically manages and assigns IP configurations to clients automatically."
  },

  // Section 16: OSI Reference Model (70–74)
  {
    id: 70,
    section: "Section 16: OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "How many layers does the OSI model have?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    correctAnswer: "C",
    explanation: "The OSI model consists of 7 layers: 1-Physical, 2-Data Link, 3-Network, 4-Transport, 5-Session, 6-Presentation, 7-Application."
  },
  {
    id: 71,
    section: "Section 16: OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which OSI layer is responsible for routing and logical addressing?",
    options: {
      A: "Data Link",
      B: "Network",
      C: "Transport",
      D: "Session"
    },
    correctAnswer: "B",
    explanation: "Layer 3 (Network Layer) handles packet forwarding, logical IP addressing, and routing path selection."
  },
  {
    id: 72,
    section: "Section 16: OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "At which OSI layer do switches primarily operate?",
    options: {
      A: "Physical",
      B: "Data Link",
      C: "Network",
      D: "Transport"
    },
    correctAnswer: "B",
    explanation: "Standard Ethernet switches operate at Layer 2 (Data Link Layer) using physical MAC addresses to forward frames."
  },
  {
    id: 73,
    section: "Section 16: OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which layer is responsible for establishing, managing, and terminating sessions between applications?",
    options: {
      A: "Session Layer",
      B: "Presentation Layer",
      C: "Application Layer",
      D: "Transport Layer"
    },
    correctAnswer: "A",
    explanation: "Layer 5 (Session Layer) controls connections/dialogues between computers (session setup, maintenance, tear down)."
  },
  {
    id: 74,
    section: "Section 16: OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Encryption and data formatting occur primarily at which OSI layer?",
    options: {
      A: "Application",
      B: "Presentation",
      C: "Session",
      D: "Transport"
    },
    correctAnswer: "B",
    explanation: "Layer 6 (Presentation Layer) handles data formatting, compression, syntax conversion, and encryption/decryption."
  },

  // Section 17: TCP/IP Model (75–78)
  {
    id: 75,
    section: "Section 17: TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "The TCP/IP model consists of how many layers?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "7"
    },
    correctAnswer: "B",
    explanation: "The standard RFC TCP/IP model has 4 layers: Application, Transport, Internet, and Network Access (Link)."
  },
  {
    id: 76,
    section: "Section 17: TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "Which TCP/IP layer corresponds to the OSI's Network layer?",
    options: {
      A: "Application",
      B: "Transport",
      C: "Internet",
      D: "Network Access"
    },
    correctAnswer: "C",
    explanation: "The Internet Layer in TCP/IP maps directly to Layer 3 (Network Layer) of the OSI reference model."
  },
  {
    id: 77,
    section: "Section 17: TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "TCP differs from UDP mainly because TCP is:",
    options: {
      A: "Connectionless",
      B: "Connection-oriented and reliable",
      C: "Faster but unreliable",
      D: "Used only for streaming"
    },
    correctAnswer: "B",
    explanation: "TCP uses a 3-way handshake to establish connection-oriented, reliable, ordered data delivery with error checking and retransmission."
  },
  {
    id: 78,
    section: "Section 17: TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "Which protocol operates at the Transport layer and is connectionless?",
    options: {
      A: "TCP",
      B: "UDP",
      C: "IP",
      D: "HTTP"
    },
    correctAnswer: "B",
    explanation: "UDP (User Datagram Protocol) is a lightweight, connectionless transport protocol prioritizing speed over guaranteed packet delivery."
  },

  // Section 18: Ethernet Switching (79–82)
  {
    id: 79,
    section: "Section 18: Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "What does a switch use to forward frames to the correct destination port?",
    options: {
      A: "IP address",
      B: "MAC address",
      C: "Port number",
      D: "Subnet mask"
    },
    correctAnswer: "B",
    explanation: "Layer 2 switches maintain a MAC address table mapping hardware MAC addresses to physical switch ports."
  },
  {
    id: 80,
    section: "Section 18: Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "When a switch receives a frame with an unknown destination MAC address, it will:",
    options: {
      A: "Drop the frame",
      B: "Flood the frame to all ports except the source",
      C: "Send it back to the source",
      D: "Store it indefinitely"
    },
    correctAnswer: "B",
    explanation: "Unicast Flooding: If an unknown MAC address is received, the switch floods the frame out of all ports in the VLAN except the ingress port."
  },
  {
    id: 81,
    section: "Section 18: Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "What is the purpose of VLANs in Ethernet switching?",
    options: {
      A: "To increase cable length",
      B: "To logically segment a network into separate broadcast domains",
      C: "To assign IP addresses",
      D: "To encrypt traffic"
    },
    correctAnswer: "B",
    explanation: "VLANs (Virtual Local Area Networks) isolate traffic by segmenting physical switches into logical broadcast domains."
  },
  {
    id: 82,
    section: "Section 18: Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "Which protocol prevents Ethernet switching loops in a network?",
    options: {
      A: "STP (Spanning Tree Protocol)",
      B: "ARP",
      C: "DHCP",
      D: "ICMP"
    },
    correctAnswer: "A",
    explanation: "STP (IEEE 802.1D) detects redundant loops in switched network topologies and blocks redundant paths to prevent broadcast storms."
  },

  // Section 19: Web Development — HTML & CSS (83–87)
  {
    id: 83,
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which HTML tag is used to create a hyperlink?",
    options: {
      A: "<link>",
      B: "<a>",
      C: "<href>",
      D: "<nav>"
    },
    correctAnswer: "B",
    explanation: "The `<a>` (anchor) tag creates hyperlinks with the `href` attribute specifying destination URLs."
  },
  {
    id: 84,
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "In CSS, which property is used to change the text color of an element?",
    options: {
      A: "font-color",
      B: "text-color",
      C: "color",
      D: "background-color"
    },
    correctAnswer: "C",
    explanation: "The `color` property sets foreground text color in CSS."
  },
  {
    id: 85,
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which CSS positioning value removes an element from normal document flow and positions it relative to its nearest positioned ancestor?",
    options: {
      A: "static",
      B: "relative",
      C: "absolute",
      D: "inherit"
    },
    correctAnswer: "C",
    explanation: "`position: absolute` removes the element from normal layout flow, positioning it relative to its closest non-static ancestor."
  },
  {
    id: 86,
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which HTML5 semantic element is used to define the main content container of a page?",
    options: {
      A: "<div> only",
      B: "<main>",
      C: "<span>",
      D: "<content>"
    },
    correctAnswer: "B",
    explanation: "The HTML5 `<main>` tag defines the dominant content unique to the document."
  },
  {
    id: 87,
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which of the following is NOT part of the CSS box model?",
    options: {
      A: "Margin",
      B: "Border",
      C: "Padding",
      D: "Font-family"
    },
    correctAnswer: "D",
    explanation: "The CSS box model consists of Content, Padding, Border, and Margin. Font-family is a typography styling property."
  },

  // Section 20: Web Development — JavaScript & PHP (88–92)
  {
    id: 88,
    section: "Section 20: Web Development — JavaScript & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: {
      A: "var",
      B: "let",
      C: "define",
      D: "global"
    },
    correctAnswer: "B",
    explanation: "`let` (and `const`) declares variables scoped strictly to the enclosing block, unlike function-scoped `var`."
  },
  {
    id: 89,
    section: "Section 20: Web Development — JavaScript & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "In JavaScript, which method converts a JSON string into a JavaScript object?",
    options: {
      A: "JSON.stringify()",
      B: "JSON.parse()",
      C: "Object.toJSON()",
      D: "parseJSON()"
    },
    correctAnswer: "B",
    explanation: "`JSON.parse()` deserializes a JSON formatted string into a JavaScript object/value. `JSON.stringify()` converts objects into JSON strings."
  },
  {
    id: 90,
    section: "Section 20: Web Development — JavaScript & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "In PHP, which symbol precedes all variable names?",
    options: {
      A: "#",
      B: "&",
      C: "$",
      D: "@"
    },
    correctAnswer: "C",
    explanation: "In PHP, all variables start with a dollar sign `$`, followed by the variable name (e.g., `$age`)."
  },
  {
    id: 91,
    section: "Section 20: Web Development — JavaScript & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "Which PHP statement/function is used to output text to the browser?",
    options: {
      A: "print_r() only",
      B: "echo",
      C: "display()",
      D: "write()"
    },
    correctAnswer: "B",
    explanation: "`echo` is a language construct in PHP used to output one or more strings to the response output stream."
  },
  {
    id: 92,
    section: "Section 20: Web Development — JavaScript & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "What does the following PHP statement do?\n`if ($age >= 18) { echo \"Adult\"; } else { echo \"Minor\"; }`",
    options: {
      A: "Always prints \"Adult\"",
      B: "Checks if age is 18 or older and prints accordingly",
      C: "Causes a syntax error",
      D: "Prints both values"
    },
    correctAnswer: "B",
    explanation: "Evaluates condition `$age >= 18`. If true, outputs 'Adult'; otherwise outputs 'Minor'."
  },

  // Section 21: HCI — Design Stories, User Research & Personas (93–96)
  {
    id: 93,
    section: "Section 21: HCI — Design Stories, User Research & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "A persona in UX design represents:",
    options: {
      A: "A real named individual user",
      B: "A fictional archetype representing a user group's goals and behaviors",
      C: "The system's database schema",
      D: "A wireframe layout"
    },
    correctAnswer: "B",
    explanation: "A persona is a research-informed fictional archetype that synthesizes core characteristics, needs, and behavioral patterns of target user segments."
  },
  {
    id: 94,
    section: "Section 21: HCI — Design Stories, User Research & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "User research methods commonly include:",
    options: {
      A: "Interviews and surveys",
      B: "Compiling code",
      C: "Writing unit tests",
      D: "Database normalization"
    },
    correctAnswer: "A",
    explanation: "User research collects qualitative and quantitative insights using techniques such as interviews, surveys, usability tests, and field observations."
  },
  {
    id: 95,
    section: "Section 21: HCI — Design Stories, User Research & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "A \"design story\" (or user story) in HCI/UX typically follows the format:",
    options: {
      A: "\"As a [user], I want [goal] so that [reason]\"",
      B: "A technical specification document only",
      C: "A list of database tables",
      D: "A network diagram"
    },
    correctAnswer: "A",
    explanation: "Standard Agile/UX User Story format: 'As a [role], I want [action] so that [value/benefit]' to keep user value central."
  },
  {
    id: 96,
    section: "Section 21: HCI — Design Stories, User Research & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "The main purpose of user research early in the design process is to:",
    options: {
      A: "Finalize the visual color scheme",
      B: "Understand user needs, behaviors, and pain points before designing solutions",
      C: "Write the final code",
      D: "Test server performance"
    },
    correctAnswer: "B",
    explanation: "Early discovery research ensures team designs solve real user problems, avoiding costly redesigns after development."
  },

  // Section 22: HCI — Design Rules & Heuristics (97–100)
  {
    id: 97,
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Nielsen's usability heuristics include which of the following?",
    options: {
      A: "Visibility of system status",
      B: "Maximum use of jargon",
      C: "Hiding all navigation",
      D: "Random error messages"
    },
    correctAnswer: "A",
    explanation: "Heuristic #1 of Jakob Nielsen's 10 Usability Heuristics: 'Visibility of system status' (system should always keep users informed through appropriate feedback)."
  },
  {
    id: 98,
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Which design principle states that a system should provide clear feedback so users always know what is happening?",
    options: {
      A: "Consistency",
      B: "Visibility of system status",
      C: "Error prevention",
      D: "Aesthetic minimalism"
    },
    correctAnswer: "B",
    explanation: "Visibility of system status guarantees that system actions (loading spinners, success messages, progress bars) keep users continuously informed."
  },
  {
    id: 99,
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "\"Consistency and standards\" as a usability heuristic means:",
    options: {
      A: "Every screen should look completely different",
      B: "Users shouldn't have to wonder whether different words or actions mean the same thing",
      C: "Icons should change meaning per screen",
      D: "Menus should be hidden"
    },
    correctAnswer: "B",
    explanation: "Consistency and standards dictates that platform conventions and vocabulary remain uniform across all interfaces so users don't face cognitive friction."
  },
  {
    id: 100,
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Which of the following is an example of \"error prevention\" in interface design?",
    options: {
      A: "Allowing users to submit forms with no validation",
      B: "Disabling a submit button until required fields are filled",
      C: "Displaying cryptic error codes only",
      D: "Removing all confirmation dialogs"
    },
    correctAnswer: "B",
    explanation: "Error prevention designs out error-prone conditions (e.g., input masks, disabled submit buttons until inputs pass validation, confirmation prompts)."
  }
];
