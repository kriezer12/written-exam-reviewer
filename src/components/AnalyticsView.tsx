import React from 'react';
import { 
  BarChart3, 
  Trash2, 
  Download, 
  Upload, 
  Bookmark, 
  History, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { ExamHistoryRecord } from '../types/exam';
import { QUESTIONS } from '../data/questions';
import { ALL_DOMAINS, getReadinessGrade } from '../utils/analytics';

interface AnalyticsViewProps {
  history: ExamHistoryRecord[];
  bookmarkedIds: number[];
  onClearHistory: () => void;
  onSelectBookmark: (id: number) => void;
  onRemoveBookmark: (id: number) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  history,
  bookmarkedIds,
  onClearHistory,
  onSelectBookmark,
  onRemoveBookmark,
}) => {
  const bookmarkedQuestions = QUESTIONS.filter((q) => bookmarkedIds.includes(q.id));

  // Compute average overall score from history
  const totalAttempts = history.length;
  const avgScore = totalAttempts > 0 
    ? Math.round(history.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions) * 100, 0) / totalAttempts)
    : 0;

  const highestScore = totalAttempts > 0
    ? Math.max(...history.map((h) => Math.round((h.score / h.totalQuestions) * 100)))
    : 0;

  const readiness = getReadinessGrade(avgScore);

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      history,
      bookmarkedIds,
      exportedAt: new Date().toISOString()
    }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `IT_Exam_Reviewer_Backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Overview Bar */}
      <div className="glass-panel" style={{ padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BarChart3 size={24} color="var(--accent-primary)" /> Exam History & Progress Analytics
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0' }}>
            Track your performance trends and review saved bookmarked items
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={exportData} className="btn btn-secondary btn-sm">
            <Download size={16} /> Export Progress JSON
          </button>
          {totalAttempts > 0 && (
            <button onClick={onClearHistory} className="btn btn-danger btn-sm">
              <Trash2 size={16} /> Clear History
            </button>
          )}
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
            Total Attempts
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0' }}>
            {totalAttempts}
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mock Exam Sessions</span>
        </div>

        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
            Average Accuracy
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: readiness.color, margin: '4px 0' }}>
            {avgScore}%
          </h3>
          <span style={{ fontSize: '0.75rem', color: readiness.color, fontWeight: 600 }}>{readiness.grade} Grade</span>
        </div>

        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
            Highest Mock Score
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-success)', margin: '4px 0' }}>
            {highestScore}%
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Best Single Attempt</span>
        </div>

        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
            Saved Items
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#818cf8', margin: '4px 0' }}>
            {bookmarkedIds.length}
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bookmarked Questions</span>
        </div>
      </div>

      {/* Exam Attempt History Log Table */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <History size={18} color="var(--accent-primary)" /> Mock Exam Session Logs
        </h3>

        {history.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px 0' }}>
            No exam sessions logged yet. Complete a mock exam to see history logs here!
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px' }}>Date & Time</th>
                  <th style={{ padding: '12px' }}>Score</th>
                  <th style={{ padding: '12px' }}>Accuracy</th>
                  <th style={{ padding: '12px' }}>Time Spent</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((record) => {
                  const pct = Math.round((record.score / record.totalQuestions) * 100);
                  const pass = pct >= 70;
                  const dateStr = new Date(record.timestamp).toLocaleString();

                  return (
                    <tr key={record.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '12px', color: 'var(--text-primary)' }}>{dateStr}</td>
                      <td style={{ padding: '12px', fontWeight: 700 }}>{record.score} / {record.totalQuestions}</td>
                      <td style={{ padding: '12px', color: pass ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 700 }}>
                        {pct}%
                      </td>
                      <td style={{ padding: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {Math.floor(record.timeSpentSeconds / 60)}m {record.timeSpentSeconds % 60}s
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span className={`badge ${pass ? 'badge-success' : 'badge-danger'}`}>
                          {pass ? 'PASSED' : 'FAILED'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bookmarked Questions List */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bookmark size={18} color="#818cf8" /> Bookmarked & Saved Items ({bookmarkedQuestions.length})
        </h3>

        {bookmarkedQuestions.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px 0' }}>
            No questions bookmarked yet. Click the bookmark icon during exams or practice to save difficult items here!
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bookmarkedQuestions.map((q) => (
              <div key={q.id} style={{
                background: 'var(--bg-secondary)',
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="badge badge-indigo">Item #{q.id}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{q.category}</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    {q.question}
                  </h4>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <button onClick={() => onSelectBookmark(q.id)} className="btn btn-secondary btn-sm">
                    Review Item
                  </button>
                  <button onClick={() => onRemoveBookmark(q.id)} className="btn btn-ghost btn-sm">
                    <Trash2 size={16} color="var(--color-danger)" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
