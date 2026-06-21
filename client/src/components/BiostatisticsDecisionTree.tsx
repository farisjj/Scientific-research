import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, CheckCircle2, Info, Lightbulb } from 'lucide-react';

interface DecisionOption {
  label: string;
  nextNodeId?: string;
  result?: string;
  explanation?: string;
}

interface DecisionNode {
  id: string;
  question: string;
  options: DecisionOption[];
}

const decisionTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'ما هو الهدف الأساسي من تحليلك الإحصائي؟',
    options: [
      { label: 'مقارنة مجموعات (Comparing Groups)', nextNodeId: 'comparing_groups' },
      { label: 'البحث عن ارتباط/علاقة (Looking for Correlation)', nextNodeId: 'correlation' },
    ],
  },
  comparing_groups: {
    id: 'comparing_groups',
    question: 'ما هو نوع بياناتك التابعة (Dependent Variable)؟',
    options: [
      { label: 'بيانات رقمية متصلة (Continuous - مثل العمر، الوزن)', nextNodeId: 'continuous_data' },
      { label: 'بيانات فئوية (Categorical - مثل ذكر/أنثى، نعم/لا)', nextNodeId: 'categorical_data' },
    ],
  },
  continuous_data: {
    id: 'continuous_data',
    question: 'كم عدد المجموعات التي تقارن بينها؟',
    options: [
      { label: 'مجموعتان فقط (2 Groups)', nextNodeId: 'two_groups' },
      { label: '3 مجموعات أو أكثر (3+ Groups)', nextNodeId: 'multiple_groups' },
    ],
  },
  two_groups: {
    id: 'two_groups',
    question: 'هل المجموعتان مستقلتان أم مترابطتان؟',
    options: [
      { 
        label: 'مستقلتان (Independent - مثل مرضى وأصحاء)',
        result: 'Independent T-test',
        explanation: 'يُستخدم للمقارنة بين متوسطي مجموعتين مستقلتين عندما تتبع البيانات التوزيع الطبيعي. مثال: مقارنة ضغط الدم بين ذكور وإناث.'
      },
      { 
        label: 'مترابطتان (Paired - مثل قبل وبعد العلاج)',
        result: 'Paired T-test',
        explanation: 'يُستخدم للمقارنة بين قياسين لنفس المجموعة في وقتين مختلفين. مثال: قياس الوزن قبل وبعد برنامج حمية.'
      },
    ],
  },
  multiple_groups: {
    id: 'multiple_groups',
    question: 'هل البيانات تتبع التوزيع الطبيعي (Normally Distributed)؟',
    options: [
      { 
        label: 'نعم (Parametric)',
        result: 'One-Way ANOVA',
        explanation: 'يُستخدم للمقارنة بين متوسطات ثلاث مجموعات أو أكثر مستقلة عندما تتبع البيانات التوزيع الطبيعي. مثال: مقارنة فعالية ثلاثة أدوية مختلفة.'
      },
      { 
        label: 'لا (Non-parametric)',
        result: 'Kruskal-Wallis Test',
        explanation: 'البديل غير المعلمي لاختبار ANOVA للمقارنة بين ثلاث مجموعات أو أكثر عندما لا تتبع البيانات التوزيع الطبيعي.'
      },
    ],
  },
  categorical_data: {
    id: 'categorical_data',
    question: 'هل حجم العينة كافٍ (أكثر من 5 في كل خلية)؟',
    options: [
      { 
        label: 'نعم، العينة كبيرة',
        result: 'Chi-Square Test',
        explanation: 'يُستخدم لدراسة العلاقة بين متغيرين فئويين عندما يكون حجم العينة كبيراً. مثال: هل التدخين مرتبط بالإصابة بأمراض القلب؟'
      },
      { 
        label: 'لا، العينة صغيرة جداً',
        result: 'Fisher\'s Exact Test',
        explanation: 'يُستخدم عندما يكون حجم العينة صغيراً جداً (أقل من 5 في أي خلية). يعطي نتائج دقيقة أكثر من Chi-Square في هذه الحالات.'
      },
    ],
  },
  correlation: {
    id: 'correlation',
    question: 'هل بياناتك تتبع التوزيع الطبيعي ومستمرة؟',
    options: [
      { 
        label: 'نعم، البيانات طبيعية ومستمرة',
        result: 'Pearson Correlation',
        explanation: 'يُستخدم لقياس قوة واتجاه العلاقة الخطية بين متغيرين مستمرين يتبعان التوزيع الطبيعي. مثال: العلاقة بين ساعات الدراسة والدرجات.'
      },
      { 
        label: 'لا، أو البيانات ترتيبية (Ordinal)',
        result: 'Spearman Correlation',
        explanation: 'يُستخدم عندما لا تتبع البيانات التوزيع الطبيعي أو عندما تكون البيانات ترتيبية (مثل: ممتاز، جيد، متوسط، ضعيف).'
      },
    ],
  },
};

