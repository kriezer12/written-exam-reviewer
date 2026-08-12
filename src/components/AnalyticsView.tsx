import React, { useState } from 'react';
import { 
  BarChart3, 
  Trash2, 
  Download, 
  Bookmark, 
  History, 
  Library,
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';
import { ExamHistoryRecord, QuestionSetId } from '../types/exam';
import { QUESTIONS, getQuestionsForSet, getQuestionSetLabel } from '../data/questions';
import { ALL_DOMAINS, getReadinessGrade, calculateDomainPerformance } from '../utils/analytics';

interface AnalyticsViewProps {
  history: ExamHistoryRecord[];
  bookmarkedIds: number[];
  selectedSet: QuestionSetId;
  onSelectSet: (set: QuestionSetId) => void;
  onClearHistory: () => void;
  onSelectBookmark: (id: number) => void;
  onRemoveBookmark: (id: number) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  history,
  bookmarkedIds,
  selectedSet,
  onSelectSet,
  onClearHistory,
  onSelectBookmark,
  onRemoveBookmark,
}) => {
  const [filterSet, setFilterSet] = useState<QuestionSetId>(selectedSet);

  // Filter history records by selected set
  const filteredHistory = history.filter((h) => {
    if (filterSet === 'all') return true;
    return h.setId === filterSet;
  });

  // Target questions list for bookmarks and domain analytics
  const targetQuestions = getQuestionsForSet(filterSet);
  const bookmarkedQuestions = targetQuestions.filter((q) => bookmarkedIds.includes(q.id));

  // Compute average overall score from filtered history
  const totalAttempts = filteredHistory.length;
  const avgScore = totalAttempts > 0 
    ? Math.round(filteredHistory.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions) * 100, 0) / totalAttempts)
    : 0;

  const highestScore = totalAttempts > 0
    ? Math.max(...filteredHistory.map((h) => Math.round((h.score / h.totalQuestions) * 100)))
    : 0;

  const readiness = getReadinessGrade(avgScore);

  // Calculate overall domain accuracy across taken attempts in filtered history
  const domainAggregate: Record<string, { correct: number; total: number }> = {};
  ALL_DOMAINS.forEach((domain) => {
    domainAggregate[domain] = { correct: 0, total: 0 };
  });

  filteredHistory.forEach((record) => {
    if (record.domainScores) {
      Object.entries(record.domainScores).forEach(([domain, scores]) => {
        if (domainAggregate[domain]) {
          domainAggregate[domain].correct += scores.correct;
          domainAggregate[domain].total += scores.total;
        }
      });
    }
  });

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
            Track your performance trends and review saved bookmarked items per Question Set
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={exportData} className="btn btn-secondary btn-sm">
            <Download size={16} /> Export Progress JSON
          </button>
          {history.length > 0 && (
            <button onClick={onClearHistory} className="btn btn-danger btn-sm">
              <Trash2 size={16} /> Clear History
            </button>
          )}
        </div>
      </div>

      {/* Question Set Switcher for Analytics */}
      <div className="glass-panel" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Library size={18} color="var(--accent-primary)" />
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Filter Analytics by Question Set:</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { setFilterSet('set_a'); onSelectSet('set_a'); }}
            className={`btn btn-sm ${filterSet === 'set_a' ? 'btn-primary' : 'btn-ghost'}`}
          >
            📘 Set A (100 Items)
          </button>

          <button
            onClick={() => { setFilterSet('set_b'); onSelectSet('set_b'); }}
            className={`btn btn-sm ${filterSet === 'set_b' ? 'btn-primary' : 'btn-ghost'}`}
          >
            📕 Set B (100 Items)
          </button>

          <button
            onClick={() => { setFilterSet('set_c'); onSelectSet('set_c'); }}
            className={`btn btn-sm ${filterSet === 'set_c' ? 'btn-primary' : 'btn-ghost'}`}
          >
            📗 Set C (100 Items)
          </button>

          <button
            onClick={() => { setFilterSet('all'); onSelectSet('all'); }}
            className={`btn btn-sm ${filterSet === 'all' ? 'btn-primary' : 'btn-ghost'}`}
          >
            📚 Combined / All Sets
          </button>
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
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {filterSet === 'set_a' ? 'Set A Exams' : filterSet === 'set_b' ? 'Set B Exams' : filterSet === 'set_c' ? 'Set C Exams' : 'All Mock Exams'}
          </span>
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
            Highest Score
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
            {bookmarkedQuestions.length}
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bookmarked Questions</span>
        </div>
      </div>

      {/* Domain Mastery Breakdown */}
      {totalAttempts > 0 && (
        <div className="glass-panel" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="var(--accent-primary)" /> Domain Performance Breakdown ({getQuestionSetLabel(filterSet)})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ALL_DOMAINS.map((domain) => {
              const stat = domainAggregate[domain];
              const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              const readinessItem = getReadinessGrade(pct);

              return (
                <div key={domain} style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{domain}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: readinessItem.color }}>
                      {stat.correct}/{stat.total} ({pct}%)
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: readinessItem.color, transition: 'width 0.4s ease' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Exam Attempt History Log Table */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <History size={18} color="var(--accent-primary)" /> Mock Exam Session Logs
        </h3>

        {filteredHistory.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px 0' }}>
            No exam sessions logged for {getQuestionSetLabel(filterSet)}. Complete a mock exam to see history logs here!
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px' }}>Question Set</th>
                  <th style={{ padding: '12px' }}>Date & Time</th>
                  <th style={{ padding: '12px' }}>Score</th>
                  <th style={{ padding: '12px' }}>Accuracy</th>
                  <th style={{ padding: '12px' }}>Time Spent</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map((record) => {
                  const pct = Math.round((record.score / record.totalQuestions) * 100);
                  const pass = pct >= 70;
                  const dateStr = new Date(record.timestamp).toLocaleString();
                  const setLabel = record.setId === 'set_b' ? 'Set B' : record.setId === 'set_a' ? 'Set A' : 'All Sets';

                  return (
                    <tr key={record.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '12px' }}>
                        <span className={`badge ${record.setId === 'set_b' ? 'badge-danger' : record.setId === 'all' ? 'badge-success' : 'badge-indigo'}`}>
                          {setLabel}
                        </span>
                      </td>
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
            No questions bookmarked in {getQuestionSetLabel(filterSet)}. Click the bookmark icon during exams or practice to save items here!
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
                    <span className={`badge ${q.setId === 'set_b' ? 'badge-danger' : 'badge-indigo'}`}>
                      {q.setId === 'set_b' ? 'Set B' : 'Set A'} #{q.numberInSet || q.id}
                    </span>
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
