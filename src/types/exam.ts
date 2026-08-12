export type QuestionCategory =
  | 'IT Fundamentals & Concepts'
  | 'History of Computers'
  | 'Number Systems'
  | 'Computer & Communication Systems'
  | 'IT Social & Professional Issues'
  | 'DSA — Array'
  | 'DSA — Stacks'
  | 'OS — CPU Architecture'
  | 'OS — Booting Process'
  | 'OS — Computer Protection'
  | 'OS — Process Management'
  | 'OS — Storage Management / Disk Scheduling'
  | 'Discrete Structures — Basic Counting'
  | 'Discrete Structures — Set Operations'
  | 'Networking — Protocol & Addressing'
  | 'Networking — OSI Reference Model'
  | 'Networking — TCP/IP Model'
  | 'Networking — Ethernet Switching'
  | 'Web Development — HTML & CSS'
  | 'Web Development — JS & PHP'
  | 'HCI — Design Stories & Personas'
  | 'HCI — Design Rules & Heuristics';

export type MainDomain =
  | 'IT Fundamentals & Laws'
  | 'Data Structures & Algorithms'
  | 'Operating Systems'
  | 'Discrete Mathematics'
  | 'Computer Networking'
  | 'Web Development'
  | 'Human-Computer Interaction';

export type QuestionSetId = 'set_a' | 'set_b' | 'all';

export interface Question {
  id: number;
  numberInSet?: number;
  setId?: 'set_a' | 'set_b';
  section: string;
  category: QuestionCategory;
  domain: MainDomain;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  calculationSteps?: string[];
  codeSnippet?: string;
  hasMath?: boolean;
}

export type ReviewMode = 'exam' | 'practice' | 'flashcards' | 'analytics' | 'bookmarks';

export interface ExamState {
  mode: ReviewMode;
  setId: QuestionSetId;
  questions: number[]; // Question IDs for current session
  currentIndex: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flagged: Record<number, boolean>;
  timeRemainingSeconds: number; // in seconds
  isTimed: boolean;
  totalTimeSeconds: number;
  isCompleted: boolean;
  startTime: number;
  completedTime?: number;
}

export interface ExamHistoryRecord {
  id: string;
  timestamp: number;
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  mode: 'full' | 'quick' | 'category';
  setId: QuestionSetId;
  categoryFilter?: string;
  domainScores: Record<MainDomain, { correct: number; total: number }>;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  soundEnabled: boolean;
  autoAdvance: boolean;
  instantFeedback: boolean;
  timerDurationMinutes: number;
  selectedSet: QuestionSetId;
}

