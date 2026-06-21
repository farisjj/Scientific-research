import React, { useEffect } from 'react';
import { useProgress } from '@/contexts/ProgressContext';

export function GlobalProgressBar() {
  const { progressPercentage, totalSections, completedSections } = useProgress();

  // تحديث عدد الأقسام الكلي عند تحميل الصفحة
  useEffect(() => {
    const trackableSections = document.querySelectorAll('[data-section-id]');
    // سيتم تحديثه من Home.tsx بشكل صحيح
  }, []);

  return (
    <div className="global-progress-wrapper">
      <style>{`
        .global-progress-wrapper {
          --progress-bg: var(--color-border);
          --progress-fill: linear-gradient(90deg, #3B82F6 0%, #10B981 100%);
          --text-color: var(--color-foreground);
          --progress-glow: rgba(59, 130, 246, 0.5);
        }

        .global-progress-wrapper .progress-container {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 999;
          background-color: var(--color-background);
          border-bottom: 1px solid var(--progress-bg);
          padding: 12px 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .global-progress-wrapper .progress-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          direction: rtl;
        }

        .global-progress-wrapper .progress-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-color);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .global-progress-wrapper .progress-text .percentage {
          color: #3B82F6;
          font-weight: 700;
          font-size: 14px;
        }

        .global-progress-wrapper .progress-bar-track {
          flex: 1;
          height: 6px;
          background-color: var(--progress-bg);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .global-progress-wrapper .progress-bar-fill {
          height: 100%;
          background: var(--progress-fill);
          border-radius: 3px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          box-shadow: 0 0 12px var(--progress-glow);
        }

        .global-progress-wrapper .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .global-progress-wrapper .progress-stats {
          font-size: 12px;
          color: var(--text-color);
          opacity: 0.7;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .global-progress-wrapper .progress-container {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .global-progress-wrapper .progress-bar-fill {
            box-shadow: 0 0 16px rgba(59, 130, 246, 0.6);
          }
        }

        /* RTL Support */
        [dir="rtl"] .global-progress-wrapper .progress-content {
          direction: rtl;
        }
      `}</style>

      <div className="progress-container">
        <div className="progress-content">
          <div className="progress-text">
            لقد أنجزت <span className="percentage">{progressPercentage}%</span> من الدليل
          </div>
          
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="progress-stats">
            {completedSections.size} من {totalSections}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: '50px' }} />
    </div>
  );
}
