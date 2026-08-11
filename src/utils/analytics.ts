import { MainDomain, Question } from '../types/exam';
import { QUESTIONS } from '../data/questions';

export interface DomainStat {
  domain: MainDomain;
  correct: number;
  total: number;
  percentage: number;
}

export const ALL_DOMAINS: MainDomain[] = [
  'IT Fundamentals & Laws',
  'Data Structures & Algorithms',
  'Operating Systems',
  'Discrete Mathematics',
  'Computer Networking',
  'Web Development',
  'Human-Computer Interaction',
];

export const calculateDomainPerformance = (
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>,
  questionIds?: number[]
): DomainStat[] => {
  const targetQuestions = questionIds
    ? QUESTIONS.filter((q) => questionIds.includes(q.id))
    : QUESTIONS;

  const domainMap: Record<MainDomain, { correct: number; total: number }> = {
    'IT Fundamentals & Laws': { correct: 0, total: 0 },
    'Data Structures & Algorithms': { correct: 0, total: 0 },
    'Operating Systems': { correct: 0, total: 0 },
    'Discrete Mathematics': { correct: 0, total: 0 },
    'Computer Networking': { correct: 0, total: 0 },
    'Web Development': { correct: 0, total: 0 },
    'Human-Computer Interaction': { correct: 0, total: 0 },
  };

  targetQuestions.forEach((q) => {
    domainMap[q.domain].total += 1;
    if (answers[q.id] === q.correctAnswer) {
      domainMap[q.domain].correct += 1;
    }
  });

  return ALL_DOMAINS.map((domain) => {
    const { correct, total } = domainMap[domain];
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { domain, correct, total, percentage };
  });
};

export const getReadinessGrade = (percentage: number): { grade: string; label: string; color: string } => {
  if (percentage >= 90) return { grade: 'A+', label: 'Mastery — Ready for Highest Honors', color: '#10b981' };
  if (percentage >= 80) return { grade: 'A', label: 'Excellent — High Chance of Passing', color: '#3b82f6' };
  if (percentage >= 70) return { grade: 'B', label: 'Good — Solid Passing Score', color: '#8b5cf6' };
  if (percentage >= 60) return { grade: 'C', label: 'Fair — Borderline Pass', color: '#f59e0b' };
  return { grade: 'D', label: 'Needs Intensive Review', color: '#ef4444' };
};

export const formatTime = (totalSeconds: number): string => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
