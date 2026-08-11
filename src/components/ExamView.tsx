import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Flag, 
  Grid, 
  CheckCircle2, 
  HelpCircle,
  Calculator,
  Send
} from 'lucide-react';
import { Question } from '../types/exam';

interface ExamViewProps {
  questions: Question[];
  currentIndex: number;
  onNavigateIndex: (index: number) => void;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onSelectAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  flagged: Record<number, boolean>;
  onToggleFlag: (questionId: number) => void;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
  onSubmitExam: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  questions,
  currentIndex,
  onNavigateIndex,
  answers,
  onSelectAnswer,
  flagged,
  onToggleFlag,
  bookmarkedIds,
  onToggleBookmark,
  onSubmitExam,
}) => {
  const [showGridDrawer, setShowGridDrawer] = useState(false);
  const [showCalculationHelper, setShowCalculationHelper] = useState(false);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const isBookmarked = bookmarkedIds.includes(currentQ.id);
  const isFlagged = !!flagged[currentQ.id];
  const selectedAnswer = answers[currentQ.id];

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Controller Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge badge-indigo" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}>
            {currentQ.domain}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {currentQ.calculationSteps && (
            <button
              onClick={() => setShowCalculationHelper(!showCalculationHelper)}
              className={`btn btn-sm ${showCalculationHelper ? 'btn-primary' : 'btn-secondary'}`}
              title="Toggle worked solution / scratch calculation steps"
            >
              <Calculator size={16} />
              <span>{showCalculationHelper ? 'Hide Calculation' : 'View Calc Steps'}</span>
            </button>
          )}

          <button
            onClick={() => onToggleFlag(currentQ.id)}
            className={`btn btn-sm ${isFlagged ? 'btn-danger' : 'btn-ghost'}`}
            title="Flag question for later review"
          >
            <Flag size={16} fill={isFlagged ? 'currentColor' : 'none'} />
            <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className={`btn btn-sm ${isBookmarked ? 'btn-primary' : 'btn-ghost'}`}
            title="Bookmark question"
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            className="btn btn-secondary btn-sm"
          >
            <Grid size={16} />
            <span>Navigator ({answeredCount}/{totalQuestions})</span>
          </button>
        </div>
      </div>

      {/* Question Drawer Matrix Popup */}
      {showGridDrawer && (
        <div className="glass-panel animate-fade-in" style={{ padding: '20px', border: '1px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
              Question Matrix Navigator
            </h3>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span> Answered
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-warning)' }}></span> Flagged
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border-color)' }}></span> Unanswered
              </span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(42px, 1fr))',
            gap: '8px',
            maxHeight: '220px',
            overflowY: 'auto',
            paddingRight: '6px'
          }}>
            {questions.map((q, idx) => {
              const isAns = !!answers[q.id];
              const isFlg = !!flagged[q.id];
              const isCurr = idx === currentIndex;

              let bgColor = 'var(--bg-secondary)';
              let textColor = 'var(--text-secondary)';
              let borderColor = 'var(--border-color)';

              if (isAns) {
                bgColor = 'rgba(99, 102, 241, 0.2)';
                textColor = '#818cf8';
                borderColor = 'rgba(99, 102, 241, 0.4)';
              }

              if (isFlg) {
                bgColor = 'rgba(245, 158, 11, 0.2)';
                textColor = '#fbbf24';
                borderColor = 'rgba(245, 158, 11, 0.4)';
              }

              if (isCurr) {
                borderColor = 'var(--accent-primary)';
                textColor = '#ffffff';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigateIndex(idx);
                    setShowGridDrawer(false);
                  }}
                  style={{
                    height: '38px',
                    borderRadius: '8px',
                    border: `2px solid ${borderColor}`,
                    background: bgColor,
                    color: textColor,
                    fontWeight: isCurr ? 800 : 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isCurr ? '0 0 10px var(--accent-glow)' : 'none'
                  }}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Category Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span className="badge badge-indigo">{currentQ.category}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{currentQ.section}</span>
        </div>

        {/* Question Text */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.5 }}>
          {currentQ.question}
        </h2>

        {/* Worked Calculation Helper Card */}
        {showCalculationHelper && currentQ.calculationSteps && (
          <div style={{
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: 'var(--radius-sm)',
            padding: '16px',
            marginTop: '8px'
          }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calculator size={16} /> Scratch Calculation Breakdown
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              {currentQ.calculationSteps.map((step, idx) => (
                <div key={idx} style={{ paddingLeft: '8px', borderLeft: '2px solid rgba(99, 102, 241, 0.4)' }}>
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
          {(['A', 'B', 'C', 'D'] as const).map((key) => {
            const optionText = currentQ.options[key];
            const isSelected = selectedAnswer === key;

            return (
              <button
                key={key}
                onClick={() => onSelectAnswer(currentQ.id, key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-secondary)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  fontSize: '0.98rem',
                  fontWeight: isSelected ? 600 : 400,
                  boxShadow: isSelected ? '0 4px 12px rgba(99, 102, 241, 0.15)' : 'none'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isSelected ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.06)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  {key}
                </div>
                <div style={{ flex: 1 }}>
                  {optionText}
                </div>
                {isSelected && <CheckCircle2 size={20} color="#818cf8" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation & Submit Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={() => onNavigateIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="btn btn-secondary"
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onSubmitExam}
            className="btn btn-primary"
            style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
          >
            <Send size={18} />
            <span>Submit Exam ({answeredCount}/{totalQuestions})</span>
          </button>

          <button
            onClick={() => onNavigateIndex(currentIndex + 1)}
            disabled={currentIndex === totalQuestions - 1}
            className="btn btn-secondary"
            style={{ opacity: currentIndex === totalQuestions - 1 ? 0.5 : 1 }}
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
};
