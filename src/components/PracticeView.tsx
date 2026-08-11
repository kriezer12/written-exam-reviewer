import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  Bookmark,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Question, QuestionCategory } from '../types/exam';
import { QUESTIONS } from '../data/questions';

interface PracticeViewProps {
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [filterMode, setFilterMode] = useState<'all' | 'saved' | 'math'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  // Filter questions based on controls
  const filteredQuestions = QUESTIONS.filter((q) => {
    if (selectedCategory !== 'ALL' && q.category !== selectedCategory) return false;
    if (filterMode === 'saved' && !bookmarkedIds.includes(q.id)) return false;
    if (filterMode === 'math' && !q.calculationSteps) return false;
    return true;
  });

  const categories: QuestionCategory[] = Array.from(new Set(QUESTIONS.map((q) => q.category)));

  const currentQ = filteredQuestions[currentIndex];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    setUserSelections({ ...userSelections, [currentQ.id]: key });
    setShowExplanation({ ...showExplanation, [currentQ.id]: true });
  };

  if (!currentQ || filteredQuestions.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '32px', textAlign: 'center' }} className="glass-panel">
        <Filter size={48} color="var(--accent-primary)" style={{ margin: '0 auto 16px' }} />
        <h3>No Questions Match Selected Filter</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Try clearing your category or filter selection to view more practice items.
        </p>
        <button
          onClick={() => {
            setSelectedCategory('ALL');
            setFilterMode('all');
          }}
          className="btn btn-primary"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  const selectedOption = userSelections[currentQ.id];
  const isAnswered = !!selectedOption;
  const isCorrect = selectedOption === currentQ.correctAnswer;
  const isBookmarked = bookmarkedIds.includes(currentQ.id);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Practice Header & Filter Bar */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={22} color="var(--accent-primary)" />
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
              Practice & Worked Solutions
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Showing {currentIndex + 1} of {filteredQuestions.length} practice items
            </span>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
            }}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 12px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            <option value="ALL">All Categories (22 Topics)</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div style={{ display: 'flex', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: '2px' }}>
            <button
              onClick={() => { setFilterMode('all'); setCurrentIndex(0); }}
              className={`btn btn-sm ${filterMode === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            >
              All
            </button>
            <button
              onClick={() => { setFilterMode('saved'); setCurrentIndex(0); }}
              className={`btn btn-sm ${filterMode === 'saved' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Saved
            </button>
            <button
              onClick={() => { setFilterMode('math'); setCurrentIndex(0); }}
              className={`btn btn-sm ${filterMode === 'math' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Calculations
            </button>
          </div>
        </div>
      </div>

      {/* Main Question Practice Card */}
      <div className="glass-panel animate-fade-in" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-indigo">Item #{currentQ.id}</span>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}>
              {currentQ.category}
            </span>
          </div>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className={`btn btn-sm ${isBookmarked ? 'btn-primary' : 'btn-ghost'}`}
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
            <span>{isBookmarked ? 'Saved' : 'Save Item'}</span>
          </button>
        </div>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          {currentQ.question}
        </h2>

        {/* Options with Instant Feedback */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {(['A', 'B', 'C', 'D'] as const).map((key) => {
            const optionText = currentQ.options[key];
            const isThisSelected = selectedOption === key;
            const isThisCorrect = currentQ.correctAnswer === key;

            let borderStyle = '1px solid var(--border-color)';
            let bgStyle = 'var(--bg-secondary)';
            let textColor = 'var(--text-primary)';

            if (isAnswered) {
              if (isThisCorrect) {
                borderStyle = '2px solid var(--color-success)';
                bgStyle = 'var(--color-success-bg)';
                textColor = 'var(--color-success)';
              } else if (isThisSelected) {
                borderStyle = '2px solid var(--color-danger)';
                bgStyle = 'var(--color-danger-bg)';
                textColor = 'var(--color-danger)';
              }
            }

            return (
              <button
                key={key}
                onClick={() => handleSelectOption(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: borderStyle,
                  background: bgStyle,
                  color: textColor,
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '0.98rem',
                  fontWeight: isThisSelected || (isAnswered && isThisCorrect) ? 700 : 400,
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isAnswered && isThisCorrect ? 'var(--color-success)' : isAnswered && isThisSelected ? 'var(--color-danger)' : 'rgba(255,255,255,0.06)',
                  color: isAnswered && (isThisCorrect || isThisSelected) ? '#ffffff' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {key}
                </div>
                <div style={{ flex: 1 }}>{optionText}</div>
                {isAnswered && isThisCorrect && <CheckCircle2 size={22} color="var(--color-success)" />}
                {isAnswered && isThisSelected && !isThisCorrect && <XCircle size={22} color="var(--color-danger)" />}
              </button>
            );
          })}
        </div>

        {/* Detailed Solution & Step-by-Step Worked Math */}
        {isAnswered && (
          <div className="animate-fade-in" style={{
            background: isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(99, 102, 241, 0.08)',
            border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isCorrect ? (
                <CheckCircle2 size={20} color="var(--color-success)" />
              ) : (
                <XCircle size={20} color="var(--color-danger)" />
              )}
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: isCorrect ? 'var(--color-success)' : '#818cf8', margin: 0 }}>
                {isCorrect ? 'Correct Answer!' : `Incorrect — Answer is Option ${currentQ.correctAnswer}`}
              </h4>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
              {currentQ.explanation}
            </p>

            {/* Worked Calculation steps if available */}
            {currentQ.calculationSteps && (
              <div style={{
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px',
                marginTop: '6px'
              }}>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#818cf8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator size={14} /> Worked Calculation Steps:
                </h5>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {currentQ.calculationSteps.map((step, idx) => (
                    <div key={idx} style={{ paddingLeft: '8px', borderLeft: '2px solid rgba(99, 102, 241, 0.5)' }}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Footer Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="btn btn-secondary"
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft size={18} />
          <span>Previous Item</span>
        </button>

        <button
          onClick={() => setCurrentIndex(Math.min(filteredQuestions.length - 1, currentIndex + 1))}
          disabled={currentIndex === filteredQuestions.length - 1}
          className="btn btn-primary"
          style={{ opacity: currentIndex === filteredQuestions.length - 1 ? 0.5 : 1 }}
        >
          <span>Next Item</span>
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
};
