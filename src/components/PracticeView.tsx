import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  Bookmark,
  Grid,
  Sparkles,
  Search,
  Library
} from 'lucide-react';
import { Question, QuestionCategory, QuestionSetId } from '../types/exam';
import { QUESTIONS, getQuestionsForSet, getQuestionSetLabel } from '../data/questions';
import { getSavedPracticeState, savePracticeState } from '../utils/storage';

interface PracticeViewProps {
  bookmarkedIds: number[];
  onToggleBookmark: (id: number) => void;
  selectedSet?: QuestionSetId;
  onSelectSet?: (set: QuestionSetId) => void;
  initialQuestionId?: number;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  selectedSet = 'set_a',
  onSelectSet,
  initialQuestionId,
}) => {
  // Load initial saved practice state
  const savedState = getSavedPracticeState();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    savedState?.selectedCategory || 'ALL'
  );
  const [filterMode, setFilterMode] = useState<'all' | 'saved' | 'math'>(
    savedState?.filterMode || 'all'
  );
  const [userSelections, setUserSelections] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>(
    savedState?.userSelections || {}
  );

  const setQuestions = getQuestionsForSet(selectedSet);

  // Filter questions based on category and mode
  const filteredQuestions = setQuestions.filter((q) => {
    if (selectedCategory !== 'ALL' && q.category !== selectedCategory) return false;
    if (filterMode === 'saved' && !bookmarkedIds.includes(q.id)) return false;
    if (filterMode === 'math' && !q.calculationSteps) return false;
    return true;
  });

  // Track active question ID (prefer initialQuestionId, then saved state, then first item in set)
  const [activeQuestionId, setActiveQuestionId] = useState<number>(() => {
    if (initialQuestionId && setQuestions.some((q) => q.id === initialQuestionId)) {
      return initialQuestionId;
    }
    if (savedState?.currentQuestionId && setQuestions.some((q) => q.id === savedState.currentQuestionId)) {
      return savedState.currentQuestionId;
    }
    return setQuestions[0]?.id || 1;
  });

  const [showGridDrawer, setShowGridDrawer] = useState(false);
  const [jumpInput, setJumpInput] = useState('');

  // Find index of active question in current filtered array
  let activeIndex = filteredQuestions.findIndex((q) => q.id === activeQuestionId);
  if (activeIndex === -1 && filteredQuestions.length > 0) {
    activeIndex = 0;
  }

  const currentQ = filteredQuestions[activeIndex] || QUESTIONS.find((q) => q.id === activeQuestionId) || QUESTIONS[0];

  // Auto-save practice state on change
  useEffect(() => {
    if (currentQ) {
      savePracticeState({
        selectedCategory,
        filterMode,
        currentQuestionId: currentQ.id,
        userSelections,
      });
    }
  }, [selectedCategory, filterMode, currentQ?.id, userSelections]);

  // Spacebar and Arrow key navigation for Practice mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const tagName = activeElement?.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        return;
      }

      if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeIndex < filteredQuestions.length - 1) {
          setActiveQuestionId(filteredQuestions[activeIndex + 1].id);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeIndex > 0) {
          setActiveQuestionId(filteredQuestions[activeIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredQuestions]);

  const categories: QuestionCategory[] = Array.from(new Set(QUESTIONS.map((q) => q.category)));

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    const updated = { ...userSelections, [currentQ.id]: key };
    setUserSelections(updated);
  };

  const handleJumpToId = (targetId: number) => {
    const targetQ = QUESTIONS.find((q) => q.id === targetId);
    if (targetQ) {
      // If target item is outside current category filter, reset category filter to ALL so it displays
      if (selectedCategory !== 'ALL' && targetQ.category !== selectedCategory) {
        setSelectedCategory('ALL');
      }
      if (filterMode === 'saved' && !bookmarkedIds.includes(targetId)) {
        setFilterMode('all');
      }
      setActiveQuestionId(targetId);
      setShowGridDrawer(false);
      setJumpInput('');
    }
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num)) {
      const match = setQuestions.find((q) => q.numberInSet === num || q.id === num);
      if (match) {
        handleJumpToId(match.id);
      }
    }
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
            setActiveQuestionId(setQuestions[0]?.id || 1);
          }}
          className="btn btn-primary"
        >
          Reset Filters & Return to Item #1
        </button>
      </div>
    );
  }

  const selectedOption = userSelections[currentQ.id];
  const isAnswered = !!selectedOption;
  const isCorrect = selectedOption === currentQ.correctAnswer;
  const isBookmarked = bookmarkedIds.includes(currentQ.id);

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Practice Header & Direct Navigation Control Bar */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={22} color="var(--accent-primary)" />
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              Practice Mode <span className="badge badge-indigo">Saved Position</span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Item {currentQ.numberInSet || currentQ.id} of {setQuestions.length} ({activeIndex + 1} of {filteredQuestions.length} in filter)
            </span>
          </div>
        </div>

        {/* Filters & Direct Jump Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          
          {/* Quick Jump Input */}
          <form onSubmit={handleJumpSubmit} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                min="1"
                max={setQuestions.length}
                placeholder={`Jump # (1-${setQuestions.length})`}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                style={{
                  width: '130px',
                  padding: '7px 10px 7px 30px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem'
                }}
              />
              <Search size={14} style={{ position: 'absolute', left: '10px', color: 'var(--text-muted)' }} />
            </div>
            <button type="submit" className="btn btn-secondary btn-sm">
              Go
            </button>
          </form>

          {/* Matrix Navigator Drawer Toggle */}
          <button
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            className={`btn btn-sm ${showGridDrawer ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Grid size={16} />
            <span>Matrix Drawer</span>
          </button>

          {/* Category Filter Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 12px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            <option value="ALL">All Categories (22 Topics)</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Mode Tabs */}
          <div style={{ display: 'flex', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: '2px' }}>
            <button
              onClick={() => setFilterMode('all')}
              className={`btn btn-sm ${filterMode === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('saved')}
              className={`btn btn-sm ${filterMode === 'saved' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Saved
            </button>
            <button
              onClick={() => setFilterMode('math')}
              className={`btn btn-sm ${filterMode === 'math' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Math/Code
            </button>
          </div>

        </div>
      </div>

      {/* Question Matrix Drawer for Direct Jumps */}
      {showGridDrawer && (
        <div className="glass-panel animate-fade-in" style={{ padding: '20px', border: '1px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
              Direct Question Jump Grid (1–100)
            </h3>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-success)' }}></span> Correct
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-danger)' }}></span> Missed
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
            maxHeight: '240px',
            overflowY: 'auto',
            paddingRight: '6px'
          }}>
            {QUESTIONS.map((q) => {
              const userAns = userSelections[q.id];
              const isAns = !!userAns;
              const isRight = isAns && userAns === q.correctAnswer;
              const isCurr = q.id === currentQ.id;

              let bgColor = 'var(--bg-secondary)';
              let textColor = 'var(--text-secondary)';
              let borderColor = 'var(--border-color)';

              if (isAns) {
                if (isRight) {
                  bgColor = 'var(--color-success-bg)';
                  textColor = 'var(--color-success)';
                  borderColor = 'rgba(16, 185, 129, 0.4)';
                } else {
                  bgColor = 'var(--color-danger-bg)';
                  textColor = 'var(--color-danger)';
                  borderColor = 'rgba(239, 68, 68, 0.4)';
                }
              }

              if (isCurr) {
                borderColor = 'var(--accent-primary)';
                textColor = '#ffffff';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => handleJumpToId(q.id)}
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
                    boxShadow: isCurr ? '0 0 12px var(--accent-glow)' : 'none'
                  }}
                  title={`Item #${q.id} — ${q.category}`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>
      )}

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={() => {
            const prevQ = filteredQuestions[activeIndex - 1];
            if (prevQ) setActiveQuestionId(prevQ.id);
          }}
          disabled={activeIndex === 0}
          className="btn btn-secondary"
          style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft size={18} />
          <span>Previous Item</span>
        </button>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Use Matrix Drawer or Search bar to jump directly to any item
        </span>

        <button
          onClick={() => {
            const nextQ = filteredQuestions[activeIndex + 1];
            if (nextQ) setActiveQuestionId(nextQ.id);
          }}
          disabled={activeIndex === filteredQuestions.length - 1}
          className="btn btn-primary"
          style={{ opacity: activeIndex === filteredQuestions.length - 1 ? 0.5 : 1 }}
        >
          <span>Next Item</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Floating Mobile Bottom Toolbar for Practice Mode */}
      <div className="mobile-sticky-bottom-bar">
        <button
          onClick={() => {
            const prevQ = filteredQuestions[activeIndex - 1];
            if (prevQ) setActiveQuestionId(prevQ.id);
          }}
          disabled={activeIndex === 0}
          className="btn btn-secondary btn-sm"
          style={{ opacity: activeIndex === 0 ? 0.4 : 1, padding: '8px 12px' }}
        >
          <ChevronLeft size={18} /> Prev
        </button>

        <button
          onClick={() => setShowGridDrawer(!showGridDrawer)}
          className="btn btn-ghost btn-sm"
          style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-primary)' }}
        >
          <Grid size={16} /> Item {currentQ.numberInSet || currentQ.id}/{setQuestions.length}
        </button>

        <button
          onClick={() => {
            const nextQ = filteredQuestions[activeIndex + 1];
            if (nextQ) setActiveQuestionId(nextQ.id);
          }}
          disabled={activeIndex === filteredQuestions.length - 1}
          className="btn btn-primary btn-sm"
          style={{ opacity: activeIndex === filteredQuestions.length - 1 ? 0.4 : 1, padding: '8px 14px' }}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
};

