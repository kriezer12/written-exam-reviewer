import { ExamHistoryRecord, ExamState, UserPreferences } from '../types/exam';

const STORAGE_KEYS = {
  ACTIVE_EXAM: 'it_exam_active_state_v1',
  EXAM_HISTORY: 'it_exam_history_v1',
  BOOKMARKS: 'it_exam_bookmarks_v1',
  FLASHCARD_RATINGS: 'it_exam_flashcard_ratings_v1',
  PREFERENCES: 'it_exam_preferences_v1',
  PRACTICE_STATE: 'it_exam_practice_state_v1',
};

export interface PracticeState {
  selectedCategory: string;
  filterMode: 'all' | 'saved' | 'math';
  currentQuestionId: number;
  userSelections: Record<number, 'A' | 'B' | 'C' | 'D'>;
}

export const getSavedPracticeState = (): PracticeState | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PRACTICE_STATE);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load practice state:', e);
    return null;
  }
};

export const savePracticeState = (state: PracticeState): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PRACTICE_STATE, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save practice state:', e);
  }
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: 'dark',
  soundEnabled: true,
  autoAdvance: false,
  instantFeedback: false,
  timerDurationMinutes: 90,
};

export const getSavedPreferences = (): UserPreferences => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    return data ? { ...DEFAULT_PREFERENCES, ...JSON.parse(data) } : DEFAULT_PREFERENCES;
  } catch (e) {
    console.error('Failed to load preferences from storage:', e);
    return DEFAULT_PREFERENCES;
  }
};

export const savePreferences = (prefs: UserPreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs));
  } catch (e) {
    console.error('Failed to save preferences:', e);
  }
};

export const getActiveExamState = (): ExamState | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load active exam state:', e);
    return null;
  }
};

export const saveActiveExamState = (state: ExamState): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save active exam state:', e);
  }
};

export const clearActiveExamState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM);
  } catch (e) {
    console.error('Failed to clear active exam state:', e);
  }
};

export const getBookmarkedIds = (): number[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load bookmarks:', e);
    return [];
  }
};

export const toggleBookmarkId = (id: number): number[] => {
  const current = getBookmarkedIds();
  const exists = current.includes(id);
  const updated = exists ? current.filter((b) => b !== id) : [...current, id];
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to toggle bookmark:', e);
  }
  return updated;
};

export const getExamHistory = (): ExamHistoryRecord[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load exam history:', e);
    return [];
  }
};

export const saveExamHistoryRecord = (record: ExamHistoryRecord): void => {
  try {
    const history = getExamHistory();
    const updated = [record, ...history];
    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save exam record:', e);
  }
};

export const clearExamHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.EXAM_HISTORY);
  } catch (e) {
    console.error('Failed to clear history:', e);
  }
};

export const getFlashcardRatings = (): Record<number, 'known' | 'review'> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FLASHCARD_RATINGS);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const saveFlashcardRating = (id: number, rating: 'known' | 'review'): Record<number, 'known' | 'review'> => {
  try {
    const current = getFlashcardRatings();
    const updated = { ...current, [id]: rating };
    localStorage.setItem(STORAGE_KEYS.FLASHCARD_RATINGS, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return {};
  }
};
