import React, { useState, useEffect } from 'react';
import { 
  RotateCw, 
  CheckCircle2, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  Layers,
  Sparkles
} from 'lucide-react';
import { QuestionCategory, QuestionSetId } from '../types/exam';
import { QUESTIONS, getQuestionsForSet, getQuestionSetLabel } from '../data/questions';

interface FlashcardViewProps {
  ratings: Record<number, 'known' | 'review'>;
  onRateCard: (id: number, rating: 'known' | 'review') => void;
  selectedSet?: QuestionSetId;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  ratings,
  onRateCard,
  selectedSet = 'set_a',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const targetQuestions = getQuestionsForSet(selectedSet);

  const filteredQuestions = targetQuestions.filter((q) => {
    if (selectedCategory !== 'ALL' && q.category !== selectedCategory) return false;
    return true;
  });

  const categories: QuestionCategory[] = Array.from(new Set(targetQuestions.map((q) => q.category)));
  const currentQ = filteredQuestions[currentIndex];

  const knownCount = Object.values(ratings).filter((r) => r === 'known').length;
  const reviewCount = Object.values(ratings).filter((r) => r === 'review').length;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  // Keyboard navigation for Flashcards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const tagName = activeElement?.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        return;
      }

      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredQuestions.length]);

  if (!currentQ || filteredQuestions.length === 0) return null;

  const currentRating = ratings[currentQ.id];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header & Mastery Counters */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Layers size={24} color="var(--accent-primary)" />
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
              Rapid Recall Flashcards
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Click card to reveal answer & worked explanations
            </span>
          </div>
        </div>

        {/* Section Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="btn btn-secondary btn-sm"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          >
            <option value="ALL">All Topics (100 Flashcards)</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
            <span className="badge badge-success">Known: {knownCount}</span>
            <span className="badge badge-warning">Review: {reviewCount}</span>
          </div>
        </div>
      </div>

      {/* 3D Flip Card */}
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="flip-card-inner">
          
          {/* Card Front (Question) */}
          <div className="flip-card-front glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={`badge ${currentQ.setId === 'set_b' ? 'badge-danger' : 'badge-indigo'}`}>
                {currentQ.setId === 'set_b' ? 'Set B' : 'Set A'} Card #{currentQ.numberInSet || currentQ.id} of {targetQuestions.length}
              </span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}>
                {currentQ.category}
              </span>
            </div>

            <div style={{ margin: 'auto 0', padding: '20px 0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '20px' }}>
                {currentQ.question}
              </h3>
              
              <div className="flip-card-front-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {(['A', 'B', 'C', 'D'] as const).map((key) => (
                  <div key={key} style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    textAlign: 'left'
                  }}>
                    <strong style={{ color: 'var(--accent-primary)', marginRight: '6px' }}>{key}.</strong> {currentQ.options[key]}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <RotateCw size={16} /> Click anywhere to flip card
            </div>
          </div>

          {/* Card Back (Answer & Explanation) */}
          <div className="flip-card-back glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-success">Correct Answer: {currentQ.correctAnswer}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{currentQ.domain}</span>
            </div>

            <div style={{ margin: 'auto 0', padding: '16px 0', overflowY: 'auto', maxHeight: '200px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-success)', marginBottom: '10px' }}>
                Option {currentQ.correctAnswer}: {currentQ.options[currentQ.correctAnswer]}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                {currentQ.explanation}
              </p>

              {currentQ.calculationSteps && (
                <div style={{ marginTop: '12px', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  <strong style={{ color: '#818cf8', display: 'block', marginBottom: '4px' }}>Steps:</strong>
                  {currentQ.calculationSteps.map((s, i) => (
                    <div key={i}>{s}</div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <RotateCw size={16} /> Click to flip back
            </div>
          </div>

        </div>
      </div>

      {/* Self Assessment & Desktop Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button onClick={handlePrev} className="btn btn-secondary">
          <ChevronLeft size={18} /> Prev Card
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRateCard(currentQ.id, 'review');
              handleNext();
            }}
            className={`btn ${currentRating === 'review' ? 'btn-danger' : 'btn-secondary'}`}
          >
            <HelpCircle size={18} /> Need Review
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRateCard(currentQ.id, 'known');
              handleNext();
            }}
            className={`btn ${currentRating === 'known' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ background: currentRating === 'known' ? 'var(--color-success)' : undefined }}
          >
            <CheckCircle2 size={18} /> Got It!
          </button>
        </div>

        <button onClick={handleNext} className="btn btn-secondary">
          Next Card <ChevronRight size={18} />
        </button>
      </div>

      {/* Sticky Mobile Navigation for Flashcards */}
      <div className="mobile-sticky-bottom-bar">
        <button onClick={handlePrev} className="btn btn-secondary btn-sm" style={{ padding: '8px 10px' }}>
          <ChevronLeft size={16} /> Prev
        </button>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRateCard(currentQ.id, 'review');
              handleNext();
            }}
            className={`btn btn-sm ${currentRating === 'review' ? 'btn-danger' : 'btn-secondary'}`}
            style={{ padding: '6px 10px', fontSize: '0.78rem' }}
          >
            Review
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRateCard(currentQ.id, 'known');
              handleNext();
            }}
            className={`btn btn-sm ${currentRating === 'known' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ 
              padding: '6px 10px', 
              fontSize: '0.78rem',
              background: currentRating === 'known' ? 'var(--color-success)' : undefined 
            }}
          >
            Got It!
          </button>
        </div>

        <button onClick={handleNext} className="btn btn-primary btn-sm" style={{ padding: '8px 10px' }}>
          Next <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

