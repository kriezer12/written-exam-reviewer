import { Question } from '../types/exam';

export const SET_B_QUESTIONS: Question[] = [
  {
    "id": 101,
    "numberInSet": 1,
    "setId": "set_b",
    "section": "Section 1: IT Fundamentals & Computing Concepts",
    "category": "IT Fundamentals & Concepts",
    "domain": "IT Fundamentals & Laws",
    "question": "Which term describes raw, unorganized facts before processing?",
    "options": {
      "A": "Information",
      "B": "Data",
      "C": "Knowledge",
      "D": "Wisdom"
    },
    "correctAnswer": "B",
    "explanation": "Data refers to raw, unorganized, unprocessed facts, figures, symbols, or observations before they are structured or given context to become information."
  },
  {
    "id": 102,
    "numberInSet": 2,
    "setId": "set_b",
    "section": "Section 1: IT Fundamentals & Computing Concepts",
    "category": "IT Fundamentals & Concepts",
    "domain": "IT Fundamentals & Laws",
    "question": "The acronym \"ICT\" stands for:",
    "options": {
      "A": "Internet Computer Technology",
      "B": "Information and Communications Technology",
      "C": "Integrated Circuit Technology",
      "D": "Internal Computing Terminal"
    },
    "correctAnswer": "B",
    "explanation": "ICT stands for Information and Communications Technology, referencing the unified integration of telecommunications, computers, software, and storage."
  },
  {
    "id": 103,
    "numberInSet": 3,
    "setId": "set_b",
    "section": "Section 1: IT Fundamentals & Computing Concepts",
    "category": "IT Fundamentals & Concepts",
    "domain": "IT Fundamentals & Laws",
    "question": "Which of the following is considered application software?",
    "options": {
      "A": "Linux Kernel",
      "B": "Device Driver",
      "C": "Spreadsheet Program",
      "D": "BIOS"
    },
    "correctAnswer": "C",
    "explanation": "Application software performs specific tasks for end users (e.g., spreadsheets, word processors, browsers), as opposed to system software like OS kernels or BIOS."
  },
  {
    "id": 104,
    "numberInSet": 4,
    "setId": "set_b",
    "section": "Section 1: IT Fundamentals & Computing Concepts",
    "category": "IT Fundamentals & Concepts",
    "domain": "IT Fundamentals & Laws",
    "question": "The five components of a computer system include hardware, software, data, procedures, and:",
    "options": {
      "A": "Electricity",
      "B": "People",
      "C": "Internet",
      "D": "Weather"
    },
    "correctAnswer": "B",
    "explanation": "The 5 core components of a computer system are Hardware, Software, Data, Procedures (instructions), and People (users/operators)."
  },
  {
    "id": 105,
    "numberInSet": 5,
    "setId": "set_b",
    "section": "Section 2: History of Computers",
    "category": "History of Computers",
    "domain": "IT Fundamentals & Laws",
    "question": "Which generation of computers used transistors instead of vacuum tubes?",
    "options": {
      "A": "First",
      "B": "Second",
      "C": "Third",
      "D": "Fourth"
    },
    "correctAnswer": "B",
    "explanation": "Second-generation computers (1956–1963) replaced vacuum tubes with transistors, making computers smaller, faster, cheaper, and more energy-efficient."
  },
  {
    "id": 106,
    "numberInSet": 6,
    "setId": "set_b",
    "section": "Section 2: History of Computers",
    "category": "History of Computers",
    "domain": "IT Fundamentals & Laws",
    "question": "The abacus is considered one of the earliest tools used for:",
    "options": {
      "A": "Communication",
      "B": "Calculation",
      "C": "Data storage",
      "D": "Networking"
    },
    "correctAnswer": "B",
    "explanation": "The abacus is one of humanity's earliest mechanical tools used for arithmetic calculation (addition, subtraction, multiplication)."
  },
  {
    "id": 107,
    "numberInSet": 7,
    "setId": "set_b",
    "section": "Section 2: History of Computers",
    "category": "History of Computers",
    "domain": "IT Fundamentals & Laws",
    "question": "Which company released the IBM Personal Computer (IBM PC) in 1981, a major milestone in personal computing?",
    "options": {
      "A": "Apple",
      "B": "IBM",
      "C": "Microsoft",
      "D": "Commodore"
    },
    "correctAnswer": "B",
    "explanation": "IBM released the IBM Personal Computer (IBM PC Model 5150) in August 1981, establishing the industry standard for personal microcomputers."
  },
  {
    "id": 108,
    "numberInSet": 8,
    "setId": "set_b",
    "section": "Section 2: History of Computers",
    "category": "History of Computers",
    "domain": "IT Fundamentals & Laws",
    "question": "Alan Turing is best known for his contributions to:",
    "options": {
      "A": "The theory of computation and the Turing Machine concept",
      "B": "Inventing the World Wide Web",
      "C": "Founding Microsoft",
      "D": "Designing the first spreadsheet"
    },
    "correctAnswer": "A",
    "explanation": "Alan Turing is considered the father of modern computer science and theoretical AI for introducing the universal Turing Machine concept and computability theory."
  },
  {
    "id": 109,
    "numberInSet": 9,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Convert binary 110110₂ to decimal.",
    "options": {
      "A": "54",
      "B": "52",
      "C": "56",
      "D": "50"
    },
    "correctAnswer": "A",
    "explanation": "Converting binary 110110₂ to decimal: (1×32) + (1×16) + (0×8) + (1×4) + (1×2) + (0×1) = 32 + 16 + 4 + 2 = 54.",
    "calculationSteps": [
      "Position weights (from right to left): 2^5=32, 2^4=16, 2^3=8, 2^2=4, 2^1=2, 2^0=1",
      "Multiply bit by weight: (1 × 32) + (1 × 16) + (0 × 8) + (1 × 4) + (1 × 2) + (0 × 1)",
      "Sum total: 32 + 16 + 0 + 4 + 2 + 0 = 54"
    ],
    "hasMath": true
  },
  {
    "id": 110,
    "numberInSet": 10,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Convert decimal 89 to binary.",
    "options": {
      "A": "1011001",
      "B": "1010101",
      "C": "1011010",
      "D": "1001011"
    },
    "correctAnswer": "A",
    "explanation": "Converting decimal 89 to binary by successive division by 2: 89 = 64 + 16 + 8 + 1 = 1011001₂.",
    "calculationSteps": [
      "89 / 2 = 44 remainder 1 (LSB)",
      "44 / 2 = 22 remainder 0",
      "22 / 2 = 11 remainder 0",
      "11 / 2 = 5 remainder 1",
      "5 / 2 = 2 remainder 1",
      "2 / 2 = 1 remainder 0",
      "1 / 2 = 0 remainder 1 (MSB)",
      "Reading remainders bottom to top: 1011001₂"
    ],
    "hasMath": true
  },
  {
    "id": 111,
    "numberInSet": 11,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Convert hexadecimal 3B to decimal.",
    "options": {
      "A": "59",
      "B": "58",
      "C": "57",
      "D": "60"
    },
    "correctAnswer": "A",
    "explanation": "Converting hex 3B to decimal: (3 × 16¹) + (B × 16⁰). Since B = 11: (3 × 16) + 11 = 48 + 11 = 59.",
    "calculationSteps": [
      "Digit 3 has weight 16^1 = 16: 3 × 16 = 48",
      "Digit B has value 11 and weight 16^0 = 1: 11 × 1 = 11",
      "Sum total: 48 + 11 = 59"
    ],
    "hasMath": true
  },
  {
    "id": 112,
    "numberInSet": 12,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Convert decimal 175 to hexadecimal.",
    "options": {
      "A": "AF",
      "B": "FA",
      "C": "A9",
      "D": "B0"
    },
    "correctAnswer": "A",
    "explanation": "Converting decimal 175 to hex: 175 / 16 = 10 remainder 15. Decimal 10 is 'A' and decimal 15 is 'F'. Hence 175₁₀ = AF₁₆.",
    "calculationSteps": [
      "175 ÷ 16 = 10 remainder 15",
      "Quotient 10 in hexadecimal is 'A'",
      "Remainder 15 in hexadecimal is 'F'",
      "Combine digits: AF₁₆"
    ],
    "hasMath": true
  },
  {
    "id": 113,
    "numberInSet": 13,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Convert octal 52₈ to decimal.",
    "options": {
      "A": "42",
      "B": "40",
      "C": "44",
      "D": "41"
    },
    "correctAnswer": "A",
    "explanation": "Converting octal 52₈ to decimal: (5 × 8¹) + (2 × 8⁰) = (5 × 8) + (2 × 1) = 40 + 2 = 42.",
    "calculationSteps": [
      "5 × 8^1 = 40",
      "2 × 8^0 = 2",
      "Sum total: 40 + 2 = 42"
    ],
    "hasMath": true
  },
  {
    "id": 114,
    "numberInSet": 14,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "What is the result of binary subtraction 1100 − 0101?",
    "options": {
      "A": "0111",
      "B": "0110",
      "C": "1000",
      "D": "0101"
    },
    "correctAnswer": "A",
    "explanation": "Binary subtraction 1100₂ (12₁₀) minus 0101₂ (5₁₀) equals 0111₂ (7₁₀).",
    "calculationSteps": [
      "Decimal equivalent: 12 - 5 = 7",
      "Binary subtraction bit-by-bit:",
      "  1 1 0 0",
      "- 0 1 0 1",
      "  -------",
      "  0 1 1 1₂ (which is 4 + 2 + 1 = 7)"
    ],
    "hasMath": true
  },
  {
    "id": 115,
    "numberInSet": 15,
    "setId": "set_b",
    "section": "Section 3: Number Systems",
    "category": "Number Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "How many distinct values can be represented by 8 bits?",
    "options": {
      "A": "128",
      "B": "256",
      "C": "512",
      "D": "64"
    },
    "correctAnswer": "B",
    "explanation": "With 8 bits (1 byte), the number of distinct binary combinations is 2^8 = 256 (representing values 0 to 255).",
    "calculationSteps": [
      "Formula for n bits: 2^n distinct values",
      "For n = 8: 2^8 = 256 values (0 through 255)"
    ],
    "hasMath": true
  },
  {
    "id": 116,
    "numberInSet": 16,
    "setId": "set_b",
    "section": "Section 4: Elements of Computer & Communication Systems",
    "category": "Computer & Communication Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Which of the following is an example of an output device?",
    "options": {
      "A": "Keyboard",
      "B": "Mouse",
      "C": "Projector",
      "D": "Microphone"
    },
    "correctAnswer": "C",
    "explanation": "A projector receives data from a computer and displays image output onto a surface, making it an output device. Keyboard, mouse, and mic are input devices."
  },
  {
    "id": 117,
    "numberInSet": 17,
    "setId": "set_b",
    "section": "Section 4: Elements of Computer & Communication Systems",
    "category": "Computer & Communication Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "In data communication, \"bandwidth\" refers to:",
    "options": {
      "A": "The distance data travels",
      "B": "The amount of data that can be transmitted over a channel in a given time",
      "C": "The physical size of a cable",
      "D": "The number of connected devices"
    },
    "correctAnswer": "B",
    "explanation": "Bandwidth measures the maximum data transfer capacity or rate of a network connection or channel in a given period of time (e.g., Mbps or Gbps)."
  },
  {
    "id": 118,
    "numberInSet": 18,
    "setId": "set_b",
    "section": "Section 4: Elements of Computer & Communication Systems",
    "category": "Computer & Communication Systems",
    "domain": "IT Fundamentals & Laws",
    "question": "Which of the following best describes a \"protocol\" in communication systems?",
    "options": {
      "A": "A physical cable",
      "B": "A set of rules governing data exchange between devices",
      "C": "A type of hardware",
      "D": "A programming language"
    },
    "correctAnswer": "B",
    "explanation": "In networking and computing, a protocol is a standardized set of rules and format definitions governing how data is formatted, transmitted, and received between devices."
  },
  {
    "id": 119,
    "numberInSet": 19,
    "setId": "set_b",
    "section": "Section 5: IT Social & Professional Issues",
    "category": "IT Social & Professional Issues",
    "domain": "IT Fundamentals & Laws",
    "question": "Which of the following is an example of software piracy?",
    "options": {
      "A": "Buying a licensed copy of software",
      "B": "Installing a single-user license on multiple unauthorized computers",
      "C": "Using open-source software",
      "D": "Renewing a software subscription"
    },
    "correctAnswer": "B",
    "explanation": "Software piracy involves unauthorized copying, distribution, or installation of copyrighted software (e.g., using a single-user license across multiple machines without permission)."
  },
  {
    "id": 120,
    "numberInSet": 20,
    "setId": "set_b",
    "section": "Section 5: IT Social & Professional Issues",
    "category": "IT Social & Professional Issues",
    "domain": "IT Fundamentals & Laws",
    "question": "The Philippine E-Commerce Act is officially known as:",
    "options": {
      "A": "RA 8792",
      "B": "RA 10173",
      "C": "RA 10175",
      "D": "RA 9995"
    },
    "correctAnswer": "A",
    "explanation": "The Philippine Electronic Commerce Act of 2000 is Republic Act No. 8792 (RA 8792), providing legal recognition of electronic data messages, documents, and digital signatures."
  },
  {
    "id": 121,
    "numberInSet": 21,
    "setId": "set_b",
    "section": "Section 5: IT Social & Professional Issues",
    "category": "IT Social & Professional Issues",
    "domain": "IT Fundamentals & Laws",
    "question": "Plagiarism in an IT context most commonly refers to:",
    "options": {
      "A": "Writing original code",
      "B": "Copying someone else's code/work and presenting it as your own",
      "C": "Debugging a program",
      "D": "Refactoring code"
    },
    "correctAnswer": "B",
    "explanation": "Plagiarism is taking someone else's work, ideas, or code and claiming it as your own without proper attribution or permission."
  },
  {
    "id": 122,
    "numberInSet": 22,
    "setId": "set_b",
    "section": "Section 5: IT Social & Professional Issues",
    "category": "IT Social & Professional Issues",
    "domain": "IT Fundamentals & Laws",
    "question": "Which of the following best represents professional accountability in IT?",
    "options": {
      "A": "Blaming others for system failures",
      "B": "Taking responsibility for the systems and code you develop",
      "C": "Avoiding documentation",
      "D": "Ignoring user feedback"
    },
    "correctAnswer": "B",
    "explanation": "Professional accountability means taking full responsibility for the quality, security, and consequences of the software, systems, and code you build."
  },
  {
    "id": 123,
    "numberInSet": 23,
    "setId": "set_b",
    "section": "Section 5: IT Social & Professional Issues",
    "category": "IT Social & Professional Issues",
    "domain": "IT Fundamentals & Laws",
    "question": "\"Netiquette\" refers to:",
    "options": {
      "A": "A network protocol",
      "B": "Rules of proper and courteous online behavior",
      "C": "A type of firewall",
      "D": "An IP addressing scheme"
    },
    "correctAnswer": "B",
    "explanation": "Netiquette (network etiquette) refers to the accepted rules of polite, safe, and respectful behavior when communicating online."
  },
  {
    "id": 124,
    "numberInSet": 24,
    "setId": "set_b",
    "section": "Section 6: Data Structures & Algorithms — Array",
    "category": "DSA — Array",
    "domain": "Data Structures & Algorithms",
    "question": "What is the time complexity of searching for an element in an unsorted array (worst case)?",
    "options": {
      "A": "O(1)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n²)"
    },
    "correctAnswer": "C",
    "explanation": "Searching an unsorted array requires checking each element sequentially from start to end in the worst case, yielding O(n) linear time complexity."
  },
  {
    "id": 125,
    "numberInSet": 25,
    "setId": "set_b",
    "section": "Section 6: Data Structures & Algorithms — Array",
    "category": "DSA — Array",
    "domain": "Data Structures & Algorithms",
    "question": "Which of the following is true about arrays?",
    "options": {
      "A": "Elements are stored in non-contiguous memory",
      "B": "Elements are stored in contiguous memory locations",
      "C": "Arrays cannot store primitive data types",
      "D": "Arrays never have a fixed size"
    },
    "correctAnswer": "B",
    "explanation": "Arrays store elements in contiguous (adjacent) memory addresses, allowing O(1) random access by index."
  },
  {
    "id": 126,
    "numberInSet": 26,
    "setId": "set_b",
    "section": "Section 6: Data Structures & Algorithms — Array",
    "category": "DSA — Array",
    "domain": "Data Structures & Algorithms",
    "question": "Given array [10, 25, 3, 47, 8, 16], what is the value at index 3?",
    "options": {
      "A": "3",
      "B": "47",
      "C": "8",
      "D": "25"
    },
    "correctAnswer": "B",
    "explanation": "Arrays use zero-based indexing: index 0 is 10, index 1 is 25, index 2 is 3, index 3 is 47, index 4 is 8, and index 5 is 16. Thus, value at index 3 is 47.",
    "calculationSteps": [
      "Index 0 = 10",
      "Index 1 = 25",
      "Index 2 = 3",
      "Index 3 = 47",
      "Value at index 3 is 47"
    ],
    "hasMath": true
  },
  {
    "id": 127,
    "numberInSet": 27,
    "setId": "set_b",
    "section": "Section 6: Data Structures & Algorithms — Array",
    "category": "DSA — Array",
    "domain": "Data Structures & Algorithms",
    "question": "What is the main disadvantage of using arrays compared to linked lists?",
    "options": {
      "A": "Arrays cannot store data",
      "B": "Arrays have a fixed size and costly insertion/deletion",
      "C": "Arrays are slower to access",
      "D": "Arrays cannot be sorted"
    },
    "correctAnswer": "B",
    "explanation": "Arrays have a fixed size allocated at creation and require shifting elements for insertions/deletions (O(n)), whereas linked lists can resize dynamically with O(1) pointer inserts/deletes."
  },
  {
    "id": 128,
    "numberInSet": 28,
    "setId": "set_b",
    "section": "Section 7: Data Structures & Algorithms — Stacks",
    "category": "DSA — Stacks",
    "domain": "Data Structures & Algorithms",
    "question": "Which real-world scenario best represents a stack?",
    "options": {
      "A": "A queue of people at a ticket counter",
      "B": "A stack of plates where you take the top one first",
      "C": "A printer queue",
      "D": "Round-robin CPU scheduling"
    },
    "correctAnswer": "B",
    "explanation": "A stack of physical plates is the classic real-world analogy for LIFO: you add (push) plates to the top and remove (pop) plates from the top."
  },
  {
    "id": 129,
    "numberInSet": 29,
    "setId": "set_b",
    "section": "Section 7: Data Structures & Algorithms — Stacks",
    "category": "DSA — Stacks",
    "domain": "Data Structures & Algorithms",
    "question": "Which operation returns the top element of a stack WITHOUT removing it?",
    "options": {
      "A": "Pop",
      "B": "Push",
      "C": "Peek",
      "D": "Clear"
    },
    "correctAnswer": "C",
    "explanation": "A stack follows LIFO (Last-In, First-Out), meaning the item added most recently is the first to be removed."
  },
  {
    "id": 130,
    "numberInSet": 30,
    "setId": "set_b",
    "section": "Section 7: Data Structures & Algorithms — Stacks",
    "category": "DSA — Stacks",
    "domain": "Data Structures & Algorithms",
    "question": "Stacks are commonly used to implement:",
    "options": {
      "A": "Breadth-First Search only",
      "B": "Function call management (call stack) and undo operations",
      "C": "FIFO task queues",
      "D": "Priority queues only"
    },
    "correctAnswer": "B",
    "explanation": "Tracing operations: Push(5) -> [5]; Push(10) -> [5,10]; Push(15) -> [5,10,15]; Pop() -> removes 15, leaving [5,10]; Push(20) -> [5,10,20]. Top element is 20.",
    "calculationSteps": [
      "Initial stack: []",
      "Push 5 -> [5]",
      "Push 10 -> [5, 10]",
      "Push 15 -> [5, 10, 15]",
      "Pop() -> removes 15. Stack is [5, 10]",
      "Push 20 -> [5, 10, 20]",
      "Top element is 20"
    ],
    "hasMath": true
  },
  {
    "id": 131,
    "numberInSet": 31,
    "setId": "set_b",
    "section": "Section 7: Data Structures & Algorithms — Stacks",
    "category": "DSA — Stacks",
    "domain": "Data Structures & Algorithms",
    "question": "Given the operations Push(A), Push(B), Pop(), Push(C), Push(D), Pop() — what remains on the stack, listed top to bottom?",
    "options": {
      "A": "D, A",
      "B": "C, A",
      "C": "A, C",
      "D": "B, A"
    },
    "correctAnswer": "B",
    "explanation": "The execution call stack tracks active function calls, returning addresses, parameters, and local variables during program execution."
  },
  {
    "id": 132,
    "numberInSet": 32,
    "setId": "set_b",
    "section": "Section 8: CPU Architecture & Central Processing Unit",
    "category": "OS — CPU Architecture",
    "domain": "Operating Systems",
    "question": "Registers are best described as:",
    "options": {
      "A": "Large-capacity external storage",
      "B": "Small, high-speed storage locations within the CPU",
      "C": "Long-term data archives",
      "D": "Network buffers"
    },
    "correctAnswer": "B",
    "explanation": "The Arithmetic Logic Unit (ALU) performs arithmetic calculations (+, -, *, /) and bitwise logical operations (AND, OR, NOT, comparisons)."
  },
  {
    "id": 133,
    "numberInSet": 33,
    "setId": "set_b",
    "section": "Section 8: CPU Architecture & Central Processing Unit",
    "category": "OS — CPU Architecture",
    "domain": "Operating Systems",
    "question": "Which of the following is NOT a typical component of CPU architecture?",
    "options": {
      "A": "ALU",
      "B": "Control Unit",
      "C": "Registers",
      "D": "Hard Disk Platter"
    },
    "correctAnswer": "D",
    "explanation": "Registers are tiny, ultra-high-speed memory storage cells located directly inside the CPU die used to hold immediate instructions and operands."
  },
  {
    "id": 134,
    "numberInSet": 34,
    "setId": "set_b",
    "section": "Section 8: CPU Architecture & Central Processing Unit",
    "category": "OS — CPU Architecture",
    "domain": "Operating Systems",
    "question": "Clock speed of a CPU is typically measured in:",
    "options": {
      "A": "Bytes",
      "B": "Hertz (GHz)",
      "C": "Bits per second",
      "D": "Watts"
    },
    "correctAnswer": "B",
    "explanation": "The Program Counter (PC) register stores the memory address of the next instruction waiting to be executed by the CPU."
  },
  {
    "id": 135,
    "numberInSet": 35,
    "setId": "set_b",
    "section": "Section 8: CPU Architecture & Central Processing Unit",
    "category": "OS — CPU Architecture",
    "domain": "Operating Systems",
    "question": "A multi-core processor improves performance mainly by:",
    "options": {
      "A": "Increasing hard disk speed",
      "B": "Allowing multiple instruction streams to be processed simultaneously",
      "C": "Reducing RAM usage",
      "D": "Increasing screen resolution"
    },
    "correctAnswer": "B",
    "explanation": "In the Instruction Cycle, the 'Fetch' phase retrieves the next instruction byte from RAM/cache into the instruction register."
  },
  {
    "id": 136,
    "numberInSet": 36,
    "setId": "set_b",
    "section": "Section 8: CPU Architecture & Central Processing Unit",
    "category": "OS — CPU Architecture",
    "domain": "Operating Systems",
    "question": "Which of the following best describes a \"warm boot\"?",
    "options": {
      "A": "Starting a computer from a fully powered-off state",
      "B": "Restarting a running computer without cutting power completely (e.g., Restart command)",
      "C": "Booting from a USB drive",
      "D": "Running POST twice"
    },
    "correctAnswer": "B",
    "explanation": "CPU clock speed (frequency of processing cycles) is measured in Hertz, modern CPUs running at Gigahertz (GHz) — billions of cycles per second."
  },
  {
    "id": 137,
    "numberInSet": 37,
    "setId": "set_b",
    "section": "Section 9: Booting Process",
    "category": "OS — Booting Process",
    "domain": "Operating Systems",
    "question": "After POST completes successfully, the system typically proceeds to:",
    "options": {
      "A": "Shut down",
      "B": "Load the bootloader and then the operating system kernel",
      "C": "Format the hard drive",
      "D": "Run only diagnostic tools"
    },
    "correctAnswer": "B",
    "explanation": "POST stands for Power-On Self-Test, a diagnostic testing sequence run by BIOS/UEFI firmware immediately after turning on a computer."
  },
  {
    "id": 138,
    "numberInSet": 38,
    "setId": "set_b",
    "section": "Section 9: Booting Process",
    "category": "OS — Booting Process",
    "domain": "Operating Systems",
    "question": "A \"zero-day\" vulnerability refers to:",
    "options": {
      "A": "A vulnerability that has existed for zero days since discovery, with no patch yet available",
      "B": "A virus that deletes files at midnight",
      "C": "A firewall setting",
      "D": "A backup schedule"
    },
    "correctAnswer": "A",
    "explanation": "BIOS (Basic Input/Output System) / UEFI is non-volatile firmware stored on a ROM/flash chip on the motherboard that initializes hardware during startup."
  },
  {
    "id": 139,
    "numberInSet": 39,
    "setId": "set_b",
    "section": "Section 9: Booting Process",
    "category": "OS — Booting Process",
    "domain": "Operating Systems",
    "question": "Two-factor authentication improves security by:",
    "options": {
      "A": "Requiring only a password",
      "B": "Requiring two independent forms of verification",
      "C": "Disabling passwords entirely",
      "D": "Encrypting the hard drive only"
    },
    "correctAnswer": "B",
    "explanation": "The Master Boot Record (MBR) is located in Sector 0 (the very first 512 bytes) of a partitioned storage drive."
  },
  {
    "id": 140,
    "numberInSet": 40,
    "setId": "set_b",
    "section": "Section 9: Booting Process",
    "category": "OS — Booting Process",
    "domain": "Operating Systems",
    "question": "Spyware is malicious software primarily designed to:",
    "options": {
      "A": "Encrypt files for ransom",
      "B": "Secretly monitor and collect user information",
      "C": "Display unwanted advertisements only",
      "D": "Format the hard drive"
    },
    "correctAnswer": "B",
    "explanation": "A cold boot starts a computer from a completely powered-off state, triggering full POST diagnostics. A warm boot reboots the system without turning off electrical power."
  },
  {
    "id": 141,
    "numberInSet": 41,
    "setId": "set_b",
    "section": "Section 10: Computer Protection",
    "category": "OS — Computer Protection",
    "domain": "Operating Systems",
    "question": "Which of the following is a good practice to protect against phishing attacks?",
    "options": {
      "A": "Clicking links in unsolicited emails",
      "B": "Verifying sender authenticity before clicking links or providing information",
      "C": "Disabling antivirus software",
      "D": "Sharing passwords via email"
    },
    "correctAnswer": "B",
    "explanation": "Ransomware is malicious software that encrypts user files or locks the system and demands payment (ransom) to decrypt them."
  },
  {
    "id": 142,
    "numberInSet": 42,
    "setId": "set_b",
    "section": "Section 10: Computer Protection",
    "category": "OS — Computer Protection",
    "domain": "Operating Systems",
    "question": "Which process state indicates that a process is loaded into memory and waiting for CPU allocation?",
    "options": {
      "A": "Running",
      "B": "Ready",
      "C": "Waiting",
      "D": "Terminated"
    },
    "correctAnswer": "B",
    "explanation": "A firewall monitors, filters, and controls incoming and outgoing network traffic based on predefined security rules to block unauthorized access."
  },
  {
    "id": 143,
    "numberInSet": 43,
    "setId": "set_b",
    "section": "Section 10: Computer Protection",
    "category": "OS — Computer Protection",
    "domain": "Operating Systems",
    "question": "Which scheduling algorithm always selects the process with the shortest estimated run time next?",
    "options": {
      "A": "FCFS",
      "B": "SJF (Shortest Job First)",
      "C": "Round Robin",
      "D": "Priority (arrival-based)"
    },
    "correctAnswer": "B",
    "explanation": "Two-Factor Authentication (2FA) enhances security by requiring users to provide two separate verification factors (e.g., password + SMS/authenticator code)."
  },
  {
    "id": 144,
    "numberInSet": 44,
    "setId": "set_b",
    "section": "Section 11: Process Management",
    "category": "OS — Process Management",
    "domain": "Operating Systems",
    "question": "Given P1 (burst=4), P2 (burst=6), P3 (burst=2), all arrive at time 0, executed via FCFS in order P1→P2→P3. What is P3's waiting time?",
    "options": {
      "A": "10",
      "B": "6",
      "C": "4",
      "D": "2"
    },
    "correctAnswer": "A",
    "explanation": "In First-Come, First-Served (FCFS) non-preemptive scheduling: P1 arrives at 0 (burst 10ms), P2 arrives at 0 (burst 4ms), P3 arrives at 0 (burst 2ms). P1 runs from 0 to 10ms; P2 runs from 10 to 14ms; P3 starts at 14ms. Waiting time for P3 = 14ms.",
    "calculationSteps": [
      "P1 burst time = 10ms (starts at 0ms, finishes at 10ms)",
      "P2 waiting time = 10ms (burst 4ms, finishes at 14ms)",
      "P3 waiting time = 10ms + 4ms = 14ms",
      "P3 waiting time is 14ms"
    ],
    "hasMath": true
  },
  {
    "id": 145,
    "numberInSet": 45,
    "setId": "set_b",
    "section": "Section 11: Process Management",
    "category": "OS — Process Management",
    "domain": "Operating Systems",
    "question": "In Round Robin scheduling with a time quantum of 4, if a process has a burst time of 10, how many time slices does it need to complete?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "1"
    },
    "correctAnswer": "B",
    "explanation": "Preemptive CPU scheduling allows the OS to interrupt a running process to give the CPU to a higher-priority process; non-preemptive scheduling lets running processes run until completion or voluntary yield."
  },
  {
    "id": 146,
    "numberInSet": 46,
    "setId": "set_b",
    "section": "Section 11: Process Management",
    "category": "OS — Process Management",
    "domain": "Operating Systems",
    "question": "A \"context switch\" refers to:",
    "options": {
      "A": "Changing a program's source code",
      "B": "Saving the state of a running process and loading the state of another",
      "C": "Switching between two monitors",
      "D": "Changing network protocols"
    },
    "correctAnswer": "B",
    "explanation": "When a process requests an I/O operation (like reading a disk), it transitions from the Running state to the Waiting/Blocked state until I/O completes."
  },
  {
    "id": 147,
    "numberInSet": 47,
    "setId": "set_b",
    "section": "Section 11: Process Management",
    "category": "OS — Process Management",
    "domain": "Operating Systems",
    "question": "Deadlock in process management occurs when:",
    "options": {
      "A": "A process finishes execution normally",
      "B": "Two or more processes are waiting indefinitely for resources held by each other",
      "C": "A process is terminated by the user",
      "D": "The CPU is idle"
    },
    "correctAnswer": "B",
    "explanation": "'Hold and Wait' is one of Coffman's 4 deadlock conditions, occurring when a process holds allocated resources while waiting for additional resources held by other processes."
  },
  {
    "id": 148,
    "numberInSet": 48,
    "setId": "set_b",
    "section": "Section 12: Storage Management / Disk Scheduling",
    "category": "OS — Storage Management / Disk Scheduling",
    "domain": "Operating Systems",
    "question": "Disk head starts at track 40. Requests, in arrival order: 70, then 20. Using FCFS, what is the total head movement?",
    "options": {
      "A": "80",
      "B": "70",
      "C": "90",
      "D": "60"
    },
    "correctAnswer": "A",
    "explanation": "FCFS Disk Scheduling with head starting at 50, requests: 30, 80, 110.\nStep 1: 50 -> 30: |50 - 30| = 20\nStep 2: 30 -> 80: |30 - 80| = 50\nStep 3: 80 -> 110: |80 - 110| = 30\nTotal head movement = 20 + 50 + 30 = 100 cylinders.",
    "calculationSteps": [
      "Start at cylinder 50",
      "Move to 30: |50 - 30| = 20 cylinders",
      "Move to 80: |30 - 80| = 50 cylinders",
      "Move to 110: |80 - 110| = 30 cylinders",
      "Total movement = 20 + 50 + 30 = 100 cylinders"
    ],
    "hasMath": true
  },
  {
    "id": 149,
    "numberInSet": 49,
    "setId": "set_b",
    "section": "Section 12: Storage Management / Disk Scheduling",
    "category": "OS — Storage Management / Disk Scheduling",
    "domain": "Operating Systems",
    "question": "Disk head starts at track 50. Pending requests: 63, 30, 86, 12. Using SSTF, which request is serviced FIRST?",
    "options": {
      "A": "30",
      "B": "63",
      "C": "86",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "Shortest Seek Time First (SSTF) selects the pending disk request closest to the current disk head position to minimize seek distance."
  },
  {
    "id": 150,
    "numberInSet": 50,
    "setId": "set_b",
    "section": "Section 12: Storage Management / Disk Scheduling",
    "category": "OS — Storage Management / Disk Scheduling",
    "domain": "Operating Systems",
    "question": "Which disk scheduling algorithm moves the head in one direction to the end of the disk, then jumps back to the beginning and continues in the same direction (without servicing requests on the return trip)?",
    "options": {
      "A": "SCAN",
      "B": "C-SCAN",
      "C": "SSTF",
      "D": "FCFS"
    },
    "correctAnswer": "B",
    "explanation": "The SCAN disk scheduling algorithm (Elevator algorithm) moves the disk arm towards one end of the disk servicing requests, then reverses direction at the boundary."
  },
  {
    "id": 151,
    "numberInSet": 51,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "The main goal of disk scheduling algorithms is to:",
    "options": {
      "A": "Increase file size",
      "B": "Minimize seek time and improve throughput",
      "C": "Maximize fragmentation",
      "D": "Slow down disk access intentionally"
    },
    "correctAnswer": "B",
    "explanation": "The Addition Principle (Rule of Sum) states that if task A can be done in m ways and task B in n ways, and they CANNOT be done together (mutually exclusive), there are m + n ways to choose A or B."
  },
  {
    "id": 152,
    "numberInSet": 52,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "Which algorithm is a variant of SCAN that services requests in only one direction, then quickly returns to the start without servicing requests along the way back?",
    "options": {
      "A": "LOOK",
      "B": "C-SCAN",
      "C": "SSTF",
      "D": "FCFS"
    },
    "correctAnswer": "B",
    "explanation": "By the Multiplication Principle (Rule of Product), if there are 4 choices for shirts and 3 choices for pants, total outfit combinations = 4 × 3 = 12.",
    "calculationSteps": [
      "Shirt choices = 4",
      "Pants choices = 3",
      "Total combinations = 4 × 3 = 12"
    ],
    "hasMath": true
  },
  {
    "id": 153,
    "numberInSet": 53,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "How many different 2-letter arrangements can be made from the letters W, X, Y, Z (no repetition)?",
    "options": {
      "A": "12",
      "B": "16",
      "C": "8",
      "D": "24"
    },
    "correctAnswer": "A",
    "explanation": "Permutations formula P(n, r) = n! / (n - r)!. For P(5, 2) = 5! / (5 - 2)! = 5! / 3! = (5 × 4 × 3!) / 3! = 20.",
    "calculationSteps": [
      "P(5, 2) = 5! / (5 - 2)!",
      "P(5, 2) = 5! / 3!",
      "P(5, 2) = (5 × 4 × 3 × 2 × 1) / (3 × 2 × 1) = 20"
    ],
    "hasMath": true
  },
  {
    "id": 154,
    "numberInSet": 54,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "In how many ways can you choose 2 students from a group of 6 to form a committee (order doesn't matter)?",
    "options": {
      "A": "15",
      "B": "30",
      "C": "12",
      "D": "36"
    },
    "correctAnswer": "A",
    "explanation": "Combinations formula C(n, r) = n! / (r! (n - r)!). For C(6, 3) = 6! / (3! × 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 120 / 6 = 20.",
    "calculationSteps": [
      "C(6, 3) = 6! / (3! × (6-3)!)",
      "C(6, 3) = 6! / (3! × 3!)",
      "C(6, 3) = (6 × 5 × 4) / (3 × 2 × 1)",
      "C(6, 3) = 120 / 6 = 20"
    ],
    "hasMath": true
  },
  {
    "id": 155,
    "numberInSet": 55,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "A license plate consists of 3 letters followed by 3 digits (repetition allowed). How many different plates are possible?",
    "options": {
      "A": "17,576,000",
      "B": "1,757,600",
      "C": "175,760",
      "D": "26,000"
    },
    "correctAnswer": "A",
    "explanation": "The Pigeonhole Principle states that if k + 1 or more objects are placed into k boxes, then at least one box must contain 2 or more objects. (10 pigeons in 9 holes -> at least one hole has >= 2)."
  },
  {
    "id": 156,
    "numberInSet": 56,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "A store offers 5 shirt designs and 3 sizes. How many different design + size combinations are there?",
    "options": {
      "A": "15",
      "B": "8",
      "C": "20",
      "D": "10"
    },
    "correctAnswer": "A",
    "explanation": "The word 'CAT' has 3 unique letters. Number of distinct permutations = 3! = 3 × 2 × 1 = 6.",
    "calculationSteps": [
      "Length of word = 3 unique characters",
      "Permutations = 3! = 3 × 2 × 1 = 6"
    ],
    "hasMath": true
  },
  {
    "id": 157,
    "numberInSet": 57,
    "setId": "set_b",
    "section": "Section 13: Discrete Structures — Basic Counting",
    "category": "Discrete Structures — Basic Counting",
    "domain": "Discrete Mathematics",
    "question": "How many ways can 4 different books be arranged on a shelf?",
    "options": {
      "A": "16",
      "B": "24",
      "C": "12",
      "D": "8"
    },
    "correctAnswer": "B",
    "explanation": "A binary string of length n has 2^n possible combinations. For length 5: 2^5 = 32 distinct binary strings.",
    "calculationSteps": [
      "Each position has 2 options (0 or 1)",
      "For length 5: 2 × 2 × 2 × 2 × 2 = 2^5 = 32"
    ],
    "hasMath": true
  },
  {
    "id": 158,
    "numberInSet": 58,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is C ∪ D?",
    "options": {
      "A": "{2,4,6,8,10,12}",
      "B": "{4,8}",
      "C": "{2,6,10}",
      "D": "{12}"
    },
    "correctAnswer": "A",
    "explanation": "Intersection A ∩ B contains elements present in BOTH sets. A = {1, 2, 3}, B = {3, 4, 5}. Common element is {3}.",
    "calculationSteps": [
      "Set A = {1, 2, 3}",
      "Set B = {3, 4, 5}",
      "Elements in both A and B: {3}",
      "A ∩ B = {3}"
    ],
    "hasMath": true
  },
  {
    "id": 159,
    "numberInSet": 59,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is C ∩ D?",
    "options": {
      "A": "{4,8}",
      "B": "{2,6,10}",
      "C": "{12}",
      "D": "{ } (empty set)"
    },
    "correctAnswer": "A",
    "explanation": "Union A ∪ B combines all unique elements from both sets. A = {1, 2, 3}, B = {3, 4, 5}. Combined unique elements: {1, 2, 3, 4, 5}.",
    "calculationSteps": [
      "Set A = {1, 2, 3}",
      "Set B = {3, 4, 5}",
      "Combine unique elements: {1, 2, 3, 4, 5}",
      "A ∪ B = {1, 2, 3, 4, 5}"
    ],
    "hasMath": true
  },
  {
    "id": 160,
    "numberInSet": 60,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is C − D?",
    "options": {
      "A": "{2,6,10}",
      "B": "{4,8}",
      "C": "{12}",
      "D": "{2,4,6,8,10}"
    },
    "correctAnswer": "A",
    "explanation": "Set difference A \\ B contains elements in A that are NOT in B. A = {1, 2, 3}, B = {3, 4, 5}. Removing 3 from A leaves {1, 2}.",
    "calculationSteps": [
      "Set A = {1, 2, 3}",
      "Set B = {3, 4, 5}",
      "Remove elements of B from A: remove 3",
      "A \\ B = {1, 2}"
    ],
    "hasMath": true
  },
  {
    "id": 161,
    "numberInSet": 61,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is D − C?",
    "options": {
      "A": "{12}",
      "B": "{2,6,10}",
      "C": "{4,8}",
      "D": "{ }"
    },
    "correctAnswer": "A",
    "explanation": "Complement A' contains all elements in Universal Set U that are NOT in A. U = {1,2,3,4,5}, A = {1,2}. Complement A' = {3, 4, 5}.",
    "calculationSteps": [
      "U = {1, 2, 3, 4, 5}",
      "A = {1, 2}",
      "A' = U \\ A = {3, 4, 5}"
    ],
    "hasMath": true
  },
  {
    "id": 162,
    "numberInSet": 62,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is D′ (the complement of D)?",
    "options": {
      "A": "{1,2,3,5,6,7,9,10,11}",
      "B": "{4,8,12}",
      "C": "{2,4,6,8,10}",
      "D": "{ }"
    },
    "correctAnswer": "A",
    "explanation": "The power set P(S) is the set of all subsets. If |S| = n, then |P(S)| = 2^n. For n = 3, 2^3 = 8 subsets.",
    "calculationSteps": [
      "Number of elements n = 3",
      "Power set cardinality = 2^n = 2^3 = 8 subsets"
    ],
    "hasMath": true
  },
  {
    "id": 163,
    "numberInSet": 63,
    "setId": "set_b",
    "section": "Section 14: Discrete Structures — Set Operations",
    "category": "Discrete Structures — Set Operations",
    "domain": "Discrete Mathematics",
    "question": "What is |C ∪ D| (the cardinality of C ∪ D)?",
    "options": {
      "A": "6",
      "B": "5",
      "C": "8",
      "D": "7"
    },
    "correctAnswer": "A",
    "explanation": "Two sets A and B are disjoint if they share no common elements, meaning their intersection is the empty set: A ∩ B = ∅."
  },
  {
    "id": 164,
    "numberInSet": 64,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "Which protocol is used to securely transfer files over a network?",
    "options": {
      "A": "FTP",
      "B": "SFTP",
      "C": "HTTP",
      "D": "SMTP"
    },
    "correctAnswer": "B",
    "explanation": "An IPv4 address is 32 bits (4 bytes) long, typically written in dotted-decimal format (e.g., 192.168.1.1)."
  },
  {
    "id": 165,
    "numberInSet": 65,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "What is the default subnet mask for a Class B IP address?",
    "options": {
      "A": "255.0.0.0",
      "B": "255.255.0.0",
      "C": "255.255.255.0",
      "D": "255.255.255.255"
    },
    "correctAnswer": "B",
    "explanation": "Class C IPv4 networks have a default subnet mask of 255.255.255.0 (/24), allocating 24 bits for network ID and 8 bits for host ID."
  },
  {
    "id": 166,
    "numberInSet": 66,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "Which IPv4 address range is reserved for loopback testing?",
    "options": {
      "A": "10.0.0.0/8",
      "B": "127.0.0.0/8",
      "C": "192.168.0.0/16",
      "D": "169.254.0.0/16"
    },
    "correctAnswer": "B",
    "explanation": "Address Resolution Protocol (ARP) translates an IP address (Layer 3) to a physical MAC address (Layer 2)."
  },
  {
    "id": 167,
    "numberInSet": 67,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "How many usable host addresses are available in a /28 subnet?",
    "options": {
      "A": "16",
      "B": "14",
      "C": "30",
      "D": "32"
    },
    "correctAnswer": "B",
    "explanation": "Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses, subnet masks, gateways, and DNS settings to network devices."
  },
  {
    "id": 168,
    "numberInSet": 68,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "Which protocol resolves a known IP address to its corresponding MAC address on a local network?",
    "options": {
      "A": "DNS",
      "B": "ARP",
      "C": "DHCP",
      "D": "ICMP"
    },
    "correctAnswer": "B",
    "explanation": "Port 80 is the default well-known port for unencrypted HTTP (Hypertext Transfer Protocol) web traffic."
  },
  {
    "id": 169,
    "numberInSet": 69,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "Which of the following best describes \"latency\" in networking?",
    "options": {
      "A": "The maximum data transfer rate",
      "B": "The time delay for data to travel from source to destination",
      "C": "The number of connected devices",
      "D": "The physical length of cable"
    },
    "correctAnswer": "B",
    "explanation": "Port 443 is the default well-known port for secure, encrypted HTTPS (HTTP over TLS/SSL) web traffic."
  },
  {
    "id": 170,
    "numberInSet": 70,
    "setId": "set_b",
    "section": "Section 15: Computer Networking — Protocol & Addressing",
    "category": "Networking — Protocol & Addressing",
    "domain": "Computer Networking",
    "question": "Which OSI layer is responsible for reliable end-to-end data delivery, including error recovery and flow control?",
    "options": {
      "A": "Network",
      "B": "Transport",
      "C": "Data Link",
      "D": "Session"
    },
    "correctAnswer": "B",
    "explanation": "RFC 1918 defines private IPv4 ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."
  },
  {
    "id": 171,
    "numberInSet": 71,
    "setId": "set_b",
    "section": "Section 16: OSI Reference Model",
    "category": "Networking — OSI Reference Model",
    "domain": "Computer Networking",
    "question": "Which OSI layer deals with the physical transmission of raw bits over a medium?",
    "options": {
      "A": "Physical",
      "B": "Data Link",
      "C": "Network",
      "D": "Transport"
    },
    "correctAnswer": "A",
    "explanation": "The Open Systems Interconnection (OSI) reference model consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application."
  },
  {
    "id": 172,
    "numberInSet": 72,
    "setId": "set_b",
    "section": "Section 16: OSI Reference Model",
    "category": "Networking — OSI Reference Model",
    "domain": "Computer Networking",
    "question": "The Data Link layer is primarily responsible for:",
    "options": {
      "A": "IP addressing",
      "B": "Framing and MAC addressing",
      "C": "Encryption",
      "D": "Application-level services"
    },
    "correctAnswer": "B",
    "explanation": "The Data Link layer (Layer 2) handles framing, physical MAC addressing, flow control, and error detection on local network links."
  },
  {
    "id": 173,
    "numberInSet": 73,
    "setId": "set_b",
    "section": "Section 16: OSI Reference Model",
    "category": "Networking — OSI Reference Model",
    "domain": "Computer Networking",
    "question": "Which OSI layer is closest to the end user and includes protocols like HTTP and FTP?",
    "options": {
      "A": "Presentation",
      "B": "Session",
      "C": "Application",
      "D": "Transport"
    },
    "correctAnswer": "C",
    "explanation": "The Application layer (Layer 7) is closest to end users, providing network services directly to software applications (e.g., HTTP, FTP, SMTP, DNS)."
  },
  {
    "id": 174,
    "numberInSet": 74,
    "setId": "set_b",
    "section": "Section 16: OSI Reference Model",
    "category": "Networking — OSI Reference Model",
    "domain": "Computer Networking",
    "question": "In the OSI model, which layer sits directly between the Session and Application layers?",
    "options": {
      "A": "Transport",
      "B": "Presentation",
      "C": "Network",
      "D": "Data Link"
    },
    "correctAnswer": "B",
    "explanation": "In the 7-layer OSI model, Layer 6 is Presentation, sitting directly between Layer 5 (Session) and Layer 7 (Application)."
  },
  {
    "id": 175,
    "numberInSet": 75,
    "setId": "set_b",
    "section": "Section 17: TCP/IP Model",
    "category": "Networking — TCP/IP Model",
    "domain": "Computer Networking",
    "question": "Which TCP/IP layer combines the OSI's Application, Presentation, and Session layers?",
    "options": {
      "A": "Network Access",
      "B": "Internet",
      "C": "Transport",
      "D": "Application"
    },
    "correctAnswer": "D",
    "explanation": "The 4-layer TCP/IP model's Application layer combines OSI's top three layers: Application, Presentation, and Session."
  },
  {
    "id": 176,
    "numberInSet": 76,
    "setId": "set_b",
    "section": "Section 17: TCP/IP Model",
    "category": "Networking — TCP/IP Model",
    "domain": "Computer Networking",
    "question": "The TCP/IP \"Network Access\" layer roughly corresponds to which OSI layer(s)?",
    "options": {
      "A": "Physical and Data Link",
      "B": "Network and Transport",
      "C": "Session and Presentation",
      "D": "Application only"
    },
    "correctAnswer": "A",
    "explanation": "The TCP/IP Network Access layer (Link layer) covers physical media access and hardware addressing, corresponding to OSI's Physical and Data Link layers."
  },
  {
    "id": 177,
    "numberInSet": 77,
    "setId": "set_b",
    "section": "Section 17: TCP/IP Model",
    "category": "Networking — TCP/IP Model",
    "domain": "Computer Networking",
    "question": "Which protocol suite is the foundation of the modern Internet?",
    "options": {
      "A": "OSI",
      "B": "TCP/IP",
      "C": "IPX/SPX",
      "D": "NetBEUI"
    },
    "correctAnswer": "B",
    "explanation": "TCP/IP (Transmission Control Protocol / Internet Protocol) is the foundational networking suite powering the global Internet."
  },
  {
    "id": 178,
    "numberInSet": 78,
    "setId": "set_b",
    "section": "Section 17: TCP/IP Model",
    "category": "Networking — TCP/IP Model",
    "domain": "Computer Networking",
    "question": "A three-way handshake (SYN, SYN-ACK, ACK) is used to establish a connection in which protocol?",
    "options": {
      "A": "UDP",
      "B": "TCP",
      "C": "ICMP",
      "D": "ARP"
    },
    "correctAnswer": "B",
    "explanation": "TCP establishes reliable connection-oriented communication using a 3-way handshake sequence: SYN -> SYN-ACK -> ACK."
  },
  {
    "id": 179,
    "numberInSet": 79,
    "setId": "set_b",
    "section": "Section 18: Ethernet Switching",
    "category": "Networking — Ethernet Switching",
    "domain": "Computer Networking",
    "question": "What is stored in a switch's MAC address table?",
    "options": {
      "A": "IP-to-hostname mappings",
      "B": "MAC address to port mappings",
      "C": "Routing paths",
      "D": "Domain names"
    },
    "correctAnswer": "B",
    "explanation": "A Layer 2 switch maintains a MAC address table (CAM table) mapping connected physical device MAC addresses to specific switch ports."
  },
  {
    "id": 180,
    "numberInSet": 80,
    "setId": "set_b",
    "section": "Section 18: Ethernet Switching",
    "category": "Networking — Ethernet Switching",
    "domain": "Computer Networking",
    "question": "A collision domain is best described as:",
    "options": {
      "A": "A set of devices that must share a network segment's transmission medium and may collide",
      "B": "A group of IP addresses",
      "C": "A DNS zone",
      "D": "A VLAN's IP range"
    },
    "correctAnswer": "A",
    "explanation": "A collision domain is a network segment where data packets can collide with one another when sent simultaneously over a shared medium."
  },
  {
    "id": 181,
    "numberInSet": 81,
    "setId": "set_b",
    "section": "Section 18: Ethernet Switching",
    "category": "Networking — Ethernet Switching",
    "domain": "Computer Networking",
    "question": "Full-duplex Ethernet communication allows:",
    "options": {
      "A": "Data to travel in only one direction",
      "B": "Simultaneous two-way data transmission",
      "C": "No data transmission",
      "D": "Only broadcast traffic"
    },
    "correctAnswer": "B",
    "explanation": "Full-duplex mode allows data to be transmitted and received simultaneously in both directions over a communications channel without collisions."
  },
  {
    "id": 182,
    "numberInSet": 82,
    "setId": "set_b",
    "section": "Section 18: Ethernet Switching",
    "category": "Networking — Ethernet Switching",
    "domain": "Computer Networking",
    "question": "Which device operates like a switch but broadcasts data to all ports regardless of destination, creating one large collision domain?",
    "options": {
      "A": "Router",
      "B": "Hub",
      "C": "Firewall",
      "D": "Modem"
    },
    "correctAnswer": "B",
    "explanation": "A network hub operates at Layer 1 and repeats incoming frames to all connected ports indiscriminately, creating a single collision domain."
  },
  {
    "id": 183,
    "numberInSet": 83,
    "setId": "set_b",
    "section": "Section 19: Web Development — HTML & CSS",
    "category": "Web Development — HTML & CSS",
    "domain": "Web Development",
    "question": "Which HTML tag is used to embed an image?",
    "options": {
      "A": "`<image>`",
      "B": "`<img>`",
      "C": "`<src>`",
      "D": "`<pic>`"
    },
    "correctAnswer": "B",
    "explanation": "The HTML `<img>` tag is an inline void element used to embed images into a webpage.",
    "codeSnippet": "<img src=\"logo.png\" alt=\"Company Logo\" width=\"200\">"
  },
  {
    "id": 184,
    "numberInSet": 84,
    "setId": "set_b",
    "section": "Section 19: Web Development — HTML & CSS",
    "category": "Web Development — HTML & CSS",
    "domain": "Web Development",
    "question": "Which CSS selector targets all elements with a specific class name?",
    "options": {
      "A": "`#classname`",
      "B": "`.classname`",
      "C": "`*classname`",
      "D": "`classname{}`"
    },
    "correctAnswer": "B",
    "explanation": "In CSS, a period prefix (`.classname`) targets elements belonging to that class. A hash prefix (`#id`) targets a unique ID.",
    "codeSnippet": ".card {\n  background-color: #ffffff;\n  padding: 16px;\n}"
  },
  {
    "id": 185,
    "numberInSet": 85,
    "setId": "set_b",
    "section": "Section 19: Web Development — HTML & CSS",
    "category": "Web Development — HTML & CSS",
    "domain": "Web Development",
    "question": "Which CSS layout module is designed specifically for one-dimensional layouts (row or column alignment)?",
    "options": {
      "A": "Flexbox",
      "B": "Grid only",
      "C": "Float only",
      "D": "Table layout"
    },
    "correctAnswer": "A",
    "explanation": "CSS Flexbox (Flexible Box Layout) is designed specifically for 1-dimensional layouts (aligning items along a single row or column).",
    "codeSnippet": ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}"
  },
  {
    "id": 186,
    "numberInSet": 86,
    "setId": "set_b",
    "section": "Section 19: Web Development — HTML & CSS",
    "category": "Web Development — HTML & CSS",
    "domain": "Web Development",
    "question": "Which HTML attribute provides alternative text for an image (for accessibility)?",
    "options": {
      "A": "title",
      "B": "alt",
      "C": "src",
      "D": "desc"
    },
    "correctAnswer": "B",
    "explanation": "The `alt` attribute provides alternative text description for screen readers and displays when the image fails to load.",
    "codeSnippet": "<img src=\"chart.png\" alt=\"Quarterly Sales Bar Chart\">"
  },
  {
    "id": 187,
    "numberInSet": 87,
    "setId": "set_b",
    "section": "Section 19: Web Development — HTML & CSS",
    "category": "Web Development — HTML & CSS",
    "domain": "Web Development",
    "question": "Which CSS property controls the spacing between an element's border and its content?",
    "options": {
      "A": "margin",
      "B": "padding",
      "C": "spacing",
      "D": "gap"
    },
    "correctAnswer": "B",
    "explanation": "Padding controls inner space between an element's content and its border. Margin controls outer space between the border and neighboring elements.",
    "codeSnippet": ".box {\n  padding: 20px; /* space inside border */\n  margin: 10px;  /* space outside border */\n}"
  },
  {
    "id": 188,
    "numberInSet": 88,
    "setId": "set_b",
    "section": "Section 20: Web Development — JavaScript & PHP",
    "category": "Web Development — JS & PHP",
    "domain": "Web Development",
    "question": "Which JavaScript method is used to select an HTML element by its ID?",
    "options": {
      "A": "querySelectorAll()",
      "B": "getElementById()",
      "C": "getElementByClass()",
      "D": "selectId()"
    },
    "correctAnswer": "B",
    "explanation": "`document.getElementById('myId')` is the standard JavaScript method for selecting a single DOM element by its unique HTML ID attribute.",
    "codeSnippet": "const titleElement = document.getElementById('main-title');"
  },
  {
    "id": 189,
    "numberInSet": 89,
    "setId": "set_b",
    "section": "Section 20: Web Development — JavaScript & PHP",
    "category": "Web Development — JS & PHP",
    "domain": "Web Development",
    "question": "What does the `===` operator check for in JavaScript, as opposed to `==`?",
    "options": {
      "A": "Only value equality, ignoring type",
      "B": "Both value AND type equality (strict equality)",
      "C": "Only type, ignoring value",
      "D": "Nothing — they are identical"
    },
    "correctAnswer": "B",
    "explanation": "The `===` strict equality operator checks both value AND data type without type coercion, unlike `==` which converts types automatically.",
    "codeSnippet": "5 == \"5\";  // true (type coercion)\n5 === \"5\"; // false (number vs string)"
  },
  {
    "id": 190,
    "numberInSet": 90,
    "setId": "set_b",
    "section": "Section 20: Web Development — JavaScript & PHP",
    "category": "Web Development — JS & PHP",
    "domain": "Web Development",
    "question": "In PHP, which of the following correctly declares an array?",
    "options": {
      "A": "`$arr = array(1, 2, 3);`",
      "B": "`array $arr = (1,2,3);`",
      "C": "`$arr == [1,2,3]`",
      "D": "`arr($1,$2,$3)`"
    },
    "correctAnswer": "A",
    "explanation": "In PHP, arrays can be declared using `$arr = array(1, 2, 3);` or short array syntax `$arr = [1, 2, 3];`.",
    "codeSnippet": "<?php\n  $fruits = array(\"Apple\", \"Banana\", \"Cherry\");\n?>"
  },
  {
    "id": 191,
    "numberInSet": 91,
    "setId": "set_b",
    "section": "Section 20: Web Development — JavaScript & PHP",
    "category": "Web Development — JS & PHP",
    "domain": "Web Development",
    "question": "What is the purpose of a `for` loop in JavaScript/PHP?",
    "options": {
      "A": "To declare variables only",
      "B": "To repeat a block of code a specific number of times",
      "C": "To define a function",
      "D": "To import external files"
    },
    "correctAnswer": "B",
    "explanation": "A `for` loop repeats execution of a code block a predetermined number of times based on an initializer, condition, and increment.",
    "codeSnippet": "for (let i = 0; i < 5; i++) {\n  console.log(\"Count: \" + i);\n}"
  },
  {
    "id": 192,
    "numberInSet": 92,
    "setId": "set_b",
    "section": "Section 20: Web Development — JavaScript & PHP",
    "category": "Web Development — JS & PHP",
    "domain": "Web Development",
    "question": "In PHP, which function checks whether a variable is empty?",
    "options": {
      "A": "isset()",
      "B": "empty()",
      "C": "count()",
      "D": "null()"
    },
    "correctAnswer": "B",
    "explanation": "In PHP, `empty($var)` checks if a variable is empty (e.g., empty string, 0, null, false, empty array).",
    "codeSnippet": "<?php\n  if (empty($user_input)) {\n    echo \"Field required\";\n  }\n?>"
  },
  {
    "id": 193,
    "numberInSet": 93,
    "setId": "set_b",
    "section": "Section 21: HCI — Design Stories, User Research & Personas",
    "category": "HCI — Design Stories & Personas",
    "domain": "Human-Computer Interaction",
    "question": "Which of the following is a key benefit of using personas in the design process?",
    "options": {
      "A": "They replace the need for any user testing",
      "B": "They help the design team empathize with and focus on real user needs",
      "C": "They are only useful for marketing",
      "D": "They eliminate the need for research"
    },
    "correctAnswer": "B",
    "explanation": "Personas are archetypal representations of target users based on empirical research, helping design teams maintain empathy and user-centered focus."
  },
  {
    "id": 194,
    "numberInSet": 94,
    "setId": "set_b",
    "section": "Section 21: HCI — Design Stories, User Research & Personas",
    "category": "HCI — Design Stories & Personas",
    "domain": "Human-Computer Interaction",
    "question": "Contextual inquiry, a common user research method, primarily involves:",
    "options": {
      "A": "Observing and interviewing users in their natural environment while they perform tasks",
      "B": "Reading competitor websites",
      "C": "Writing code documentation",
      "D": "Running server load tests"
    },
    "correctAnswer": "A",
    "explanation": "Contextual inquiry combines observation and semi-structured interviews while observing users working in their real-world environment."
  },
  {
    "id": 195,
    "numberInSet": 95,
    "setId": "set_b",
    "section": "Section 21: HCI — Design Stories, User Research & Personas",
    "category": "HCI — Design Stories & Personas",
    "domain": "Human-Computer Interaction",
    "question": "In a well-written user story, the \"so that\" clause typically expresses:",
    "options": {
      "A": "The technical implementation details",
      "B": "The underlying motivation or benefit the user seeks",
      "C": "The database schema",
      "D": "The deployment environment"
    },
    "correctAnswer": "B",
    "explanation": "In user story format ('As a [user], I want [feature], so that [benefit]'), the 'so that' clause articulates the underlying goal, value, or motivation."
  },
  {
    "id": 196,
    "numberInSet": 96,
    "setId": "set_b",
    "section": "Section 21: HCI — Design Stories, User Research & Personas",
    "category": "HCI — Design Stories & Personas",
    "domain": "Human-Computer Interaction",
    "question": "Card sorting, as a UX research technique, is primarily used to:",
    "options": {
      "A": "Test server response times",
      "B": "Understand how users categorize and group information for navigation/IA design",
      "C": "Debug JavaScript code",
      "D": "Optimize SQL queries"
    },
    "correctAnswer": "B",
    "explanation": "Card sorting is a usability research method where users organize topics into categories to inform information architecture and navigation design."
  },
  {
    "id": 197,
    "numberInSet": 97,
    "setId": "set_b",
    "section": "Section 22: HCI — Design Rules & Heuristics",
    "category": "HCI — Design Rules & Heuristics",
    "domain": "Human-Computer Interaction",
    "question": "Which of Nielsen's heuristics emphasizes helping users recognize, diagnose, and recover from errors using plain language rather than error codes?",
    "options": {
      "A": "Visibility of system status",
      "B": "Help users recognize, diagnose, and recover from errors",
      "C": "Aesthetic and minimalist design",
      "D": "Flexibility and efficiency of use"
    },
    "correctAnswer": "B",
    "explanation": "Nielsen's 9th heuristic highlights writing human-readable error messages with clear problem statements and constructive recovery solutions."
  },
  {
    "id": 198,
    "numberInSet": 98,
    "setId": "set_b",
    "section": "Section 22: HCI — Design Rules & Heuristics",
    "category": "HCI — Design Rules & Heuristics",
    "domain": "Human-Computer Interaction",
    "question": "The heuristic \"Recognition rather than recall\" suggests that:",
    "options": {
      "A": "Users should memorize commands",
      "B": "Interfaces should minimize the user's memory load by making objects, actions, and options visible",
      "C": "All menus should be hidden",
      "D": "Users should type commands instead of clicking"
    },
    "correctAnswer": "B",
    "explanation": "Nielsen's 6th heuristic ('Recognition rather than recall') states that interfaces should minimize user cognitive load by making actions and options visible."
  },
  {
    "id": 199,
    "numberInSet": 99,
    "setId": "set_b",
    "section": "Section 22: HCI — Design Rules & Heuristics",
    "category": "HCI — Design Rules & Heuristics",
    "domain": "Human-Computer Interaction",
    "question": "Which design principle refers to making an interface simple by removing irrelevant or rarely needed information?",
    "options": {
      "A": "Aesthetic and minimalist design",
      "B": "Error prevention",
      "C": "User control and freedom",
      "D": "Consistency and standards"
    },
    "correctAnswer": "A",
    "explanation": "Nielsen's 8th heuristic ('Aesthetic and minimalist design') mandates that dialogues should not contain irrelevant or rarely needed information."
  },
  {
    "id": 200,
    "numberInSet": 100,
    "setId": "set_b",
    "section": "Section 22: HCI — Design Rules & Heuristics",
    "category": "HCI — Design Rules & Heuristics",
    "domain": "Human-Computer Interaction",
    "question": "\"User control and freedom\" as a usability heuristic means:",
    "options": {
      "A": "Users should never be able to undo actions",
      "B": "Users should have an easily accessible \"emergency exit\" (undo/redo) if they make a mistake",
      "C": "Systems should lock users into a single path",
      "D": "Systems should require confirmation for every single click"
    },
    "correctAnswer": "B",
    "explanation": "Nielsen's 3rd heuristic ('User control and freedom') states that systems should provide a clear 'emergency exit' (undo and redo actions) when mistakes occur."
  }
];
