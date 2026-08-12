import React, { useState } from 'react';
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
  Library,
  Wrench,
  Menu,
  X
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTimeLow = timeRemainingSeconds < 600 && timeRemainingSeconds > 0; // Less than 10 mins

  const setBadgeLabel = 
    selectedSet === 'set_a' ? 'SET A (100)' :
    selectedSet === 'set_b' ? 'SET B (100)' :
    selectedSet === 'set_c' ? 'SET C (100)' : 'ALL (300)';

  const handleNavClick = (mode: ReviewMode) => {
    onSelectMode(mode);
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minHeight: '60px' }}>
        
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0 }} onClick={() => handleNavClick('exam')}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px var(--accent-glow)',
            flexShrink: 0
          }}>
            <Award size={20} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
              IT Exam Reviewer <span className="badge badge-indigo desktop-only" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>{setBadgeLabel}</span>
            </h1>
            <p className="desktop-only" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', margin: 0 }}>
              Mock Exam • Local-First
            </p>
          </div>
        </div>

        {/* Desktop View Navigation */}
        <div className="desktop-only" style={{ alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          
          {/* Question Set Selector */}
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
              <option value="set_c" style={{ background: 'var(--bg-primary)' }}>📗 Set C (100 Items)</option>
              <option value="all" style={{ background: 'var(--bg-primary)' }}>📚 All Sets (300 Items)</option>
            </select>
          </div>

          {/* Navigation Tabs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '4px 0' }}>
            <button
              onClick={() => handleNavClick('exam')}
              className={`btn btn-sm ${currentMode === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Clock size={16} />
              <span>Mock Exam</span>
            </button>

            <button
              onClick={() => handleNavClick('practice')}
              className={`btn btn-sm ${currentMode === 'practice' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Zap size={16} />
              <span>Practice</span>
            </button>

            <button
              onClick={() => handleNavClick('flashcards')}
              className={`btn btn-sm ${currentMode === 'flashcards' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Layers size={16} />
              <span>Flashcards</span>
            </button>

            <button
              onClick={() => handleNavClick('bookmarks')}
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
              onClick={() => handleNavClick('analytics')}
              className={`btn btn-sm ${currentMode === 'analytics' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <BarChart3 size={16} />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => handleNavClick('hands-on')}
              className={`btn btn-sm ${currentMode === 'hands-on' ? 'btn-primary' : 'btn-ghost'}`}
              style={currentMode === 'hands-on' ? { background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)' } : {}}
            >
              <Wrench size={16} />
              <span>Hands-on</span>
            </button>
          </nav>
        </div>

        {/* Right Header Section: Timer, Progress & Theme/Menu Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {isTimedExam && currentMode === 'exam' && (
            <div 
              className={`badge ${isTimeLow ? 'badge-danger pulse-glow' : 'badge-indigo'}`}
              style={{ padding: '4px 8px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Clock size={13} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                {formatTime(timeRemainingSeconds)}
              </span>
            </div>
          )}

          {currentMode === 'exam' && totalCount > 0 && (
            <div className="desktop-only" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Progress: {answeredCount}/{totalCount}
              </span>
              <div style={{ width: '90px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                <div style={{ width: `${(answeredCount / totalCount) * 100}%`, height: '100%', background: 'var(--accent-gradient)', transition: 'width 0.3s ease' }} />
              </div>
            </div>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="btn btn-ghost btn-sm"
            title="Toggle Light/Dark Theme"
            style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0 }}
          >
            {preferences.theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm mobile-only"
            title="Toggle Mobile Navigation Menu"
            style={{ width: '38px', height: '38px', padding: 0 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {/* Question Set Selection on Mobile */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            background: 'var(--bg-secondary)',
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-highlight)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                <Library size={16} /> Active Question Set:
              </div>
              <span className="badge badge-indigo">{setBadgeLabel}</span>
            </div>
            <select
              value={selectedSet}
              onChange={(e) => {
                onSelectSet(e.target.value as QuestionSetId);
                setMobileMenuOpen(false);
              }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '10px 12px',
                borderRadius: '8px',
                width: '100%',
                outline: 'none',
              }}
            >
              <option value="set_a">📘 Set A (100 Items - Fundamentals & Systems)</option>
              <option value="set_b">📕 Set B (100 Items - Advanced Tech & Arch)</option>
              <option value="set_c">📗 Set C (100 Items - Modern Web & Cloud)</option>
              <option value="all">📚 All Sets (300 Total Items)</option>
            </select>
          </div>

          {/* Navigation Section Header */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
            Select Mode:
          </div>

          {/* Mobile Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => handleNavClick('exam')}
              className={`btn ${currentMode === 'exam' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'flex-start', width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <Clock size={18} />
              <span>Mock Exam Session</span>
            </button>

            <button
              onClick={() => handleNavClick('practice')}
              className={`btn ${currentMode === 'practice' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'flex-start', width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <Zap size={18} />
              <span>Practice Mode</span>
            </button>

            <button
              onClick={() => handleNavClick('flashcards')}
              className={`btn ${currentMode === 'flashcards' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'flex-start', width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <Layers size={18} />
              <span>Rapid Flashcards</span>
            </button>

            <button
              onClick={() => handleNavClick('bookmarks')}
              className={`btn ${currentMode === 'bookmarks' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'space-between', width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bookmark size={18} />
                <span>Saved Bookmarks</span>
              </div>
              {bookmarkedCount > 0 && (
                <span className="badge badge-indigo" style={{ fontSize: '0.75rem' }}>
                  {bookmarkedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('analytics')}
              className={`btn ${currentMode === 'analytics' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'flex-start', width: '100%', padding: '12px 16px', fontSize: '0.95rem' }}
            >
              <BarChart3 size={18} />
              <span>Analytics & Progress</span>
            </button>

            <button
              onClick={() => handleNavClick('hands-on')}
              className={`btn ${currentMode === 'hands-on' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ 
                justifyContent: 'flex-start', 
                width: '100%', 
                padding: '12px 16px',
                fontSize: '0.95rem',
                background: currentMode === 'hands-on' ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)' : undefined 
              }}
            >
              <Wrench size={18} />
              <span>Hands-on Lab</span>
            </button>
          </div>

          {/* Exam Progress Summary on Mobile */}
          {currentMode === 'exam' && totalCount > 0 && (
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              marginTop: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600 }}>
                <span>Exam Progress</span>
                <span style={{ color: 'var(--accent-primary)' }}>{answeredCount}/{totalCount} Answered</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${(answeredCount / totalCount) * 100}%`, height: '100%', background: 'var(--accent-gradient)', transition: 'width 0.3s ease' }} />
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};



