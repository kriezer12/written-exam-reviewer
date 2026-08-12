import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  XCircle, 
  CheckCircle2, 
  RotateCcw, 
  BarChart2, 
  HelpCircle,
  Clock,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Question } from '../types/exam';
import { calculateDomainPerformance, formatTime, getReadinessGrade } from '../utils/analytics';

interface ResultsViewProps {
  questions: Question[];
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flagged: Record<number, boolean>;
  timeSpentSeconds: number;
  onRetakeExam: () => void;
  onPracticeMissed: (missedIds: number[]) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  questions,
  answers,
  flagged,
  timeSpentSeconds,
  onRetakeExam,
  onPracticeMissed,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'missed' | 'correct' | 'flagged'>('missed');

  const totalQuestions = questions.length;
  let correctCount = 0;

  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = percentage >= 70;
  const readiness = getReadinessGrade(percentage);

  const domainStats = calculateDomainPerformance(answers, questions.map((q) => q.id), questions);

  const missedQuestionIds = questions
    .filter((q) => answers[q.id] !== q.correctAnswer)
    .map((q) => q.id);

  useEffect(() => {
    if (isPassed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isPassed]);

  const filteredQuestions = questions.filter((q) => {
    const isCorr = answers[q.id] === q.correctAnswer;
    const isFlg = !!flagged[q.id];

    if (filterMode === 'correct' && !isCorr) return false;
    if (filterMode === 'missed' && isCorr) return false;
    if (filterMode === 'flagged' && !isFlg) return false;
    return true;
  });

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Banner Card */}
      <div className="glass-panel animate-fade-in" style={{
        padding: '36px',
        textAlign: 'center',
        background: isPassed 
          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(17, 24, 39, 0.8) 100%)' 
          : 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(17, 24, 39, 0.8) 100%)',
        border: `1px solid ${isPassed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: isPassed ? 'var(--color-success-bg)' : 'var(--color-danger-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${isPassed ? 'var(--color-success)' : 'var(--color-danger)'}`
        }}>
          {isPassed ? <Trophy size={40} color="var(--color-success)" /> : <XCircle size={40} color="var(--color-danger)" />}
        </div>

        <div>
          <span className={`badge ${isPassed ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.9rem', padding: '6px 14px' }}>
            {isPassed ? 'EXAM PASSED' : 'EXAM FAILED'}
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '8px 0 4px', fontFamily: 'var(--font-heading)' }}>
            {correctCount} / {totalQuestions} ({percentage}%)
          </h2>
          <p style={{ color: readiness.color, fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
            {readiness.grade} — {readiness.label}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={16} /> Time Taken: {formatTime(timeSpentSeconds)}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} color="var(--color-success)" /> Correct: {correctCount}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <XCircle size={16} color="var(--color-danger)" /> Missed: {missedQuestionIds.length}
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '12px' }}>
          <button onClick={onRetakeExam} className="btn btn-primary">
            <RotateCcw size={18} /> Retake Full Exam
          </button>

          {missedQuestionIds.length > 0 && (
            <button
              onClick={() => onPracticeMissed(missedQuestionIds)}
              className="btn btn-secondary"
            >
              <HelpCircle size={18} /> Drill {missedQuestionIds.length} Missed Questions
            </button>
          )}
        </div>
      </div>

      {/* Domain Mastery Breakdown Grid */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart2 size={20} color="var(--accent-primary)" /> Performance Breakdown by Topic Domain
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {domainStats.map((stat) => (
            <div key={stat.domain} style={{
              background: 'var(--bg-secondary)',
              padding: '16px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                <span>{stat.domain}</span>
                <span style={{ color: stat.percentage >= 70 ? 'var(--color-success)' : 'var(--color-danger)' }}>
                  {stat.correct}/{stat.total} ({stat.percentage}%)
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${stat.percentage}%`,
                  height: '100%',
                  background: stat.percentage >= 70 ? 'var(--color-success)' : stat.percentage >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
                  transition: 'width 0.4s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Review Accordion */}
      <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
            Item-by-Item Answer Review
          </h3>

          <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-secondary)', padding: '3px', borderRadius: '8px' }}>
            <button
              onClick={() => setFilterMode('missed')}
              className={`btn btn-sm ${filterMode === 'missed' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Missed ({missedQuestionIds.length})
            </button>
            <button
              onClick={() => setFilterMode('all')}
              className={`btn btn-sm ${filterMode === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`btn btn-sm ${filterMode === 'correct' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Correct ({correctCount})
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredQuestions.map((q) => {
            const userAns = answers[q.id];
            const isCorr = userAns === q.correctAnswer;

            return (
              <div key={q.id} style={{
                background: 'var(--bg-secondary)',
                border: `1px solid ${isCorr ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
                borderRadius: 'var(--radius-sm)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`badge ${isCorr ? 'badge-success' : 'badge-danger'}`}>
                      Item #{q.id}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {q.category}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: isCorr ? 'var(--color-success)' : 'var(--color-danger)' }}>
                    {isCorr ? '✓ Correct' : `✗ Your Ans: ${userAns || 'None'} | Correct: ${q.correctAnswer}`}
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  {q.question}
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '0.85rem' }}>
                  {(['A', 'B', 'C', 'D'] as const).map((key) => {
                    const isKeyCorr = q.correctAnswer === key;
                    const isKeyUser = userAns === key;

                    let bg = 'rgba(255,255,255,0.02)';
                    let color = 'var(--text-secondary)';
                    let border = '1px solid var(--border-color)';

                    if (isKeyCorr) {
                      bg = 'var(--color-success-bg)';
                      color = 'var(--color-success)';
                      border = '1px solid var(--color-success)';
                    } else if (isKeyUser && !isKeyCorr) {
                      bg = 'var(--color-danger-bg)';
                      color = 'var(--color-danger)';
                      border = '1px solid var(--color-danger)';
                    }

                    return (
                      <div key={key} style={{ padding: '8px 12px', borderRadius: '6px', background: bg, border, color }}>
                        <strong>{key}.</strong> {q.options[key]}
                      </div>
                    );
                  })}
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '6px', marginTop: '4px' }}>
                  <strong style={{ color: '#818cf8', display: 'block', marginBottom: '4px' }}>Explanation:</strong>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
