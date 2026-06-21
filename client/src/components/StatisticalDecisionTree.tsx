import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, CheckCircle2, Info } from 'lucide-react';

interface DecisionNode {
  id: string;
  question: string;
  options: {
    label: string;
    nextNodeId?: string;
    result?: string;
    explanation?: string;
  }[];
}

const decisionTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'ما هو نوع المتغير التابع (Dependent Variable) لديك؟',
    options: [
      { label: 'رقمي (مثل: العمر، الوزن، الضغط)', nextNodeId: 'numeric' },
      { label: 'فئوي (مثل: نعم/لا، فصيلة الدم، مدخن/غير مدخن)', nextNodeId: 'categorical' },
    ],
  },
  numeric: {
    id: 'numeric',
    question: 'كم عدد المجموعات التي تقارن بينها؟',
    options: [
      { label: 'مجموعتان فقط', nextNodeId: 'two_groups' },
      { label: 'ثلاث مجموعات أو أكثر', nextNodeId: 'three_plus_groups' },
    ],
  },
  two_groups: {
    id: 'two_groups',
    question: 'هل البيانات طبيعية التوزيع (Normally Distributed)؟',
    options: [
      { label: 'نعم (Parametric)', nextNodeId: 'parametric_two' },
      { label: 'لا (Non-parametric)', result: 'Mann-Whitney U Test', explanation: 'يُستخدم للمقارنة بين مجموعتين مستقلتين عندما لا تتبع البيانات التوزيع الطبيعي.' },
    ],
  },
  parametric_two: {
    id: 'parametric_two',
    question: 'هل المجموعتان مستقلتان أم مرتبطتان (نفس الأشخاص قبل وبعد)؟',
    options: [
      { label: 'مستقلتان', result: 'Independent T-test', explanation: 'يُستخدم للمقارنة بين متوسطي مجموعتين مستقلتين (مثل: ذكور وإناث).' },
      { label: 'مرتبطتان (قبل وبعد)', result: 'Paired T-test', explanation: 'يُستخدم للمقارنة بين قياسين لنفس المجموعة (مثل: ضغط الدم قبل وبعد العلاج).' },
    ],
  },
  three_plus_groups: {
    id: 'three_plus_groups',
    question: 'هل البيانات طبيعية التوزيع؟',
    options: [
      { label: 'نعم (Parametric)', result: 'One-Way ANOVA', explanation: 'يُستخدم للمقارنة بين متوسطات ثلاث مجموعات أو أكثر مستقلة.' },
      { label: 'لا (Non-parametric)', result: 'Kruskal-Wallis Test', explanation: 'البديل غير المعلمي لاختبار ANOVA للمقارنة بين ثلاث مجموعات أو أكثر.' },
    ],
  },
  categorical: {
    id: 'categorical',
    question: 'هل تريد دراسة العلاقة بين متغيرين فئويين؟',
    options: [
      { label: 'نعم', result: 'Chi-Square Test', explanation: 'الاختبار الأشهر لدراسة العلاقة بين متغيرين فئويين (مثل: هل التدخين مرتبط بالإصابة بالسرطان؟).' },
      { label: 'لا، أريد التنبؤ بوقوع حدث (نعم/لا)', result: 'Logistic Regression', explanation: 'يُستخدم للتنبؤ باحتمالية وقوع حدث معين بناءً على متغيرات أخرى.' },
    ],
  },
};

export function StatisticalDecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = decisionTree[currentNodeId];

  const handleOptionClick = (nextNodeId?: string) => {
    if (nextNodeId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(nextNodeId);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousNodeId = newHistory.pop()!;
      setHistory(newHistory);
      setCurrentNodeId(previousNodeId);
    }
  };

  const handleReset = () => {
    setCurrentNodeId('start');
    setHistory([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-100 dark:border-blue-900/30 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0F3A7D] dark:from-slate-900 to-blue-700 dark:to-blue-800 p-6 text-white text-center">
        <h3 className="text-xl font-bold flex items-center justify-center gap-2">
          <Info className="w-5 h-5" />
          مساعد اختيار الاختبار الإحصائي
        </h3>
        <p className="text-blue-100 text-sm mt-1">أجب على الأسئلة للوصول للاختبار المناسب لبحثك</p>
      </div>

      {/* Content */}
      <div className="p-8 min-h-[300px] flex flex-col">
        {currentNode ? (
          <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">السؤال الحالي:</span>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                {currentNode.question}
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentNode.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (option.result) {
                      setCurrentNodeId(`result_${option.result}_${index}`);
                    } else {
                      handleOptionClick(option.nextNodeId);
                    }
                  }}
                  className="w-full text-right p-5 rounded-xl border-2 border-gray-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-white">
                      {option.label}
                    </span>
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:-translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result State */
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
            {(() => {
              const resultId = currentNodeId.split('_')[1];
              const optionIndex = parseInt(currentNodeId.split('_')[2]);
              
              // البحث عن النتيجة في الشجرة (طريقة بسيطة للعرض)
              let foundOption: any = null;
              Object.values(decisionTree).forEach(node => {
                node.options.forEach(opt => {
                  if (opt.result === resultId) foundOption = opt;
                });
              });

              return (
                <>
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">الاختبار المقترح هو:</h4>
                  <h2 className="text-3xl font-black text-[#0F3A7D] dark:text-white mb-4">
                    {resultId}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed">
                    {foundOption?.explanation}
                  </p>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0F3A7D] text-white rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    ابدأ من جديد
                  </button>
                </>
              );
            })()}
          </div>
        )}

        {/* Footer Controls */}
        {history.length > 0 && currentNode && (
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <button
              onClick={handleBack}
              className="text-sm font-bold text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 rotate-180" />
              السؤال السابق
            </button>
            <button
              onClick={handleReset}
              className="text-sm font-bold text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
            >
              إعادة تعيين
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
