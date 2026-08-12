import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Layers, 
  BarChart3, 
  Bookmark, 
  Sun, 
  Moon, 
  Award,
  Zap,
  Library
} from 'lucide-react';
import { QuestionSetId, ReviewMode, UserPreferences } from '../types/exam';
import { formatTime } from '../utils/analytics';

interface NavbarProps {
  currentMode: ReviewMode;
  onSelectMode: (mode: ReviewMode) => void;
  selectedSet: QuestionSetId;
  onSelectSet: (set: QuestionSetId) => void;
  timeRemainingSeconds: number;
  isTimedExam: boolean;
  bookmarkedCount: number;
  preferences: UserPreferences;
  onToggleTheme: () => void;
  answeredCount?: number;
  totalCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  selectedSet,
  onSelectSet,
  timeRemainingSeconds,
  isTimedExam,
  bookmarkedCount,
  preferences,
  onToggleTheme,
  answeredCount = 0,
  totalCount = 100,
}) => {
  const isTimeLow = timeRemainingSeconds < 600 && timeRemainingSeconds > 0; // Less than 10 mins

  const setBadgeLabel = 
    selectedSet === 'set_a' ? 'SET A (100)' :
    selectedSet === 'set_b' ? 'SET B (100)' : 'ALL (200)';

  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => onSelectMode('exam')}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px var(--accent-glow)'
          }}>
            <Award size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              IT Exam Reviewer <span className="badge badge-indigo">{setBadgeLabel}</span>
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
              Mock Exam • Local-First Saveable
            </p>
          </div>
        </div>

        {/* Question Set Switcher & Mode Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          
          {/* Preferred Question Set Selector */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            background: 'var(--bg-secondary)', 
            padding: '4px 10px', 
            borderRadius: 'var(--radius-sm)', 
            border: '1px solid var(--accent-primary)',
            boxShadow: '0 0 10px var(--accent-glow)'
          }}>
            <Library size={15} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Set:</span>
            <select
              value={selectedSet}
              onChange={(e) => onSelectSet(e.target.value as QuestionSetId)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '2px 4px',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="set_a" style={{ background: 'var(--bg-primary)' }}>📘 Set A (100 Items)</option>
              <option value="set_b" style={{ background: 'var(--bg-primary)' }}>📕 Set B (100 Items)</option>
              <option value="all" style={{ background: 'var(--bg-primary)' }}>📚 All Sets (200 Items)</option>
            </select>
          </div>

          {/* Navigation Tabs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '4px 0' }}>
            <button
              onClick={() => onSelectMode('exam')}
              className={`btn btn-sm ${currentMode === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Clock size={16} />
              <span>Mock Exam</span>
            </button>

            <button
              onClick={() => onSelectMode('practice')}
              className={`btn btn-sm ${currentMode === 'practice' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Zap size={16} />
              <span>Practice</span>
            </button>

            <button
              onClick={() => onSelectMode('flashcards')}
              className={`btn btn-sm ${currentMode === 'flashcards' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Layers size={16} />
              <span>Flashcards</span>
            </button>

            <button
              onClick={() => onSelectMode('bookmarks')}
              className={`btn btn-sm ${currentMode === 'bookmarks' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ position: 'relative' }}
            >
              <Bookmark size={16} />
              <span>Saved</span>
              {bookmarkedCount > 0 && (
                <span className="badge badge-indigo" style={{ padding: '1px 6px', fontSize: '0.7rem' }}>
                  {bookmarkedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onSelectMode('analytics')}
              className={`btn btn-sm ${currentMode === 'analytics' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <BarChart3 size={16} />
              <span>Analytics</span>
            </button>
          </nav>
        </div>

        {/* Right Section: Timer & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {isTimedExam && currentMode === 'exam' && (
            <div 
              className={`badge ${isTimeLow ? 'badge-danger pulse-glow' : 'badge-indigo'}`}
              style={{ padding: '8px 14px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Clock size={16} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                {formatTime(timeRemainingSeconds)}
              </span>
            </div>
          )}

          {currentMode === 'exam' && totalCount > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Progress: {answeredCount}/{totalCount}
              </span>
              <div style={{ width: '100px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                <div style={{ width: `${(answeredCount / totalCount) * 100}%`, height: '100%', background: 'var(--accent-gradient)', transition: 'width 0.3s ease' }} />
              </div>
            </div>
          )}

          <button
            onClick={onToggleTheme}
            className="btn btn-ghost btn-sm"
            title="Toggle Light/Dark Theme"
            style={{ borderRadius: '50%', width: '38px', height: '38px', padding: 0 }}
          >
            {preferences.theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>
        </div>
      </div>
    </header>
  );
};

