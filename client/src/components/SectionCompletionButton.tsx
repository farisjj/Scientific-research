import React, { useState, useEffect } from 'react';
import { CheckCircle2, Check } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';

interface SectionCompletionButtonProps {
  sectionId: string;
  className?: string;
}

export function SectionCompletionButton({ sectionId, className = '' }: SectionCompletionButtonProps) {
  const { markSectionComplete, isSectionComplete } = useProgress();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // تحديث حالة الزر عند تحميل الصفحة
  useEffect(() => {
    setIsCompleted(isSectionComplete(sectionId));
  }, [sectionId, isSectionComplete]);

  const handleClick = () => {
    if (!isCompleted) {
      markSectionComplete(sectionId);
      setIsCompleted(true);
      setShowFeedback(true);
      
      // إخفاء رسالة التغذية الراجعة بعد ثانيتين
      setTimeout(() => setShowFeedback(false), 2000);
    }
  };

  return (
    <div className="section-completion-wrapper">
      <style>{`
        .section-completion-wrapper {
          --accent-color: var(--color-primary);
          --accent-foreground: var(--color-primary-foreground);
          --success-color: #10B981;
          --text-color: var(--color-foreground);
        }

        .section-completion-wrapper .completion-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: 2px solid var(--accent-color);
          background-color: transparent;
          color: var(--accent-color);
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .section-completion-wrapper .completion-button::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .section-completion-wrapper .completion-button:hover:not(.completed) {
          background-color: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .section-completion-wrapper .completion-button:active:not(.completed) {
          transform: translateY(0);
        }

        .section-completion-wrapper .completion-button.completed {
          background-color: var(--success-color);
          color: white;
          border-color: var(--success-color);
          cursor: default;
        }

        .section-completion-wrapper .completion-button.completed:hover {
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .section-completion-wrapper .button-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .section-completion-wrapper .completion-button:hover:not(.completed) .button-icon {
          transform: scale(1.1);
        }

        .section-completion-wrapper .completion-button.completed .button-icon {
          animation: checkmark-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes checkmark-bounce {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .section-completion-wrapper .feedback-message {
          position: fixed;
          bottom: 24px;
          left: 24px;
          background-color: var(--success-color);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: slideUp 0.3s ease-out;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          z-index: 1000;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .section-completion-wrapper .completion-button:hover:not(.completed) {
            background-color: rgba(59, 130, 246, 0.15);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .section-completion-wrapper .completion-button.completed:hover {
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          }
        }

        /* RTL Support */
        [dir="rtl"] .section-completion-wrapper .feedback-message {
          left: auto;
          right: 24px;
        }
      `}</style>

      <button
        onClick={handleClick}
        disabled={isCompleted}
        className={`completion-button ${isCompleted ? 'completed' : ''} ${className}`}
        title={isCompleted ? 'تم إكمال هذا القسم' : 'أتممت قراءة هذا القسم'}
      >
        <span className="button-icon">
          {isCompleted ? (
            <Check className="w-full h-full" />
          ) : (
            <CheckCircle2 className="w-full h-full" />
          )}
        </span>
        <span>{isCompleted ? 'مكتمل' : 'أتممت قراءة هذا القسم'}</span>
      </button>

      {showFeedback && (
        <div className="feedback-message">
          <CheckCircle2 className="w-4 h-4" />
          <span>ممتاز! تم حفظ تقدمك</span>
        </div>
      )}
    </div>
  );
}
