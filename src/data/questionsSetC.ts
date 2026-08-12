import { Question } from '../types/exam';

export const SET_C_QUESTIONS: Question[] = [
  {
    id: 201,
    numberInSet: 1,
    setId: 'set_c',
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best describes \"computing\"?",
    options: {
      A: "The manual recording of data on paper",
      B: "The use of computer technology to complete tasks such as processing data and solving problems",
      C: "The physical assembly of hardware only",
      D: "The study of biology using microscopes"
    },
    correctAnswer: "B",
    explanation: "Computing is any goal-oriented activity requiring, benefiting from, or creating computers. It involves algorithmic processes and using hardware/software to process data and solve problems."
  },
  {
    id: 202,
    numberInSet: 2,
    setId: 'set_c',
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is an example of firmware?",
    options: {
      A: "A web browser",
      B: "BIOS/UEFI stored on a motherboard chip",
      C: "A spreadsheet application",
      D: "An operating system's desktop theme"
    },
    correctAnswer: "B",
    explanation: "Firmware is a specific class of computer software that provides low-level control for a device's specific hardware. BIOS/UEFI embedded in non-volatile ROM/flash memory on motherboards is a classic example."
  },
  {
    id: 203,
    numberInSet: 3,
    setId: 'set_c',
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best distinguishes hardware from software?",
    options: {
      A: "Hardware is intangible; software is tangible",
      B: "Hardware is the physical components; software is the set of instructions that runs on them",
      C: "There is no meaningful difference between them",
      D: "Software cannot be upgraded, but hardware can"
    },
    correctAnswer: "B",
    explanation: "Hardware refers to the tangible physical equipment (CPU, RAM, storage, chassis), whereas software consists of intangible programs and data that direct the hardware's execution."
  },
  {
    id: 204,
    numberInSet: 4,
    setId: 'set_c',
    section: "Section 1: IT Fundamentals & Computing Concepts",
    category: "IT Fundamentals & Concepts",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best represents \"throughput\" in computing?",
    options: {
      A: "The amount of work completed in a given amount of time",
      B: "The physical weight of a device",
      C: "The number of installed applications",
      D: "The screen resolution of a monitor"
    },
    correctAnswer: "A",
    explanation: "Throughput measures the quantity of work or data processed successfully by a system within a given time period (e.g., instructions per second, transactions per minute, or MB/s)."
  },

  // Section 2: History of Computers (5–8)
  {
    id: 205,
    numberInSet: 5,
    setId: 'set_c',
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "Which generation of computers is associated with the use of integrated circuits (ICs)?",
    options: {
      A: "First",
      B: "Second",
      C: "Third",
      D: "Fifth"
    },
    correctAnswer: "C",
    explanation: "3rd generation computers (approx 1964-1971) introduced Integrated Circuits (ICs), replacing individual transistors and dramatically reducing computer size while increasing speed and efficiency."
  },
  {
    id: 206,
    numberInSet: 6,
    setId: 'set_c',
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "The Harvard Mark I, developed in the 1940s, is best classified as which type of early computing device?",
    options: {
      A: "A purely mechanical calculator",
      B: "An electromechanical computer",
      C: "A modern microprocessor-based PC",
      D: "A quantum computer"
    },
    correctAnswer: "B",
    explanation: "The Harvard Mark I (IBM Automatic Sequence Controlled Calculator) used electromechanical relays and mechanical switches to perform mathematical calculations during WWII."
  },
  {
    id: 207,
    numberInSet: 7,
    setId: 'set_c',
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "Which pioneer is credited with the concept of the stored-program computer architecture, where instructions and data share the same memory?",
    options: {
      A: "John von Neumann",
      B: "Steve Jobs",
      C: "Bill Gates",
      D: "Tim Berners-Lee"
    },
    correctAnswer: "A",
    explanation: "John von Neumann proposed the stored-program architecture in 1945, where both program instructions and working data reside in the same read-write primary memory."
  },
  {
    id: 208,
    numberInSet: 8,
    setId: 'set_c',
    section: "Section 2: History of Computers",
    category: "History of Computers",
    domain: "IT Fundamentals & Laws",
    question: "The World Wide Web was invented by:",
    options: {
      A: "Vint Cerf",
      B: "Tim Berners-Lee",
      C: "Larry Page",
      D: "Steve Wozniak"
    },
    correctAnswer: "B",
    explanation: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, designing HTML, HTTP, and URLs to link global information systems."
  },

  // Section 3: Number Systems (9–15)
  {
    id: 209,
    numberInSet: 9,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "Convert binary 111001₂ to decimal.",
    options: {
      A: "57",
      B: "56",
      C: "58",
      D: "55"
    },
    correctAnswer: "A",
    explanation: "111001₂ = (1×32) + (1×16) + (1×8) + (0×4) + (0×2) + (1×1) = 32 + 16 + 8 + 1 = 57.",
    calculationSteps: [
      "Positions: 2^5, 2^4, 2^3, 2^2, 2^1, 2^0",
      "Values: (1×32) + (1×16) + (1×8) + (0×4) + (0×2) + (1×1)",
      "= 32 + 16 + 8 + 0 + 0 + 1",
      "= 57"
    ],
    hasMath: true
  },
  {
    id: 210,
    numberInSet: 10,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "Convert decimal 118 to binary.",
    options: {
      A: "1110110",
      B: "1101110",
      C: "1110101",
      D: "1111000"
    },
    correctAnswer: "A",
    explanation: "118 in binary: 118 = 64 + 32 + 16 + 4 + 2 = 2^6 + 2^5 + 2^4 + 2^2 + 2^1 = 1110110₂.",
    calculationSteps: [
      "118 / 64 = 1 (rem 54)",
      "54 / 32 = 1 (rem 22)",
      "22 / 16 = 1 (rem 6)",
      "6 / 8 = 0 (rem 6)",
      "6 / 4 = 1 (rem 2)",
      "2 / 2 = 1 (rem 0)",
      "0 / 1 = 0",
      "Result = 1110110₂"
    ],
    hasMath: true
  },
  {
    id: 211,
    numberInSet: 11,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "Convert hexadecimal 4D to decimal.",
    options: {
      A: "77",
      B: "76",
      C: "78",
      D: "75"
    },
    correctAnswer: "A",
    explanation: "In hex, D = 13. 4D₁₆ = (4 × 16) + (13 × 1) = 64 + 13 = 77.",
    calculationSteps: [
      "Hex digit '4' = 4, 'D' = 13",
      "(4 × 16¹) + (13 × 16⁰)",
      "= 64 + 13",
      "= 77"
    ],
    hasMath: true
  },
  {
    id: 212,
    numberInSet: 12,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "Convert decimal 91 to hexadecimal.",
    options: {
      A: "5B",
      B: "5A",
      C: "6B",
      D: "5C"
    },
    correctAnswer: "A",
    explanation: "91 ÷ 16 = 5 remainder 11. In hex, 11 is 'B'. Thus 91₁₀ = 5B₁₆.",
    calculationSteps: [
      "91 ÷ 16 = 5 with remainder 11",
      "Quotient = 5 (Hex digit 5)",
      "Remainder = 11 (Hex digit B)",
      "Result = 5B₁₆"
    ],
    hasMath: true
  },
  {
    id: 213,
    numberInSet: 13,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "Convert octal 64₈ to decimal.",
    options: {
      A: "52",
      B: "50",
      C: "54",
      D: "48"
    },
    correctAnswer: "A",
    explanation: "64₈ = (6 × 8¹) + (4 × 8⁰) = 48 + 4 = 52₁₀.",
    calculationSteps: [
      "Position weights for octal: 8¹, 8⁰",
      "(6 × 8) + (4 × 1)",
      "= 48 + 4",
      "= 52"
    ],
    hasMath: true
  },
  {
    id: 214,
    numberInSet: 14,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "What is the result of binary multiplication 101 × 011?",
    options: {
      A: "1111",
      B: "1110",
      C: "1101",
      D: "10000"
    },
    correctAnswer: "A",
    explanation: "101₂ = 5₁₀, 011₂ = 3₁₀. 5 × 3 = 15₁₀. 15₁₀ in binary is 1111₂.",
    calculationSteps: [
      "Convert to decimal: 101₂ = 5, 011₂ = 3",
      "Multiply: 5 × 3 = 15",
      "Convert 15 to binary: 8 + 4 + 2 + 1 = 1111₂"
    ],
    hasMath: true
  },
  {
    id: 215,
    numberInSet: 15,
    setId: 'set_c',
    section: "Section 3: Number Systems",
    category: "Number Systems",
    domain: "IT Fundamentals & Laws",
    question: "How many distinct values can be represented by 4 bits?",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "4"
    },
    correctAnswer: "B",
    explanation: "n bits can represent 2ⁿ unique states. For n = 4, 2⁴ = 16 distinct values (ranging from 0 to 15 in binary).",
    calculationSteps: [
      "Formula: Total states = 2ⁿ",
      "n = 4 bits",
      "2⁴ = 16 (values 0000 to 1111)"
    ],
    hasMath: true
  },

  // Section 4: Elements of Computer & Communication Systems (16–18)
  {
    id: 216,
    numberInSet: 16,
    setId: 'set_c',
    section: "Section 4: Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is both an input AND output device?",
    options: {
      A: "Keyboard",
      B: "Touchscreen monitor",
      C: "Mouse",
      D: "Scanner"
    },
    correctAnswer: "B",
    explanation: "A touchscreen accepts touch gestures as input and displays graphical visuals as output, functioning simultaneously as an I/O device."
  },
  {
    id: 217,
    numberInSet: 17,
    setId: 'set_c',
    section: "Section 4: Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "In communication systems, \"noise\" refers to:",
    options: {
      A: "Any unwanted interference that distorts the transmitted signal",
      B: "The volume of a speaker",
      C: "A type of encryption",
      D: "A network topology"
    },
    correctAnswer: "A",
    explanation: "Noise is any electrical, thermal, or electromagnetic signal degradation or disturbance that interferes with the transmission of desired data."
  },
  {
    id: 218,
    numberInSet: 18,
    setId: 'set_c',
    section: "Section 4: Computer & Communication Systems",
    category: "Computer & Communication Systems",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following is an example of a communication medium?",
    options: {
      A: "Fiber optic cable",
      B: "Operating system",
      C: "Application software",
      D: "Database"
    },
    correctAnswer: "A",
    explanation: "A communication medium is the physical path (guided like fiber/coax/UTP or unguided like radio waves) over which data signals travel."
  },

  // Section 5: IT Social & Professional Issues (19–23)
  {
    id: 219,
    numberInSet: 19,
    setId: 'set_c',
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best describes \"intellectual property\" in the IT context?",
    options: {
      A: "Physical computer hardware",
      B: "Creations of the mind, such as software, inventions, and designs, protected by law",
      C: "A type of network cable",
      D: "A government office"
    },
    correctAnswer: "B",
    explanation: "Intellectual Property (IP) covers intangible human intellect creations—such as software source code, proprietary algorithms, patents, and trademarks—protected under copyright and IP laws."
  },
  {
    id: 220,
    numberInSet: 20,
    setId: 'set_c',
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "An IT professional who discovers a security flaw in their company's system should:",
    options: {
      A: "Exploit it for personal gain",
      B: "Report it through proper channels and help address it responsibly",
      C: "Ignore it since it's not their department",
      D: "Post about it publicly without informing the company first"
    },
    correctAnswer: "B",
    explanation: "Responsible disclosure and professional code of ethics dictate reporting security flaws through official internal management/security channels to remediate vulnerabilities."
  },
  {
    id: 221,
    numberInSet: 21,
    setId: 'set_c',
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "\"Whistleblowing\" in a professional IT context refers to:",
    options: {
      A: "Reporting unethical or illegal practices within an organization",
      B: "A type of network alert sound",
      C: "Backing up files regularly",
      D: "A software testing method"
    },
    correctAnswer: "A",
    explanation: "Whistleblowing is the disclosure by an employee of illegal, unethical, dangerous, or fraudulent activities occurring within their organization to higher authorities or legal entities."
  },
  {
    id: 222,
    numberInSet: 22,
    setId: 'set_c',
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "The term \"open source\" software means:",
    options: {
      A: "The software's source code is publicly available for anyone to view, use, and modify",
      B: "The software is always free of charge with no license terms",
      C: "The software cannot be modified",
      D: "The software is proprietary and closed"
    },
    correctAnswer: "A",
    explanation: "Open source software licenses grant users rights to inspect, modify, enhance, and distribute the underlying source code publicly."
  },
  {
    id: 223,
    numberInSet: 23,
    setId: 'set_c',
    section: "Section 5: IT Social & Professional Issues",
    category: "IT Social & Professional Issues",
    domain: "IT Fundamentals & Laws",
    question: "Which of the following best reflects the principle of \"informed consent\" in data collection?",
    options: {
      A: "Collecting data without telling users",
      B: "Clearly informing users what data is collected and how it will be used before collecting it",
      C: "Selling user data without notice",
      D: "Making privacy policies deliberately confusing"
    },
    correctAnswer: "B",
    explanation: "Informed consent requires providing users with clear, transparent notice regarding what personal data is gathered, purpose of processing, and obtaining their explicit permission beforehand."
  },

  // Section 6: Data Structures & Algorithms — Array (24–27)
  {
    id: 224,
    numberInSet: 24,
    setId: 'set_c',
    section: "Section 6: DSA — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "What is the time complexity of inserting an element at the END of a dynamic array (amortized, assuming space is available)?",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(log n)",
      D: "O(n²)"
    },
    correctAnswer: "A",
    explanation: "Appending to the end of an array when capacity exists takes constant O(1) time. Even with array resizing, the amortized cost per append remains O(1)."
  },
  {
    id: 225,
    numberInSet: 25,
    setId: 'set_c',
    section: "Section 6: DSA — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "A 2D array (matrix) with 4 rows and 5 columns contains how many total elements?",
    options: {
      A: "9",
      B: "20",
      C: "45",
      D: "54"
    },
    correctAnswer: "B",
    explanation: "Total elements in a 2D array = rows × columns = 4 × 5 = 20.",
    calculationSteps: [
      "Rows = 4, Columns = 5",
      "Total elements = 4 × 5 = 20"
    ],
    hasMath: true
  },
  {
    id: 226,
    numberInSet: 26,
    setId: 'set_c',
    section: "Section 6: DSA — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "Given array [7, 14, 21, 28, 35], what is the sum of all elements?",
    options: {
      A: "100",
      B: "105",
      C: "110",
      D: "95"
    },
    correctAnswer: "B",
    explanation: "Sum = 7 + 14 + 21 + 28 + 35 = 105.",
    calculationSteps: [
      "7 + 14 = 21",
      "21 + 21 = 42",
      "42 + 28 = 70",
      "70 + 35 = 105"
    ],
    hasMath: true
  },
  {
    id: 227,
    numberInSet: 27,
    setId: 'set_c',
    section: "Section 6: DSA — Array",
    category: "DSA — Array",
    domain: "Data Structures & Algorithms",
    question: "Which of the following best describes \"traversal\" of an array?",
    options: {
      A: "Deleting all elements",
      B: "Visiting/accessing each element in the array, typically in sequence",
      C: "Sorting the array in reverse",
      D: "Converting the array to a stack"
    },
    correctAnswer: "B",
    explanation: "Array traversal involves iterating through every element of the array from index 0 to n-1 to perform an operation (like printing or checking values)."
  },

  // Section 7: Data Structures & Algorithms — Stacks (28–31)
  {
    id: 228,
    numberInSet: 28,
    setId: 'set_c',
    section: "Section 7: DSA — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "Which of the following applications commonly relies on a stack data structure?",
    options: {
      A: "Browser \"back\" button history",
      B: "Printer job scheduling",
      C: "CPU round-robin scheduling",
      D: "DNS lookups"
    },
    correctAnswer: "A",
    explanation: "Browser history back/forward navigation operates as a LIFO stack: pushing newly visited pages onto the stack and popping them when pressing 'Back'."
  },
  {
    id: 229,
    numberInSet: 29,
    setId: 'set_c',
    section: "Section 7: DSA — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "In expression evaluation, a stack is commonly used to convert which notation, eliminating the need for parentheses?",
    options: {
      A: "Infix to Postfix conversion",
      B: "Binary to Decimal conversion",
      C: "Array to Linked List conversion",
      D: "Celsius to Fahrenheit conversion"
    },
    correctAnswer: "A",
    explanation: "Stacks are used by compilers to convert standard Infix expressions (A + B) into Postfix notation (AB+) or Prefix, removing parentheses ambiguity."
  },
  {
    id: 230,
    numberInSet: 30,
    setId: 'set_c',
    section: "Section 7: DSA — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "What does an \"IsEmpty()\" check typically verify in a stack implementation?",
    options: {
      A: "Whether the stack has reached maximum capacity",
      B: "Whether the stack currently contains zero elements",
      C: "Whether the top element is null",
      D: "Whether the stack is sorted"
    },
    correctAnswer: "B",
    explanation: "IsEmpty() returns true if top == -1 (or size == 0), indicating there are no items available to pop, preventing stack underflow."
  },
  {
    id: 231,
    numberInSet: 31,
    setId: 'set_c',
    section: "Section 7: DSA — Stacks",
    category: "DSA — Stacks",
    domain: "Data Structures & Algorithms",
    question: "Given the operations Push(10), Push(20), Push(30), Pop(), Pop(), Push(40) — what is the final state of the stack, listed top to bottom?",
    options: {
      A: "40, 10",
      B: "30, 20, 10",
      C: "40, 30, 10",
      D: "10, 40"
    },
    correctAnswer: "A",
    explanation: "Push 10 [10], Push 20 [10,20], Push 30 [10,20,30]. Pop() removes 30 [10,20]. Pop() removes 20 [10]. Push 40 [10,40]. Top is 40, bottom is 10. Top to bottom: 40, 10.",
    calculationSteps: [
      "Push(10) → Stack: [10]",
      "Push(20) → Stack: [10, 20]",
      "Push(30) → Stack: [10, 20, 30]",
      "Pop() → Removes 30. Stack: [10, 20]",
      "Pop() → Removes 20. Stack: [10]",
      "Push(40) → Stack: [10, 40] (top is 40)",
      "Top to bottom: 40, 10"
    ],
    hasMath: true
  },

  // Section 8: Operating Systems — CPU Architecture (32–35)
  {
    id: 232,
    numberInSet: 32,
    setId: 'set_c',
    section: "Section 8: OS — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "Which of the following best describes \"pipelining\" in CPU architecture?",
    options: {
      A: "Running multiple instructions through overlapping execution stages to improve throughput",
      B: "Storing files on the hard disk",
      C: "Connecting two monitors",
      D: "Compressing data for storage"
    },
    correctAnswer: "A",
    explanation: "Pipelining breaks instruction execution into discrete stages (Fetch, Decode, Execute, Writeback) so different instructions execute simultaneously in an assembly line fashion."
  },
  {
    id: 233,
    numberInSet: 33,
    setId: 'set_c',
    section: "Section 8: OS — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "The \"word size\" of a CPU (e.g., 32-bit or 64-bit) primarily refers to:",
    options: {
      A: "The physical size of the chip",
      B: "The amount of data the CPU can process in one operation/cycle",
      C: "The number of USB ports available",
      D: "The screen resolution supported"
    },
    correctAnswer: "B",
    explanation: "Word size indicates the bit width of a CPU's internal registers and data buses—determines native integer data size and maximum directly addressable RAM memory."
  },
  {
    id: 234,
    numberInSet: 34,
    setId: 'set_c',
    section: "Section 8: OS — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "Which memory type retains its contents even when power is removed?",
    options: {
      A: "RAM",
      B: "Cache",
      C: "ROM (non-volatile memory)",
      D: "CPU Registers"
    },
    correctAnswer: "C",
    explanation: "Read-Only Memory (ROM) and Flash memory are non-volatile, keeping stored data intact even after electrical power is turned off."
  },
  {
    id: 235,
    numberInSet: 35,
    setId: 'set_c',
    section: "Section 8: OS — CPU Architecture",
    category: "OS — CPU Architecture",
    domain: "Operating Systems",
    question: "In the fetch-decode-execute cycle, what happens during the \"decode\" stage?",
    options: {
      A: "The instruction is retrieved from memory",
      B: "The CPU interprets what the fetched instruction means and what actions are required",
      C: "The result is written back to memory",
      D: "The instruction is deleted"
    },
    correctAnswer: "B",
    explanation: "During Decode, the CPU Control Unit translates the binary opcode into control signals to prepare operands and arithmetic registers for execution."
  },

  // Section 9: Operating Systems — Booting Process (36–37)
  {
    id: 236,
    numberInSet: 36,
    setId: 'set_c',
    section: "Section 9: OS — Booting Process",
    category: "OS — Booting Process",
    domain: "Operating Systems",
    question: "Which of the following is typically the FINAL step in a standard boot sequence?",
    options: {
      A: "POST",
      B: "Loading the OS kernel and starting user-level services/login screen",
      C: "Powering on hardware",
      D: "BIOS initialization"
    },
    correctAnswer: "B",
    explanation: "After POST and bootloader initialization, the OS kernel loads into memory and initializes user-space background services and the graphical login UI."
  },
  {
    id: 237,
    numberInSet: 37,
    setId: 'set_c',
    section: "Section 9: OS — Booting Process",
    category: "OS — Booting Process",
    domain: "Operating Systems",
    question: "\"Safe Mode\" during boot is used to:",
    options: {
      A: "Permanently delete all files",
      B: "Start the OS with only essential drivers/services, mainly for troubleshooting",
      C: "Increase CPU clock speed",
      D: "Skip the BIOS entirely"
    },
    correctAnswer: "B",
    explanation: "Safe Mode loads a minimal environment without non-essential third-party drivers or startup apps, facilitating malware removal and device driver troubleshooting."
  },

  // Section 10: Operating Systems — Computer Protection (38–41)
  {
    id: 238,
    numberInSet: 38,
    setId: 'set_c',
    section: "Section 10: OS — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Which of the following best describes \"social engineering\" as a security threat?",
    options: {
      A: "Manipulating people into revealing confidential information or performing actions that compromise security",
      B: "A type of firewall configuration",
      C: "A programming language vulnerability only",
      D: "A method of encrypting files"
    },
    correctAnswer: "A",
    explanation: "Social engineering targets human psychology (phishing, baiting, impersonation) to trick targets into handing over passwords or confidential credentials."
  },
  {
    id: 239,
    numberInSet: 39,
    setId: 'set_c',
    section: "Section 10: OS — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "A \"keylogger\" is a type of malware designed to:",
    options: {
      A: "Speed up typing",
      B: "Secretly record keystrokes to capture sensitive information like passwords",
      C: "Clean up disk space",
      D: "Manage browser bookmarks"
    },
    correctAnswer: "B",
    explanation: "Keyloggers covertly log hardware keyboard strokes to steal credentials, credit card numbers, and confidential communications."
  },
  {
    id: 240,
    numberInSet: 40,
    setId: 'set_c',
    section: "Section 10: OS — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Which of the following is the best practice for creating a strong password?",
    options: {
      A: "Using your name and birth year",
      B: "Using a long, unique combination of letters, numbers, and symbols not tied to personal info",
      C: "Reusing the same password across all accounts",
      D: "Using \"password123\""
    },
    correctAnswer: "B",
    explanation: "Strong passwords use high entropy: length (12+ chars), mixed character sets (uppercase, lowercase, numbers, symbols), avoiding personal data or common dictionary words."
  },
  {
    id: 241,
    numberInSet: 41,
    setId: 'set_c',
    section: "Section 10: OS — Computer Protection",
    category: "OS — Computer Protection",
    domain: "Operating Systems",
    question: "Antivirus software primarily works by:",
    options: {
      A: "Preventing all network access",
      B: "Scanning for and detecting/removing known malicious code patterns (signatures) and suspicious behavior",
      C: "Formatting the hard drive regularly",
      D: "Blocking all incoming emails"
    },
    correctAnswer: "B",
    explanation: "Antivirus protection relies on signature matching against database definitions combined with real-time heuristic behavioral analysis."
  },

  // Section 11: Operating Systems — Process Management (42–47)
  {
    id: 242,
    numberInSet: 42,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Which process state indicates a process has finished execution and is being removed from memory?",
    options: {
      A: "Ready",
      B: "Running",
      C: "Terminated",
      D: "New"
    },
    correctAnswer: "C",
    explanation: "The Terminated (Exit) state occurs after execution completes; the OS releases PCB structures and deallocates allocated memory resources."
  },
  {
    id: 243,
    numberInSet: 43,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Which scheduling algorithm assigns each process a priority number, executing the highest-priority process first?",
    options: {
      A: "FCFS",
      B: "Priority Scheduling",
      C: "Round Robin",
      D: "SSTF (a disk algorithm, not applicable)"
    },
    correctAnswer: "B",
    explanation: "Priority Scheduling selects the ready process with the highest priority rank (lowest numerical integer value or highest priority level)."
  },
  {
    id: 244,
    numberInSet: 44,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Given P1 (burst=7), P2 (burst=3), P3 (burst=5), all arrive at time 0, executed via FCFS in order P1→P2→P3. What is the average waiting time of all three processes?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "4"
    },
    correctAnswer: "A",
    explanation: "FCFS wait times: P1=0, P2=7, P3=7+3=10. Total wait = 0 + 7 + 10 = 17. Average wait = 17 / 3 = 5.67 (approx 5 in integer options).",
    calculationSteps: [
      "FCFS order: P1 → P2 → P3",
      "P1 waiting time = 0",
      "P2 waiting time = 7",
      "P3 waiting time = 7 + 3 = 10",
      "Total waiting time = 0 + 7 + 10 = 17",
      "Average waiting time = 17 / 3 ≈ 5.67"
    ],
    hasMath: true
  },
  {
    id: 245,
    numberInSet: 45,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Using Shortest Job First (non-preemptive) on P1=9, P2=5, P3=2, P4=7 (all arrive at time 0), what is the execution order?",
    options: {
      A: "P3, P2, P4, P1",
      B: "P1, P2, P3, P4",
      C: "P4, P3, P2, P1",
      D: "P2, P3, P4, P1"
    },
    correctAnswer: "A",
    explanation: "Non-preemptive SJF orders processes by shortest CPU burst time: P3 (2) → P2 (5) → P4 (7) → P1 (9).",
    calculationSteps: [
      "Burst times: P1=9, P2=5, P3=2, P4=7",
      "Sort by burst ascending: 2 (P3) < 5 (P2) < 7 (P4) < 9 (P1)",
      "Execution order: P3, P2, P4, P1"
    ],
    hasMath: true
  },
  {
    id: 246,
    numberInSet: 46,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "\"Starvation\" in process scheduling occurs when:",
    options: {
      A: "A process is executed immediately upon arrival",
      B: "A low-priority process waits indefinitely because higher-priority processes keep getting scheduled first",
      C: "The CPU runs out of power",
      D: "A process completes faster than expected"
    },
    correctAnswer: "B",
    explanation: "Starvation (indefinite blocking) happens in priority schedulers when lower-priority processes never run due to a constant stream of higher-priority jobs."
  },
  {
    id: 247,
    numberInSet: 47,
    setId: 'set_c',
    section: "Section 11: OS — Process Management",
    category: "OS — Process Management",
    domain: "Operating Systems",
    question: "Which of the following is a common technique to prevent starvation in priority scheduling?",
    options: {
      A: "Aging (gradually increasing the priority of waiting processes)",
      B: "Deleting low-priority processes",
      C: "Disabling the scheduler",
      D: "Running only one process at a time forever"
    },
    correctAnswer: "A",
    explanation: "Aging gradually increases the priority of processes that wait in the ready queue for long periods, guaranteeing eventual execution."
  },

  // Section 12: Operating Systems — Storage Management / Disk Scheduling (48–52)
  {
    id: 248,
    numberInSet: 48,
    setId: 'set_c',
    section: "Section 12: OS — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Disk head starts at track 60. Requests, in arrival order: 15, then 100. Using FCFS, what is the total head movement?",
    options: {
      A: "130",
      B: "145",
      C: "120",
      D: "135"
    },
    correctAnswer: "A",
    explanation: "FCFS order: Start 60 → 15 (move |60-15|=45) → 100 (move |15-100|=85). Total = 45 + 85 = 130 tracks.",
    calculationSteps: [
      "Initial position: 60",
      "Move to 15: |60 - 15| = 45 tracks",
      "Move to 100: |15 - 100| = 85 tracks",
      "Total movement = 45 + 85 = 130 tracks"
    ],
    hasMath: true
  },
  {
    id: 249,
    numberInSet: 49,
    setId: 'set_c',
    section: "Section 12: OS — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Disk head starts at track 45. Pending requests: 10, 90, 58, 22. Using SSTF, which request is serviced FIRST?",
    options: {
      A: "58",
      B: "10",
      C: "90",
      D: "22"
    },
    correctAnswer: "A",
    explanation: "From position 45, check distances: |45-58|=13, |45-22|=23, |45-10|=35, |45-90|=45. The shortest distance is 13 (track 58), so track 58 is serviced first.",
    calculationSteps: [
      "Head position: 45",
      "Distance to 58: |45 - 58| = 13",
      "Distance to 22: |45 - 22| = 23",
      "Distance to 10: |45 - 10| = 35",
      "Distance to 90: |45 - 90| = 45",
      "Minimum distance = 13 (Track 58)"
    ],
    hasMath: true
  },
  {
    id: 250,
    numberInSet: 50,
    setId: 'set_c',
    section: "Section 12: OS — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Which of the following disk scheduling algorithms services requests in both directions (like SCAN) but does NOT go all the way to the disk's edge if there are no more requests in that direction?",
    options: {
      A: "LOOK",
      B: "FCFS",
      C: "C-SCAN",
      D: "SSTF"
    },
    correctAnswer: "A",
    explanation: "LOOK is an optimized SCAN variant that reverses direction as soon as the last request in the current direction is reached, without travelling needlessly to track 0 or max track."
  },
  {
    id: 251,
    numberInSet: 51,
    setId: 'set_c',
    section: "Section 12: OS — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "\"Seek time\" in disk storage refers to:",
    options: {
      A: "The time to power on the disk",
      B: "The time it takes for the disk arm/head to move to the track containing the desired data",
      C: "The time to format the disk",
      D: "The total storage capacity"
    },
    correctAnswer: "B",
    explanation: "Seek time is the physical duration required for the read/write head assembly to traverse tracks to reach the target cylinder."
  },
  {
    id: 252,
    numberInSet: 52,
    setId: 'set_c',
    section: "Section 12: OS — Storage Management / Disk Scheduling",
    category: "OS — Storage Management / Disk Scheduling",
    domain: "Operating Systems",
    question: "Which of the following disk scheduling algorithms generally provides the most uniform (fair) wait time across all tracks, avoiding bias toward the middle of the disk?",
    options: {
      A: "C-SCAN",
      B: "SSTF",
      C: "FCFS",
      D: "Shortest Seek Time First"
    },
    correctAnswer: "A",
    explanation: "Circular SCAN (C-SCAN) moves the head in one direction servicing requests, then quickly returns to the beginning track without servicing on the return trip, yielding uniform wait distribution."
  },

  // Section 13: Discrete Structures — Basic Counting (53–57)
  {
    id: 253,
    numberInSet: 53,
    setId: 'set_c',
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "How many different 3-digit codes can be formed using digits 1–5 with no repetition allowed?",
    options: {
      A: "60",
      B: "125",
      C: "15",
      D: "20"
    },
    correctAnswer: "A",
    explanation: "P(5, 3) = 5 × 4 × 3 = 60 possible codes.",
    calculationSteps: [
      "1st position: 5 options",
      "2nd position: 4 options",
      "3rd position: 3 options",
      "Total = 5 × 4 × 3 = 60"
    ],
    hasMath: true
  },
  {
    id: 254,
    numberInSet: 54,
    setId: 'set_c',
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "In how many ways can a committee of 4 be chosen from a group of 9 people (order doesn't matter)?",
    options: {
      A: "126",
      B: "3,024",
      C: "36",
      D: "84"
    },
    correctAnswer: "A",
    explanation: "C(9, 4) = 9! / (4! × 5!) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1) = 3024 / 24 = 126.",
    calculationSteps: [
      "Formula: C(n, r) = n! / (r!(n-r)!)",
      "C(9, 4) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)",
      "= 3024 / 24",
      "= 126"
    ],
    hasMath: true
  },
  {
    id: 255,
    numberInSet: 55,
    setId: 'set_c',
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "A coin is flipped 3 times. How many different outcome sequences (e.g., HHT) are possible?",
    options: {
      A: "6",
      B: "8",
      C: "9",
      D: "3"
    },
    correctAnswer: "B",
    explanation: "Each flip has 2 outcomes (H/T). 3 flips: 2³ = 8 total outcomes.",
    calculationSteps: [
      "2 choices per flip (Head/Tail)",
      "2 × 2 × 2 = 2³ = 8"
    ],
    hasMath: true
  },
  {
    id: 256,
    numberInSet: 56,
    setId: 'set_c',
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "A pizza shop offers 4 crust types, 3 sauce types, and 6 toppings (choose exactly 1 topping). How many unique pizza combinations are possible?",
    options: {
      A: "13",
      B: "72",
      C: "24",
      D: "18"
    },
    correctAnswer: "B",
    explanation: "Product Rule: 4 crusts × 3 sauces × 6 toppings = 72 unique pizzas.",
    calculationSteps: [
      "Crusts (4) × Sauces (3) × Toppings (6)",
      "= 4 × 3 × 6 = 72"
    ],
    hasMath: true
  },
  {
    id: 257,
    numberInSet: 57,
    setId: 'set_c',
    section: "Section 13: Discrete Structures — Basic Counting",
    category: "Discrete Structures — Basic Counting",
    domain: "Discrete Mathematics",
    question: "How many ways can 6 distinct trophies be arranged on a shelf?",
    options: {
      A: "36",
      B: "360",
      C: "720",
      D: "120"
    },
    correctAnswer: "C",
    explanation: "Permutations of 6 items = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.",
    calculationSteps: [
      "6! = 6 × 5 × 4 × 3 × 2 × 1",
      "= 720"
    ],
    hasMath: true
  },

  // Section 14: Discrete Structures — Set Operations (58–63)
  {
    id: 258,
    numberInSet: 58,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given U={a,b,c,d,e,f,g,h}, E={a,c,e,g}, F={b,c,d,g}. What is E ∪ F?",
    options: {
      A: "{a,b,c,d,e,g}",
      B: "{c,g}",
      C: "{a,e}",
      D: "{b,d}"
    },
    correctAnswer: "A",
    explanation: "Union (E ∪ F) combines all elements present in E or F: {a, c, e, g} ∪ {b, c, d, g} = {a, b, c, d, e, g}.",
    calculationSteps: [
      "E = {a, c, e, g}",
      "F = {b, c, d, g}",
      "E ∪ F = {a, b, c, d, e, g}"
    ],
    hasMath: true
  },
  {
    id: 259,
    numberInSet: 59,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given E={a,c,e,g}, F={b,c,d,g}. What is E ∩ F?",
    options: {
      A: "{c,g}",
      B: "{a,e}",
      C: "{b,d}",
      D: "{a,b,c,d,e,g}"
    },
    correctAnswer: "A",
    explanation: "Intersection (E ∩ F) consists of elements shared in both E and F: {c, g}.",
    calculationSteps: [
      "Elements in both E and F: c, g",
      "E ∩ F = {c, g}"
    ],
    hasMath: true
  },
  {
    id: 260,
    numberInSet: 60,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given E={a,c,e,g}, F={b,c,d,g}. What is E − F?",
    options: {
      A: "{a,e}",
      B: "{b,d}",
      C: "{c,g}",
      D: "{ }"
    },
    correctAnswer: "A",
    explanation: "Difference (E − F) takes elements in E that are not in F: {a, c, e, g} minus {c, g} = {a, e}.",
    calculationSteps: [
      "E = {a, c, e, g}",
      "Remove elements in F ({c, g}) from E",
      "E − F = {a, e}"
    ],
    hasMath: true
  },
  {
    id: 261,
    numberInSet: 61,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Given E={a,c,e,g}, F={b,c,d,g}. What is F − E?",
    options: {
      A: "{b,d}",
      B: "{a,e}",
      C: "{c,g}",
      D: "{ }"
    },
    correctAnswer: "A",
    explanation: "Difference (F − E) takes elements in F that are not in E: {b, c, d, g} minus {c, g} = {b, d}.",
    calculationSteps: [
      "F = {b, c, d, g}",
      "Remove elements in E ({c, g}) from F",
      "F − E = {b, d}"
    ],
    hasMath: true
  },
  {
    id: 262,
    numberInSet: 62,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "What is (E ∩ F)′, given U = {a,b,c,d,e,f,g,h}, E={a,c,e,g}, F={b,c,d,g}?",
    options: {
      A: "{a,b,d,e,f,h}",
      B: "{c,g}",
      C: "{f,h}",
      D: "{a,e}"
    },
    correctAnswer: "A",
    explanation: "E ∩ F = {c, g}. The complement (E ∩ F)' is all elements in U except {c, g} → {a, b, d, e, f, h}.",
    calculationSteps: [
      "E ∩ F = {c, g}",
      "(E ∩ F)' = U − {c, g}",
      "= {a, b, d, e, f, h}"
    ],
    hasMath: true
  },
  {
    id: 263,
    numberInSet: 63,
    setId: 'set_c',
    section: "Section 14: Discrete Structures — Set Operations",
    category: "Discrete Structures — Set Operations",
    domain: "Discrete Mathematics",
    question: "Are E and F disjoint sets (i.e., do they share no elements)?",
    options: {
      A: "Yes, they share no elements",
      B: "No, they share elements c and g",
      C: "Yes, because they are the same set",
      D: "Cannot be determined"
    },
    correctAnswer: "B",
    explanation: "Disjoint sets have an empty intersection (E ∩ F = ∅). Since E ∩ F = {c, g}, they are NOT disjoint."
  },

  // Section 15: Networking — Protocol, Internet, Addressing (64–69)
  {
    id: 264,
    numberInSet: 64,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which protocol is used to transfer web pages between a server and a browser?",
    options: {
      A: "HTTP",
      B: "SMTP",
      C: "FTP",
      D: "SNMP"
    },
    correctAnswer: "A",
    explanation: "Hypertext Transfer Protocol (HTTP/HTTPS) transfers web content (HTML, images, assets) between web servers and clients."
  },
  {
    id: 265,
    numberInSet: 65,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "What is the default subnet mask for a Class A IP address?",
    options: {
      A: "255.0.0.0",
      B: "255.255.0.0",
      C: "255.255.255.0",
      D: "255.255.255.255"
    },
    correctAnswer: "A",
    explanation: "Class A IP addresses (1.0.0.0 to 126.0.0.0) use a default 8-bit network mask of 255.0.0.0 (/8)."
  },
  {
    id: 266,
    numberInSet: 66,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which of the following is a valid APIPA (Automatic Private IP Addressing) address, assigned when a device fails to get an address from DHCP?",
    options: {
      A: "169.254.10.5",
      B: "192.168.1.5",
      C: "10.0.0.5",
      D: "172.16.1.5"
    },
    correctAnswer: "A",
    explanation: "APIPA automatically assigns IPv4 addresses in the 169.254.0.0/16 range (169.254.0.1 to 169.254.255.254) when DHCP response is unavailable."
  },
  {
    id: 267,
    numberInSet: 67,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "How many usable host addresses are available in a /26 subnet?",
    options: {
      A: "62",
      B: "64",
      C: "30",
      D: "126"
    },
    correctAnswer: "A",
    explanation: "/26 mask leaves 32 - 26 = 6 host bits. 2⁶ = 64 total addresses. Subtract 2 (network and broadcast ID) = 62 usable host addresses.",
    calculationSteps: [
      "Host bits = 32 - 26 = 6 bits",
      "Total addresses = 2⁶ = 64",
      "Usable host addresses = 64 - 2 = 62"
    ],
    hasMath: true
  },
  {
    id: 268,
    numberInSet: 68,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "Which protocol is used to monitor and manage network devices, collecting performance data?",
    options: {
      A: "SNMP",
      B: "FTP",
      C: "SMTP",
      D: "Telnet"
    },
    correctAnswer: "A",
    explanation: "Simple Network Management Protocol (SNMP) collects diagnostic metrics and configures switches, routers, and servers."
  },
  {
    id: 269,
    numberInSet: 69,
    setId: 'set_c',
    section: "Section 15: Networking — Protocol & Addressing",
    category: "Networking — Protocol & Addressing",
    domain: "Computer Networking",
    question: "\"Throughput\" in a network context differs from \"bandwidth\" mainly because throughput refers to:",
    options: {
      A: "The theoretical maximum data rate",
      B: "The actual amount of data successfully transmitted over a given time",
      C: "The physical distance between devices",
      D: "The number of protocols used"
    },
    correctAnswer: "B",
    explanation: "Bandwidth is maximum potential channel capacity, while throughput is the real-world payload data rate actually delivered over time."
  },

  // Section 16: OSI Reference Model (70–74)
  {
    id: 270,
    numberInSet: 70,
    setId: 'set_c',
    section: "Section 16: Networking — OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which OSI layer is responsible for translating data formats, including encryption and compression, between the application and lower layers?",
    options: {
      A: "Application",
      B: "Presentation",
      C: "Session",
      D: "Transport"
    },
    correctAnswer: "B",
    explanation: "Layer 6 (Presentation) handles syntax formatting, data translation (e.g. ASCII/Unicode), SSL/TLS encryption/decryption, and data compression."
  },
  {
    id: 271,
    numberInSet: 71,
    setId: 'set_c',
    section: "Section 16: Networking — OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which OSI layer handles logical addressing and determines the best path for data to travel across networks?",
    options: {
      A: "Data Link",
      B: "Network",
      C: "Transport",
      D: "Physical"
    },
    correctAnswer: "B",
    explanation: "Layer 3 (Network) handles IP logical addressing and packet routing through intermediate network hops."
  },
  {
    id: 272,
    numberInSet: 72,
    setId: 'set_c',
    section: "Section 16: Networking — OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Segmentation of data into smaller units for transmission, and reassembly at the destination, primarily happens at which OSI layer?",
    options: {
      A: "Transport",
      B: "Network",
      C: "Data Link",
      D: "Physical"
    },
    correctAnswer: "A",
    explanation: "Layer 4 (Transport) divides application streams into segments, manages flow control, sequence numbers, and reassembles them upon receipt."
  },
  {
    id: 273,
    numberInSet: 73,
    setId: 'set_c',
    section: "Section 16: Networking — OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which OSI layer is responsible for physical addressing (MAC addresses) and error detection at the frame level?",
    options: {
      A: "Physical",
      B: "Data Link",
      C: "Network",
      D: "Session"
    },
    correctAnswer: "B",
    explanation: "Layer 2 (Data Link) packages data into frames, handles hardware 48-bit MAC addressing, and performs CRC error detection."
  },
  {
    id: 274,
    numberInSet: 74,
    setId: 'set_c',
    section: "Section 16: Networking — OSI Reference Model",
    category: "Networking — OSI Reference Model",
    domain: "Computer Networking",
    question: "Which of the following correctly lists the OSI layers from Layer 7 down to Layer 1?",
    options: {
      A: "Application, Presentation, Session, Transport, Network, Data Link, Physical",
      B: "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      C: "Application, Transport, Network, Session, Presentation, Data Link, Physical",
      D: "Session, Application, Presentation, Transport, Network, Physical, Data Link"
    },
    correctAnswer: "A",
    explanation: "Top-down (Layer 7 → Layer 1): Application, Presentation, Session, Transport, Network, Data Link, Physical ('All People Seem To Need Data Processing')."
  },

  // Section 17: TCP/IP Model (75–78)
  {
    id: 275,
    numberInSet: 75,
    setId: 'set_c',
    section: "Section 17: Networking — TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "Which TCP/IP layer is responsible for logical addressing and routing, similar to the OSI Network layer?",
    options: {
      A: "Application",
      B: "Transport",
      C: "Internet",
      D: "Network Access"
    },
    correctAnswer: "C",
    explanation: "The Internet layer of the TCP/IP model corresponds to OSI Layer 3 (Network) and houses IP, ICMP, and ARP."
  },
  {
    id: 276,
    numberInSet: 76,
    setId: 'set_c',
    section: "Section 17: Networking — TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "Which of the following protocols operates at the Application layer of the TCP/IP model?",
    options: {
      A: "IP",
      B: "TCP",
      C: "HTTP",
      D: "Ethernet"
    },
    correctAnswer: "C",
    explanation: "HTTP, HTTPS, FTP, SSH, and DNS operate at the TCP/IP Application layer."
  },
  {
    id: 277,
    numberInSet: 77,
    setId: 'set_c',
    section: "Section 17: Networking — TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "A key difference between the OSI and TCP/IP models is that:",
    options: {
      A: "TCP/IP has more layers than OSI",
      B: "OSI is a theoretical/reference model with 7 layers, while TCP/IP is a practical model with 4 layers, actually used on the Internet",
      C: "OSI is used on the Internet while TCP/IP is purely theoretical",
      D: "They are identical with no differences"
    },
    correctAnswer: "B",
    explanation: "OSI is a 7-layer theoretical ISO reference framework, while TCP/IP is the practical 4-layer protocol suite powering the real-world Internet."
  },
  {
    id: 278,
    numberInSet: 78,
    setId: 'set_c',
    section: "Section 17: Networking — TCP/IP Model",
    category: "Networking — TCP/IP Model",
    domain: "Computer Networking",
    question: "UDP is often preferred over TCP for applications like video streaming or online gaming because UDP:",
    options: {
      A: "Guarantees delivery of every packet",
      B: "Has lower overhead and latency, sacrificing reliability for speed",
      C: "Is more secure than TCP",
      D: "Requires a three-way handshake"
    },
    correctAnswer: "B",
    explanation: "User Datagram Protocol (UDP) is connectionless and header-light without handshake overhead or retransmission delays, ideal for real-time video/gaming."
  },

  // Section 18: Ethernet Switching (79–82)
  {
    id: 279,
    numberInSet: 79,
    setId: 'set_c',
    section: "Section 18: Networking — Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "When a switch is powered on and has an empty MAC address table, how does it initially handle incoming frames?",
    options: {
      A: "It drops all frames",
      B: "It floods frames to all ports (except source) until it learns MAC-to-port mappings",
      C: "It sends frames only to the router",
      D: "It shuts down until manually configured"
    },
    correctAnswer: "B",
    explanation: "Unicast flooding occurs when a switch receives a frame for an unknown destination MAC—it broadcasts the frame out all ports in the broadcast domain except ingress."
  },
  {
    id: 280,
    numberInSet: 80,
    setId: 'set_c',
    section: "Section 18: Networking — Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "Which of the following best describes \"port security\" on a switch?",
    options: {
      A: "Encrypting all outgoing packets",
      B: "Restricting which devices (by MAC address) can connect to a specific switch port",
      C: "Assigning IP addresses to devices",
      D: "Blocking all traffic on all ports permanently"
    },
    correctAnswer: "B",
    explanation: "Switch Port Security limits authorized devices on physical interfaces by binding specific MAC addresses, shutting down or dropping unauthorized MAC connections."
  },
  {
    id: 281,
    numberInSet: 81,
    setId: 'set_c',
    section: "Section 18: Networking — Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "An Ethernet frame's maximum transmission unit (MTU) in a standard configuration is commonly:",
    options: {
      A: "128 bytes",
      B: "1500 bytes",
      C: "64 bytes",
      D: "9000 bytes always"
    },
    correctAnswer: "B",
    explanation: "Standard Ethernet MTU payload limit is 1500 bytes (plus 18 bytes of L2 header/trailer for a total frame size of 1518 bytes)."
  },
  {
    id: 282,
    numberInSet: 82,
    setId: 'set_c',
    section: "Section 18: Networking — Ethernet Switching",
    category: "Networking — Ethernet Switching",
    domain: "Computer Networking",
    question: "Trunk ports on a switch are primarily used to:",
    options: {
      A: "Carry traffic for multiple VLANs between switches",
      B: "Connect end-user devices only",
      C: "Block all VLAN traffic",
      D: "Assign static IP addresses"
    },
    correctAnswer: "A",
    explanation: "Trunk ports multiplex traffic across multiple Virtual LANs (VLANs) between switches or routers using IEEE 802.1Q encapsulation tagging."
  },

  // Section 19: Web Development — HTML & CSS (83–87)
  {
    id: 283,
    numberInSet: 83,
    setId: 'set_c',
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which HTML tag is used to create an ordered (numbered) list?",
    options: {
      A: "<ul>",
      B: "<ol>",
      C: "<li>",
      D: "<dl>"
    },
    correctAnswer: "B",
    explanation: "<ol> defines an ordered list rendered with numbers/letters, while <ul> creates an unordered bulleted list."
  },
  {
    id: 284,
    numberInSet: 84,
    setId: 'set_c',
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which CSS property is used to control the space OUTSIDE an element's border, separating it from neighboring elements?",
    options: {
      A: "padding",
      B: "margin",
      C: "border-spacing",
      D: "outline"
    },
    correctAnswer: "B",
    explanation: "In the CSS box model, margin specifies external spacing around elements, whereas padding controls internal space between content and border."
  },
  {
    id: 285,
    numberInSet: 85,
    setId: 'set_c',
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "In CSS Grid, which property defines the number and size of columns in a grid container?",
    options: {
      A: "grid-template-columns",
      B: "flex-direction",
      C: "column-count only",
      D: "grid-gap"
    },
    correctAnswer: "A",
    explanation: "grid-template-columns sets tracks and width dimensions (e.g. repeat(3, 1fr) or 200px 1fr) for grid columns."
  },
  {
    id: 286,
    numberInSet: 86,
    setId: 'set_c',
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which HTML tag is used to define an internal (embedded) CSS style block within the document's head?",
    options: {
      A: "<css>",
      B: "<style>",
      C: "<link>",
      D: "<script>"
    },
    correctAnswer: "B",
    explanation: "The <style> tag embeds internal CSS styling rules inside an HTML document (typically placed in the <head>)."
  },
  {
    id: 287,
    numberInSet: 87,
    setId: 'set_c',
    section: "Section 19: Web Development — HTML & CSS",
    category: "Web Development — HTML & CSS",
    domain: "Web Development",
    question: "Which CSS unit is relative to the font size of the root (html) element?",
    options: {
      A: "px",
      B: "rem",
      C: "vh",
      D: "pt"
    },
    correctAnswer: "B",
    explanation: "rem (root em) computes dimensions relative to the root <html> font size, providing predictable scaling across responsive layouts."
  },

  // Section 20: Web Development — JavaScript & PHP (88–92)
  {
    id: 288,
    numberInSet: 88,
    setId: 'set_c',
    section: "Section 20: Web Development — JS & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "Which JavaScript array method adds one or more elements to the END of an array?",
    options: {
      A: "shift()",
      B: "push()",
      C: "pop()",
      D: "unshift()"
    },
    correctAnswer: "B",
    explanation: "Array.prototype.push() appends new items to the end of an array and returns the updated length."
  },
  {
    id: 289,
    numberInSet: 89,
    setId: 'set_c',
    section: "Section 20: Web Development — JS & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "What does the following JavaScript code output?",
    codeSnippet: "let x = 5;\nlet y = \"5\";\nconsole.log(x == y);",
    options: {
      A: "true",
      B: "false",
      C: "undefined",
      D: "It throws an error"
    },
    correctAnswer: "A",
    explanation: "The abstract equality operator (==) performs implicit type coercion, converting string \"5\" to number 5 before comparison, returning true (whereas strict === would return false)."
  },
  {
    id: 290,
    numberInSet: 90,
    setId: 'set_c',
    section: "Section 20: Web Development — JS & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "In PHP, which of the following correctly defines a function?",
    options: {
      A: "function myFunc() { }",
      B: "def myFunc() { }",
      C: "func myFunc() { }",
      D: "myFunc function() { }"
    },
    correctAnswer: "A",
    explanation: "PHP functions are declared using the 'function' keyword followed by functionName(), parameters, and code block."
  },
  {
    id: 291,
    numberInSet: 91,
    setId: 'set_c',
    section: "Section 20: Web Development — JS & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "Which PHP superglobal array is used to collect data sent via an HTML form using the POST method?",
    options: {
      A: "$_GET",
      B: "$_POST",
      C: "$_REQUEST_DATA",
      D: "$_FORM"
    },
    correctAnswer: "B",
    explanation: "$_POST is an associative array of variables passed to the current script via HTTP POST method."
  },
  {
    id: 292,
    numberInSet: 92,
    setId: 'set_c',
    section: "Section 20: Web Development — JS & PHP",
    category: "Web Development — JS & PHP",
    domain: "Web Development",
    question: "In JavaScript, what does the `addEventListener()` method do?",
    options: {
      A: "Deletes an HTML element",
      B: "Attaches a function to run when a specific event (e.g., click) occurs on an element",
      C: "Declares a new variable",
      D: "Loads an external CSS file"
    },
    correctAnswer: "B",
    explanation: "addEventListener() registers an event handler function to a target DOM node for events like click, keydown, submit, or scroll."
  },

  // Section 21: HCI — Design Stories, User Research & Personas (93–96)
  {
    id: 293,
    numberInSet: 93,
    setId: 'set_c',
    section: "Section 21: HCI — Design Stories & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "A/B testing in the context of user research is used to:",
    options: {
      A: "Compare two versions of a design to see which performs better with real users",
      B: "Test only backend server performance",
      C: "Replace the need for personas entirely",
      D: "Debug source code errors"
    },
    correctAnswer: "A",
    explanation: "A/B testing presents two variant UI versions (A and B) to split user samples to measure statistical differences in conversion or task performance."
  },
  {
    id: 294,
    numberInSet: 94,
    setId: 'set_c',
    section: "Section 21: HCI — Design Stories & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "Which of the following is an example of a QUALITATIVE user research method?",
    options: {
      A: "Analyzing click-through-rate analytics",
      B: "Conducting in-depth user interviews to understand motivations and pain points",
      C: "Measuring page load time in milliseconds",
      D: "Counting the number of active users per day"
    },
    correctAnswer: "B",
    explanation: "Qualitative research gathers descriptive, non-numerical insights into user attitudes, motivations, and pain points via interviews and observations."
  },
  {
    id: 295,
    numberInSet: 95,
    setId: 'set_c',
    section: "Section 21: HCI — Design Stories & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "An \"empathy map\" in UX design is a tool used to:",
    options: {
      A: "Visualize what a user says, thinks, does, and feels to build deeper understanding of their perspective",
      B: "Map out server architecture",
      C: "Track code commits",
      D: "Generate database schemas"
    },
    correctAnswer: "A",
    explanation: "An Empathy Map synthesizes UX observations into 4 quadrants (Says, Thinks, Does, Feels) to align design teams around user perspectives."
  },
  {
    id: 296,
    numberInSet: 96,
    setId: 'set_c',
    section: "Section 21: HCI — Design Stories & Personas",
    category: "HCI — Design Stories & Personas",
    domain: "Human-Computer Interaction",
    question: "In persona development, which of the following details is typically LEAST relevant to include?",
    options: {
      A: "The user's goals and pain points related to the product",
      B: "The user's typical behaviors and context of use",
      C: "The exact home address and personal contact number of a real individual",
      D: "The user's motivations for using the product"
    },
    correctAnswer: "C",
    explanation: "Personas are archetype models representing user segments—identifying real individuals' PII (home address/phone) is irrelevant and violates privacy."
  },

  // Section 22: HCI — Design Rules & Heuristics (97–100)
  {
    id: 297,
    numberInSet: 97,
    setId: 'set_c',
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Which usability heuristic emphasizes that the system should speak the users' language, using familiar words and concepts rather than system-oriented jargon?",
    options: {
      A: "Match between system and the real world",
      B: "Aesthetic and minimalist design",
      C: "Consistency and standards",
      D: "Error prevention"
    },
    correctAnswer: "A",
    explanation: "Nielsen's 2nd heuristic ('Match between system and real world') mandates domain-appropriate terminology, real-world metaphors, and familiar concepts."
  },
  {
    id: 298,
    numberInSet: 98,
    setId: 'set_c',
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "\"Flexibility and efficiency of use\" as a heuristic suggests that an interface should:",
    options: {
      A: "Only support novice users",
      B: "Allow both novice and expert users to interact efficiently, often via shortcuts for experienced users",
      C: "Remove all customization options",
      D: "Force all users through the same slow workflow"
    },
    correctAnswer: "B",
    explanation: "Flexibility & Efficiency of Use provides accelerators (keyboard shortcuts, macros, custom filters) for power users while maintaining accessibility for beginners."
  },
  {
    id: 299,
    numberInSet: 99,
    setId: 'set_c',
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Which of the following best illustrates \"help and documentation\" as a usability heuristic?",
    options: {
      A: "Providing no support materials at all",
      B: "Offering easily searchable, task-focused help content when users need it",
      C: "Hiding the help menu deep within settings",
      D: "Requiring users to call customer support for every question"
    },
    correctAnswer: "B",
    explanation: "Help and Documentation states that even if systems are usable without documentation, searchable, task-oriented help should be readily available."
  },
  {
    id: 300,
    numberInSet: 100,
    setId: 'set_c',
    section: "Section 22: HCI — Design Rules & Heuristics",
    category: "HCI — Design Rules & Heuristics",
    domain: "Human-Computer Interaction",
    question: "Which heuristic is violated when a system uses the same icon to mean different things on different screens?",
    options: {
      A: "Consistency and standards",
      B: "Visibility of system status",
      C: "Error prevention",
      D: "Aesthetic and minimalist design"
    },
    correctAnswer: "A",
    explanation: "Consistency and standards requires uniform visual language and conventions across all screens so users don't have to relearn icon meanings."
  }
];