export function BiostatisticsDecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<DecisionOption | null>(null);

  const currentNode = decisionTree[currentNodeId];

  const handleOptionClick = (option: DecisionOption) => {
    if (option.result) {
      setResult(option);
    } else if (option.nextNodeId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(option.nextNodeId);
    }
  };

  const handleBack = () => {
    if (result) {
      setResult(null);
    } else if (history.length > 0) {
      const newHistory = [...history];
      const previousNodeId = newHistory.pop()!;
      setHistory(newHistory);
      setCurrentNodeId(previousNodeId);
    }
  };

  const handleReset = () => {
    setCurrentNodeId('start');
    setHistory([]);
    setResult(null);
  };

  return (
    <div className="biostat-tree-wrapper w-full">
      <style>{`
        .biostat-tree-wrapper {
          --bg-color: var(--color-background);
          --text-color: var(--color-foreground);
          --card-bg: var(--color-card);
          --card-border: var(--color-border);
          --accent-color: var(--color-primary);
          --accent-foreground: var(--color-primary-foreground);
          --success-color: #10B981;
        }

        .biostat-tree-wrapper .tree-container {
          width: 100%;
          max-width: 800px;
          margin: 32px auto;
          background-color: var(--card-bg);
          border-radius: 16px;
          border: 2px solid var(--card-border);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .biostat-tree-wrapper .tree-header {
          background: linear-gradient(135deg, var(--accent-color) 0%, #0d2f68 100%);
          padding: 24px;
          text-align: center;
          color: var(--accent-foreground);
        }

        .biostat-tree-wrapper .tree-header h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .biostat-tree-wrapper .tree-header p {
          font-size: 14px;
          opacity: 0.9;
          margin: 0;
        }

        .biostat-tree-wrapper .tree-content {
          padding: 32px;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .biostat-tree-wrapper .question-section {
          animation: fadeInUp 0.5s ease-out;
        }

        .biostat-tree-wrapper .question-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
        }

        .biostat-tree-wrapper .question-text {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 24px;
          line-height: 1.4;
          text-align: right;
        }

        .biostat-tree-wrapper .options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .biostat-tree-wrapper .option-btn {
          text-align: right;
          padding: 16px;
          border: 2px solid var(--card-border);
          background-color: var(--bg-color);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
        }

        .biostat-tree-wrapper .option-btn:hover {
          border-color: var(--accent-color);
          background-color: rgba(15, 58, 125, 0.05);
          transform: translateX(-4px);
        }

        .biostat-tree-wrapper .chevron-icon {
          width: 20px;
          height: 20px;
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .biostat-tree-wrapper .result-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: zoomIn 0.5s ease-out;
        }

        .biostat-tree-wrapper .result-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 3px solid var(--success-color);
        }

        .biostat-tree-wrapper .result-icon svg {
          width: 48px;
          height: 48px;
          color: var(--success-color);
        }

        .biostat-tree-wrapper .result-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--success-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .biostat-tree-wrapper .result-title {
          font-size: 32px;
          font-weight: 900;
          color: var(--accent-color);
          margin-bottom: 16px;
          font-family: 'Courier New', monospace;
        }

        .biostat-tree-wrapper .result-explanation {
          font-size: 15px;
          color: var(--text-color);
          line-height: 1.8;
          max-width: 500px;
          margin-bottom: 24px;
          text-align: right;
          background-color: rgba(15, 58, 125, 0.05);
          padding: 16px;
          border-radius: 8px;
          border-right: 4px solid var(--accent-color);
        }

        .biostat-tree-wrapper .tree-footer {
          padding: 20px 32px;
          border-top: 1px solid var(--card-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .biostat-tree-wrapper .footer-btn {
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .biostat-tree-wrapper .back-btn {
          color: var(--text-color);
          background-color: transparent;
          border: 1px solid var(--card-border);
        }

        .biostat-tree-wrapper .reset-btn {
          background-color: var(--accent-color);
          color: var(--accent-foreground);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (prefers-color-scheme: dark) {
          .biostat-tree-wrapper .option-btn:hover { background-color: rgba(59, 130, 246, 0.1); }
          .biostat-tree-wrapper .result-explanation { background-color: rgba(59, 130, 246, 0.1); }
        }
      `}</style>

      <div className="tree-container" dir="rtl">
        <div className="tree-header">
          <h3><Info className="w-6 h-6" /> الخريطة الإحصائية التفاعلية</h3>
          <p>أجب على الأسئلة للوصول للاختبار الإحصائي المناسب لبحثك</p>
        </div>

        <div className="tree-content">
          {result ? (
            <div className="result-section">
              <div className="result-icon"><CheckCircle2 /></div>
              <span className="result-label">الاختبار المقترح:</span>
              <h2 className="result-title">{result.result}</h2>
              <p className="result-explanation">{result.explanation}</p>
              <button onClick={handleReset} className="footer-btn reset-btn">
                <RotateCcw className="w-4 h-4" /> ابدأ من جديد
              </button>
            </div>
          ) : (
            <div className="question-section">
              <span className="question-label">السؤال الحالي:</span>
              <h4 className="question-text">{currentNode.question}</h4>
              <div className="options-grid">
                {currentNode.options.map((option, index) => (
                  <button key={index} onClick={() => handleOptionClick(option)} className="option-btn">
                    <ChevronLeft className="chevron-icon" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {(history.length > 0 || result) && (
          <div className="tree-footer">
            <button onClick={handleReset} className="footer-btn reset-btn">
              <RotateCcw className="w-4 h-4" /> إعادة تعيين
            </button>
            <button onClick={handleBack} className="footer-btn back-btn">
              <ChevronLeft className="w-4 h-4" /> السؤال السابق
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 dark:border-blue-400 rounded flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900 dark:text-blue-200 text-right">
          <strong>ملاحظة مهمة:</strong> هذه الخريطة توفر توجيهات عامة. استشر دائماً إحصائياً متخصصاً قبل اختيار الاختبار الإحصائي النهائي لبحثك.
        </div>
      </div>
    </div>
  );
}
