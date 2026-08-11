import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ExamView } from './components/ExamView';
import { PracticeView } from './components/PracticeView';
import { FlashcardView } from './components/FlashcardView';
import { ResultsView } from './components/ResultsView';
import { AnalyticsView } from './components/AnalyticsView';
import { QUESTIONS } from './data/questions';
import { ExamHistoryRecord, ExamState, ReviewMode, UserPreferences } from './types/exam';
import { 
  clearActiveExamState, 
  getActiveExamState, 
  getBookmarkedIds, 
  getExamHistory, 
  getFlashcardRatings, 
  getSavedPreferences, 
  saveActiveExamState, 
  saveExamHistoryRecord, 
  saveFlashcardRating, 
  savePreferences, 
  toggleBookmarkId,
  clearExamHistory
} from './utils/storage';
import { calculateDomainPerformance } from './utils/analytics';

export const App: React.FC = () => {
  // Theme & Preferences
  const [preferences, setPreferences] = useState<UserPreferences>(() => getSavedPreferences());
  const [currentMode, setCurrentMode] = useState<ReviewMode>('exam');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getBookmarkedIds());
  const [flashcardRatings, setFlashcardRatings] = useState<Record<number, 'known' | 'review'>>(() => getFlashcardRatings());
  const [examHistory, setExamHistory] = useState<ExamHistoryRecord[]>(() => getExamHistory());

  // Active Exam State
  const [examState, setExamState] = useState<ExamState>(() => {
    const saved = getActiveExamState();
    if (saved) return saved;

    return {
      mode: 'exam',
      questions: QUESTIONS.map((q) => q.id),
      currentIndex: 0,
      answers: {},
      flagged: {},
      timeRemainingSeconds: 90 * 60, // 90 mins default
      isTimed: true,
      totalTimeSeconds: 90 * 60,
      isCompleted: false,
      startTime: Date.now(),
    };
  });

  // Apply Theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', preferences.theme);
  }, [preferences.theme]);

  // Persist Active Exam State to LocalStorage
  useEffect(() => {
    if (!examState.isCompleted) {
      saveActiveExamState(examState);
    }
  }, [examState]);

  // Timer Tick Interval for Mock Exam
  useEffect(() => {
    if (!examState.isTimed || examState.isCompleted || currentMode !== 'exam') return;

    const timer = setInterval(() => {
      setExamState((prev) => {
        if (prev.timeRemainingSeconds <= 1) {
          clearInterval(timer);
          // Auto submit when timer expires
          return {
            ...prev,
            timeRemainingSeconds: 0,
            isCompleted: true,
            completedTime: Date.now(),
          };
        }
        return {
          ...prev,
          timeRemainingSeconds: prev.timeRemainingSeconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState.isTimed, examState.isCompleted, currentMode]);

  // Toggle Theme
  const handleToggleTheme = () => {
    const updatedTheme = preferences.theme === 'dark' ? 'light' : 'dark';
    const updatedPrefs: UserPreferences = { ...preferences, theme: updatedTheme };
    setPreferences(updatedPrefs);
    savePreferences(updatedPrefs);
  };

  // Answer Select Handler
  const handleSelectAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => {
    setExamState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer },
    }));
  };

  // Flag Question Handler
  const handleToggleFlag = (questionId: number) => {
    setExamState((prev) => ({
      ...prev,
      flagged: { ...prev.flagged, [questionId]: !prev.flagged[questionId] },
    }));
  };

  // Bookmark Question Handler
  const handleToggleBookmark = (questionId: number) => {
    const updated = toggleBookmarkId(questionId);
    setBookmarkedIds(updated);
  };

  // Submit Exam Handler
  const handleSubmitExam = () => {
    const timeSpent = examState.totalTimeSeconds - examState.timeRemainingSeconds;
    
    // Calculate final score
    let score = 0;
    QUESTIONS.forEach((q) => {
      if (examState.answers[q.id] === q.correctAnswer) {
        score++;
      }
    });

    const domainPerformance = calculateDomainPerformance(examState.answers);
    const domainScoresObj = domainPerformance.reduce((acc, curr) => {
      acc[curr.domain] = { correct: curr.correct, total: curr.total };
      return acc;
    }, {} as any);

    const historyRecord: ExamHistoryRecord = {
      id: `exam_${Date.now()}`,
      timestamp: Date.now(),
      score,
      totalQuestions: QUESTIONS.length,
      timeSpentSeconds: timeSpent,
      mode: 'full',
      domainScores: domainScoresObj,
    };

    saveExamHistoryRecord(historyRecord);
    setExamHistory(getExamHistory());

    setExamState((prev) => ({
      ...prev,
      isCompleted: true,
      completedTime: Date.now(),
    }));

    clearActiveExamState();
  };

  // Retake Exam Handler
  const handleRetakeExam = () => {
    const newExamState: ExamState = {
      mode: 'exam',
      questions: QUESTIONS.map((q) => q.id),
      currentIndex: 0,
      answers: {},
      flagged: {},
      timeRemainingSeconds: preferences.timerDurationMinutes * 60,
      isTimed: true,
      totalTimeSeconds: preferences.timerDurationMinutes * 60,
      isCompleted: false,
      startTime: Date.now(),
    };
    setExamState(newExamState);
    saveActiveExamState(newExamState);
    setCurrentMode('exam');
  };

  // Drill Missed Questions in Practice Mode
  const handlePracticeMissed = (missedIds: number[]) => {
    setCurrentMode('practice');
  };

  // Flashcard Rate Handler
  const handleRateCard = (id: number, rating: 'known' | 'review') => {
    const updated = saveFlashcardRating(id, rating);
    setFlashcardRatings(updated);
  };

  // Clear Exam History
  const handleClearHistory = () => {
    clearExamHistory();
    setExamHistory([]);
  };

  const answeredCount = Object.keys(examState.answers).length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        currentMode={currentMode}
        onSelectMode={(mode) => setCurrentMode(mode)}
        timeRemainingSeconds={examState.timeRemainingSeconds}
        isTimedExam={examState.isTimed}
        bookmarkedCount={bookmarkedIds.length}
        preferences={preferences}
        onToggleTheme={handleToggleTheme}
        answeredCount={answeredCount}
        totalCount={QUESTIONS.length}
      />

      <main style={{ flex: 1, paddingBottom: '40px' }}>
        {currentMode === 'exam' && (
          examState.isCompleted ? (
            <ResultsView
              questions={QUESTIONS}
              answers={examState.answers}
              flagged={examState.flagged}
              timeSpentSeconds={examState.totalTimeSeconds - examState.timeRemainingSeconds}
              onRetakeExam={handleRetakeExam}
              onPracticeMissed={handlePracticeMissed}
            />
          ) : (
            <ExamView
              questions={QUESTIONS}
              currentIndex={examState.currentIndex}
              onNavigateIndex={(idx) => setExamState((prev) => ({ ...prev, currentIndex: idx }))}
              answers={examState.answers}
              onSelectAnswer={handleSelectAnswer}
              flagged={examState.flagged}
              onToggleFlag={handleToggleFlag}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSubmitExam={handleSubmitExam}
            />
          )
        )}

        {currentMode === 'practice' && (
          <PracticeView
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentMode === 'flashcards' && (
          <FlashcardView
            ratings={flashcardRatings}
            onRateCard={handleRateCard}
          />
        )}

        {currentMode === 'bookmarks' && (
          <PracticeView
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentMode === 'analytics' && (
          <AnalyticsView
            history={examHistory}
            bookmarkedIds={bookmarkedIds}
            onClearHistory={handleClearHistory}
            onSelectBookmark={(id) => {
              setCurrentMode('practice');
            }}
            onRemoveBookmark={(id) => handleToggleBookmark(id)}
          />
        )}
      </main>
    </div>
  );
};
